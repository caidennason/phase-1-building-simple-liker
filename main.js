// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

 // likes = document.getElementsByClassName('like-glyph')
  //for (let like of likes){
  //  like.addEventListener('click', function(){
  //    mimicServerCall(){
  //      like.innerHTML = FULL_HEART
  //    like.addEventListener('click', function(){
  //      like.innerHTML = EMPTY_HEART
  //    })
 //   }
//}
 // } 

let likes = document.getElementsByClassName('like-glyph')
for (let like of likes){
  like.addEventListener('click', function(){
    mimicServerCall()
    .then(res => console.log(res))

  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
