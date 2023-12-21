// for (let i = 0; i < 5; i++) {
//     // Outer loop: iterates over rows (i represents the row)
    
//     let row = "";
    
//     for (let j = 0; j < 5; j++) {
//         // Inner loop: iterates over columns (j represents the column)
        
//         row += "* ";
//         // Concatenate asterisks and a space to the row string
//     }    
//     // process.stdout.write(row + "\n");
//     // Print the entire row at once, trimming the trailing space, and add a newline
//     console.log(row);
// }

//Assignment 1 - Stars Pattern

// function pattern1(n){
//     for (let i = 0; i < 5; i++) {
//         let str = "";
//         for (let j = 0; j < 5; j++) {
//             str = str + "* ";
//         }
//         console.log(str);
//     }
// }

// pattern1(5);



//Assignment 2 - Stars Pattern

// function pattern2(n){
//     for (let i = 0; i < n; i++) {
//         let str = "";
//        for (let j = i; j >= 0; j--) {
//            str += "* ";
//        }
//        console.log(str);
//    }
// }

// pattern2(5);


//Assignment 3 - Stars Pattern

// function pattern3(n){
//     for (let i = n; i > 0; i--) {
//         let str = "";
//         for (let j = 0; j < i; j++) {
//             str += "* ";
//         }    
//         console.log(str);
//     }
// }

// pattern3(5);



//Assignment 5 - Stars Pattern

