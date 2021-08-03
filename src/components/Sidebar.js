import { Link } from "react-router-dom";
import { REPO } from "../assets/common";

function Sidebar(){
    return (
        <div className="w-60 mb-6 mt-8 hidden lg:block self-start">
            <div className="text-gray-400 font-light mb-6">
                <p className="leading-8">我仍在不断攀登</p>
                <p className="leading-8">自从我诞生</p>
                <p className="leading-8">云雾在不断翻腾</p>
                <p className="leading-8">还未见山顶</p>
            </div>
            <div>
                <h3 className="pl-2 border-l-4 border-gray-700 text-gray-700 text-lg font-bold mb-2">最新动态</h3>
                <ul className="flex flex-col space-y-4 divide-y divide-gray-300 w-full">
                    <li className="pt-4">
                        <Link to="/index.html" className="flex space-x-4">
                            <img src={REPO+"/uploads/lasted1.jpg"} alt="pic" className="w-24 h-16 object-cover rounded-md"/>
                            <p className="flex flex-col justify-around">
                                <span className="text-gray-500">Onmyoji</span>
                                <span className="text-xs text-gray-400">1天前</span>
                            </p>
                        </Link>
                    </li>
                    <li className="pt-4">
                        <Link to="/index.html" className="flex space-x-4">
                            <img src={REPO+"/uploads/lasted1.jpg"} alt="pic" className="w-24 h-16 object-cover rounded-md"/>
                            <p className="flex flex-col justify-around">
                                <span className="text-gray-500">Onmyoji</span>
                                <span className="text-xs text-gray-400">1天前</span>
                            </p>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;