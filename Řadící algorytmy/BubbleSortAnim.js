class bubbleSortAnim extends SortAnime{
//Construktor volá construktor nadřazené třídy s předanými hodnotami a container
 constructor(values,container){
    super(values,container);
 }
  //Metoda pro řazení pole vzestupně s animací bublinkového řazení
    async sortAsc() {
        for (let i = 0; i < this.values.length; i++) {
            //Proměnná která signalizuje zda proběhla výměna prvků
            let swap = false;
              //Hranice pro iteraci zmenšuje se s každým průchodem polem
            let bound = this.values.length - i;
            for (let j = 1; j < bound; j++) {
                  //Nastavení barvy pro vizualizaci porovnávaných prvků
                this.setCompareColor(this.columns[j - 1]);
                this.setCompareColor(this.columns[j]);
                // Čekání na krátký čas pro vizualizaci
                await this.sleep(100);
                   //Nastavení původní barvy po vizualizaci
                this.setDefaultColor(this.columns[j - 1]);
                this.setDefaultColor(this.columns[j]);
                //Nastavení barvy pro vizualizaci seřazeného prvku
                if (this.values[j - 1] > this.values[j]) {
                    swap = true;
                    this.swapValues(j - 1, j);
                }
                
            }
            this.setSortedColor(this.columns[bound - 1]);
            if (!swap) return;
        }
    }
}