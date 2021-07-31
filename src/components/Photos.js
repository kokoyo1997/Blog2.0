import { REPO } from "../assets/common";

const photoLists=[
    {
        id:1,
        name:"阴阳师Onmyoji",
        lists:[
            {
                id:1,
                title:"大天狗",
                path:"/uploads/lasted1.jpg",
                url:"/"
            },
            {
                id:2,
                title:"大天狗",
                path:"/uploads/lasted1.jpg",
                url:"/"
            },
            {
                id:3,
                title:"大天狗",
                path:"/uploads/lasted1.jpg",
                url:"/"
            },
            {
                id:4,
                title:"大天狗",
                path:"/uploads/lasted1.jpg",
                url:"/"
            },
        ]
    },
    {   
        id:2,
        name:"海贼王Onepiece",
        lists:[
            {
                id:1,
                title:"罗诺诺亚·索隆",
                path:"/uploads/lasted1.jpg",
                url:"/"
            },
            {
                id:2,
                title:"罗诺诺亚·索隆",
                path:"/uploads/lasted1.jpg",
                url:"/"
            },
            {
                id:3,
                title:"罗诺诺亚·索隆",
                path:"/uploads/lasted1.jpg",
                url:"/"
            },
        ]

    }
];
function Photos(){
    return (
        <div className="flex-1">
            <ul>
                {photoLists.map((zone)=>(
                    <li key={zone.id}>
                        <h3 className="pl-2 border-l-4 border-gray-700 text-gray-700 text-lg font-bold mb-4">{zone.name}</h3>
                        <ul className="flex flex-wrap">
                            {zone.lists.map(ele=>(
                                <li className="mr-4 mb-4" key={ele.id}>
                                    <a href={ele.url} className="space-y-2">
                                        <img src={REPO+ele.path} className="w-44 border-dotted border-2 border-gray-400" alt={ele.title}></img>
                                        <p className="text-center text-gray-500 text-sm">「{ele.title}」</p>
                                    </a>
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