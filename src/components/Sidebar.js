import { Link } from "react-router-dom";
import { REPO } from "../assets/common";
import { articles,reads } from "../assets/articles";
// import Calendar from "./Calendar";
function Sidebar({slogan}){
    return (
        <div className="w-60 mb-6 mt-8 hidden xl:block self-start">
            {/* <Calendar /> */}
            
            <div className="text-gray-400 font-light mb-6">
                {slogan.map((ele,idx)=>(
                    <p className="leading-8" key={idx}>{ele}</p>
                ))}
                
            </div>
            
            <div>
                <h3 className="pl-2 border-l-4 border-gray-700 text-gray-700 text-lg font-bold mb-2">最新动态</h3>
                <ul className="flex flex-col space-y-4 divide-y divide-gray-300 w-full">
                    
                    <li className="pt-4">
                        <Link to={`/article/${articles[articles.length-1].id}`} className="flex space-x-4">
                            <img src={REPO+"/img/cover.jpeg"} alt="pic" className="w-24 h-16 object-cover rounded-md"/>
                            <p className="flex flex-col justify-around">
                                <span className="text-gray-500">{articles[articles.length-1].title}</span>
                                <span className="text-xs text-gray-400">{articles[articles.length-1].timestamp}</span>
                            </p>
                        </Link>
                    </li>
                    <li className="pt-4">
                        <Link to={`/read/${reads[reads.length-1].id}`} className="flex space-x-4">
                            <img src={REPO+reads[reads.length-1].imgUrl} alt="pic" className="w-24 h-16 object-cover rounded-md"/>
                            <p className="flex flex-col justify-around">
                                <span className="text-gray-500">{reads[reads.length-1].title}</span>
                                <span className="text-xs text-gray-400">{reads[reads.length-1].timestamp}</span>
                            </p>
                        </Link>
                    </li>
                    
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar;