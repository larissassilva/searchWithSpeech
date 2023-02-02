var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 
var Content ="";

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      
        speak();
      
}


function speak(){
    var synth = window.speechSynthesis;

    var fala = "Fazendo sua pesquisa por " + Content;

    speak_data =  fala;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    

    setTimeout(function()
    { 
        var pesquisa = 'https://www.google.com/search?q='+Content;
        window.open(pesquisa);
    }, 2000);
}

 
