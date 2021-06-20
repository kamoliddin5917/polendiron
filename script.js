var polendiron = [];

var kirgizElement = document.querySelector(".input");
var answer = document.querySelector(".input__answer");
var button = document.querySelector(".btn");

button.addEventListener("click", function(){
  polendiron.shift()
  var kirgizElementValue = String(kirgizElement.value);
  
  var kirgiz = kirgizElementValue;
  
  var bolelash = kirgiz.split("");
  polendiron.push(bolelash.reverse());
  var aylanganNatija = polendiron[0].join('');
  if (aylanganNatija === kirgiz) {
    // console.log('polendiron');
    answer.value = "Polendiron"
  }else{
    // console.log('emas');
    answer.value = "Afsus polendiron emasakan"
  }
})

