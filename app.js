//console.dir(document);
//console.log(document.getElementById('header-title'));
// var headerT=document.getElementById('header-title');
// headerT.textContent="Hello";
// var headerR=document.getElementById('main-header');
// headerR.style.borderBottom= 'solid 3px #000';

var thirdele=document.getElementsByTagName('li')[2];
thirdele.style.backgroundColor='green';
var arr=document.getElementsByTagName('li');
for(var i=0;i<arr.length;i++){
    arr[i].style.fontWeight='bold';
}