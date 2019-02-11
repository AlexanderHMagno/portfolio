

$(function() {

/* Creating the spaceship*/

class Spaceship {
    constructor(name,kingdom,crew,battlePower,Energy,positionX,positionY) {
        this.name = name;
        this.kingdom = kingdom;
        this.crew = crew;
        this.battlePower = battlePower;
        this.Energy = Energy;
        this.positionX = positionX;
        this.positionY = positionY;
    }
   
  }

/*Creating the planets*/
class Planet {
    constructor(name,kingdom,crew,battlePower,composition,positionX,positionY) {
        this.name = name;
        this.kingdom = kingdom;
        this.crew = crew;
        this.battlePower = battlePower;
        this.composition = composition;
        this.positionX = positionX;
        this.positionY = positionY;
    }
   
  }
  
  





  let ships = {};
  let planets ={};
 
  for(let i = 0;i<600; i++){

    

    let position_height = Math.random()*100; //Allocation Y
    let position_width = Math.random()*99;//AllocationX
    let empire_choosen = Object.keys(kingdoms)[Math.ceil(Math.random()*(Object.keys(kingdoms).length)-1)];//Empire Info
    

    //battleship
    let crew = 1+Math.ceil(Math.random()*20);
    let battlePower = 10+Math.ceil(Math.random()*90);
    let EnergyBattle = 100+Math.ceil(Math.random()*100);
    


    //planets
    let Inhabitent = 10000+Math.ceil(Math.random()*20000000);
    let Army = Math.ceil(Inhabitent*0.01);
    let planetlogo = Math.ceil(Math.random()*planetas.length-1);

    
    if(i%2==0){

        //creates a planet
       planets[empire_choosen+i] = new Planet('Planet '+i,empire_choosen,Inhabitent,Army,'Earth',position_width,position_height);
       $('.battleship').append(`<div rel="${empire_choosen+i}" class="ships planet ${empire_choosen} select-planet" style="top:${position_height}%; left:${position_width}%;">${planetas[planetlogo]}</div>`);

        
    }else{
         
        //creates a ship
    ships[empire_choosen+i] = new Spaceship('Ship '+i,empire_choosen,crew, battlePower,EnergyBattle,position_width,position_height);
    $('.battleship').append(`<div rel="${empire_choosen+i}" class="ships ship select-ship ${empire_choosen}" style="top:${position_height}%; color:${(kingdoms[empire_choosen].color)}; left:${position_width}%; animation: raining;">${(kingdoms[empire_choosen].ship)}</i></div>`)
    }
    
} // end for




//When the user hovers any ship

$('.select-ship').hover(function(){
    let information = $(this)[0].attributes[0].nodeValue;
    console.log(ships[information]);
    $('.box-info').css({'display':'block', 'top': ships[information].positionY+1+'%','left':ships[information].positionX+1+'%'})
    $('.box-info-title').html(`<h4><span>Name: </span>${ships[information].name}</h4>`);
    $('.box-info-resumen').html(`<h6><span>Kingdom: </span>${ships[information].kingdom}</h6> <h6><span>Crew: </span>${ships[information].crew}</h6> <h6><span>Battle Power: </span>${ships[information].battlePower}</h6><h6><span>PositionX: </span>${ships[information].positionX}</h6><h6><span>PositionY: </span>${ships[information].positionY}</h6>`)
})


//When the user hovers any Planet

$('.select-planet').hover(function(){
    let information = $(this)[0].attributes[0].nodeValue;
    console.log(planets[information]);
    $('.box-info').css({'display':'block', 'top': planets[information].positionY+1+'%','left':planets[information].positionX+1+'%'})
    $('.box-info-title').html(`<h4><span>Name: </span>${planets[information].name}</h4>`);
    $('.box-info-resumen').html(`<h6><span>Kingdom: </span>${planets[information].kingdom}</h6> <h6><span>Inhabitents: </span>${planets[information].crew}</h6> <h6><span>Combat Army: </span>${planets[information].battlePower}</h6><h6><span>Composition: </span>${planets[information].composition}</h6><h6><span>PositionX: </span>${planets[information].positionX}</h6><h6><span>PositionY: </span>${planets[information].positionY}</h6>`)
})



//adding data to the main object kingdoms iterating with the main object

Object.keys(kingdoms).forEach(imperio =>{
let imperioPlanets = 0;
let imperioInhabitents = 0;
let shipsKingdom = 0;
for (var property1 in planets) {
    if(planets[property1].kingdom==imperio){
        imperioInhabitents+= planets[property1].crew;
        imperioPlanets ++;
    };
  }

  for (var property2 in ships) {
    if(ships[property2].kingdom==imperio){
        shipsKingdom ++;
    };
  }

  //adding info to the object;
kingdoms[imperio].planets = imperioPlanets;
kingdoms[imperio].Inhabitants = Math.ceil(imperioInhabitents/1000000) +" millions";
kingdoms[imperio].Army =Math.ceil(imperioInhabitents/10000000) +" FKA";
kingdoms[imperio].NumberShips = shipsKingdom;
})

//fetching the data to the screen
console.log(kingdoms);

Object.keys(kingdoms).forEach(king => {

    $('.group-empire').append(`<div class="kingdom">
    <h4>${kingdoms[king].name}</h4>
    <div class="kingdom-resume">
        <div class="kingdom-logo">
            ${kingdoms[king].logo}
        </div>
        <div class="kingdom-facts">
            <i class="fas fa-rocket"> ${kingdoms[king].NumberShips}</i>
            <i class="fas fa-globe-americas"> ${kingdoms[king].planets}</i><br>
            <i class="fas fa-fist-raised"> ${kingdoms[king].Army}</i>
            <i class="fas fa-users"> ${kingdoms[king].Inhabitants}</i>
        </div>
    </div>
    <a rel="${kingdoms[king].name.toLowerCase()}" class="selector-kingdom">Show Kingdom</a>
    
    </div>`)

});



$('.selector-kingdom').click(function(){
   let selection = $(this)[0].attributes[0].nodeValue;
   $('.ships').hide(2000);
   $('.'+selection).show(1000);
   $('.selector-kingdom').html('Show Kingdom')
   $(this).html("Show Universe");
})

});
