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

// pattern8(5)



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



Assignment 10 Stars O