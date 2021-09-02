import { useState } from "react";
import { Link } from "react-router-dom";
import articles from "../assets/articles.json";
import reads from "../assets/reads.json";

const search=(target)=>{
    let res=[];

    //找article里面标题里含有关键词的
    articles.forEach((ele)=>{
        if(ele.title.includes(target)) res.push({
            path:"文章>",
            title:ele.title,
            url:`/article/${ele.id}`
        });
    });

    //找read里面标题含有关键词的
    reads.forEach((ele)=>{
        if(ele.title.includes(target)) res.push({
            path:"阅读>",
            title:ele.title,
            url:`/read/${ele.id}`
        });
    });

    return res;
}

function Search(){
    const [searchValue,setSearchValue]=useState("");
    const [searchResult,setSearchResult]=useState([]);
    const [searchFlag,setSearchFlag]=useState(false);

    const handleChange=({target})=>{
        setSearchValue(target.value);
    }
    const handleSearch=()=>{
        if(searchValue.trim().length===0){
            setSearchResult([]);
            setSearchFlag(false);
            return;
        }
        let result=search(searchValue);
        setSearchResult(result);
        setSearchFlag(true);
    }
    return (
        <div className={`w-full flex-grow bg-gray-50 flex flex-col justify-center items-center ${setSearchFlag?"py-8":""}`}>
            <div className="rounded-md">
                <input value={searchValue} onChange={(e)=>handleChange(e)} className="w-52 md:w-80 rounded-l-lg p-2 border-t-2 border-b-2 border-2 text-gray-800 border-gray-900 bg-white text-center outline-none" placeholder="In the World"/>
                <button onClick={handleSearch} className="px-8 rounded-r-lg p-2 border-t-2 border-b-2 border-r bg-gray-900  text-gray-100 font-bold  border-gray-900  hover:opacity-80 transition-all">FIND</button>
            </div>
            {searchFlag>0&&(
                <div className="flex-grow w-96 md:w-2/3 max-w-screen-md mx-auto my-6 md:p-6 rounded-lg shadow-lg p-4 bg-white-base">
                    {searchResult.length>0?(
                        <ul className="mt-4 space-y-2">
                        {searchResult.map((ele,idx)=>(
                            <li className="text-gray-500 hover:text-gray-600 font-semibold" key={idx}>
                                <Link to={ele.url}><span className="text-sm text-gray-400 pr-2 font-normal">{ele.path}</span>{ele.title}</Link>
                            </li>
                        ))}
                    </ul>
                    ):(
                        <div className="text-center text-gray-500 pt-4">搜索没有结果噢ヽ(ー_ー)ノ</div>
                    )}
            </div>
            )}
        </div>
    )
}

export default Search;