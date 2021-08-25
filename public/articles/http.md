# HTTP

### 1. POST与GET
- https://github.com/amandakelake/blog/issues/20
- https://www.w3school.com.cn/tags/html_ref_httpmethods.asp

### 2.HTTP
#### 2.1 报文格式
**请求报文**
1. 请求行：请求方法+URL+协议版本
2. 请求首部
3. 请求内容实体
   
**响应报文**
1. 状态行：协议版本、状态码
2. 响应首部
3. 相应内容实体

#### 2.2 状态码
## HTTP状态码
### 1XX 指示信息
- 100 已收到，等待客户端继续发送
- 101 切换协议

### 2XX 成功
- **200 OK**
- 201 Created 通常指POST请求的结果，已在服务器上成功创建资源
- 202 Accepted 已接受处理请求，但尚未完成
- 204 请求成功，响应报文不含实体的主体部分
- 205 同204，还要求请求方重置内容
- 206 进行范围请求

### 3XX 重定向
- **301 永久重定向**
- **302 临时重定向**
- 303 表示资源存在另一个URL且应用GET获取资源
- **304 未修改，原来缓存的文档可以继续用**
- 307 临时重定向，但是期望客户端保持请求方法不变向新地址发出请求

### 4XX 客户端错误
- 400 请求报文语法错误
- 401 请求未认证或不正确
- **403 被拒绝，用户被认证后在该资源上无操作权限**
- **404 服务器上没有该请求资源**

### 5XX 服务器错误
- **500 服务器端执行请求时发生错误**
- 501 服务器不支持当前请求需要的功能
- **503 服务器暂时超负载或停机维护，无法处理请求**

#### 2.3 长短连接&长短轮询
- 短连接
  连接只保持在数据传输过程，适用于实时数据请求，配合轮询进行新旧数据更替。
- 长连接
  保持通信管道，以便之后复用。
- 短轮询
  循环周期内不断发起请求，立即返回结果，对比新旧数据决定是否使用结果。
- 长轮询
  在请求的过程中，如果服务器端数据并没有更新，那么则将这个连接挂起，直到服务器推送新的数据，再返回，然后再进入循环周期。

*连接长短通过协议来规定和实现，轮询长短通过服务器编程手动挂起请求实现*

#### 2.4 http不安全
- 明文，被窃听
- 不验证身份，被伪造
- 不验证完整性，被篡改

### 3.HTTP版本
#### 3.1 http1.1
- 队首阻塞（浏览器限制了同一域名下的请求数量）
- 响应先来后到
- 并行通信需要建立多个TCP连接
- 服务器只能被动等待客户端发起请求
- 无状态，每次请求和响应携带大量冗余信息

#### 3.2 http2.0
- 多路复用（但是在出现丢包时，反而不如http1.0
- 二进制分帧层
- 首部压缩
- 服务器推送

#### 3.3 http3.0
基于UDP的QUIC协议，http3.0也叫HTTP-over-QUIC
##### QUIC
- 多路复用
- 纠错机制
- 0-RTT
