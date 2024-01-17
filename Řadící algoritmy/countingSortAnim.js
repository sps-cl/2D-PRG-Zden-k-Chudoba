class CountingSortAnim extends SortAnim {
    async sortAsc(){
        for (let i = 1; i < this.values.length; i++) {
            if (max < this.values[i]) max = this.values[i];
        }
        max++;
        let countArray = new Array(max);
        for (let i = 0; i < max; i++) {         
            countArray[i] = 0;            
        }
        for (let i = 0; i < this.values.length; i++) {
            countArray[this.values[i]]++;
        }
        for (let i = 1; i < max; i++) {
            countArray[i] += countArray[i - 1]; 
        }
        let outputArray = new Array(this.values.length)
        for (let i = this.values.length - 1; i >= 0; i--) {
            outputArray[--countArray[this.values[i]]] = this.values[i]
            this.setCompareColor(this.columns[i]);
            await this.sleep(50);
            this.setDefaultColor(this.columns[i]);
        }
        for (let i = 0; i < this.values.length; i++) {
            this.setValue(i, outputArray[i]);
            this.setCompareColor(this.columns[i]);
            await this.sleep(50);
            this.setSortedColor(this.columns[i])
        }
    }
}