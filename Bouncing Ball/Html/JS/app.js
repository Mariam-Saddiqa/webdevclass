const canvas=document.querySelector('canvas')
const ctx=canvas.getContext('2d');
const width=canvas.width=window.innerWidth;
const height=canvas.height=window.innerHeight;

//to generate random number

function random(min,max){
    const num=Math.floor(Math.random()*(max-min+1))+min;
    return num;
}

//constructor Balls

function Balls(x,y,valx,valy,size,color){
    this.x=x;
    this.y=y;
    this.valx=valx;
    this.valy=valy;
    this.color=color;
    this.size=size;
}

//merhods

Balls.prototype.draw=function(){
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.fill();
}
let testBall=new Balls(50,100,4,4,'Blue',10);

testBall.x;
testBall.size;
testBall.color;
testBall.draw();