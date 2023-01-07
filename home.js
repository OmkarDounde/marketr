// function Calck(){
//     let x = document.getElementById(1).innerText;
//     document.getElementById(calc).value+= x;

// }


function Calck1() {
    let text = document.getElementById("/").innerText;
    document.getElementById('calc').value += text;
}
function Calck2() {
    let text = document.getElementById("*").innerText;
    document.getElementById('calc').value += text;
}

function Calck3() {
    let text = document.getElementById("+").innerText;
    document.getElementById('calc').value += text;
}
function Calck4() {
    let text = document.getElementById("7").innerText;
    document.getElementById('calc').value += text;
}
function Calck5() {
    let text = document.getElementById("8").innerText;
    document.getElementById('calc').value += text;
}
function Calck6() {
    let text = document.getElementById("9").innerText;
    document.getElementById('calc').value += text;
}
function Calck7() {
    let text = document.getElementById("4").innerText;
    document.getElementById('calc').value += text;
}
function Calck8() {
    let text = document.getElementById("5").innerText;
    document.getElementById('calc').value += text;
}
function Calck9() {
    let text = document.getElementById("6").innerText;
    document.getElementById('calc').value += text;
}
function Calck10() {
    let text = document.getElementById("1").innerText;
    document.getElementById('calc').value += text;
}
function Calck11() {
    let text = document.getElementById("2").innerText;
    document.getElementById('calc').value += text;
}
function Calck12() {
    let text = document.getElementById("3").innerText;
    document.getElementById('calc').value += text;
}
function Calck13() {
    let text = document.getElementById("0").innerText;
    document.getElementById('calc').value += text;
}
function Calck14() {
    let text = document.getElementById("00").innerText;
    document.getElementById('calc').value += text;
}
function Calck15() {
    let text = document.getElementById(".").innerText;
    document.getElementById('calc').value += text;
}
function Calckclear() {
    let text = "";
    document.getElementById('calc').value = text;
}
function Calckremove() {
    let remo = document.getElementById("calc").value;
    remo = remo.substring(0, remo.length - 1);
    console.log(remo);
    document.getElementById('calc').value= remo;
}
function Calckequal() {
    var text = document.getElementById("calc").value;
    var EqualTo = eval(text);

    document.getElementById('calc').value = EqualTo;
}