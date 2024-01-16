class InsertionSortAnim extends SortAnim{
    constructor(values, container){
        super(values, container)
    }
    async sortAsc(){
        for (var i = 1; i < this.values.length; i++) {
            let j = i -1;

            while(j >= 0 && this.values[j] > this.values[j + 1]) {
                this.setCompareColor(this.columns[j]);
                this.setCompareColor(this.columns[j +1]);
                 await this.sleep(50);
                 this.setDefaultColor(this.columns[j]);
                 this.setDefaultColor(this.columns[j +1])
                this.swapValues(j, j+1);
                j--;
            }
            await this.sleep(50);
        }
        for (let index = 0; index < i; index++) {
            this.setSortedColor(this.columns[index])
            
        }
    }
}