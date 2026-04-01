/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 
let images =["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg","clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"]
//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [$4.00, $15.99, $10.99, $17.50];
let meat_titles = ["beeftips","brisket","ribeye","steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg"];
let seafood_prices = [$4.50, $20.00, $40.00, $16.80, $6.90, $1.50];
let seafood_titles = ["clams", "crabs", "lobster", "scallops", "shrimp","tuna"];

let dessert_images = ["flan.jpg", "passionberry.jpeg", "oreocup.jpg"];
let dessert_prices = [$2.50, $5.70, $1.00];
let dessert_titles = ["flan", "passionberry", "oreocup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;
  for (let x=0; x< meat_images.length; x++){
    
  }
  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
build += `<div.class ="container">
              <img src ="${images[x]}">
              <p>"${meat_prices[i]}"</p>
              </div>`;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
build += `<div.class ="container">
              <img src ="${images[x]}">
              <p>"${meat_prices[i]}"</p>
              </div>`;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.

}
