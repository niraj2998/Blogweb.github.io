// if we add parenthesis to function in here so as the page will be loaded, without click, function will be called and
//  and alert will be displayed so instead of calling function we are giving it refrence so that after the click event it 
// should be called.passing a function as input so that it can be called at later time
// in add eventlistener there are two parameters that is event like "click" and secong is function ehich can be anonymous of function passing

// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("i got clicked");
// }

// anonymous function using arrow function
// so as we have to add function to every worrd we can add the class or id of that division or section or using for loop
// document.querySelector(".set").addEventListener("click", () =>{
//     alert("i got clicked")
// });

// for loop
// for(let i = 0; i < document.querySelectorAll(".drum").length ; )
// let numberOfDrumButton = document.querySelectorAll(".drum").length;
// for( var i = 0; i < numberOfDrumButton; i++ );{

// here document.querySelectorAll("drum") brings all the elements that consist of class drum next is we loop through all the elements starting
// Now the next thing we do is we loop through all of those elements starting from when i is equal to zero,

// and we add an event listener to it. And the next time we loop through, then the i becomes 1,

// and now we add the event listener to the second button.
// So essentially our code will go through all of the buttons in turn, selecting them and adding the event listener,

// until we've gotten to the end of all of our buttons.

// So now that all of our buttons have an event listener attached to it,

// what happens when we click on the first button? Then that button's event listener will trigger the function

// that was attached to the event listener.
// So essentially our code will go through all of the buttons in turn, selecting them and adding the event
// document.querySelectorAll("drum")[i].addEventListener("click",function () {
//     alert("i got clicked"); 
// });
// }

// for creating audio in js you have to create a object and derive the property of audio object in call it with play method 
// let audio = new Audio('audio_file.mp3');
// audio.play()

// javascript objects
// this.style.color = "white";

var drumButtonElement = document.querySelectorAll(".drum");
for (let i = 0; i < drumButtonElement.length; i++) {
    var drumButton = drumButtonElement[i];
    drumButton.addEventListener('click', function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml); 
        buttonAnimation(buttonInnerHtml);
    })
}

// keyboard events kypress is depricated so try to use keydown
// Event Object
// All event objects in the DOM are based on the Event Object.

// Therefore, all other event objects (like MouseEvent and KeyboardEvent) has access to the Event Object's properties and methods.

// https://javascript.info/keyboard-events#event-code-and-event-key 
// paste this site to know more about keydown and keyup 
// The key property of the event object allows to get the character, while the code property of the event object allows to get the “physical key code”.

// For instance, the same key Z can be pressed with or without Shift. That gives us two different characters: lowercase z and uppercase Z.

// The event.key is exactly the character, and it will be different. But event.code is the same:

// Key	              event.key	                event.code
//  Z	            z (lowercase)	              KeyZ
//  Shift+Z      	Z (uppercase)	              KeyZ

// If a user works with different languages, then switching to another language would make a totally different character instead of "Z". That will become the value of event.key, while event.code is always the same: "KeyZ".

// The key property returns the identifier of the key that was pressed when a key event occured.

// Key identifiers are strings that identify keyboard buttons. The return value of this property can be a string of:

// A single character (like "a", "W", "4", "+" or "$")
// A multicharacter (like "F1", "Enter", "HOME" or "CAPS LOCK")
// Note: This property is read-only.

// Tip: If you want to find out whether the "ALT", "CTRL", "META" or "SHIFT" key was pressed when a key event occured, use the altKey, ctrlKey, metaKey or shiftKey property.



document.addEventListener("keydown",function (event) {
    makeSound(event.key)
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d": 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            
    }
}

function buttonAnimation(currentKey){

 let activeButton =   document.querySelector("." + currentKey)
 activeButton.classList.add("pressed");
 
 setTimeout(function(){
     activeButton.classList.remove("pressed")
 },100)
}

