//console.dir(document);
//console.log(document.getElementById('header-title'));
// var headerT=document.getElementById('header-title');
// headerT.textContent="Hello";
// var headerR=document.getElementById('main-header');
// headerR.style.borderBottom= 'solid 3px #000';

// var thirdele=document.getElementsByTagName('li')[2];
// thirdele.style.backgroundColor='green';
// var arr=document.getElementsByTagName('li');
// for(var i=0;i<arr.length;i++){
//     arr[i].style.fontWeight='bold';
// }


// var it = document.getElementsByClassName('n');
// it[0].style.color = 'green';

// var arr= document.getElementsByTagName('li');
// arr[arr.length-1].style.color='red';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='blue';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';

// var secondItem = document.querySelectorAll('.list-group-item');
// secondItem[1].style.color= 'green';

// var oddele= document.querySelectorAll('.list-group-item:nth-child(odd)');

// for(var i=0;i<oddele.length;i++){
//     oddele[i].style.backgroundColor="green";
// }

// var itemlist= document.querySelector('#items');
// itemlist.parentNode.style.backgroundColor='grey';

// var itemlist= document.querySelector('#items');
// itemlist.parentElement.style.backgroundColor='grey';

var newDiv = document.createElement('div');

newDiv.id='hello1';
newDiv.className='hello';

newDiv.setAttribute('title','Hello Div');

var divText=document.createTextNode("HEllo");

newDiv.appendChild(divText);

console.log(newDiv);

// var container= document.querySelector('header .container');
// var h1= document.querySelector('header h1');

var container= document.querySelector('div .list-group');
var ele= document.querySelector('.list-group-item:nth-child(1)');
container.insertBefore(newDiv,ele);