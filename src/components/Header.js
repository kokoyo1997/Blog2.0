import { useEffect, useState } from "react";
import Nav from "./Nav";
import {REPO} from "../assets/common";
function Header() {
  const [menuShow,setMenuShow]=useState(false);
  
  const toggleMenu=()=>{
    setMenuShow(prev=>!prev);
  }
  const handleResize=({target})=>{
    if(target.innerWidth>768){
      setMenuShow(true);
    }else{
      setMenuShow(false);
    }
    
  }
  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    // 手动触发
    try{
      var ev = document.createEvent('Event');
      ev.initEvent('resize', true, true);
      window.dispatchEvent(ev);
    }catch (e) {
      console.log("resize trigger error");
    }

    return ()=>{
        window.removeEventListener("resize",handleResize);
    }
  },[])
  return (
    <div>
    <header className="relative w-full px-4 py-2 bg-gray-600 flex flex-row justify-between items-center text-gray-200 font-light">
      <div className="z-40 self-start">
        <h1><a href={`${REPO}/index.html`} className="text-zero block w-10 h-10 md:w-10 md:h-10" style={{backgroundImage:`url('${REPO}/img/logo2.png')`,backgroundSize:"cover"}}>k</a></h1>
      </div>
      
      <div className="flex flex-col justify-end space-y-6 text-right bg-gray-600 md:space-y-0">
        <button type="button" className={(menuShow?"mt-2 text-red-300":"")+" md:hidden text-right hover:text-red-300" } onClick={()=>toggleMenu()}><span className="iconfont">&#xe827;</span></button>
        {menuShow&&
        <div className="flex flex-col space-y-4 text-right tracking-widest bg-gray-600 md:flex md:flex-row md:static md:space-x-8 md:space-y-0 md:tracking-wide">
          <a href={`/index.html`} className="cursor-pointer hover:text-red-300"><span className="iconfont pr-1">&#xe7f9;</span>HOME</a>
          <a href={`/todo`} className="cursor-pointer hover:text-red-300"><span className="iconfont pr-1">&#xe804;</span>TODO</a>
          <a href={`/about`} className="cursor-pointer hover:text-red-300"><span className="iconfont pr-1">&#xe81d;</span>ABOUT</a>
          {/* <a href="/login" className="cursor-pointer hover:text-red-300"><span className="iconfont pr-1">&#xe816;</span>LOGIN</a> */}
        </div>
        }
        </div>
    </header>
    <Nav />
</div>
  );
}

export default Header;
