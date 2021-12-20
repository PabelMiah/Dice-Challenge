
var x = Math.floor(Math.random()*6 +1);
var y = Math.floor(Math.random()*6 +1);

function dice1(){
  if ( x === 1 ){
    document.querySelector(".img1").setAttribute("src" , src="images/dice1.png")
  }
  else if ( x === 2 ){
    document.querySelector(".img1").setAttribute("src" , src="images/dice2.png")
  }
  else if (x === 3){
    document.querySelector(".img1").setAttribute("src" , src="images/dice3.png")
  }
  else if (x === 4){
    document.querySelector(".img1").setAttribute("src" , src="images/dice4.png")
  }
  else if (x === 5){
    document.querySelector(".img1").setAttribute("src" , src="images/dice5.png")
  }
  else if (x === 6){
    document.querySelector(".img1").setAttribute("src" , src="images/dice6.png")
  }
  else{
    alert("Something went wrong in dice 1");
}

}

function dice2(){
  if ( y === 1 ){
    document.querySelector(".img2").setAttribute("src" , src="images/dice1.png")
  }
  else if ( y === 2 ){
    document.querySelector(".img2").setAttribute("src" , src="images/dice2.png")
  }
  else if (y === 3){
    document.querySelector(".img2").setAttribute("src" , src="images/dice3.png")
  }
  else if (y === 4){
    document.querySelector(".img2").setAttribute("src" , src="images/dice4.png")
  }
  else if (y === 5){
    document.querySelector(".img2").setAttribute("src" , src="images/dice5.png")
  }
  else if (y === 6){
    document.querySelector(".img2").setAttribute("src" , src="images/dice6.png")
  }
  else{
    alert("Something went wrong in dice 2");
}

}

function result(){
  if ( x === y ){
    document.querySelector("h1").textContent="Draw!";
  }
  else if ( x > y ){
    document.querySelector("h1").textContent="Player 1 wins!";
  }
  else if ( x<y ){
    document.querySelector("h1").textContent="Player 2 wins!";
  }
  else{
      alert("Something went wrong");
  }
}

dice1();
dice2();
result();