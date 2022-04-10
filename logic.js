window.addEventListener("load",bindEvents);

function bindEvents(){
    let buttons=document.getElementsByTagName("button");
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",actionFun);
    }
}

function actionFun(){
    if(this.innerText=='='){
        let res=eval(document.getElementById("val").innerText);
        document.getElementById('val').innerText=res;
    }
    else if(this.innerText=='C'){
       let res=document.getElementById("val").innerText;
       res=Math.floor(res/10);
       document.getElementById('val').innerText=res;
    }
    else{
        let r=document.getElementById('val').innerText;
        document.getElementById('val').innerText=r+this.innerText;
    }
}