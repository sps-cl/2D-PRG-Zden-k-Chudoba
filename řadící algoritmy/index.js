let bubbleSortContainer = document.getElementById("bubblesort-div");
let insertionSortContainer = document.getElementById("insertionSort-div")
let shellSortContainer = document.getElementById("shellSort-div")

let max = 50;

document.documentElement.style.setProperty("--max-value", max);




let array = new Array(max);
let arrayOfColumns = new Array(array.length);
bubbleSortContainer.style.setProperty("--item-count", array.length);
insertionSortContainer.style.setProperty("--item-count", array.length);
shellSortContainer.style.setProperty("--item-count", array.length)
for (let i = 0; i < array.length; i++) {
    array[i] =Math.floor(Math.random() * max) + 1;
    
}
let bsa = new BubblesortAnim(array, bubbleSortContainer);
let isa = new InsertionSortAnim(array, insertionSortContainer);
let ssa = new ShellSortAnim(array, shellSortContainer);
//bsa.sortAsc()
//isa.sortAsc()
//ssa.sortAsc()