let gameseq=[];/*to track game seq*/
let userseq=[];/*to track use seq*/
let colorlist=['red','yellow','purple','green'];/*choosing random color btw these*/
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add('flash');/*to flash button we use flash class*/
    setTimeout(function(){
        btn.classList.remove("flash");/*remove flash class after flashing*/
    },250);
};
function userflash(btn){
    btn.classList.add('userflash');/*to flash button we use flash class*/
    setTimeout(function(){
        btn.classList.remove("userflash");/*remove flash class after flashing*/
    },250);
};
function levelup(){
    userseq=[];//reset userseq after levelup
    level++;/*level up*/
    h2.innerText=`level ${level}`;
    let randomindex=Math.floor(Math.random()*3);
    let rancolor=colorlist[randomindex];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);//push color generated in gameseq
    console.log(gameseq);
    gameflash(ranbtn);//call flash on randbutton
    // console.log(rancolor);
    // console.log(randomindex);
    // console.log(ranbtn);
    //gameflash(ranbtn);

};
function checkans(index){
    // console.log("curr level:",level);
    // let index=level-1;
    if(userseq[index]==gameseq[index]){
        if(userseq.length==gameseq.length){
            // levelup();
            setTimeout(levelup,1000);
        }
        // console.log("same value");
    }else{
        h2.innerHTML=`game over! your score<b>${level}</b><br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        })
        reset();//reset game after game over
    }

}
function buttonpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");//get color by id
    // console.log(usercolor);
    userseq.push(usercolor);//push into user seq
    checkans(userseq.length-1);
    console.log(gameseq);

}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",buttonpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}