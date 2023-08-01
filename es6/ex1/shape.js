let canvas = document.createElement("canvas");
canvas.width=500;
canvas.height=600;
canvas.style.border="1px solid #000";
canvas.style.borderColor="blue";
canvas.style["border-color"]="red";

document.body.append(canvas);

let ctx = canvas.getContext("2d");

//box 그리기 코드
let boxSize=50;
let gap = 20;
let colors = ["yellow", "green", "blue", "red"]
let boxes=[];
for(let i=0;i<4;i++)
    boxes.push(new Box(i*(boxSize+gap),0,50,50,colors[i]));

for(let box of boxes)
    box.draw(ctx);

let box = new Box();
box.x++;
console.log(`x:${box.x}`);

let obj = {x:10,y:20};
Object.preventExtensions(obj);
Object.defineProperty(obj,'z',{
    value:100,
    writable:false,
    enumerable:true
});

for(let p of Object.entries(obj)){
    console.log(`key:${p[0]},value:${p[1]}`);
}
// obj.y=50;
// obj.z=60;
// console.log(obj);


console.log(boxes[0].kor);
console.log(Object.hasOwn(boxes[0],'draw'));
console.log(typeof Box.prototype);
console.log("----------------------");

//function 이름으로 prototype얻기
let proto = Box.prototype;
console.log(Object.hasOwn(proto,'draw'));//true

//function Object로 prototype얻기
// Object.getPrototypeOf(boxes[0]);





// for(let box of boxes){
//     // let x = box.x;
//     // let y = box.y;
//     // let w = box.width;
//     // let h = box.height;
//     // let color = box.color;
//     let {x,y,width:w,height:h,color}=box;
    
//     ctx.fillStyle=color;
//     ctx.fillRect(x,y,w,h,color);
// }

let kors = [30,20,10,40];
let [kor1,kor2,kor3]=kors; //배열 뽀개기
console.log(`kor1:${kor1} , kor2:${kor2}`);
[kor1,kor2]=[kor2,kor1]; //바꾸깅
console.log(`kor1:${kor1} , kor2:${kor2}`);

let both = [
    new Box(),
    new Box(30,40,50,50,"red")
];

{
    //첫번째 Box의 color와 width 얻기
    let [{color,width},b2] =both;
    console.log(color);
}

// let x = 0;
// for(let c of colors){
//     ctx.fillStyle = c;
//     ctx.fillRect(x,0,50,50);
//     x += 70;
// }