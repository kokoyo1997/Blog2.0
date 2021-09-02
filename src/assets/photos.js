// 首页图片
export const imageLists = [{
        id: 1,
        title: "yys1",
        path: "/uploads/home1.jpg"

    },
    {
        id: 2,
        title: "yys2",
        path: "/uploads/home2.jpg"

    },
    {
        id: 3,
        title: "yys3",
        path: "/uploads/home3.jpg"

    },
    {
        id: 4,
        title: "yys4",
        path: "/uploads/home4.jpg"

    },
    {
        id: 5,
        title: "yys5",
        path: "/uploads/home5.jpg"

    }
];

export const photoLists = ["yys","onepiece"];// 照片显示页面分区列表

export const albums={
    "yys":{
        id:1,
        title:"阴阳师Onmyoji", //分区名字
        lists:["1"], //和下面的相册键名同步
        1:{
            id:100,
            title:"测试", //单个相册名字
            cover:"/uploads/lasted1.jpg", //相册封面
            url: "/albums/yys/1", //封面图片地址
            list:[
                {
                    id: 1,
                    name: "yys3", //单张图片的alt内容
                    path: "/uploads/albums/1/1/home5.jpg"
                },
                {
                    id: 2,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c1.jpg"
                },
                {
                    id: 3,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c2.jpg"
                },
                {
                    id: 4,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c3.jpg"
                },
                {
                    id: 5,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c4.jpg"
                },
                {
                    id: 6,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c5.jpg"
                },
                {
                    id: 7,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c6.jpg"
                },
                {
                    id: 8,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c7.jpg"
                },
                {
                    id: 9,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c8.jpg"
                },
                {
                    id: 10,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c9.jpg"
                },
                {
                    id: 11,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c10.jpg"
                },
                {
                    id: 12,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c11.jpg"
                },
                {
                    id: 13,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c12.jpg"
                },
                {
                    id: 14,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c13.jpg"
                },
                
            ]
        }
        
        
    },
    "onepiece":{
        id:2,
        title:"海贼王Onepiece",
        lists:["1"],
        1:{
            id:200,
            title:"1",
            cover:"/uploads/lasted1.jpg",
            url: "/albums/onepiece/1",
            list:[
                {
                    id: 1,
                    name: "yys3",
                    path: "/uploads/albums/1/1/home5.jpg"
                },
                {
                    id: 2,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c1.jpg"
                },
                {
                    id: 3,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c2.jpg"
                },
                {
                    id: 6,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c5.jpg"
                },
                {
                    id: 7,
                    name: "yys3",
                    path: "/uploads/albums/1/1/img-c6.jpg"
                },
            ]
        }
    }
}

