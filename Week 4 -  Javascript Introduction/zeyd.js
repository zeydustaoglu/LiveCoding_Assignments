// 1. Create a function that accepts one argument (seconds) and converts it into minutes and seconds and returns back.

function minuteAndSecond(time){
    var minute=Math.floor(time/60)
    var second=time%60

    if (minute<1 && second>0){
        return console.log(second+" seconds")
    }
    else{
        if(minute>1 && second>0){
            return console.log(minute+" minutes "+second+" seconds")
        }        
        if(second===0){
            return console.log(minute+" seconds")
        }
    }
};

minuteAndSecond(550)

// 2. Print the written number with prefix
// Create a function that accepts one argument (number) and returns it as a string with 'Number is: " prefix.


function NumberIs(number){
    return console.log("Number is : "+number)
}
NumberIs(22)

// 3. Remove the 2nd string from the 1th string
// Create a function that accepts two arguments(firstString, secondString) and removes the second string from the first string.

function RemoveString(firstString,secondString){
    var str = firstString.replace(secondString,".....") 
    return console.log(str)
}
RemoveString("Hello everyone, my name is Zeyd","Zeyd")


// 4. Replace the 2nd string with the 3rd string
// Create a function that accepts two arguments(firstString, secondString, thirdString) and replaces the 2nd string with the 3rd one in the 1th string.


function RemoveString(firstString,secondString,thirdString){
    var str = firstString.replace(secondString,thirdString) 
    return console.log(str)
}
RemoveString("Hello everyone, my name is Zeyd","Zeyd","Mike")

// 5. Return the closest bigger even number of the given number
// Create a function that accepts one argument(number) and returns the closest bigger even number of given number.

function biggerEvenNumber(number){
    if (number%2===0){
        return console.log(number+=2)
    }
    else{
        return console.log(number+=1)
    }
}
biggerEvenNumber(78)

// 6. Create a simple calculator function
// Create a function that accepts three arguments(number1, number2, theMathOperator) and 
// does a calculation based on the given math operator* and returns the result.

function calculate(num1,num2,operator){
    if (operator==="+"){
        return num1+num2;
    }
    if(operator==="-"){
        return num1-num2;
    }
    if(operator==="*"){
        return num1*num2;
    }
    if(operator==="/"){
        return num1/num2;
    }
}

var result=calculate(60,5,"-")
console.log(result)
