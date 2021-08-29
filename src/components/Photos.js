import { Link } from "react-router-dom";
import { REPO } from "../assets/common";
import {photoLists} from "../assets/photos";

function Photos(){
    return (
        <div className="flex-1">
            <ul>
                {photoLists.map((zone)=>(
                    <li key={zone.id}>
                        <h3 className="pl-2 border-l-4 border-gray-700 text-gray-700 text-lg font-bold mb-4">{zone.name}</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
                            {zone.lists.map(ele=>(
                                <li className="mr-4 mb-4" key={ele.id}>
                                    <Link to={ele.url} className="space-y-2">
                                        <div className="w-44 h-56 border-dotted border-2 border-gray-400">
                                            <img src={REPO+ele.path} className="w-full h-full object-cover bg-imgpad bg-cover bg-center" alt={ele.title}></img>
                                        </div>
                                        <p className="text-center text-gray-500 text-sm">「{ele.title}」</p>
                                    </Link>
                                </li>

                            ))}
                        </ul>
                    </li>
                ))}
                
            </ul>
        </div>
    );
}

export default Photos;