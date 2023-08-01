//----promise 콜백의 중첩을 줄이는 도구---------
{
    //이 함수는 우리가 만든 함수가 아니라고 가정
    let url = "http://";
    function download(url,callback){
        //다운로드 완료
        callback([2,3,4]);
    }

    function downloadPromise(url){
        //다운로드 완료
        return new Promise(function(resolve){
            resolve([2,3,4]);
        })
    }
    //--------------------------
    //여기는 download 라이브러리를 사용하는 내 코드
    //let result = download(); //오랜 시간을 잡아먹는 코드
    //console.log(result);

    //이따 완료되면 알려줄거니까 네 코드를 부를 수 있게 함수를 알려줘
    function downloadHandler(result){
        console.log(result); //데이터가 왔다
    }

    //미리 함수를 만들어서 나중에 이 함수를 호출해서 다운로드 완료를 알려달라고 함
    /*let result=*/ download(url,downloadHandler); 

    //그런데 일반적으로 함수는 미리 만들지 않고 넘겨주면서 정의한다
    download(url,function(result){
        console.log(result);
    }); 

     //위의 방식이 다음처럼 바뀌는 것을 바람
     //1. 서비스 함수가 인자로 직접 콜백을 받지 않고 , 콜백을 받는 도구를 따로 두자
     //2. 콜백을 직접 받지 않음으로써 중첩을 줄이자
     // 이런 것들을 위한 도구가 promise객체

    let promise = downloadPromise(url);
    promise
    .then(function(result){
        console.log("pro1--------");
        console.log(result);
        return result[0];
    })
    .then(function(n){
        console.log("pro2--------");
        console.log(n);
    });
}


//----문자 코드와 RegExp 검색
{
    console.log("dds".length);//3
    console.log("구현".length);//2
    console.log("------------------------------");

    let phone = "010-3232-333311111";
    //let exp = "010-????-????";
    //let exp = "01[0136789]-\d{3,4}-\d{4}";
    //const exp =/^01[0136789]-\d{3,4}-\d{4}$/;
    //console.log(exp.test(phone));///false

    let html=`<div>
                <h2>hello<h2>
                <ul>
                    <li>okay<li>
                    <li>
                        <b>bye</b>
                    </li>
                </ul>
            </div>`;

    // let exp = /<.>/;
    // let result = html.match(exp);
    // console.log(result);

    let st = `<hello> good </hello> hoho 3273
                haha <bye> 7821 </bye>
                nazzoo noohoo`;
    //let exp = /[a-o1-5]+/g;
    //let exp = /<[a-o]+>|[1-5]+/g;
    let exp = /<\w+>.+<\/\w+>+/g;
    //g : (글로벌) 전체에서 찾기
    let result = st.match(exp);
    console.log(result);
}
console.log("------------------------------");

//----Iterator 구현을 쉽게 해주는 생성기(Generators)------------
{
    let exam = {
        kor:10,
        eng:20,
        math:30,
        *[Symbol.iterator](){
            yield this.kor;
            yield this.eng;
            yield this.math;
        }
    };
    for(let n of exam)
    console.log(n);//10,20,30

    console.log("------------------------------");

    let lotto = {
        *[Symbol.iterator](){
            let nums = [2,3,4,5];
            let index = 0;
            for(let i=0;i<nums.length;i++)
                yield nums[i];
        }
    };

    for(let n of lotto)
        console.log(n);//2,3,4,5
}
console.log("------------------------------");


//----symbol을 이용한 Iterator 인터페이스(심볼)를 구현하기------------
{
    // let lotto = {
    //     [Symbol.iterator](){
    //         let nums = [2,3,4,5];
    //         let index = 0;
    //         return{
    //             next(){
    //                 return{
    //                     done:index==4?true:false,
    //                     value:nums[index++]
    //                 }
    //             }
    //         }
    //     }
    // };
    // {
    //     //let it = lotto.values();
    //     // console.log(it.next().value);
    //     // console.log(it.next().value);
    //     // console.log(it.next().value);
    //     // console.log(it.next().value);
    //     for(let n of lotto)
    //         console.log(n);
    // }
    
}
console.log("------------------------------");

//---- symbol을 이용한 인터페이스 정의--------------
{
    let examInterface = {
        total : Symbol(),
        avg : Symbol()
    };

    class Exam{
        constructor(){
            this.kor=20;
            this.eng=30;
            this.math=40;
        }
        [examInterface.total](){
            return this.kor+this.eng+this.math;
        }
        avg(){
            return this.total()/3;
        }
    }

    let exam = new Exam();
    //exam.total();
    let result = exam[examInterface.total]();
    console.log(result);
}
console.log("------------------------------");

//---- symbol--------------
//다시 뽑을 수 없는 식별자를 반환해줌 / 약속된 이름 만들어줌 / 절대로 중복될 수 없음!
{
    let s = Symbol();
    let s1 = Symbol();
    console.log(s==s1); //false

    let exam = {
        kor:10,
        eng:20,
        [s](){
            return this.kor+this.eng;
        }
    }

    let aa = {
        kor:10,
        eng:20,
        total(){
            console.log("ddddd");
        }
    }

    console.log(exam[s]());
    // function iterator(){
    //     console.log("e");
    // }
    // function iterator(){
    //     return [2,3,4];
    // }

    // function print(it){
    //     for(let n of it)
    //         console.log("e");
    // }

    // print(iterator());
    console.log("------------------------------");
}


