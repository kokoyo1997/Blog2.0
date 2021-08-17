## 1.前缀和+哈希表
> 求个数存个数，哨兵存(0,1)
> 
> 求长度存下标，哨兵存(0,-1)
 
[523.连续的子数组和](day/523_连续的子数组和.md)

[525.连续数组](day/525_连续数组.md)


## 2.背包问题
[参考](https://zhuanlan.zhihu.com/p/93857890?utm_source=wechat_session)
- 二维背包 [474.一和零](day/474_一和零.md)
- 需转化的恰好装满背包 [494.目标和](day/494_目标和.md)
### 1. 01背包问题
> n件物体，第i件重量w[i]，价值v[i]。总重量不超过承载上限W的情况下，能够装入的最大价值？

**第i件物品装与不装而获得的最大价值完全由前i-1件物品的最大价值决定。**

定义状态
```
dp[i][j]表示将前i件装入限重j的背包的最大价值，0<=i<=n,0<=j<=W
```
初始化dp[0][0...W]为0，即前0个物体装入书包最大价值为0。
当i>0时，dp[i][j]：
- 不装入第i件，则为dp[i-1][j]
- 装入（能装下前提），则为dp[i-1][j-w[i]]+v[i]

状态转移方程
```js
dp[i][j]=max(dp[i-1][j],dp[i-1][j-w[i]]+v[i]) //j>=w[i]
```

- 空间优化滚动数组，j只能逆向枚举防止覆盖

### 2. 完全背包问题
> 每种物品有无限多个

**2.1 分析一**

考虑是否装第i个物品时，因为物品无限个，所以装入第i种后还可以继续装，转移到dp[i][j-w[i]]
状态转移方程
```js
dp[i][j]=max(dp[i-1][j],dp[i][j-w[i]]+v[i]) //j>=w[i]
```
- 空间优化滚动数组，j只能正向枚举防止覆盖

**2.2 分析二**

从装入dii种多少件出发，01背包是取0或1，这里取0、1、2..直到超重(k>j/w[i])
```js
dp[i][j]=max(...dp[i-1][j-k*w[i]]+k*v[i] for each k) 
```

**2.3 分析三**

转为01背包，将一种物品转换成若干件（W/w[i]）都是w[i]重价值v[i]的物品

### 3. 多重背包问题
> 每种物品有限多个，第i种数量num[i]

类似 2.2，k<=min(n[i],j/w[i])

类似 2.3，转换成n[i]件

### 4. 二维背包
前3种都只有重量这一维限制，如果有两个限制（如重量和体积），那么解法需要多加一维

## 3.二分搜索

### 3.1 框架
```js
function binarySearch(nums,target){
    let left=0, right=...;
    while(...){
        let mid=left+Math.floor((right-left)/2); //防止溢出
        if(nums[mid]==target){
            ...
        }else if(nums[mid]<target){
            ...
        }else if(nums[mid]>target){
            ...
        }
    }
    return ...;
}
```
``...``是容易出现细节问题的地方。

### 3.2 寻找一个数（基本）
    因为我们初始化 right = nums.length - 1
    所以决定了我们的「搜索区间」是 [left, right]
    所以决定了 while (left <= right)
    同时也决定了 left = mid+1 和 right = mid-1

    因为我们只需找到一个 target 的索引即可
    所以当 nums[mid] == target 时可以立即返回
### 3.2 左侧边界
    因为我们初始化 right = nums.length
    所以决定了我们的「搜索区间」是 [left, right)
    所以决定了 while (left < right)
    同时也决定了 left = mid + 1 和 right = mid

    因为我们需找到 target 的最左侧索引
    所以当 nums[mid] == target 时不要立即返回
    而要收紧右侧边界以锁定左侧边界
    循环外的返回检查left越界[0, nums.length]
### 3.3 右侧边界
    因为我们初始化 right = nums.length
    所以决定了我们的「搜索区间」是 [left, right)
    所以决定了 while (left < right)
    同时也决定了 left = mid + 1 和 right = mid

    因为我们需找到 target 的最右侧索引
    所以当 nums[mid] == target 时不要立即返回
    而要收紧左侧边界以锁定右侧边界

    又因为收紧左侧边界时必须 left = mid + 1
    所以最后无论返回 left 还是 right，必须减一
    循环外的返回检查left-1越界[-1, nums.length-1]

### 3.4 统一成两端闭
```js
//1.某元素
function binarySearch(nums,target){
    let left=0,right=nums.length-1;
    while(left<=right){
        let mid=left+Math.floor((right-left)/2);
        if(nums[mid]==target){
            return mid; //直接返回
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(numd[mid]>target){
            right=mid-1;
        }
    }
    return -1;
}

//2.左边界
function left_bound(nums.target){
    let left=0,right=nums.length-1;
    while(left<=right){
        let mid=left+Math.floor((right-left)/2);
        if(nums[mid]==target){
            right=mid-1;
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1
        }
    }
    if(left>=nums.length||nums[left]!=target) return -1;
    return left;
}

//3.右边界
function right_bound(nums.target){
    let left=0,right=nums.length-1;
    while(left<=right){
        let mid=left+Math.floor((right-left)/2);
        if(nums[mid]==target){
            left=mid+1;
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1
        }
    }
    if(right<0||nums[right]!=target) return -1;
    return right;
}
```

### 3.5 应用
- 有序数组中搜索目标值/存在重复时左边界与右边界
- 实际问题，解空间能以正确结果为界分为两半，两侧元素具有不同性质，但单侧具有相同性质。譬如：
    ```js
    for(let i=0;i<n;i++){
        if(isOK(i)) return answer;
    }
    ```
    - 可以考虑是否能用二分优化搜索空间，最小值搜左边界，最大值搜右边界。
    - [875.爱吃香蕉的珂珂](some/875_爱吃香蕉的珂珂.md)
    - [1011.在D天内送达包裹的能力](some/1011_在D天内送达包裹的能力.md)


## 4.双指针
快慢指针-链表

左右指针-数组/字符串

### 4.1.快慢指针
> 初始化指向链表头节点head，前进时快指针fast在前，慢指针slow在后。
1. 环问题
2. 链表中点（归并排序可用）
3. 倒数第k个
   
### 4.2.左右指针
> 只要数组有序，就可以考虑是否能用双指针技巧。
1. 二分
2. 两数和
3. 反转数组
4. 滑动窗口

## 5.滑动窗口
> 维护一个窗口，不断滑动，更新答案

- 框架
```js
function slidingWindow(s,t){
    let need=new Map(),window=new Map();
    for(let i=0;i<t.length;i++) need.set(t[i],(need.get(t[i])||0)+1);
    let left=0,right=0;
    let valid=0;
    while(right<s.length){
        let c=s[right]; //将移入字符
        right++;//右移窗口
        //窗口内数据更新
        ...

        /*** debug 输出***/
        console.log(`window: [${left}, ${right})`);
        /*****************/

        //判断左侧窗口是否收缩
        while(window needs shrink){
            let d=s[left]; //将移出字符
            left++;//左移窗口
            //窗口内数据更新
            ...
        }
    }
}
```

- 思考以下四个问题：
    1. 当移动``right``扩大窗口，即加入字符时，应该更新哪些数据？
    2. 什么条件下，窗口应该暂停扩大，开始移动``left``缩小窗口？
    3. 当移动``left``缩小窗口，即移出字符时，应该更新哪些数据？
    4. 我们要的结果应该在扩大窗口时还是缩小窗口时进行更新？


[76.最小覆盖子串](slide-window/76_最小覆盖子串.md)

[567.字符串的排列](slide-window/567_字符串的排列.md)

[438.找到字符串中所有字母异位词](slide-window/438_找到字符串中所有字母异位词.md)

[3.无重复字符的最长子串](slide-window/3_无重复字符的最长子串.md)

## 6.BFS
> 在一幅「图」中找到从起点``start``到终点``target``的最近距离
> 
> BFS 相对 DFS 的最主要的区别是：BFS 找到的路径一定是最短的，但代价就是空间复杂度比 DFS 大很多
- 框架
```js
function bfs(start,target){
    let q=[]; //核心数据结构
    let visited=new Set(); //避免回头路

    //起点加入
    q.add(start);
    visited.add(start);
    let step=0; //记录步数

    while(q.length>0){
        let sz=q.length;
        //当前队列中所有节点扩散
        for(let i=0;i<sz;i++){
            let cur=q.shift();
            //判断是否到达终点
            if(cur is target) 
                return step;
            //加入队列
            for(let x of cur.adj()){
                if(!visited.has(x)){
                    q.push(x);
                    visited.add(x);
                }
            }
        }
        step++; //更新步数
    }
}
```

```js
//自己觉得好用的，但是可能会花更多的空间
function bfs(start,target){
    let visited=new Set();
    let queue=[[start,step]];//队列中同时保存步数
    while(queue.length>0){
        let [cur,cnt]=queue.shift();
        if(cur is target) return cnt;
        if(visited.has(cur)) continue; //在这里判断有没有访问过
        visited.add(cur);
        for(let x of cur.adj()){
            queue.push([x,cnt+1]); //不管有没有访问过，直接先加
        }
    }
}
// 下面这个还没测过
function bfs(start,target){
    let visited=new Set();
    let queue=[[start,step]];//队列中同时保存步数
    visited.add(start);
    while(queue.length>0){
        let [cur,cnt]=queue.shift();
        if(cur is target) return cnt;
        
        for(let x of cur.adj()){
            if(visited.has(x)) continue; //在这里判断有没有访问过
            queue.push([x,cnt+1]); //没有访问过，加入队列
        }
    }
}
```
- 双向BFS
> 从起点和终点同时开始扩散，两边有交集时停止
> 
> 必须知道终点在哪里
> 
> 可以将步数存进队列中方便计算

```js
// 单次扩散
function bfs(queue,cur_v,other_v){
    let [cur,cnt]=queue.shift();
    if(other_v.has(cur)) return cnt+other_v.get(cur);
    for(let x of cur.adj()){
        if(!cur_v.has(x)){
            queue.push([x,cnt+1]); 
            cur_v.set([x,cnt+1]);
        }
    }
}

function biBfs(start,target){
    let q1=[[start,0]],q2=[[target,0]];
    let v1=new Map([[start,0]]),v2=new Map([[target,0]]);

    while(q1.length>0&&q2.length>0){//同时不为空才可能存在路径
        let tmp=-1;
        //优先扩散节点数少的一边
        if(q1.length>q2.length){
            tmp=bfs(q2,v2,v1);
        }else{
            tmp=bfs(q1,v1,v2);
        }
        if(tmp!=-1) return t;
    }
    return -1;//不存在路径
}
```

## 7.DFS
1. 设计好递归函数的 **入参** 和 **出参**
2. 设置递归函数的**出口**(base case)
3. **最小单元** 的处理逻辑

> 一般来说，lc数据量不超过30，可以考虑纯DFS，如果再高一些，考虑加入记忆化搜索

- 记忆化搜索的DFS->动态规划：
  - DFS的可变入参作为DP数组维度，返回值作为DP数组存储至
  - DFS主逻辑抽象出单个状态的计算方法


## 8.回溯
> 解决一个回溯问题，实际上就是一个决策树的遍历过程。需要思考 3 个问题：

1. 路径：也就是已经做出的选择。
2. 选择列表：也就是你当前可以做的选择。
3. 结束条件：也就是到达决策树底层，无法再做选择的条件。

#### 框架
```js
res=[]
def backtrack(路径,选择列表)：
    if 满足结束条件：
        res.add(路径)
        return
    for 选择 in 选择列表:
        做选择
        backtrack(路径,选择列表)
        撤销选择
```

## 9. 差分数组
- 前缀和适用于原始数组不会被修改，频繁查询某区间的累加和
- 差分数组适用于频繁对原始数组某**区间**的元素进行增减
  
    ``diff[i]=nums[i]-nums[i-1]``可以反推原始数组
    对区间Nums[i...j]元素全部加3，那么就diff[i]+=3和diff[j+1]-=3
    diff[i]+=3意味着给nums[i...]所有元素加3

单点更新、范围查询——线段树

范围更新、单独查询——差分数组

## 10. 并查集
> 解决图的动态连通性问题
> 
> 优化：按秩合并，路径压缩
```js
class UF{
    constructor(n){
        this.count=n; // 连通分量个数
        this.parent=new Array(n); //存储树
        this.size=new Array(n);// 每棵树的重量
        for(let i=0;i<n;i++){
            this.parent[i]=i;
            this.size[i]=1;
        }
    }

    union(p,q){
        let rootP=this.find(p);
        let rootQ=this.find(q);
        if(rootP==rootQ) return;

        // 平衡化，小树接到大树下面
        if(this.size[rootP]>this.size[rootQ]){
            this.parent[rootQ]=rootP;
            this.size[rootP]+=this.size[rootQ];
        }else{
            this.parent[rootP]=rootQ;
            this.size[rootQ]+=this.size[rootP];
        }
        this.count--;
    }

    connected(p,q){
        let rootP=this.find(p);
        let rootQ=this.find(q);
        return rootP==rootQ;
    }

    find(x){
        while(this.parent[x]!=x){
            this.parent[x]=this.parent[this.parent[x]]; //路径压缩
            x=this.parent[x];
        }
        return x;
    }
}
```
> 问题在于如何把原问题转化成图的动态连通性问题
- 利用虚拟节点营造动态连通特性
  
    [130.被围绕的区域]

    [200.岛屿数量]

    （都可以用并查集来做，虽然DFS会更快
- 利用等价关系
  
    **[990.等式方程的可满足性](union/990_等式方程的可满足性.md)** **并查集标准解**
    
    **[*399.除法求值](union/399_除法求值.md)** **带权并查集**

- 还有一些并查集应用
    [574.省份数量](union/574_省份数量.md)

    [721.账户合并](union/721_账户合并.md)

    **[*778.水位上升的泳池中游泳](union/778_水位上升的泳池中游泳.md)**

    [1202.交换字符串的元素](union/1202_交换字符串的元素.md)

    [959.由斜杠划分区域](union/959_由斜杠划分区域.md)

    [684.冗余连接](union/684_冗余连接.md)

    [1319.连通网络的操作次数](union/1319_连通网络的操作次数.md)

    [1631.最小体力消耗路径](union/1631_最小体力消耗路径.md)

    **[*947.移除最多的同行或同列石头](union/947_移除最多的同行或同列石头.md)

    [*803.打砖块](union/803_打砖块.md)**

## 11.

### 11.1 LRU
> 双向哈希链表
> 头尾虚拟节点方便操作
> [JS代码实现](LRU.md)

### 11.2 LFU
> 也需要用到双向哈希链表
> [实现](https://mp.weixin.qq.com/s/oXv03m1J8TwtHwMJEZ1ApQ)

#### 11.2.1 思路
- 调用``get(key)``返回该``key``对应的``val``
- 使用get或put访问某一``key``，该``key``的``freq``加一
- 容量满时插入，需要将``freq``最小的``key``删除，如果对应多个``key``则删除最久的哪一个
#### 11.2.2 算法核心
- ``freq``到``key``的映射，寻找``freq``最小的``key``
- ``minFreq``记录当前最小``freq``
- ``freq``对``key``为一对多，即对应一个列表
- ``freq``对``key``列表存在时序
- 能够快速删除``key``列表中的任何一个``key``.频次为``freq``的某``key``被访问，其频次将变为``freq+1``，从``freq``对应的列表删除，加入``freq+·``对应的列表

### 11.3 单调栈
- 每次新元素入栈后，栈内元素保持有序
- 模板
```js
let res=[];
let stack=[];
for(let i=nums.length-1;i>=0;i--){
    while(stack.length>0&&nums[i]>=stack[stack.length-1]) stack.pop();
    res[i]=stack.length>0?stack[stack.length-1]:-1);
    stack.push(nums[i]);
}
return res;
```
- 题目
  - 496.下一个更大元素I
  - 739.每日温度  
  - 503.下一个更大元素II [循环数组，取模模拟]
  - [402.移掉K位数字](some/402_移掉K位数字.md)
  - 901.股票价格跨度

### 11.4 单调队列
- 队列中的元素全部单增或单减
- 题目
  - 239.滑动窗口最大值
  
### 11.5 二叉堆
- 存储在数组里的完全二叉树，数组索引作为指针，索引0空着不用
- 当前节点``root``，则父节点``root/2``，左孩子``root*2``，右孩子``root*2+1``
- sink下沉与swim上浮，维护二叉堆性质
- 应用：堆排序、优先级队列
- 最大堆（节点大于等于其两个子节点）、最小堆
- (主要是上浮和下沉的实现)
```js
class MaxHeap{
    constructor(arr){
        this.size=arr.length;
        this.heap=[0,...arr];
        for(let i=Math.floor(this.size/2);i>0;i--){
            this.sink(i);
        }

    }
    parent(root){
        return Math.floor(root/2);
    }
    left(root){
        return root*2;
    }
    right(root){
        return root*2+1;
    }
    //heap[i]是否比heap[j]小
    less(i,j){
        return this.heap[i]<this.heap[j];
    }
    //上浮
    swim(k){
        while(k>1&&this.less(this.parent(k),k)){
            [this.heap[this.parent(k)],this.heap[k]]=[this.heap[k],this.heap[this.parent(k)]];
            k=this.parent(k);
        }
    }
    //下沉
    sink(k){
        while(this.left(k)<=this.size){
            let older=this.left(k);
            if(this.right(k)<=this.size&&this.less(older,this.right(k))) 
                older=this.right(k);
            if(this.less(older,k)) break;
            [this.heap[k],this.heap[older]]=[this.heap[older],this.heap[k]];
            k=older;
        }
    }
    getHeap(){
        return this.heap.slice(1);
    }
}
```
  
#### 11.5.1 优先级队列
- 插入或删除时，元素自动排序
- 框架
```js
insert(e){
    N++;
    pq[N]=e;
    swim(N);
}
delMax(){
    let max=pq[1];
    exch(1,N);
    pq[N]=null;
    N--;
    sink(1);
    return max;  
}
```

### 11.6 线段树
```js
class SegmentTree {
    constructor(arr) {
        this.arr = arr;
        this.arr_len = arr.length;
        this.tree = new Array(this.arr_len * 4).fill(null); //需要的空间一般直接写4倍绝对够用，至少为数组长度提升到2的幂次后的两倍
        this.build(0, this.arr_len - 1, 1);
    }
    //更新节点信息的函数，不同题目不同。这里以求和为例
    pushUp(rt) {
        this.tree[rt] = this.tree[rt * 2] + this.tree[rt * 2 + 1];
    }

    //建树，[l,r]表示当前节点区间，rt为实际存储位置
    build(l, r, rt) {
        if (l == r) {
            this.tree[rt] = this.arr[l];
            return;
        }
        let mid = l + Math.floor((r - l) / 2);
        this.build(l, mid, rt * 2);
        this.build(mid + 1, r, rt * 2 + 1);
        this.pushUp(rt);
    }

    //点修改
    //调用方法：如果arr[L]+=C，那么update(L,C,0,arr_len-1,1)
    update(L, C, l, r, rt) {
        if (l == r) {
            this.tree[rt] += C;
            return;
        }
        let mid = l + Math.floor((r - l) / 2);
        //根据判断往左子树调用还是右子树
        if (L <= mid) this.update(L, C, l, mid, rt * 2);
        else this.update(L, C, mid + 1, r, rt * 2 + 1);
        this.pushUp(rt);
    }

    //单点查询，类二分查找，L与R相同调用下方区间查询

    //区间查询
    //[L,R]为操作区间，[l,r]为当前区间
    //调用方法：目标求查询[L,R]，那么query(L,R,0,arr_len-1,1)
    query(L, R, l, r, rt) {
        //在区间内
        if (L <= l && r <= R) {
            return this.tree[rt];
        }
        let mid = l + Math.floor((r - l) / 2);
        // 求和为例，累加答案
        let ans = 0;
        if (L <= mid) ans += this.query(L, R, l, mid, rt * 2); //左子区间与[L,R]重叠，递归
        if (R > mid) ans += this.query(L, R, mid + 1, r, rt * 2 + 1); //右子区间与[L,R]重叠，递归
        return ans;
    }
}

//case
let arr = [1, 2, 3, 4, 5];
let segmentTree = new SegmentTree(arr);
console.log(segmentTree);

console.log(segmentTree.query(2, 4, 0, segmentTree.arr_len - 1, 1)); //区间查询
console.log(segmentTree.query(2, 2, 0, segmentTree.arr_len - 1, 1)); //单点查询

segmentTree.update(0, 5, 0, segmentTree.arr_len - 1, 1); //单点修改
console.log(segmentTree);
```

> 例题
> 
> [307. 区域和检索 - 数组可修改](https://leetcode-cn.com/problems/range-sum-query-mutable/)
### 11.7 KMP
- 动态规划的状态机
  
```js
class KMP{
    constructor(pat){
        let M=pat.length;
        this.pat=pat;
        // dp[状态][字符]=下个状态
        this.dp=new Array(M).fill(0).map((ele)=>new Array(256).fill(0));
        // base case
        this.dp[0][pat.charCodeAt(0)]=1;
        // 影子状态X，初始为0
        let X=0;
        // 构建状态转移图
        for(let j=1;j<M;j++){
            for(let c=0;c<256;c++)
                this.dp[j][c]=this.dp[X][c];
            this.dp[j][pat.charCodeAt(j)]=j+1;
            // 更新影子状态
            X=this.dp[X][pat.charCodeAt(j)];
        }
    }

    search(txt){
        let N=txt.length,M=this.pat.length;
        let j=0; // 初始状态为0
        for(let i=0;i<N;i++){
            // 计算下一状态
            j=this.dp[j][txt.charCodeAt(i)];
            // 到达终止态，返回结果
            if(j==M) return i-M+1;
        }
        // 未到达，匹配失败
        return -1;
    }
}
```

## 12. tips
### 12.1 
- 高效等概率随机获取元素，使用 **数组** 作为底层容器。
- 保持数组元素紧凑性，把待删除元素换到最后，pop掉末尾，时间复杂度O(1)，需要额外哈希表记录值到索引的映射
- [380.常数时间插入、删除和获取随机元素] 
- [710.黑名单中的随机数]
