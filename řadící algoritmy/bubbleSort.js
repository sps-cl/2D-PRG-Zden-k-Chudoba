class BubleSort{
        //Statická metoda pro řazení pole vzestupně
    static sortAsc (array) {
        //Prochází pole postupně
        for (let i = 0; i < array.length; i++) {
            //Proměnná která signalizuje zda proběhla výměna prvků
            let swap = false;
            for (let j = 1; j < array.length - i; j++) {
                //Pokud je předchozí prvek větší než aktuální dojde k výměně
                if(array[j - 1] > array[j]){
                swap = true;
                 //Výměna prvků pomocí destrukturalizace pole
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
                }
            }
            //Pokud nedošlo k žádné výměně, pole je seřazeno a metoda končí
            if (!swap) return;
        }
    }
}