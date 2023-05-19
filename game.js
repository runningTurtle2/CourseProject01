let randNum = 0
document.addEventListener("DOMContentLoaded", function () {
   randNum = parseInt(Math.random()* (11 - 1) + 1) // provide number 1-10
   console.log(randNum);
   
});