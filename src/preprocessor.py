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

def obtainInfo(file,root):
    file_info={}

    title=file[file.rfind("\\")+1:]
    file_info["title"]=os.path.splitext(title)[0]

    file_info["content"]=os.path.join(root,title).replace('\\','/')

    timestamp=int(os.path.getctime(file))
    date=datetime.datetime.fromtimestamp(timestamp)
    file_info["timestamp"]=date.strftime("%Y/%m/%d")

    with open(file,encoding='utf-8') as file_obj:
        # contents=file_obj.read()
        contents=file_obj.readlines()

    if len(contents)>0:
        file_info["abstract"]=contents[0]
    else:
        file_info["abstract"]=""
    contents=''.join(contents)
   
    # contents=contents.rstrip()
    cnt_cn=0
    for s in contents:
    # 中文字符数量
        if '\u4e00' <= s <= '\u9fff':
            cnt_cn+=1

    file_info["words"]=cnt_cn
    file_info["consume"]=int(cnt_cn/300)+1

    file_info["nextId"]=None
    file_info["prevId"]=None

    file_info["tags"]=""
   
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

    id_title_m_a=dict()
    id_title_m_r=dict()

    lasted_id_a=0
    lasted_id_r=0

    for article in articles:
        m_art[article["title"]]=article
        id_title_m_a[article["id"]]=article["title"]
        lasted_id_a=max(lasted_id_a,article["id"])
   
    for r in reads:
        m_read[r["title"]]=r
        id_title_m_r[r["id"]]=r["title"]
        lasted_id_r=max(lasted_id_r,r["id"])


    return articles,reads,m_art,m_read,lasted_id_a,lasted_id_r,id_title_m_a,id_title_m_r

def compare(x):
    return os.path.getctime(x)

def helper(source,lists,m,lasted,id2tit):
    list_dir=os.listdir(source)
    list_dir_=[]
    
    root=source[source.rfind("\\"):]
    for file in list_dir:
        if file.find('.md')==-1: continue
        if m.get(os.path.splitext(file)[0])!=None: continue
        file_path=os.path.join(source,file)
        list_dir_.append(file_path)
    list_dir_.sort(key=compare)
    for file in list_dir_:
        info=obtainInfo(file,root)
        if lasted>0:
            info["prevId"]=lasted
            m[id2tit[lasted]]["nextId"]=lasted+1
        lasted+=1
        info["id"]=lasted
        lists.append(info)
        m[info["title"]]=info
        id2tit[lasted]=info["title"]
    return lists

def updateJSON(source,target):
    print("start...")
    articles,reads,m_art,m_read,id_a,id_r,id2tit_a,id2tit_r=getJSON(target)

    dump_dict={}
    articles=helper(source+"\\articles",articles,m_art,id_a,id2tit_a)
    reads=helper(source+"\\reads",reads,m_read,id_r,id2tit_r)
    
    dump_dict["articles"]=articles
    dump_dict["reads"]=reads
    # print(dump_dict)

    print("writing...")
    with open(target,'w',encoding="utf-8") as dump_f:
        json.dump(dump_dict,dump_f)

    print("over")

updateJSON("blog_2.0\\public","blog_2.0\\src\\assets\\test.json")
# getJSON("blog_2.0\\src\\assets\\test.json")