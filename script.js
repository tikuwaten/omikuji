function getRandomImage() {
  const number = 
  Math.floor(Math.random() * 7);//5.45だった場合5
  const ImagePath = 
  "./images/omikuzi-moderu_" + number.toString() + ".png";
  return ImagePath;
}

function playOmikuji() {
  const slotAnimationTimer = setInterval(function () {

    document.querySelector("#js-result").setAttribute("src",getRandomImage());
  }, 100);

  
  setTimeout(function() {
     
    clearInterval(slotAnimationTimer);
  },3000);
  }

  document.querySelector("#js-button").addEventListener("click",playOmikuji);


