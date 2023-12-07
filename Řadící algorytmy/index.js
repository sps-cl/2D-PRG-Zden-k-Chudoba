//HTML element s id "bubblesort-div" a "insertionSort-div"
let bubbleSortContainer = document.getElementById("bubblesort-div");
let insertionSortContainer = document.getElementById("insertionsort-div");
//Nastavení maximální hodnoty pro náhodně generovaná čísla
let max = 30;
document.documentElement.style.setProperty("--max-value", max);
//Vytvoření pole s náhodnými hodnotami od 1 do max
let array = new Array(max);
let arrayOfColumns = new Array (array.length);
//Vytvoření instance třídy bubbleSortAnim pro animaci bublinkového řazení
for (let i = 0; i < array.length; i++) {
    array[i] = Math.round(Math.random() * max) + 1;
}
//Spuštění animace
let bubbleSort = new bubbleSortAnim(array, bubbleSortContainer);
bubbleSort.sortAsc();