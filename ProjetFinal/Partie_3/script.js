function myFunction()
{
    var aleatoir= Math.floor(Math.random() * 100) + 1;  
    var num = parseInt($('#num').val());

    if (num == aleatoir) {
        alert('Bravo! Vous avez deviné le nombre correctement!');
    } else if (num < aleatoir) {
        alert('Le nombre est trop petit. Essayez encore!');
    } else {
        alert('Le nombre est trop grand. Essayez encore!');
    }
}