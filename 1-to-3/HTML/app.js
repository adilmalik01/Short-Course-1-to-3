

// let emailInput = document.getElementById("emailInput")
// let passwordInput = document.getElementById("passwordInput")

// let emailData = "madilsmit6@gmail.com"
// let passwodData = 12345



// function getInputValue() {
//     console.log("email" + emailInput.value);
//     console.log("password" + passwordInput.value);




//     if(emailData == emailInput.value && passwodData == passwordInput.value){
//         console.log("user =========== > Login");
//     }else{
//         console.log("invalid Credentail");
//     }



//     emailInput.value = ""
//     passwordInput.value = ""




// }



// // function Greet(name,age) {   // parameters
// //     // let message = "hello world "
// //     // console.log(message);


// //     // let num = 0
// //     // if (num != 0) {
// //     //     console.log("yes its 0");
// //     // } else {
// //     //     console.log("invalid number");
// //     // }


// //     console.log("student name :" + name  + " " + age);

// // }



// // Greet("hamza" ,10)  // invoked / call // argument






// let arr = ["Adil", 20, true]
// console.log(arr);

// arr.push("ali")          //      Add new elements at the End of an array
// console.log(arr);

// arr.push("hamza")
// console.log(arr);


// arr.unshift("instart")   // Add new elements at the start of an array  
// console.log(arr);


// arr.pop()            //  remove last value in array
// console.log(arr);


// arr.shift()         // Removes the first element from an array
// arr.shift()
// console.log(arr);




// push  Add new elements at the End of an array
// pop  remove last value in array
// shift   Removes the first element from an array
// unshift Add new elements at the start of an array
// slice
// splice 








// let newArray = []
// console.log(newArray);

// newArray.push("adil")
// console.log(newArray);





// let selectTag = document.getElementById("dom")
// selectTag.innerHTML = "adil"
// console.log(selectTag.innerHTML);



// let getQuerySelector = document.querySelector(".")
// getQuerySelector.innerHTML = "adil"
// console.log(getQuerySelector.innerHTML);





// let myArray = ["adil", "hello", "world"]
// // console.log(myArray);

// myArray.push("adil", 20)
// // console.log(myArray);

// myArray.unshift("malik", 40)
// console.log(myArray);

// // myArray.pop()

// // myArray.shift()
// // console.log(myArray);\




// let deletedValue = myArray.splice(3, 1, "newValue")

// console.log("🚀 ~ deletedValue:", deletedValue)
// console.log(myArray);



// let copyArray = myArray.slice(2, 5)
// console.log("🚀 ~ copyArray:", copyArray)





// console.log(myArray);
// document.write(myArray)


// myArray.forEach(() => {

// })









// push  Appends new elements to the end of an array, and returns the new length of the array.
// pop   Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
// shift
// unshift Appends new elements to the start of an array, and returns the new length of the array.
// slice
// splice 








// let multipleData = ["hello", "world`", "ali", "hamza"]

// console.log(multipleData);

// multipleData.push("adil", 20)
// console.v log(multipleData);

// multipleData.pop()
// console.log(multipleData);


// multipleData.unshift("startValue")
// console.log(multipleData);


// multipleData.shift()
// console.log(multipleData);



// console.log(multipleData);




// let copyArray = multipleData.slice(2, 5)
// console.log(copyArray);

// console.log(multipleData);

// let deletedValue = multipleData.splice(2,1,"NEWvALUE")
// console.log("🚀 ~ deletedValue:", deletedValue)
// console.log(multipleData);




// let multipleData = ["hello", "world`", "ali", "hamza"]


// document.write(multipleData)




// multipleData.forEach((val, i) => {
//     document.write("<br/>" + val + " " + i + "<br/>")
// })









// let numArray = [2, 4, 7, 8]








// let mapArray = numArray.map((val, i) => val * 2)
// console.log(mapArray);



let multipleData = ["hello", "world`", "ali", "hamza"]

// multipleData[0]

// for (let i = 0; i < multipleData.length; i++) {
//     console.log(multipleData[i]  );
// }


// for (let name of multipleData) {
//     console.log(name);

// }

// const arrowFuntion = () => {
//     console.log(1);
//     console.log(1);
//     console.log(1);
//     console.log(1);
//     console.log(1);
//     console.log(1);
//     console.log(1);
// }

// arrowFuntion()

// console.log(document);


let h3Tag = document.querySelector("#dom")
let boxDiv = document.querySelector(".boxDiv")
// boxDiv.innerHTML = `  <img src="https://spn-sta.spinny.com/blog/20230612165825/Audi-A6.webp?compress=true&quality=80&w=1024&dpr=2.6" width="300px" alt="">  `

// let image = document.createElement("img")
// image.src =  "https://spn-sta.spinny.com/blog/20230612165825/Audi-A6.webp?compress=true&quality=80&w=1024&dpr=2.6"
// image.width = "200"
// console.log(image);


let h1Tag = document.createElement("h1")
// h1Tag.innerHTML = "hello world"
let h1Text = document.createTextNode("hello my name is adil")

h1Tag.appendChild(h1Text)

boxDiv.appendChild(h1Tag)

console.log(boxDiv);
// h3Tag.innerHTML = "adil"
// console.log(h3Tag.innerHTML);
