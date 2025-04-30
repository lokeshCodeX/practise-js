// console.log("hello world!")
// let i=0;
// while(i<5){
//   console.log(i);
//   i++;
// } i=1
// console.log(i)

// let str="babbar";
// let i=0;
// let j= str.length-1;
// function swap(let a, let b){
//    let c=a;
//    a=b;
//    b=c
// }

// while(i<j){
//   swap(str[i],str[j]);
//   i++;
//   j--;

// }
// console.log(str);


//reverse a string in javascript 

// let str = "babbar";
// let i = 0;
// let j = str.length - 1;

// // Convert string to array because arrays are mutable
// let arr = str.split('');

// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// while (i < j) {
//     swap(arr, i, j);
//     i++;
//     j--;
// }

// // Join array back to string
// str = arr.join('');
// console.log(str);  // Output: "rab bab"


// let arr=[1,2,3 ,4];
// console.log(arr)
// let brr= new Array('lokesh','ipl', 1,2,true)
// console.log(brr)
// brr.slice(2,4);
// //console.log(x);
// console.log("after the slice method", brr);
// console.log("now we are are try to use splice methods")
// brr.splice(1,2,'x')
// console.log("after the spliceing :-",brr.splice(1,2,'x'))


// let arr=[1,2,3,4,5,6];

// let ans=arr.map((number, index)=>{

//   return number-1;
// })

// console.log(ans);
  


// function changeText(){
//   let element=document.getElementById('fpara')
//   element.textContent="hello lokesh"

// }

// let element=document.getElementById('fpara')
// element.addEventListener('click',changeText)

// console.log("hello lokesh")


// REVERSE A STRING 
// let str = "hellolokesh";
// let arr = str.split("");
// let i = 0;
// let j = str.length - 1;

// while (i < j) {
//   // Swap using a temporary variable
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log(arr.join(""));


//2:- CHECK THE PELIDROM NUMBER

// let str="banab"
// let arr= str.split("")
// let i=0, j=str.length-1;
// let count=0;
// while(i<j){
//   if(arr[i]!=arr[j]){
//     console.log("this string is not palidrom string")
//    count=1;
//    break;
//   }
//   i++;
//   j--;

// }

// if(count==0){
//   console.log("this is palidrom string brother");
// }


//3-> Arrow function

// let ans= (a,b)=>{
//   return a*b;
// }

// console.log(ans(2,6));

//4-> program to add property in object

// let arr={
//   name:"lokesh",
//   age:26
// }
// arr.gender='male';
// console.log(arr);

//4-> write the progrm to print the fibnocci series 

// function fibnocci(n){
//   if (n==0){
//     console.log(0);
//     return ;
//   }
//   if (n==1){
//     console.log(1);
//     return;
//   }
//   let a=0;
//   let b=1;
//   for(let i=2;i<=n;i++){
//      console.log(a+b);
//      let temp=a+b;
//      a=b;
//      b=temp;
//   }


// }
// let a=6;
// fibnocci(a)

// 5->  write the program to find out the intersection of array

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [1, 3, 4, 6.7];
// let set2 = new Set(arr2); // Use a Set for faster lookup

// function intersection(arr, set2) {
//   let ans = arr.filter(value => set2.has(value));
//   console.log(ans);
// }

// intersection(arr, set2);






let symbol1 = Symbol("Geeks") 
console.log(symbol1)