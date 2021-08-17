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
                        <ul className="flex flex-wrap">
                            {zone.lists.map(ele=>(
                                <li className="mr-4 mb-4" key={ele.id}>
                                    <Link to={ele.url} className="space-y-2">
                                        <img src={REPO+ele.path} className="w-44 border-dotted border-2 border-gray-400" alt={ele.title}></img>
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