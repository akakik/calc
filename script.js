function bclick(val){
    document.getElementById("screen").value+=val
}
function cclear(){
    document.getElementById("screen").value=null
}
function eclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}