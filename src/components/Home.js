import {useEffect, useState} from 'react';
const imageLists=[
    {
        id:1,
        title:"yys1",
        path:"/uploads/home1.jpg"
        
    },
    {
        id:2,
        title:"yys2",
        path:"/uploads/home2.jpg"
        
    },
    {
        id:3,
        title:"yys3",
        path:"/uploads/home3.jpg"
        
    },
    {
        id:4,
        title:"yys4",
        path:"/uploads/home4.jpg"
        
    },
    {
        id:5,
        title:"yys5",
        path:"/uploads/home5.jpg"
        
    }
]
function Home(){
    const [curIdx,setCurIdx]=useState(0);

    const handlePrev=()=>{
        setCurIdx(prev=>(prev+imageLists.length-1)%imageLists.length);
    }
    const handleNext=()=>{
        setCurIdx(prev=>(prev+1)%imageLists.length);
    }

    useEffect(()=>{
        let timer=setInterval(()=>{
            handleNext();
        },3000)

        return ()=>{
            clearInterval(timer);
        }
    },[])

    return (
        <div className="relative self-center h-52 w-96 mx-auto md:h-auto md:w-1/2 md:my-4 bg-gray-50 rounded-lg shadow-lg">
            <img src={imageLists[curIdx].path} className="rounded-lg h-full w-full object-cover" alt={imageLists[curIdx].title}/>
            <button onClick={handlePrev} className="absolute inset-y-0 left-0 px-2 hover:bg-gray-300 hover:bg-opacity-30 text-white-base cursor-pointer rounded-l-lg "><span className="iconfont">&#xe839;</span></button>
            <button onClick={handleNext} className="absolute inset-y-0 right-0  px-2 hover:bg-gray-300 hover:bg-opacity-30 text-white-base cursor-pointer rounded-r-lg"><span className="iconfont">&#xe836;</span></button>
            <div className="absolute inset-x-0 bottom-0">
                <ul className="flex justify-center space-x-2 pb-4">
                    {imageLists.map((ele,idx)=>(
                        <li key={idx} className={`w-2 h-2 bg-gray-50 rounded-full ${idx===curIdx?"opacity-100":"opacity-40"}`}></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Home;