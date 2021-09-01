import { Link, useParams } from "react-router-dom";
import { REPO } from "../assets/common";
import {photoLists,albums} from "../assets/photos";

function Photos(){
    const params=useParams();
    let list=photoLists;
    if(params["zone"]!==undefined){
        if(albums[params["zone"]]!==undefined){
            list=photoLists.filter(ele=>ele===params["zone"]);
        }
    }
    return (
        <div className="flex-1 mt-2 md:mt-4">
            <ul>
                {list.map((zone)=>(
                    <li key={albums[zone].id}>
                        <h3 className="pl-2 border-l-4 border-gray-700 text-gray-700 text-lg font-bold mb-4">{albums[zone].title}</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
                            {albums[zone].lists.map(ele=>(
                                <li className="mr-4 mb-4" key={albums[zone][ele].id}>
                                    <Link to={albums[zone][ele].url} className="space-y-2">
                                        <div className="w-44 h-56 border-dotted border-2 border-gray-400">
                                            <img src={REPO+albums[zone][ele].cover} className="w-full h-full object-cover bg-imgpad bg-cover bg-center" alt={albums[zone][ele].title}></img>
                                        </div>
                                        <p className="text-center text-gray-500 text-sm">「{albums[zone][ele].title}」</p>
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