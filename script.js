num = document.getElementById('num');
btn = document.getElementById('btn');
calculate = document.getElementById('calculate');
result = document.getElementById('result');


var array = [];
var sum;

function add(){
    spanElement = document.createElement('span');
    result.appendChild(spanElement);
    spanElement.innerText = `[${num.value}] `;
    array.push(num.value);
    num.value = '';
    num.focus();
}



function calc(){
    const sum = array.reduce((sum, array) => parseInt(sum) + parseInt(array))
    console.log(sum);
    pElement = document.createElement('p');
    result.appendChild(pElement);
    var size = array.length;
    var average = parseInt(sum)/parseInt(size)
    pElement.innerText = `The average of the values will be: ${average}`; 
    
}
    







