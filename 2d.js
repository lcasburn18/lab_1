const ages = [25, 31, 42, 77]; // items in array

let a = ages.map( //Assign Arrow Function to Variable with Arguments
    (item) => {
        if (item < 70) //Checking if a number is under 70
            return item * 2; //Multiply number by 2 if its under 70
        else
            return item; //Returns number
    }
);

console.log(a); //Prints out array