// function pattern5(n){
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         for (let j = i; j >= 0; j--) {
//             str += "* ";
//         }
//         console.log(str);
//     }
//     for (let i = (n - 1); i > 0; i--) {
//         let str = "";
//         for (let j = 0; j < i; j++) {
//             str += "* ";
//         }    
//         console.log(str);
//     }
// }

// pattern5(5);


//Assignment 4 - Stars Pattern 

// function pattern4a(n){
//     for (let i = 0; i < n; i++) {
//         let num = 0;
//         for (let j = i; j >= 0 ; j--) {
//             num += 1;
//             process.stdout.write(num + " ");
//         }
//         console.log();
//     }
// }

// pattern4a(5);


// Another alternative for Assignment 4 - Stars Pattern

// function pattern4b(n){
//     for (let i = 0; i < n; i++) {
//         let num = 0;
//         let result = "";
//         for (let j = i; j >= 0 ; j--) {
//             num += 1;
//             result +=  (num + " ");
//         }
//         console.log(result);
//     }
// }

// pattern4b(5);



// Assignment 6 - Stars Pattern

// function pattern6(n){
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         let result = "";
//         for (let j = (n - 1) - i; j > 0; j--) {
//             str += "  ";
//         }
//         for (let k = i; k >= 0; k--) {
//             result += "* ";
//         }
//         console.log(str + result);
//     }
// }

// pattern6(5);



// Assignment 7 - Stars Pattern

// function pattern7(n){
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         let result = "";
//         for (let j = i - 1; j >= 0; j--) {
//             str += "  ";
//         }
//         for (let k = (n - 1) - i; k >= 0; k--) {
//             result += "* ";
//         }
//         console.log(str + result);
//     }
// }

// pattern7(5);



// Assignment 8 - Stars Pattern

// function pattern8(n){
//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         let result = "";
//         let rest = "";
//         for (let j = n - i; j > 0; j--) {
//             str += "  ";
//         }
//         for (let k = i; k > 0; k--) {
//             result += "* ";
//         }
//         for (let l = i - 1; l > 0; l--) {
//             rest += "* ";
//         }
//         console.log(str + result + rest);
//     }
// }

// pattern8(5);



// Assignment 9 - Stars Pattern

// function pattern9(n){
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         let result = "";
//         let rest = "";
//         for (let j = i - 1; j >= 0; j--) {
//             str += "  ";        
//         }
//         for (let k = (n - 1) - i; k >= 0; k--) {
//             result += "* ";        
//         }
//         for (let l = (n - 1) - i; l > 0; l--) {
//             rest += "* ";        
//         }
//         console.log(str + result + rest);
//     }
    
// }

// pattern9(5);



// Assignment 10 - Stars pattern

// function pattern10(n){
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         let result = "";
//         for (let j = (n - 1) - i; j > 0; j--) {
//             str += " ";
//         }
//         for (let k = i; k >= 0; k--) {
//             result += "* ";            
//         }
//         console.log(str + result);
//     }
// }

// pattern10(5);


// Assignment 11 - Stars pattern

// function pattern11(n){
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         let result = "";
//         for (let j = i; j > 0; j--) {
//             str += " ";
//         }
//         for (let k = (n - 1) - i; k >= 0; k--) {
//             result += "* ";           
//         }
//         console.log(str + result);
//     }
// }

// pattern11(5);




// Assignment 12 - Stars pattern

// function pattern12(n){
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         let result = "";
//         for (let j = i; j > 0; j--) {
//             str += " ";            
//         }
//         for (let k = (n - 1) - i; k >= 0; k--) {
//             result += "* ";            
//         }
//         console.log(str + result);
//     }
//     for (let l = 1; l <= n; l++) {
//         let a = "";
//         let b = "";
//         for (let m = (n - 1) - l; m >= 0; m--) {
//             a += " ";            
//         }
//         for (let p = l; p > 0; p--) {
//             b += "* ";            
//         }
//         console.log(a + b);
//     }
// }

// pattern12(5);



// Assignment 13 - Stars pattern

// function pattern13(n){
//     let remain_star = "";
//     for(let i = 0; i < (n - 1); i++){ 
//         let str = "";
//         let result = "";
//         let rest = "";
//         let star = "*";
//         for(let j = (n - 1) - i; j > 0; j--){
//             str += " ";
//         }
//         for (let k = i - 1; k >= 0; k--) {
//             result += " ";            
//         }
//         for (let l = i - 2; l >= 0; l--) {
//             result += " ";            
//         }
//         for (let m = i; m > 0; m *= 0) {
//             rest += "*";            
//         }
//         console.log(str + star + result + rest);
//     }
//     for (let x = n + (n - 1); x > 0; x--) {
//         remain_star += "*";            
//     }
//     console.log(remain_star);
// }
// pattern13(5);



// Assignment 14 - Stars pattern

// function pattern14(n){
//     let star1 = "";
//     for (let x = n + (n - 1); x > 0; x--) {
//         star1 += "*";        
//     }
//     console.log(star1);
//     for (let i = 0; i < (n - 1); i++) {
//         let str = "";
//         let star2 = "";
//         let result = "";
//         let result1 = "";
//         let star3 = "";
//         for (let j = i; j >= 0; j--) {
//             str += " ";            
//         }
//         for (let k = 1; k > 0; k *= 0) {
//             star2 += "*";            
//         }
//         for (let l = (n - 2) - i; l > 0; l--) {
//             result += " ";            
//         }
//         for (let l = (n - 3) - i; l > 0; l--) {
//             result1 += " ";            
//         }
//         for (let k = (n - 2) - i; k > 0; k *= 0) {
//             star3 += "*";            
//         }
//         console.log(str + star2 + result + result1 + star3); 
//     }
// }

// pattern14(5);



// Assignment 15 - Stars pattern

// function pattern15(n){
//     let firstHalf = Math.round(n/2);
//     let secondHalf = n - firstHalf;
//     for (let i = 0; i < firstHalf; i++) {
//         let str = "";
//         let result = "";
//         let rest = "";
//         let rest1 = "";
//         let result1 = "";
//         for (let j = (firstHalf - 1) - i; j > 0; j--) {
//             str += " ";            
//         }
//         for (let k = 1; k > 0; k *= 0) {
//             result += "*";         
//         }
//         for (let j = i; j > 0; j--) {
//             rest += " ";            
//         }
//         for (let j = i - 1; j > 0; j--) {
//             rest1 += " ";            
//         }
//         for (let k = i; k > 0; k *= 0) {
//             result1 += "*";         
//         }
//         console.log(str + result + rest + rest1 + result1);                   
//     }
//     for (let i = 1; i <= secondHalf; i++) {
//         let str = "";
//         let result = "";
//         let rest = "";
//         let rest1 = "";
//         let result1 = "";
//         for (let j = i - 1; j >= 0; j--) {
//             str += " ";            
//         }
//         for (let k = 1; k > 0; k *= 0) {
//             result += "*";         
//         }
//         for (let j = secondHalf - i; j > 0; j--) {
//             rest += " ";            
//         }
//         for (let j = (secondHalf - i) - 1; j > 0; j--) {
//             rest1 += " ";            
//         }
//         for (let k = secondHalf - i; k > 0; k *= 0) {
//             result1 += "*";         
//         }
//         console.log(str + result + rest + rest1 + result1);                   
//     }
// }

// pattern15(5);



// Assignment 16 - Stars pattern

function patter16(n){
    let str = "";
    let result = "";
    for (let i = 0; i < n; i++) {
        str += " ";        
    }
    //for loop for tge pascal numbers
    for (let j = 0; j < n; j++) {
        result = "*";        
    }
    console.log(str + result);
}

pattern16(5);