function calcStartAndEnd(current,total){
    let start=1,end=total>5?5:total;
    let head=true,foot=true;
    if(current-2>1&&current+2<total){
        start=current-2;
        end=current+2;
    }else if(current-2>1&&current+2>=total){
        start=total-4;
        end=total;
        foot=false;
    }else if(current-2<=1&&current+2<total){
        start = 1;
        end = 5;
        head=false;
    }else{
        start = 1;
        end = total;
        head=false;
        foot=false;
    }

    return {
        start:start,
        end:end,
        head:head,
        foot:foot
    }
}

function Pagination({current,total,handlePage}){
    let {start,end,head,foot}=calcStartAndEnd(current,total);

    return (
        <div className="absolute bottom-0 left-0 right-0">
            <ul className="flex md:space-x-4 justify-center">
                <li className="md:bg-gray-50 text-center text-gray-500 text-xs hover:border-gray-400 border rounded-md transition-all">
                    <button className={`w-8 h-8 inline-block leading-8 ${current>1?"":"cursor-not-allowed"}`} title="上一页" onClick={()=>{current>1&&handlePage(current-1)}}>&lt;</button>
                </li>
                {head&&<li className="hidden md:block bg-gray-50 text-center text-gray-500 text-xs hover:border-gray-400 border rounded-md transition-all">
                    <button className="w-8 h-8 inline-block leading-8" title="首页" onClick={()=>handlePage(1)}>首页</button>
                </li>}

                {new Array(end-start+1).fill(null).map((ele,idx)=>(
                    <li className={`md:bg-gray-50 text-center text-xs border rounded-md transition-all ${start+idx===current?"text-red-700 border-red-700":"text-gray-500 hover:border-gray-400"}`} key={idx}>
                        <button className="w-8 md:h-8 inline-block leading-8" title={start+idx} onClick={()=>handlePage(start+idx)}>{start+idx}</button>
                    </li>
                ))}

                {foot&&<li className="hidden md:block bg-gray-50 text-center text-gray-500 text-xs hover:border-gray-400 border rounded-md transition-all">
                    <button className="w-8 h-8 inline-block leading-8" title="末页" onClick={()=>handlePage(total)}>末页</button>
                </li>}
                <li className="md:bg-gray-50 text-center text-gray-500 text-xs hover:border-gray-400 border rounded-md transition-all">
                    <button className={`w-8 h-8 inline-block leading-8 ${current<total?"":"cursor-not-allowed"}`} title="下一页" onClick={()=>{current<total&&handlePage(current+1)}}>&gt;</button>
                </li>
                {/* <li>
                    <label>
                        To
                        <input type="text"/>
                        <button>GO</button>
                    </label>
                </li> */}
            </ul>
        </div>
    )
}

export default Pagination;