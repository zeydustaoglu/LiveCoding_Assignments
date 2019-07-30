// 1. Write a function that takes an array returns highest number of the array

function highestNumber(list) {
    let highest = 0
    for (var i = 0; i < list.length; i++) {
      if (list[i] > highest) {
        highest = list[i];
      }
    }
    return console.log("Highest Number is  "+ highest)
  }
  highestNumber([1, 5, 7, 88, 4, 25])  

  
  //  2. Write a function that takes an and retruns a nmuber of words. ('words leave after space')  
  
  function countWords(str) {
  
    let arr = str.split(' ')
    return console.log("Number of words: "+String(arr.length))
  
  }
  countWords("Hi zeyd, how are you?")
  
  
  // 3. write a function that takes 2 elements one is a letter the other is an array.
  //    first convert to array to a string. return numbers of the letters inside the string  
  
  function countLetters(letter, arr) {
    count = 0
    for (var i = 0; i < arr.length; i++) {
  
      for (var j = 0; j < arr[i].length; j++) {
  
        if (letter.toLowerCase() === arr[i][j].toLowerCase()) {
          count++
        }
      }
    }
    return console.log("Number of letters: "+String(count))
  }
  countLetters('h', "Hi zeyd, how are you?")

