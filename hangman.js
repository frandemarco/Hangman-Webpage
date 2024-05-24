var word ="";
var guesses="";
var MAX_GUESSES=6;
var guessCount;
var win=true;
window.onload=function(){
    var guessButton = document.getElementById("guessButton");
    guessButton.disabled = true;
}
function newGame(){
    var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate","obseqeuious", "dissonant", "toady", "idempotent"];
    var randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses="";
    guessCount=MAX_GUESSES;
    var guessButton = document.getElementById("guessButton");
    guessButton.disabled = false;
    updatePage();
}
function guessLetter(){
    if(guessCount>0 && word.length>0){
        var input = document.getElementById("guess");
        var letter = input.value;
        if(guesses.indexOf(letter)<0)
        {
            guesses+=letter;
        if(word.indexOf(letter)<0){
            guessCount--;
        }
        input.value="";
        updatePage();
    }
}
}
function updatePage(){
    var clueString="";
    for(var i=0; i<word.length;i++){
        var currentLetter=word.charAt(i);
        if(guesses.indexOf(currentLetter)>=0){
            clueString+=currentLetter+" ";
        }else{ 
            clueString+="_ ";
        }
       
    }
    if(guessCount==0){
        guessButton.disabled=true;
        clueString="You Lost"
    }else if(clueString.indexOf("_")<0){
        guessButton.disabled=true;
        clueString="You Win";
    }
    var picture=document.getElementById("hangmanpic");
    picture.src="images/hangman"+guessCount+".gif";
    var clue=document.getElementById("clue");
    clue.innerHTML=clueString;
    var guessArea=document.getElementById("guesses");
    guessArea.innerHTML="Guesses: "+guesses+" ";
}
