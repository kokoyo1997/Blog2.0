import { useEffect, useState } from "react";
import Pannel from "./Panel";

// 获取初始localStorage的数据
const getLocalTodo=()=>{
    if(!localStorage){
        return [];
    }
    let initial=localStorage.getItem("todolists");
    return initial;
}

// 列表分成三部分
const splitList=(list)=>{
    let [doing,done,miss]=[[],[],[]];
    if(list){
        for(let i=0;i<list.length;i++){
            let cur=list[i];
            switch (cur.status) {
                case "1":
                    doing.push(cur);
                    break;
                case "2":
                    done.push(cur);
                    break;
                case "3":
                    miss.push(cur);
                    break;
                default:
                    break;
            }
        }
    }
    
    return [doing,done,miss];
        
}

const DOING="1";
const DONE="2";
const MISS="3";

function Todo(){
    const [pannelShow,setPannelShow]=useState(false);
    const [newContent,setNewContent]=useState("");
    const [todolist,setTodolist]=useState(JSON.parse(getLocalTodo())||[]);
    const [isEdit,setIsEdit]=useState(null);
  
    // textarea受控
    const handleChange=({target})=>{
        const {value}=target;
        setNewContent(value);
    }

    // 确认添加新任务
    const handleConfirm=()=>{
        if(newContent.trim().length===0){
            alert("请输入内容Orz")
            return;
        }
        if(isEdit){
            let init=[...todolist];
            for(let i=0;i<init.length;i++){
                if(init[i].id===isEdit){
                    init[i].content=newContent;
                    
                    break;
                }
            }
            
            setTodolist(init);
           
        }else{
            let newTodo={
                id:new Date().valueOf(),
                status:DOING,
                content:newContent
            }
            setTodolist([...todolist,newTodo]);
        }
        
        setPannelShow(false);
        setNewContent("");
        setIsEdit(null);
    }

    // 移除任务
    const handleDelete=(itemIdx)=>{
        setTodolist((prev)=>prev.filter((ele)=>ele.id!==itemIdx));
    }
    // 挪到TODO/Done/MISS里面
    const handleStatusChange=(itemIdx,status)=>{
        let init=[...todolist];
        for(let i=0;i<init.length;i++){
            if(init[i].id===itemIdx){
                init[i].status=status;
                break;
            }
        }
        setTodolist(init);
    }
    // 编辑
    const handleEdit=(itemIdx)=>{
        for(let i=0;i<todolist.length;i++){
            if(todolist[i].id===itemIdx){
                setNewContent(todolist[i].content);
                break;
            }
        }
        setPannelShow(true);
        setIsEdit(itemIdx);
        
    }

    // 同时更新localStorage
    useEffect(()=>{
        if(!localStorage) return;
        localStorage.setItem("todolists",JSON.stringify(todolist));
    },[todolist]);

    // 将三类分开
    const [doing,done,miss]= splitList(todolist);
    

    return (
        <div className="w-4/5 flex flex-col container mx-auto md:w-3/5 lg:w-2/5">
            <div className="flex justify-between items-center pb-2 my-6 relative border-gray-500 border-b border-dotted">
                <ul className="flex space-x-5 md:space-x-7">
                    <li className="flex space-x-2 items-center md:space-x-3">
                        <span className="iconfont text-green-600 text-xl md:text-4xl">&#xe81a;</span>
                        <p className="flex flex-col">
                            <span className="hidden md:block">成功</span>
                            <span className="text-center">{done.length}</span>
                        </p>
                    </li>
                    <li className="flex space-x-2 items-center md:space-x-3">
                        <span className="iconfont text-red-600 text-xl md:text-4xl">&#xe81c;</span>
                        <p className="flex flex-col">
                            <span className="hidden md:block">失败</span>
                            <span className="text-center">{miss.length}</span>
                        </p>
                    </li>
                    <li className="flex space-x-2 items-center md:space-x-3">
                        <span className="iconfont text-xl md:text-4xl">&#xe81b;</span>
                        <p className="flex flex-col">
                            <span className="hidden md:block">进行</span>
                            <span className="text-center">{doing.length}</span>
                        </p>
                    </li>
                </ul>
                <span className="iconfont hover:text-gray-400 cursor-pointer" onClick={()=>setPannelShow(true)}>&#xe820;</span>
            </div>
            <div className="pb-8">
                <ul className="space-y-8">
                    <li className="">
                        <h3 className="pl-2 border-l-4 border-gray-700 text-gray-700 text-lg font-bold mb-6">TODO</h3>
                        <ul className="flex flex-col space-y-4">
                            {doing.map((ele,idx)=>(
                                <li key={ele.id} className="flex justify-between ml-6  py-1 space-x-4 bg-gray-50 border-l-2 border-yellow-400 rounded-sm">
                                    <p className="truncate text-gray-700">
                                        <span className="iconfont text-gray-400 mx-1">&#xe844;</span>
                                        {ele.content}
                                    </p>
                                    <div className="space-x-1 text-gray-400 pr-1">
                                        <span onClick={()=>handleEdit(ele.id)} className="iconfont hover:text-red-300 cursor-pointer">&#xe7ea;</span>
                                        <span onClick={()=>handleStatusChange(ele.id,DONE)} className="iconfont hover:text-red-300 cursor-pointer">&#xe81a;</span>
                                        <span onClick={()=>handleStatusChange(ele.id,MISS)} className="iconfont hover:text-red-300 cursor-pointer">&#xe81c;</span>
                                        <span onClick={()=>handleDelete(ele.id)} className="iconfont hover:text-red-300 cursor-pointer">&#xe81e;</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="">
                        <h3 className="pl-2 border-l-4 border-gray-700 text-gray-700 text-lg font-bold mb-6">DONE</h3>
                        <ul className="flex flex-col space-y-4">
                            {done.map((ele,idx)=>(
                                <li key={ele.id} className="flex justify-between ml-6  py-1 space-x-4 bg-gray-50 border-l-2 border-green-600 rounded-sm">
                                    <p className="truncate text-gray-700">
                                        <span className="iconfont text-gray-400 mx-1">&#xe833;</span>
                                        {ele.content}
                                    </p>
                                    <div className="space-x-1 text-gray-400 pr-1">
                                        <span onClick={()=>handleStatusChange(ele.id,DOING)} className="iconfont hover:text-red-300 cursor-pointer">&#xe82d;</span>
                                        <span onClick={()=>handleDelete(ele.id)} className="iconfont hover:text-red-300 cursor-pointer">&#xe81e;</span>
                                    </div>
                                </li>
                            ))}
                            
                        </ul>
                    </li>
                    <li className="">
                        <h3 className="pl-2 border-l-4 border-gray-700 text-gray-700 text-lg font-bold mb-6">MISS</h3>
                        <ul className="flex flex-col space-y-4">
                            {miss.map((ele)=>(
                                <li key={ele.id} className="flex justify-between ml-6  py-1 space-x-4 bg-gray-50 border-l-2 border-red-600 rounded-sm">
                                    <p className="truncate text-gray-700">
                                        <span className="iconfont text-gray-400 mx-1">&#xe83d;</span>
                                        {ele.content}
                                    </p>
                                    <div className="space-x-1 text-gray-400 pr-1">
                                        <span onClick={()=>handleStatusChange(ele.id,DOING)} className="iconfont hover:text-red-300 cursor-pointer">&#xe82d;</span>
                                        <span onClick={()=>handleDelete(ele.id)} className="iconfont hover:text-red-300 cursor-pointer">&#xe81e;</span>
                                    </div>
                                </li>
                            ))}
                            
                        </ul>
                    </li>
                </ul>
            </div>
            {pannelShow&&<Pannel handleCancel={()=>{setPannelShow(false);setIsEdit(null);}} handleConfirm={handleConfirm} handleChange={handleChange} content={newContent}/>}
        </div>
    );
}
export default Todo;