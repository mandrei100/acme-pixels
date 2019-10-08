const render = (template, node) => {
    node.innerHTML += template;
}

const generateNxN = (n)=> {
    for(let i = 0; i < n; i++){
       render(`<div id="row-${i+1}"></div>`, document.querySelector('#grid'));
       const row = document.querySelector(`#row-${i+1}`);
       for(let j = 0; j < n; j++){
        render(`<div class="something"></div>`, row);
       }
    }
};
const arr = generateNxN(5);
    /* sample output
    [
      ['red', 'blue'],//row 1
      ['green', '']//row 2
    ];
    */

//const generateHTMLGrid = (arr)=> { 
    //your code here to generate html for a grid
  //  };
//generateHTMLGrid(arr);
    /*
    <div class='row'>
       <div style='background-color:red'></div>
       <div style='background-color:blue'></div>
    </div>
    <div class='row'>
       <div style='background-color:green'></div>
       <div style='background-color:'></div>
    </div>
    */
// const addRow = document.querySelector("#addRow");
// const removeRow = document.querySelector("#removeRow");
// const addColumn = document.querySelector("#addColumn");
// const removeColumn = document.querySelector("#removeColumn");

// const red = document.querySelector("#red");
// const blue = document.querySelector("#blue");
// const green = document.querySelector("#green");
// const yellow = document.querySelector("#yellow");
// const cyan = document.querySelector("#cyan");


