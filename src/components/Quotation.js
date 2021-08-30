import { useState } from "react";
import { quotation } from "../assets/quotations";
const bgcolor=["#DFDBE5","#DEE5DB","#e5dbdb","#d9b9b9","#e5e4bc"]

function Quotation(){
    const [number,setNumber]=useState(0);

    return (
        <div className="mx-16 my-8">
            <ul className="flex flex-wrap justify-around items-stretch">
                {quotation.map((ele)=>(
                    <li className="relative w-48 h-48 p-6 m-4 leading transform rotate-2 shadow-md hover:rotate-6 transition-all" style={{background: bgcolor[Math.floor(Math.random()*bgcolor.length)]}} key={ele.id}>
                        <div className="absolute bottom-44 left-14 w-16 h-6 bg-gray-50 opacity-30"></div>
                        <p className="text-gray-500 cursor-default">{ele.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Quotation;