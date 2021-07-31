import copy from 'copy-to-clipboard';
function Littlebar({like,handleLike}){
  
    return (
        <aside className="hidden fixed bottom-20 right-10 md:grid grid-cols-1 grid-rows-4 border border-gray-300 p-2 bg-gray-50 divide-y text-gray-500">
            <button onClick={()=>window.scrollTo(0,0)}><span className="iconfont text-xl hover:text-red-600 transition-all" title="回到顶部">&#xe7f5;</span></button>
            <button onClick={()=>copy(window.location.href)}><span className="iconfont text-xl hover:text-red-600 transition-all" title="分享">&#xe832;</span></button>
            <button onClick={handleLike}><span className={`iconfont text-xl hover:text-red-600 transition-all ${like?"text-red-600":""}`} title="点赞">&#xe82f;</span></button>
            <button><span className="iconfont text-xl hover:text-red-600 transition-all">&#xe83f;</span></button>
        </aside>
    )
}

export default Littlebar;