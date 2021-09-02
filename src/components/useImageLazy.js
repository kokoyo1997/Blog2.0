import { useEffect, useRef } from "react";

const useImageLazy=(doms,deps=[0])=>{
    const ref=useRef();
    useEffect(()=>{
        ref.current=new IntersectionObserver((ele)=>{
            ele.forEach((item)=>{
                if(item.intersectionRatio<=0) return;
                const {target}=item;
                target.src=target.dataset.src;
                ref.current.unobserve(target);
            })
        },{
            threshold:deps
        });

        doms.forEach(item=>{
            if(item) ref.current.observe(item)
        });
        return ()=>{
        
            ref.current.disconnect();
        }
    },[doms,deps])
}

export default useImageLazy;