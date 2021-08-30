from json.encoder import JSONEncoder
import os
from typing import Mapping
import json
import datetime
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
# def preprocessor(file):
#     content=[]
    
#     with open(file,'r',encoding="utf-8") as f:
#         content=f.readlines()
    
    # for i in range(len(content)):
        # content[i]=content[i].rstrip('\n')
    # print(content)

# preprocessor("blog_2.0/public/articles/tips.md")
# preprocessor("blog_2.0/src/assets/articles.js")
# print("hello")

def obtainInfo(file,root):
    file_info={}

    title=file[file.rfind("\\")+1:]
    file_info["title"]=os.path.splitext(title)[0]

    file_info["content"]=os.path.join(root,title).replace('\\','/')

    timestamp=int(os.path.getctime(file))
    date=datetime.datetime.fromtimestamp(timestamp)
    file_info["timestamp"]=date.strftime("%Y/%m/%d")

    with open(file,encoding='utf-8') as file_obj:
        contents=file_obj.read()
    contents=contents.rstrip()
    
    file_info["words"]=len(contents)
    file_info["consume"]=int(len(contents)/500)

    file_info["nextId"]=None
    file_info["prevId"]=None

    file_info["tags"]=""
    file_info["abstract"]=""
    file_info["id"]=-1
    file_info["imgUrl"]="/img/cover.jpeg"


    return file_info
   


def getJSON(file):
    with open(file,'r',encoding="utf-8") as load_f:
        load_dict = json.load(load_f)
    
    articles=load_dict.get("articles",[])
    reads=load_dict.get("reads",[])

    m_art=dict()
    m_read=dict()

    for article in articles:
        m_art[article["title"]]=article["id"]
   
    for r in m_read:
        m_read[r["title"]]=r["id"]

    return articles,reads,m_art,m_read

def updateJSON(source,target):
    articles,reads,m_art,m_read=getJSON(target)

    dump_dict={}
    list_dir=os.listdir(source)
    root=source[source.rfind("\\"):]
    for file in list_dir:
        if file.find('.md')==-1: continue
        if m_art.get(os.path.splitext(file)[0])!=None: continue
        file_path=os.path.join(source,file)
        info=obtainInfo(file_path,root)
        articles.append(info)
        # print(info)
   
    print(dump_dict)

    with open(target,'w',encoding="utf-8") as dump_f:
        json.dump(dump_dict,dump_f)

updateJSON("blog_2.0\\public\\articles","blog_2.0\\src\\assets\\test.json")
# getJSON("blog_2.0\\src\\assets\\test.json")