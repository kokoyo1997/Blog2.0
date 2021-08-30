import { useEffect, useState } from "react";

const weeks=['日','一','二','三','四','五','六']

const getDayArr=(day)=>{
    let nowYear = day.getFullYear(); //获取当前年
    let nowMonth = day.getMonth()+1; //获取当前月
    let nowMonthFirstDate = `${nowYear}-${nowMonth}-01` // 获取当前月1号的时间
    let nowWeek = new Date(nowMonthFirstDate).getDay(); // 获取1号对应的星期几

    let days=nowWeek<6?new Array(35).fill(-1):new Array(42).fill(-1);
    let startDay=nowWeek;
    let endDay=new Date(nowYear,nowMonth,0).getDate();
    for(let i=startDay;i<startDay+endDay;i++){
        days[i]=i-startDay+1;
    }
    return days;
}
function Calendar(){
    const [today,setToday]=useState(new Date());
    const [days,setDays]=useState(getDayArr(today));

    useEffect(()=>{
        setDays(getDayArr(today));
    },[today]);

    return (
        <div className="my-8 bg-gray-100 text-gray-500 border-gray-400 border-double border-4 relative transform rotate-3">
            <div className="absolute w-16 h-6 left-20 -top-4 bg-red-100 opacity-50 transform -rotate-6"></div>
            <div className="flex justify-between p-1 border-b-2 border-gray-500 border-double text-gray-500">
                <span>{today.toLocaleDateString()}</span>
                <span>晴🌤️</span>
            </div>
            <div className="p-1">
                <ul className="flex justify-between">
                    {weeks.map((ele,idx)=>(
                        <li key={idx}>{ele}</li>
                    ))}
                </ul>
                <ul className="grid grid-cols-7 text-center">
                    {days.map((ele,i)=>{
                        if(ele===today.getDate()) return  <li key={i} className="my-1 bg-red-400 text-gray-50 rounded-full">{ele===-1?"":ele}</li>;
                        else return <li key={i} className="my-1">{ele===-1?"":ele}</li>;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Calendar;