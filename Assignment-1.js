var arr = [5,4,3,2,1];
var arr1 =[1,2,3,4,5];
var arr2 =[4,3,7,8,1];
var Ascending = 0 ;
var Decending = 0 ;
function checkSorted(arr){
    for (let i=0;i< arr.length-1 ; i++){
        if (arr[i] > arr[i + 1]){

                 Ascending = 1 ;
        }

        else if (arr[i] < arr[i + 1]){

            Decending = 1;
        }
    }
}
checkSorted(arr);
if(Ascending == 0){
console.log("The given array is Ascending order = 1 ");
}else if(Decending==0
    ){
console.log("The given array is Decending order = -1");
}else{
console.log("The given array is not sorted = 0" );
}

checkSorted(arr1);
if(Ascending == 1 ){
console.log("The given array is Ascending order = 1 ");
}else if(Decending==1){
console.log("The given array is Decending order = -1");
}else{
console.log("The given array is not sorted = 0" );
}

checkSorted(arr2);
if(Ascending ==0 ){
console.log("The given array is Ascending order = 1 ");
}else if(Decending==0){
console.log("The given array is Decending order = -1");
}else{
console.log("The given array is not sorted = 0" );
}



