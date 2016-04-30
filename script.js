//
//
// sentenceArray.forEach(function(item){
//   if (item === "excuse"){
//     item = excuse
//   } else if (item === "excuse1"){
//     item = excuse1
//   }
// })

//random geneorator

function random(array){
  var index = Math.floor(Math.random() * array.length)
  console.log(index)
  return array[index]

}

function makeSentence(){
  var sentence = random(sentences)
  var obj = {}
  obj.excuse = random(excuse)
  obj.excuse1 = random(excuse1)

  var newSentence = sentence.map(function(item){
    if (item in obj){
      return obj[item]
    } else{
      return item
    }
  })

  var finalSentenceArray = newSentence.join("").split(" ");
  var finalSentence = finalSentenceArray.map(function(item, i){
    if (i === 0){
      var itemArr = item.split("")
      itemArr[0] = itemArr[0].toUpperCase();
      return itemArr.join("")
    }else{
      return item.toLowerCase();
    }
  }).join(" ")
  console.log(finalSentence)
  document.querySelector('.excuse').innerHTML = finalSentence;

}

makeSentence();
