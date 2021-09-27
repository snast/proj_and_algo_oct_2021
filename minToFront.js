function minToFront(arr) {
    var min_index = 0;
    var min = arr[min_index];

    for(var index = 1; index<arr.length; index++) {
        if(arr[index] <min) {
            min_index = index;
            min = arr[min_index];
        }
    }

    for(var index2=min_index; index2>0; index2--) {
        arr[index2] = arr[index2-1] 
    }
    arr[0] = min;
    return arr;
}
var test_arr_1 = [4, 2, 1, 3, 5];
console.log(minToFront(test_arr_1));
var test_arr_2 = [2];
console.log(minToFront(test_arr_2));
var test_arr_3 = [];
console.log(minToFront(test_arr_3));
var test_arr_4 = [2, 3, 3, 4,5];
console.log(minToFront(test_arr_4));
var test_arr_5 = [5,4,3,2,7];
console.log(minToFront(test_arr_5));


