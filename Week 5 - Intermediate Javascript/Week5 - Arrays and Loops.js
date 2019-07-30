// 1. Given a string of characters as input, write a function that returns it 
//    with the characters reversed. Don't use reverse function, use loops.

//    Example input: reverseText(Hello World!)
//    Example output: "!dlroW olleH"

function reverseText(str){
    newStr=[]
    for (x = str.length-1; x >= 0; x--) {
    newStr.push(str[x]);    
    } 
    return console.log(newStr.join(''))
}
reverseText("Hello Zeyd!")

// 2. Example input: isPalindrome('kayak')
//    Example output: true

function isPalindrome(str){         

    newStr=[]
    for (x = str.length-1; x >= 0; x--) {
    newStr.push(str[x]);       
    }
    var str2=(newStr.join(''))
    if(str2===str ){
        return console.log(true)
    }
    return console.log(false)    
}
isPalindrome("kayak")  

// 3. Example input: fizzBuzz(11)
//    Example output: [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11]


function fizzbuzz(number){
    x=1
    arr=[]
    while(x<=number){
    
        if(x%2===0 && x%3===0){
            arr.push("FIZZBUZZ")
        }
        else if(x%2===0){
            arr.push('FIZZ')
        }
        else if(x%3===0){
            arr.push('BUZZ')
        }
        else{
            arr.push(x)
        }
        x++        
    }
    return console.log(arr)
}
fizzbuzz(10)

// 4. Example input: reverseArray([22, 'hi', 12])
//    Example output: [12, 'hi', 22]

arr=['zeyd',1905,'hi']
newArr=[]

for (x = arr.length-1; x >= 0; x--) {
newArr.push(arr[x]);    
} 
console.log(newArr)

// 5. Example input: reverseWords('I love JavaScript!')
//    Example output: 'I evol !tpircSavaJ'

function reverseWords(str){
    
    let words=str.split(' ');
    console.log(words)
    
    for(i=0;i<words.length;i++){
        
        let selectedWord=words[i]
        temp=""
        for (let j = selectedWord.length-1; j >= 0; j--) {
         
           temp=temp+selectedWord[j]           
        }   
        console.log(temp)               
    }            
}
reverseWords('Hi Zeyd how are you?')


// 6. Example input: capitalizeWords('i love javaScript!')
//    Example output: 'I Love JavaScript!


function capitalizeWords(str){
    
    let words=str.split(' ');
    console.log(words)
    
    for(i=0; i<words.length; i++){
        
        let selectedWord=words[i]
        newWord=""
        for (j = 0; j <selectedWord.length; j++) {         
            if(j===0){
                newWord= newWord+selectedWord[j].toUpperCase() 
            }        
            else{
                newWord= newWord+selectedWord[j]
            }
        }   
        console.log(newWord)               
    }            
}
capitalizeWords('i love amsterdam')


// 7. Example input: subctractArray([1, 2, 4, 6], [2, 6])
//    Example output: [1, 4]

function subctractArray(arr1, arr2) {

  for (let i = 0; i < arr2.length; i++) {

    let index = arr1.indexOf(arr2[i]);
    if (index != -1) {
      arr1.splice(index, 1);
      console.log(i+1 +". islem: "+arr2[i] +" listeden cikartildi")

    } else {
      console.log(i+1 +". islem: "+arr2[i] +" listede yok, cikartilamadi")
    }
  }
  return console.log(arr1)
}
subctractArray([1, 2, 4, 6, 8, 9], [1, 2, 10, 11, 4, 6])


