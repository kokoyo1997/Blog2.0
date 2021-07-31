import { Link } from "react-router-dom";
import articles from "../assets/articles";
function Articles(){
    return (
        <div className="flex-1 box-border ">
            <ul className="flex flex-col mt-6 space-y-14 mb-10 md:mt-10 md:space-y-20">
                {articles.map((ele)=>(
                    <li className="flex space-x-4" key={ele.id}>
                        <img src={process.env.PUBLIC_URL+ele.imgUrl} alt={ele.title} className="hidden md:block rounded-lg"/>
                        <Link className="space-y-4" to={`${process.env.PUBLIC_URL}/article/${ele.id}`}>
                            <div className="space-y-2 pb-1 border-b border-gray-300">
                                <h3 className="text-xl font-bold ">「{ele.title}」</h3>
                                <div className="flex pl-4 space-x-6 text-gray-500 font-light text-xs">
                                    <p><span className="iconfont mr-1 align-middle">&#xe7f1;</span>{ele.consume}min</p>
                                    <p><span className="iconfont mr-1 align-middle">&#xe845;</span>2108</p>
                                    <p><span className="iconfont mr-1 align-middle">&#xe82c;</span>3天前</p>
                                </div>
                            </div>
                            <p className="indent-sm text-gray-700 leading-loose text-sm">{ele.abstract}</p>
                        </Link>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}
export default Articles;