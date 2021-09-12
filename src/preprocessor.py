import os
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
    
    m=dict()
    id_title_m=dict()
    lasted_id=0

    for article in load_dict:
        m[article["title"]]=article
        id_title_m[article["id"]]=article["title"]
        lasted_id=max(lasted_id,article["id"])

    return load_dict,m,lasted_id,id_title_m

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
    lists,m,lasted_id,id2tit=getJSON(target)
    dump=helper(source,lists,m,lasted_id,id2tit)

    print("writing...")
    with open(target,'w',encoding="utf-8") as dump_f:
        json.dump(dump,dump_f)

    print("over")

# updateJSON("blog_2.0\\public\\articles","blog_2.0\\src\\assets\\articles.json")
# updateJSON("blog_2.0\\public\\reads","blog_2.0\\src\\assets\\reads.json")
cur_path=os.path.dirname(__file__)
parent_path=cur_path+os.path.dirname(cur_path)

# updateJSON(parent_path+"\\public\\articles",cur_path+"\\assets\\articles.json")
updateJSON("..\\public\\reads","assets\\reads.json")
