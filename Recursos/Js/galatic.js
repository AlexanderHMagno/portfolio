

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
    let empire_choosen = Object.keys(empires)[Math.ceil(Math.random()*(Object.keys(empires).length)-1)];//Empire Info
    

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
    $('.battleship').append(`<div rel="${empire_choosen+i}" class="ships ship select-ship" style="top:${position_height}%; color:${(empires[empire_choosen].color)}; left:${position_width}%; animation: raining;">${(empires[empire_choosen].ship)}</i></div>`)
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


console.log(planets);

});
