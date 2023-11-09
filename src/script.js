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

let a;
let b;
let c;
let area;

document.getElementById("submitbtn").onclick = function(){
  a = document.getElementById('inputA').value
  b = document.getElementById('inputB').value
  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)).toFixed(2);
  area = a*b/2;

 document.getElementById('LabelC').innerHTML = "Side C: "+ c;
 document.getElementById('Area').innerHTML = "Area: "+ area;
}    
}

