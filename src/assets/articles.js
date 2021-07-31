const articles=[
    {
        id:1,
        title:"第一",
        content:"/articles/advanced.md",
        abstract:"链表的定义（来自维基百科）：在计算机科学中，链表作为一种基础的数据结构可以用来生成其它类型的数据结构。链表通常由一连串节点组成，每个节点包含任意的实例数据（data fields）和一或两个用来指向上一个/或下一个节点的位置的链接（'links'）。",
        imgUrl:"/uploads/kuande.jpg",
        timestamp:"2021年",
        tags:"测试",
        consume:"3",
        nextId:2,
        prevId:null
    },
    {
        id:2,
        title:"Lorem",
        content:"/articles/helloworld.md",
        abstract:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab voluptates reprehenderit, sequi earum odit, dolor architecto recusandae dignissimos assumenda nisi soluta perspiciatis magnam atque commodi quibusdam molestias quisquam consequuntur?",
        imgUrl:"/uploads/kuande.jpg",
        timestamp:"2021年",
        tags:"测试",
        consume:"13",
        nextId:null,
        prevId:1
    }
]

export default articles;