// //----for of 문에서 열거--------------
// {
//     let exam = {
//         kor:10,
//         eng:20,
//         math:30
    
//     };

//     for(let n of exam)
//         console.log(n);

//     console.log("------------------------------");
    
//     let lotto = [3,6,8,29,33,34];

//     for(let n of lotto)
//         console.log(n);

//     console.log("------------------------------");
// }

//----collection이 없다가 있다

    //유일한 컬렉션 : Array
    //일반적인 언어에서 지원하는 컬렉션 : set,Array,Map
    //Set 계열 : 키가 값과 같다 - 값의 중복을 허용하지 않는다
    //List 계열 : Array는 값의 삽입위치가 키가 된다 .위치(index)기반의 컬렉션
    //Map 계열/ 키를 따로 설정할 수 있다. 값에 키를 설정하기 위한 컬렉션으로 임시 객체를 대신해서 사옹한다
    //컬렉션이 가져야 할 기능 -> 값들을 열거할 수 있느냐 

    let lotto = new Set();
    lotto.add(Math.floor(Math.random()*45)+1);
    lotto.add(Math.floor(Math.random()*45)+1);
    lotto.add(Math.floor(Math.random()*45)+1);
    lotto.add(Math.floor(Math.random()*45)+1);
    lotto.add(Math.floor(Math.random()*45)+1);
    lotto.add(Math.floor(Math.random()*45)+1);

    // console.log(lotto);

    // console.log(lotto.entries().next());
    // console.log(lotto.values().next());
    // console.log(lotto.keys().next());
{
    let it = lotto.values();
    for(let n of it)
        console.log(n);

        console.log("------------------------------");
}

{
    let ar = [3,4,2,6,7];

    let kvit = ar.entries();
    for(let entry of kvit)
        console.log(`key:${entry[0]},value:${entry[1]}`);

    console.log("------------------------------");

}

{
    let map = new Map();
    map.set("id",1);
    map.set("title","hello");
    map.set("writerId","newlec");

    let kvit = map.entries();
    for(let entry of kvit)
        console.log(`key:${entry[0]},value:${entry[1]}`);

    console.log("------------------------------");

    map.forEach((v,k,m)=>{
        console.log(`key:${k},value:${v},cols:${m}`);
    })

    console.log("------------------------------");
}

//----Spread Operator-------------------
{
    function print(x,y,z){
        console.log(`x:${x},y:${y}`);
    }
    let ar = [2,3,5];
    print(ar[0]);//x:2
    print(...ar);//x:2,y:3
    print(ar);//x:2,3,5,y:undefined
}




//----template string-------------------
{
    let kor = 30;
    let eng = 40;
    let msg = String.raw`\\<span>
                yay~\n
                <span>\\`

    let template = `kor:${kor}, eng:${eng}, msg:${msg}`;
    console.log(template);
}



//----Enhanced Object Literals

// let kor = 3;
// let eng = 4;
// let math = 5;

// let obj = {
//     kor:kor,
//     eng:eng,
//     math:math,
//     total:function(){
//         return this.kor+this.eng+this.math;
//     },
//     "to-string":function(){
//         console.log("hello");
//     }
// }//normal object

// //Enhanced Object
// //1.변수를 이용해 속성을 정의할 경우 변수명과 키가 같은 이름일 경우에는 키를 별도로 설정할 필요가 없다
// //2. 함수를 정의할 때: function 키워드를 사용할 필요가 없다
// //3. 속성으로 변수가 올 수 있다? 이 기능이 향상?
// let colname = "ok";
// let enhObj={
//     kor,
//     eng,
//     math,
//     total(){
//         return this.kor+this.eng+this.math;
//     },
//     "to-string":function(){
//         console.log("hello");
//     },
//     [colname]:function(){
//         console.log("울랄라");
//     }
// };

// enhObj.ok();



//----클래스 다루기------------------------

// class Exam{

//     //은닉화(=private)
//     #kor;
//     #eng;
//     #math;
//     constructor(kor=0,eng=0,math=0){
//         this.#kor = kor;
//         this.#eng = eng;
//         this.#math = math;
//     }
//     total(){
//         return this.#kor+this.#eng+this.#math;
//     }
//     avg(){
//         return this.total()/3;
//     }
//     get kor(){
//         return this.#kor;
//     }
//     set kor(kor){
//         this.#kor = kor;
//     }
// }
// class NewExam extends Exam{
//     #com;
//     constructor(kor=0,math=0,eng=0,com=0){
//         super(kor,math,eng);//부모호출 
//         this.#com=com;
//     }
//     total() {
//         return super.total() +this.#com;
//     }
//     #test(){
//         console.log("hehehe");
//     }

// }
// let exam = new NewExam(1,1,1,1);
// //console.log(exam.total()); -> 4
// // exam.#test();

// exam.kor = 30;
// console.log(exam.kor);

//------------------------------------------------------

// "use strict";
// x=20;
// this.x=30;
// setTimeout(()=>{
//     //console.log(arguments.legnth);
//     console.log(this.x);
// },3000);

// setTimeout(function(){
//     console.log(arguments.legnth);
//     console.log(this.x);
// },3000);

// class Test{
//     constructor(){
//         this.x =10;
        
//         setTimeout(()=>{
//             console.log(this.x);
//         },3000);

//         setTimeout(function(){
//             console.log(this.x);
//         },3000);
//     }
// }
// new Test();

// let f1 = function(){
//     console.log("test")
// };
// let f2 = () =>{
//     console.log("test2")
// };