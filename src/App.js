import { useEffect, useState } from "react";
import Header from "./components/Header";
import Littlebar from "./components/Littlebar";
import Main from "./components/Main";

const getLike=()=>{
  let likeStatus=localStorage.getItem("like");
  if(likeStatus==null) {
    return false;
  }
  return JSON.parse(likeStatus);
}

function App() {
  const [isLike,setIsLike]=useState(getLike());
  useEffect(()=>{
    localStorage.setItem("like",isLike);
  },[isLike]);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Main />
      <Littlebar like={isLike} handleLike={()=>setIsLike(prev=>!prev)}/>
      <footer className="py-6 bg-gray-50 text-center"><p className="text-gray-400 text-xs">Copyright © 2021 K All Rights Reserved</p></footer>
    </div>
  );
}

export default App;
