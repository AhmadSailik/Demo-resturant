alert('Welcome in our Restaurant');
//var userName = prompt('What is your name?');
//document.write('<h2>' + userName + '</h2>');
//var favFood = prompt('What is your favorite food?','mansaf,magluba');
//document.write('<h2>' + favFood + '</h2>');
/*
if(favFood === 'mansaf'){
    document.write('<h3>' + favFood + '</h3>');
    document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbqnTgomqjjwxu_rK4vuSs-vlPQvA5pbd2A&usqp=CAU" />')
}else if(favFood==='magluba'){
    document.write('<h3>' + favFood + '</h3>');
    document.write('<img src="https://theodehlicious.com/wp-content/uploads/2020/06/Chicken-Maqluba-Recipe-1024x768.jpg" />');
}else{
    alert('Enjoy in our restaurant')
}
*/
var favDash = prompt('What is favourite dash?','mansaf , magluba');
while(favDash !== 'mansaf' && favDash !== 'magluba');{
    favDash = prompt('Pleas enter on of the following mansaf or magluba.');
}
var dashNum = prompt('How many mansaf or magluba would you like to see?');
var image =''
for(var i = 1 ; i <=dashNum; i++ ){
    if(favDash === 'mansaf'){
    image =image +'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbqnTgomqjjwxu_rK4vuSs-vlPQvA5pbd2A&usqp=CAU" />';
    }else if(favDash==='magluba'){
    image =image +'<img src="https://theodehlicious.com/wp-content/uploads/2020/06/Chicken-Maqluba-Recipe-1024x768.jpg" />';
    }
}
document.write(image);

