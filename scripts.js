const addRow = document.querySelector("#addRow");
const removeRow = document.querySelector("#removeRow");
const addColumn = document.querySelector("#addColumn");
const removeColumn = document.querySelector("#removeColumn");

const colorContainerChildren = [...document.querySelector('.colorContainer').children];
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");
const cyan = document.querySelector("#cyan");


const render = (template, node) => {
    node.innerHTML += template;
}




const generateNxN = (columns, rows)=> {
    
    for(let i = 0; i < rows; i++){
       render(`<div id="row-${i+1}"></div>`, document.querySelector('#grid'));
       const row = document.querySelector(`#row-${i+1}`);
       for(let j = 0; j < columns; j++){
        render(`<div class="cells"></div>`, row);
       }
    }
};
let color;
colorContainerChildren.forEach( ele => {
    ele.addEventListener('click', ev => {
        colorContainerChildren.forEach( ele => {
            ele.style.border = '1px solid black';
        })
        ev.target.style.border = '2px solid black';
        color = ev.target.id;
    })
})
let row = 5;
let col = 5
generateNxN(col,row);

let cells = document.querySelectorAll('.cells');
cells.forEach( ele => [
    ele.addEventListener('click', ev =>{
        ev.target.style.backgroundColor = color;
    })
])

addRow.addEventListener('click', ev => {
    //row++
    const node = document.querySelector('#grid').lastElementChild;
    const cloneNode = node.cloneNode(true);
    [...cloneNode.children].forEach( ele => {
        ele.style.backgroundColor = "";
    })
    document.querySelector('#grid').appendChild(cloneNode);
    cells.document.querySelectorAll('.cells');

    //generateNxN(col,row);
})


    



