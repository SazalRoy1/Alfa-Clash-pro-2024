

function play(){
    // step-1  hide the home screen. 
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // show the play ground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden')
    // console.log(playgroundSection.classList)

    continueGame()

}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random() * 25
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    return alphabet
}

 
// function getRandomAlphabet(){
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);
    
//     // get a  random index between 0 -25
//     const randomNumber = Math.random() * 25
//    const index = Math.round(randomNumber)
// //    console.log(index)

//    const alphabet = alphabets[index]
// //    console.log(index, alphabet)
//    return alphabet

// }


function continueGame(){
    // step-1: genrate a random alphabet
   const alphabet = getRandomAlphabet()
   console.log( 'Your random alphabet', alphabet)


   //set randoom  randomly generated to the screen
   const currentAlphabetElement = document.getElementById('current-alphabet')
   currentAlphabetElement.innerText = alphabet
   setBackGroundColorByID(alphabet)
}


function setBackGroundColorByID(element){
    const elemnt = document.getElementById(element)
    elemnt.classList.add('bg-orange-400');
}