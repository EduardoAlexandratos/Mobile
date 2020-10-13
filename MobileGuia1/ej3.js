
var a = [3,6,8,21];

function Par(a) {
    if(a%2==0){
        console.log("par");
    }else{
        console.log("impar");
    }
}
for(var b of a){
    console.log(Par(b));
}