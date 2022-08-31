
var p1 = Math.floor(Math.random()*6)+1;
var p2 = Math.floor(Math.random()*6)+1;




    if          (p1>p2){
        document.querySelector(".container").querySelector("h1").innerHTML = "🎉 Player 1 wins!";
}   else if     (p1<p2){
        document.querySelector(".container").querySelector("h1").innerHTML = "Player 2 wins! 🎊";
}   else        {
        document.querySelector(".container").querySelector("h1").innerHTML = "Its a draw 🤷‍♂️";   
}



if          (p1 === 1){
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}   else if (p1 === 2){
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}   else if (p1 === 3){
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}   else if (p1 === 4){
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}   else if (p1 === 5){
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}   else if (p1 === 6){
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}



if          (p2 === 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}   else if (p2 === 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}   else if (p2 === 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}   else if (p2 === 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}   else if (p2 === 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}   else if (p2 === 6){
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

console.log("Player one got " + p1)
console.log("Player one got " + p2)