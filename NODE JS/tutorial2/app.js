//const anyName=require('http')//
//const anyName1=require('fs')

const http=require('http');
const url=require('url');

http.createServer((request,response)=>{
    response.end('hello nodejs')
    //console.log(request.url)
    let result=url.parse(`http://localhost:5000${request.url}`)
    console.log(result.query)
}).listen(5000,()=>{
    console.log('server is running....')
})