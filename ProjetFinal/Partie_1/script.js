function myFunction()
{
    var lampe = document.getElementById("leteint")
    var myAudio = document.getElementById("switch")

    if (lampe.src.indexOf("image/allume.png")==-1){
        lampe.src="image/allume.png";
        myAudio.play();
    }
    else{
        lampe.src="image/eteindre.png";
        myAudio.play();    
    }
}