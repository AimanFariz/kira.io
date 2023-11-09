window.onload  = function(){

    //word and character count
    const input = document.getElementById("insert")
    const charOutput = document.getElementById("char")
    const wordsOutput = document.getElementById("words")

    const inputContent = input.value
    input.addEventListener("input", function () {
        // Get the text content from the <textarea>
        const text = input.value;
    
        // Split the text into words (split by whitespace)
        const words = text.split(/\s+/).filter(word => word.trim() !== "");
    
        // Update the word count display
        wordsOutput.textContent = words.length;

        var char = 0;
        for(var i = 0;i<text.length;i++){
            char++;
        }
        charOutput.innerHTML = char
    });

    //push counter
    let count = 0;
    document.getElementById('decreasebtn').onclick=function(){
        count -=1;
        document.getElementById('countLabel').innerHTML = count;
      }
      
      document.getElementById('resetbtn').onclick=function(){
        count = 0;
        document.getElementById('countLabel').innerHTML = count;
      }
      
      document.getElementById('increasebtn').onclick = function(){
        count +=1;
        document.getElementById('countLabel').innerHTML = count;
      }
    
    //Pythagorean Theorem
document.getElementById("submitbtn").onclick = function(){
  let a;
let b;
let c;
let area;
  a = document.getElementById('inputA').value
  b = document.getElementById('inputB').value
  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)).toFixed(2);
  area = a*b/2;

 document.getElementById('LabelC').innerHTML = "Side C: "+ c;
 document.getElementById('Area').innerHTML = "Area: "+ area;
}    
// Date Calculator
document.getElementById('compare-date').onclick=function() {
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    alert("Please select valid dates");
    return;
  }

  var difference = endDate - startDate;
  var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      var months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      var days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);

      var resultMessage = "Difference: ";
      if (years > 0) resultMessage += years + " years, ";
      if (months > 0) resultMessage += months + " months, ";
      if (days > 0) resultMessage += days + " days, ";
      if (hours > 0) resultMessage += hours + " hours, ";
      if (minutes > 0) resultMessage += minutes + " minutes, ";
      if (seconds > 0) resultMessage += seconds + " seconds";

  document.getElementById("result").innerText = resultMessage;
}
// 1D Array Calculator
document.getElementById('evaluate-1d-arr').onclick=function(){
  var arrayInput = document.getElementById('1d-arr-in').value
  var numbersArray = arrayInput.split(/[ ,]+/)
  var sum = 0
  var average = 0
  var count = 0
  max = numbersArray[0]
  min = numbersArray[0]
  for (var i = 0; i < numbersArray.length; i++) {
    var number = parseFloat(numbersArray[i]);

    if (!isNaN(number)) {
      sum+=number
      count++
      if(number>max){
        max = number
      }
      if(number<min){
        min = number
      }
    } else {
      console.log('Error');
    }
    average = (sum/count).toFixed(4)
    document.getElementById('out-sum').innerText = sum;
    document.getElementById('out-avg').innerText = average;
    document.getElementById('out-min').innerText = min;
    document.getElementById('out-max').innerText = max;
    
  }
  var frequencyMap = {};
      var maxFrequency = 0;
      var modes = [];

      numbersArray.forEach(function (number) {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1;
        if (frequencyMap[number] > maxFrequency) {
          maxFrequency = frequencyMap[number];
          modes = [number];
        } else if (frequencyMap[number] === maxFrequency && modes.indexOf(number) === -1) {
          modes.push(number);
        }
      });

      if (modes.length === 1) {
        document.getElementById("out-mod").innerText = modes[0];
      } else if (modes.length > 1) {
        document.getElementById("out-mod").innerText = modes.join(", ");
      } else {
        document.getElementById("out-mod").innerText = "No mode found.";
      }
}
}


