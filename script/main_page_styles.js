// document.getElementById('btn1').addEventListener("click",function(){
//    var text = document.getElementById('intro');
//    if(text.style.display='block'){
//        text.style.display='none';
//    } else{
//     text.style.display='block';
//    }
// })
var a;
function hide(){
    if(a==1){
        document.getElementById("intro").display="block";
        return a = 0;
    }
    else{
        document.getElementById("intro").display="hide";
        return a = 1;
    }
}