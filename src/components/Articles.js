import { Link } from "react-router-dom";
import articles from "../assets/articles.json";
import Pagination from "./Pagination";
import { useState } from "react";

const re_articles=[...articles].reverse();
function Articles(){
    const [page,setPage]=useState(1);   
    
    const handlePage=(page_)=>{
        if(page!==page_) window.scrollTo(0,0);
        setPage(page_);
        
    }

    let cur_articles=re_articles.slice((page-1)*5,Math.min(re_articles.length,page*5));

    return (
        <div className="flex-1 box-border relative pb-1 md:pb-2">
            <ul className="flex flex-col mt-6 space-y-4 mb-20 md:mt-10 md:space-y-6">
                {cur_articles.map((ele)=>(
                    <li className={`flex space-x-4 shadow-sm py-5 px-4 rounded-r-lg bg-contain bg-right bg-no-repeat bg-gray-100 ${"md:bg-imglabel"+Math.floor(Math.random()*13+1)}`} key={ele.id}>
                        <Link className="space-y-4" to={`/article/${ele.id}`}>
                            <div className="space-y-4 pb-2 border-b border-gray-300">
                                <h3 className="text-xl font-bold ">「{ele.title}」</h3>
                                <div className="flex pl-4 space-x-6 text-gray-500 font-light text-xs">
                                    <p><span className="iconfont mr-1 align-top">&#xe7f1;</span>{ele.consume}min</p>
                                    <p><span className="iconfont mr-1 align-top">&#xe845;</span>{ele.words}</p>
                                    <p><span className="iconfont mr-1 align-top">&#xe82c;</span>{ele.timestamp}</p>
                                </div>
                            </div>
                            <p className="indent-sm text-gray-700 leading-loose text-sm">{ele.abstract}</p>
                        </Link>
                    </li>
                ))}
                
            </ul>
            <Pagination total={Math.ceil(articles.length/5)} current={page} handlePage={handlePage}/>
        </div>
    )
}
export default Articles;