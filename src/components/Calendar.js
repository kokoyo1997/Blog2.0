import { useState } from "react";

const weeks=['日','一','二','三','四','五','六']
function Calendar(){
    const [today,setToday]=useState(new Date());
    const [days,setDays]=useState(new Array(7).fill(null).map(()=>new Array(6).fill(-1)));
    return (
        <div className="mb-8 shadow text-gray-500">
            <div className="flex justify-between p-1 bg-gray-500 text-gray-200">
                <span>{today.toLocaleDateString()}</span>
                <span>晴🌤️</span>
            </div>
            <div className="p-1 bg-gray-100">
                <ul className="flex justify-between">
                    {weeks.map((ele,idx)=>(
                        <li key={idx}>{ele}</li>
                    ))}
                </ul>
                <ul className="grid grid-cols-7 text-center">
                    {days.map((rows,i)=>
                        rows.map((cols,j)=>(
                            <li>{days[i][j]}</li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Calendar;