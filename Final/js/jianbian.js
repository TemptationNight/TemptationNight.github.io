
xianxing();
function xianxing() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    var clg=context.createLinearGradient(0,0,200,0);//线性渐变的角度
    clg.addColorStop(0,"red");      //设置填充颜色及渐变过程
    clg.addColorStop(0.5,"blue");
    clg.addColorStop(1,"black");
    context.fillStyle=clg;                //设置填充色
    context.strokeStyle = clg;              //设置边框色
    context.fillRect(0,0,300,300);
}