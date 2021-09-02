import { useEffect, useRef, useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { IMGPAD, REPO } from "../assets/common";
import { albums } from '../assets/photos';
import useImageLazy from './useImageLazy';

const generate=(cols,imgs)=>{
    let arr=new Array(cols).fill(null).map(()=>[]);
    imgs.forEach((ele,idx) => {
        arr[idx%cols].push(ele);
    });
    return arr;
}

const trottle=(fn,wait)=>{
    let last,timer=null;
    return function(){
        let now=new Date();
        if(!last||now-last>wait){
            last=now;
            fn();
            if(timer){
                clearTimeout(timer);
                timer=null;
            }
        }else if(!timer){
            timer=setTimeout(()=>{
                fn();
                clearTimeout(timer);
            },wait);
        }
    }
}
function Album(){
    const [cols,setCols]=useState(2);

    const params=useParams();  

    const domRef=useRef([]);
    useImageLazy(domRef.current);

    const handleResize=()=>{
        let w=window.innerWidth;
        if(w<768) setCols(2);
        else if(w<1024) setCols(3);
        else if(w<1280) setCols(4);
        else setCols(5);
    }

    useEffect(()=>{
        handleResize();
        window.addEventListener('resize',trottle(handleResize,500));
        return ()=>{
            window.removeEventListener("resize",trottle(handleResize,500));
        }
    },[]);

    let album=albums[params.zone];
    if(album===undefined){
        return <Redirect to={{pathname:'/photos'}}/>
    }
    let imgs=album[params.id];
    if(imgs===undefined){
        return <Redirect to={{pathname:'/photos'}}/>
    }

    let img_list=generate(cols,imgs["list"]);
    
    return (
        <div className="container mx-auto my-8 border-dashed border border-gray-400 shadow-lg">
            <div className="flex p-2 space-x-4 text-lg shadow-md bg-gray-500">
                <ul className="flex justify-center items-center space-x-2">
                    <li className="w-3 h-3 rounded-full bg-red-500 shadow-xl"></li>
                    <li className="w-3 h-3 rounded-full bg-yellow-500 shadow-xl"></li>
                    <li className="w-3 h-3 rounded-full bg-green-500 shadow-xl"></li>

                </ul>
                <p className="font-semibold text-gray-200 space-x-1">
                    <Link to={`/albums`} className="hover:underline">照片</Link>
                    <span>/</span>
                    <Link to={`/albums/${params.zone}`} className="hover:underline">{album.title}</Link>
                    <span>/&nbsp;{imgs.title}</span>
                </p>
            </div>
            <div className="flex space-x-2 m-6">
                {
                    img_list.map((col,idx)=>(
                        <div className={`flex flex-col space-y-2 flex-1`} key={idx}>
                            {
                                col.map((ele,idx_)=>(
                                    <img data-src={REPO+ele.path} src={REPO+IMGPAD} ref={el=>domRef.current[img_list[0].length*idx+idx_]=el} className="shadow-md" key={idx_} alt={ele.name}/>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Album;