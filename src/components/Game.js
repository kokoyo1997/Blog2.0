const gameLists=[
    {
        id:1,
        title:"Minesweeper",
        url:"https://kokoyo1997.github.io/minesweeper-react/",
    },
    {
        id:2,
        title:"Snake",
        url:"https://kokoyo1997.github.io/snake-react"
    },
    {
        id:3,
        title:"2048",
        url:"https://kokoyo1997.github.io/2048-react"
    }
];

const resourceLinks=[
    {
        id:1,
        title:"React官方文档",
        url:"https://zh-hans.reactjs.org/docs/getting-started.html"
    },
    {
        id:2,
        title:"TailwindCss官方文档",
        url:"https://docs.tailwindchina.com/docs"
    },
    {
        id:3,
        title:"React-Router官方文档",
        url:"https://react-guide.github.io/react-router-cn/"
    },
    {
        id:4,
        title:"Webpack官方文档",
        url:"https://webpack.docschina.org/concepts/"
    },
    {
        id:5,
        title:"NodeJS官方文档",
        url:"https://nodejs.org/dist/latest-v14.x/docs/api/"
    }
];

const links=[
    {
        id:1,
        name:"小游戏",
        lists:gameLists
    },
    {
        id:2,
        name:"学习网站",
        lists:resourceLinks
    },
]

function Game(){
    return (
        <div className="container mx-auto flex-grow bg-gray-50 m-6 rounded-lg shadow-lg p-4 md:p-6">
            <ul className="flex flex-col space-y-8 md:space-y-10">
                {links.map((ele,idx)=>(
                    <li className="flex flex-col w-full" key={ele.id}>
                        <h3 className="text-xl md:text-2xl mb-2 pb-2 text-green-800 border-b border-gray-300 text-center hover:text-blue-900 font-semibold">—— {ele.name} ——</h3>
                        <ul className="flex flex-col items-center space-y-1">
                            {ele.lists.map((ele_,idx_)=>(
                                <li key={ele_.id}>
                                    <a href={ele_.url} className="hover:underline" target="_blank" rel="noreferrer">{idx_+1}. {ele_.title}</a>
                                </li>
                            ))}
                            
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Game;