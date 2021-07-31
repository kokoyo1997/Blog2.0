import { Link, useLocation } from "react-router-dom";

const navList=[
    {
        key:1,
        nav_name:"文章",
        nav_name_en:"Articles",
        url:"/articles",
        icon:"&#xe7fd;",
    },
    {
        key:2,
        nav_name:"照片",
        nav_name_en:"Photos",
        url:"/photos",
        icon:"&#xe7f4;"
    },
    {
        key:3,
        nav_name:"阅读",
        nav_name_en:"Reads",
        url:"/reads",
        icon:"&#xe805;"
    },
    {
        key:4,
        nav_name:"游戏",
        nav_name_en:"Games",
        url:"/games",
        icon:"&#xe807;"
    },
    {
        key:5,
        nav_name:"搜索",
        nav_name_en:"Search",
        url:"/search",
        icon:"&#xe80e;"
    },
]
function Nav(){

    const location=useLocation();
    const pathname=location.pathname;
    let navShow=pathname===process.env.PUBLIC_URL||pathname===`${process.env.PUBLIC_URL}/index.html`;
    return (
        <nav className={`${navShow?"":"hidden"} md:block bg-gray-50`}>
            <div className="flex flex-col justify-around items-center text-gray-500 space-y-3 py-3 md:py-6 md:flex-row md:space-y-0 container mx-auto ">
            {navList.map((ele,idx)=>(
                <Link to={process.env.PUBLIC_URL+ele.url} className={`flex space-x-2 hover:text-red-700 border-b-2 md:border-b-0 ${ele.url===pathname?"text-red-700":""}`} key={ele.key}>
                    <span className="iconfont text-4xl font-light" dangerouslySetInnerHTML={{__html:ele.icon}}></span>
                    <p className="flex flex-col justify-center">
                        <span>{ele.nav_name}</span>
                        <span className="text-xs">{ele.nav_name_en}</span>
                    </p>
                </Link>
            ))}
            </div>
        </nav>
    )
}
export default Nav;