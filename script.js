let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice= document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12) {
        speak("Good Morning Sir")
    }
    else if(hours >=12 && hours <16){
        speak("Good afternoon Sir")
}else{
    speak("  Good Evening Sir    ")    // here you can write anything  like 
}
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
     let currentIndex=event.resultIndex
     let transcript=event.results[currentIndex][0].transcript
     content.innerText=transcript
     takeCommand(transcript.tolwerCase())

texCommand(transcript)
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
if(message.includes("hello")||message.includes("hey")){
    speak("hello sir,what can i help you?")
}
else if (message.includes("Who are you")){
    speak("i am virtual assistant , created by Samir Sir")
}
else if (message.includes("Open youtube")){   //youtube
    speak("opening youtube...")
    window.open("https://www.youtube.com/","_blank")
}
else if (message.includes("Open facebook")){  // facebook
    speak("opening facebook...")
    window.open("https://www.facebook.com/","_blank")
}
else if (message.includes("Open google")){    //google
    speak("opening google...")
    window.open("https://www.google.com/","_blank")
}
else if (message.includes("Open instagram")){    //instagram
    speak("opening instagram...")
    window.open("https://www.instagram.com/","_blank")
}
}