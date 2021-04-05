//Bai 1

// let str_input = "program"
// console.log(str_input);
// let str_sp = str_input.split("");
// let sum = str_sp[str_sp.length - 1];
// for(let i = str_sp.length - 2; i >= 0; i--){
//     sum += str_sp[i];
// }
// console.log(sum);

//Bai 2

// let str = "THIs iS Test";
// let str1 = str.toLowerCase();
// let str2 = str1.split("");
// let sum = str2[0].toUpperCase();
// for(let i = 1  ; i < str2.length; i++){
//     if (str2[i] == ' '){
//         str2[i + 1] = str2[i + 1].toUpperCase();
//     }
//     sum += str2[i];
// }
// console.log(sum);

//Bai 3

// let arr1 = ["one", "two", "three", "one", "one", "four", "five", "four", "five", "five"];
// let arr=[1,2,3,3,4,5,4,4,4,5,5];
// let x = arr.length;
// let dem = 0;
// for(let i = 0; i < x; i++){
//     if (arr[i] != null) {
//         for(let j = i + 1; j < x; j++){
//             if (arr[i] === arr[j]) {
//                 //arr.splice(j - dem, 1);
//                 //arr[j] = null;
//                 arr[j] = null;
//             }
//         }
//     }
// }
// console.log(arr);
// for(let i = x - 1; i >= 0; i--){
//     if (arr[i] == null) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

//Bai 5

// let str = prompt("Ngay/Thang/Nam");
// let str1 = str.split("/");
// let str2 = new Array();
// let flag
// let flag1 = 0;
// for(let i = 0; i < 3; i++){
//     str2[i] =Number(str1[i]);
// }
// if (str2[1] === 4 || str2[1] === 6 || str2[1] === 9 || str2[1] === 11){
//     if(str2[0] > 30 || str2[0] < 1){
//         console.log("Khong hop le");
//         flag = 0;
//     }
//     else{
//         console.log("Ngay hop le");
//         flag = 1;
//     }
// }
// else if(str2[1] === 2){
//     if(str2[2] % 400 == 0){
//         if(str2[1] <= 29){
//             console.log("Ngay hop le");
//             flag = 1;
//             flag1 = 1
//         }
//     }
//     else if(str2[2] % 4 == 0){
//         if(str2[1] <= 29){
//             console.log("Ngay hop le");
//             flag = 1;
//             flag1 = 1;
//         }
//     }
//     else if(str2[0] > 29 || str2[0] < 0){
//         console.log("Khong hop le");
//         flag = 0;
//     }
//     else{
//         console.log("Ngay hop le");
//         flag = 1;
//     }
// }
// else if(str2[1] > 12 || str2[1] < 0){
//     console.log("Khong hop le");
//     flag = 0;
// }
// else{
//     if(str2[0] > 31 || str2[0] < 1){
//         console.log("Khong hop le");
//         flag = 0;
//     }
//     else{
//         console.log("Ngay hop le");
//         flag = 1;
//     }
// }
// if(flag == 1){
//     str2[0] = str2[0] + 1;
//     if(str2[1] === 4 || str2[1] === 6 || str2[1] === 9 || str2[1] === 11){
//         if(str2[0] > 30){
//             str2[0] = 1;
//             str2[1]++;
//         }
//     }
//     else if(str2[1] === 2 ){
//         if(flag1 == 1){
//             if(str2[0] > 29){
//                 str2[0] = 1;
//                 str2[1]++;
//             }
//         }
//         else{
//             if(str2[0] > 28){
//                 str2[0] = 1;
//                 str2[1]++;
//             }
//         }
//     }
//     else{
//         if(str2[0] > 31){
//             str2[0] = 1;
//             str2[1]++;
//             if(str2[1] > 12){
//                 str2[2]++;
//                 str2[1] = 1;
//             }
            
//         }
//     }
// }
// console.log(`Ngày tiếp theo là: ${str2[0]}/${str2[1]}/${str2[2]}`);


//Bai 4

let nhanviens = ["hai", "huy" ,"hoang"];
nhanviens[0] = {
    name:  "hai",
}
