import { Link, Redirect, useParams } from "react-router-dom";
import {reads} from "../assets/articles";
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";
import 'github-markdown-css';
import { REPO } from "../assets/common";

function Read(){
    const [content,setContent]=useState("Loading...");
    const params=useParams();
    
    let cur_article=reads.filter((ele)=>ele.id==params.id);
    
    useEffect(()=>{
        if(!Array.isArray(cur_article)){
            fetch(REPO+cur_article.content)
            .then(res=>res.text())
            .then(text=>setContent(text))
        }
        
    },[cur_article]);

    if(cur_article.length===0){
        return <Redirect to={{pathname:'/reads'}}/>
    }
    
    cur_article=cur_article[0];
    let now=new Date(),timestamp=new Date(cur_article.timestamp);
    let timeDelta=Math.floor((now.getTime()-timestamp.getTime())/(24*60*60*1000));
    

    return (
        <div className="flex-1 box-border">
            <div>
                <h3 className="text-3xl font-medium tracking-wider mb-4">{cur_article.title}</h3>
                <div className="flex space-x-6 text-gray-500 font-light text-xs md:text-base mb-2">
                    <p><span className="iconfont mr-1 align-middle">&#xe7f1;</span>{cur_article.consume}min</p>
                    <p><span className="iconfont mr-1 align-middle">&#xe845;</span>{content.length}</p>
                    <p><span className="iconfont mr-1 align-middle">&#xe82c;</span>{timeDelta}天前</p>
                </div>
                <div className="flex justify-between py-2 border-gray-300 border-t border-b text-gray-500">
                    <Link to={`/read/${cur_article.prevId?cur_article.prevId:cur_article.id}`}>上一篇</Link>
                    <Link to={`/read/${cur_article.nextId?cur_article.nextId:cur_article.id}`}>下一篇</Link>
                </div>
            </div>
            <div className="my-6 md:my-10 font-light indent-sm text-gray-700 leading-loose md:font-normal markdown-body">
                <ReactMarkdown children={content} />
            </div>
            <div className="pt-6 border-t-2 border-gray-300 leading-relaxed">
                <p>标签：<span className="text-gray-500">{cur_article.tags}</span></p>
                <p>写于：<span className="text-gray-500">{cur_article.timestamp}</span></p>
            </div>
        </div>
    );
    
    
}

export default Read;