import { useEffect, useState } from 'react';
import { REPO } from "../assets/common";
import { albums } from '../assets/photos';

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

    const handleResize=()=>{
        let w=window.innerWidth;
        if(w<768) setCols(2);
        else if(w<1024) setCols(3);
        else if(w<1280) setCols(4);
        else setCols(5);
    }

    useEffect(()=>{
        handleResize()
        window.addEventListener('resize',trottle(handleResize,500));
        return ()=>{
            window.removeEventListener("resize",trottle(handleResize,500));
        }
    },[])

    let img_list=generate(cols,albums["yys"][1]);
    
    return (
        <div className="container mx-auto my-8 border-dashed border border-gray-400 shadow-lg">
            <div className="flex p-2 space-x-4 text-lg shadow-md bg-gray-500">
                <ul className="flex justify-center items-center space-x-2">
                    <li className="w-3 h-3 rounded-full bg-red-500 shadow-xl"></li>
                    <li className="w-3 h-3 rounded-full bg-yellow-500 shadow-xl"></li>
                    <li className="w-3 h-3 rounded-full bg-green-500 shadow-xl"></li>

                </ul>
                <p className=" font-semibold text-gray-200">照片/阴阳师/1</p>
            </div>
            <div className="flex space-x-2 m-6">
                {
                    img_list.map((col,idx)=>(
                        <div className={`flex flex-col space-y-2 flex-1 lg:flex-${Math.floor(Math.random()*2)+1}`} key={idx}>
                            {
                                col.map((ele,idx_)=>(
                                    <img src={REPO+ele.path} className="shadow-md" key={idx_} alt="pad"/>
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