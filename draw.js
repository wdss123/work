/**
 * Created by ss on 2016/6/3.
 */
var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');
var j1x=0,j1y=0,j1h=0,j1w=60;
var j2x=0,j2y=0,j2h=0,j2w=0;
var j3x=0,j3y=0,j3h=0,j3w=0;
var playx=40,playy=330,fengshu=0;
var gunzic=0,gunzix=60,gunziy=350;
window.addEventListener('keydown', doKeyDown, true);
window.addEventListener('keyup', doKeyUp, true);
start();
function doKeyDown(e){
    var keyID = e.keyCode ? e.keyCode :e.which;
    if(keyID === 13 ) {
        start();
    };
    ctx.strokeStyle='yellow';
    ctx.fillStyle='yellow';
    ctx.lineWidth=3;
    ctx.lineTo(gunzix,gunziy);
    ctx.stroke();
    ctx.moveTo(playx+20,playy+20);
    gunziy=gunziy-5;
    gunzic=350-gunziy;


}


function doKeyUp(e){
    var keyID = e.keyCode ? e.keyCode :e.which;
    if(keyID === 32 ) {
        gunziy=350;
        ctx.beginPath();
        ctx.fillStyle='black';
        ctx.strokeStyle='black';
        ctx.lineWidth=3;
        ctx.moveTo(playx+20,playy+20);
        ctx.lineTo(playx+20+gunzic,gunziy);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle='#7FFFD4';
        ctx.strokeStyle='#7FFFD4';
        ctx.lineWidth=4;
        ctx.moveTo(playx+20,playy+20);
        ctx.lineTo(playx+20,350-gunzic);
        ctx.stroke();
        moveplayer();


    };


}
function start(){
    j1x=0,j1y=0,j1h=0,j1w=60;
    j2x=0,j2y=0,j2h=0,j2w=0;
    j3x=0,j3y=0,j3h=0,j3w=0;
    playx=40,playy=330,fengshu=0;
    gunzic=0,gunzix=60,gunziy=350;
    ctx.fillStyle='#7FFFD4';
    ctx.fillRect(0,0,300,500);
    //ctx.drawImage(bg,0,0,canvas.width,canvas.height);
    ctx.fillStyle='black';
    ctx.fillRect(j1x,350,j1w,150);
    j2x=Math.floor(Math.random()*160+20)+j1x+j1w;
    j2w=Math.floor(Math.random()*50+20);
    ctx.fillRect(j2x,350,j2w,150);
    j3x=Math.floor(Math.random()*160+20)+j2x+j2w;
    j3w=Math.floor(Math.random()*50+20);
    ctx.fillRect(j3x,350,j3w,150);
//画方块
    ctx.fillStyle='red';
    ctx.fillRect(playx,playy,20,20);
    huafengshu();
}


function moveplayer(){
    ctx.beginPath();
    ctx.fillStyle='#7FFFD4';
    ctx.strokeStyle='#7FFFD4';
    ctx.fillRect(playx,playy,20,20);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.strokeStyle='red';
    playx=playx+5;
    ctx.fillRect(playx,playy,20,20);
    ctx.stroke();
    if(playx<=(gunzic+j1w-20)){
        setTimeout("moveplayer();",30);
    }
    else{
        if((j1w+gunzic)>j2x && j1w+gunzic<(j2x+j2w)){
            ctx.beginPath();
            ctx.fillStyle='#7FFFD4';
            ctx.strokeStyle='#7FFFD4';
            ctx.fillRect(playx,playy,20,20);
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle='red';
            ctx.strokeStyle='red';
            playx=j2x+j2w-20;
            ctx.fillRect(playx,playy,20,20);
            ctx.stroke();
            moveall();
            fengshu++;

        }
        else{
            setTimeout(" gameover();",200);
        }

    }
}
function moveall(){
    ctx.fillStyle='#7FFFD4';
    ctx.fillRect(0,0,300,500);
    //ctx.drawImage(bg,0,0,canvas.width,canvas.height);
    ctx.fillStyle='black';
    j1x--;
    j2x--;
    j3x--;
    playx--;
    ctx.fillRect(j1x,350,j1w,150);
    ctx.fillRect(j2x,350,j2w,150);
    ctx.fillRect(j3x,350,j3w,150);
    ctx.fillStyle='red';
    ctx.fillRect(playx,playy,20,20);
    huafengshu();
    if(j2x!=0){
        setTimeout("moveall();",3);
    }
    else{
        rectchange();
    };




}
function gameover(){
    ctx.fillStyle='yellow';
    ctx.fillRect(0,0,300,500);
    ctx.fillStyle='white';
    ctx.font = "40pt Calibri";
    ctx.fillText("眼力达人",40,100);
    var grad  = ctx.createLinearGradient(60,200, 300,320);
    /* 指定几个颜色 */
    grad.addColorStop(0.2,'rgb(192, 80, 77)');    // 红
    grad.addColorStop(0.3,'rgb(155, 187, 89)'); // 绿
    grad.addColorStop(0.5,'rgb(200, 100, 162)');  // 紫
    grad.addColorStop(0.7,'blue');
    /* 将这个渐变设置为fillStyle */
    ctx.fillStyle = grad;
    ctx.fillText("Point:"+fengshu,60,300);
    ctx.fillStyle='red';
    ctx.font = "20pt Calibri";
    ctx.fillText("按enter重新开始",40,400);
    ctx.font = "10pt Calibri";
    ctx.fillText("13990260孙森",100,440);


}
function rectchange(){
    j1x=j2x;
    j1w=j2w;
    j2x=j3x;
    j2w=j3w;
    j3x=Math.floor(Math.random()*160+20)+j2x+j2w;
    j3w=Math.floor(Math.random()*50+20);
    gunzix=j1w;
}
function huafengshu(){
    ctx.fillStyle='white';
    ctx.font = "40pt Calibri";
    ctx.fillText(fengshu,140,40);
}