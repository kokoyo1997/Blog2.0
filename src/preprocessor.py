import os
from typing import Mapping

#    defaults={
#         id:0,
#         title:"",
#         content:"",
#         abstract:"",
#         imgUrl:"",
#         timestamp:"",
#         tags:"",
#         consume:0,
#         words:0,
#         nextId:null,
#         prevId:null
#     };
def preprocessor(file):
    content=[]
    with open(file,'r',encoding="utf-8") as f:
        content=f.readlines()
    
    for i in range(len(content)):
        content[i]=content[i].rstrip('\n')
    print(content)

# preprocessor("blog_2.0/public/articles/tips.md")
print("hello")
