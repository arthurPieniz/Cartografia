let A = document.getElementById("a");
let B = document.getElementById("b");
let C = document.getElementById("c");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

function bhaskara(){
    var a = parseInt(A.value)
    var b = parseInt(B.value)
    var c = parseInt(C.value)

    var delta = b ** 2 -4*a*c;
    if(delta < 0){
        result.innerHTML = "Resultado: O resultado não possui raízes reais";
    }else{
        var mais = (-b + Math.sqrt(delta))/(2*a);
        var menos = (-b - Math.sqrt(delta))/(2*a);
        result.innerHTML = "Resultado: Seu conjunto solução é { " + mais + ", " + menos + " }" ;
    }
}