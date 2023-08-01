class Box{
    #x;
    constructor(x=0,y=0,w=50,h=50,color="black"){
        this.#x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.color= color;
    }//생성자
    getX(){
        return this.#x;
    }
    setX(x){
        this.#x = x;
    }
    draw() {
        let {y,width:w,height:h,color}=this;
        let x = this.#x;
        ctx.fillStyle=color;
        ctx.fillRect(x,y,w,h,color); 

    }
}


// function Box(x,y,w,h,color){
//     this.x=x||0;
//     this.y=y||0;
//     this.width=w||50;
//     this.height=h||50;
//     this.color= color||"black";
// }

// Box.prototype={
//     kor:10,
//     draw:function(){
//         let {x,y,width:w,height:h,color}=this;
//         ctx.fillStyle=color;
//         ctx.fillRect(x,y,w,h,color); 
//     }

// }

