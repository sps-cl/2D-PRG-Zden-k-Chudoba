class ShellSort {
    static sortAsc(array) {
        for (let gap = array.length >> 1; gap > 0; gap >>= 1) {
            for (let i = gap; i < array.length; i++) {
                let j = i - gap;
                while(j >= 0 && array[j] > array [j + gap]) {
                    [array [j], array[j + 1]] = [array[j + 1], array[j]] ;
                    j -= gap;
                }
            }
        }
    }
}