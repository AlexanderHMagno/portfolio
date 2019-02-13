

$(function() {

/* Creating the spaceship*/

class Spaceship {
    constructor(name,kingdom,crew,battlePower,Energy,positionX,positionY,crewMember) {
        this.name = name;
        this.kingdom = kingdom;
        this.crew = crew;
        this.battlePower = battlePower;
        this.Energy = Energy;
        this.positionX = positionX;
        this.positionY = positionY;
        this.crewMember = crewMember;
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

    let empire_choosenb=Object.keys(kingdoms);

    for (let i = empire_choosenb.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = empire_choosenb[i];
        empire_choosenb[i] = empire_choosenb[j];
        empire_choosenb[j] = temp;
    }

    let empire_choosen = empire_choosenb[Math.round(Math.random()*(empire_choosenb.length-1))];//Empire Info
   

    //battleship
    let crew = 1+Math.ceil(Math.random()*20);
    let battlePower = 10+Math.ceil(Math.random()*90);
    let EnergyBattle = 100+Math.ceil(Math.random()*100);
    


    //planets
    let Inhabitent = 10000+Math.ceil(Math.random()*20000000);
    let Army = Math.ceil(Inhabitent*0.01);
    let planetlogo = Math.ceil(Math.random()*planetas.length-1);
    let shiplogo = Math.ceil(Math.random()*battleShips.length-1);
    
    //assigning material composition
    let compositionPlanet = [];
    
// end of composition creation. 
  for (let m = 0 ; m<5;m++){
      compositionPlanet.push(composition[Math.ceil(Math.random()*composition.length-1)]);
  }

    
    if(i%2==0){



        //creates a planet
       planets[empire_choosen+i] = new Planet('Planet '+i,empire_choosen,Inhabitent,Army,compositionPlanet,position_width,position_height);
       $('.battleship').append(`<div rel="${empire_choosen+i}" class="ships planet ${empire_choosen} select-planet" style="top:${position_height}%; left:${position_width}%;"><img src="Recursos/css/imagenes/SVG/Planets/planets/planet${planetas[planetlogo]}.svg" width="2"></div>`);
       
        
    }else{
        
        let animationShip= ["A","B","C",'D'][Math.round(Math.random()*3)];
        //creates a ship
    ships[empire_choosen+i] = new Spaceship('Ship '+i,empire_choosen,crew, battlePower,EnergyBattle,position_width,position_height);
    $('.battleship').append(`<div rel="${empire_choosen+i}" class="ships ship select-ship ${empire_choosen} ship-animation${animationShip}" style="top:${position_height}%; color:${(kingdoms[empire_choosen].color)}; left:${position_width}%;"><img src="Recursos/css/imagenes/SVG/Planets/Ships/spaceship${battleShips[shiplogo]}.svg" width="2"></div>`)
    }
    
} // end for




//When the user hovers any ship

$('.select-ship').hover(function(){
    let information = $(this)[0].attributes[0].nodeValue;
    let captainAssigned = Math.ceil(Math.random()*999);
    let currentPosition = $(this).position();
    
   
    
    $('.box-info').css({'display':'block', 'top': currentPosition.top,'left': currentPosition.left+20})
    $('.box-info-title').html(`<h4><span>Name: </span>${people[captainAssigned].city}</h4>`);
    $('.box-info-resumen').html(`<div style="background:linear-gradient(-90deg,${kingdoms[`${ships[information].kingdom}`].color},rgba(172, 255, 47, 0.418))"class="logo-captain-contenedor"><img class="logo-captain" src="${people[captainAssigned].picture}"> <div class="icon-captain-empreium">${kingdoms[`${ships[information].kingdom}`].logo}</div></div><h6><span>captain: </span>${people[captainAssigned].name} ${people[captainAssigned].lastName}</h6><h6><span>Kingdom: </span>${ships[information].kingdom}</h6> <h6><span>Crew: </span>${ships[information].crew}</h6> <h6><span>Battle Power: </span>${ships[information].battlePower}</h6><h6><span>latitude: </span>${ships[information].positionX}</h6><h6><span>Longitud: </span>${ships[information].positionY}</h6>`)
})

$('.select-ship').mouseleave(function(){
    $('.box-info').css({'display':'none'})
   
})


//When the user hovers any Planet

$('.select-planet').hover(function(){
    let information = $(this)[0].attributes[0].nodeValue;
 
    $('.box-info').css({'display':'block', 'top': planets[information].positionY+1+'%','left':planets[information].positionX+1+'%'})
    $('.box-info-title').html(`<h4><span>Name: </span>${planets[information].name}</h4>`);
    $('.box-info-resumen').html(`<h6><span>Kingdom: </span>${planets[information].kingdom}</h6> <h6><span>Inhabitents: </span>${planets[information].crew}</h6> <h6><span>Combat Army: </span>${planets[information].battlePower}</h6><h6><span>Composition: </span>${planets[information].composition}</h6><h6><span>Latitude: </span>${planets[information].positionX}</h6><h6><span>Longitud: </span>${planets[information].positionY}</h6>`)
})

$('.select-planet').mouseleave(function(){
    $('.box-info').css({'display':'none'})
   
})


//adding data to the main object kingdoms iterating with the main object

Object.keys(kingdoms).forEach(imperio =>{
let imperioPlanets = 0;
let totalPlanets = 0;
let imperioInhabitents = 0;
let totalInhabitents = 0;
let shipsKingdom = 0;
let totalShips = 0;
for (var property1 in planets) {
    totalPlanets++;
    totalInhabitents+= planets[property1].crew;
    if(planets[property1].kingdom==imperio){
        imperioInhabitents+= planets[property1].crew;
        imperioPlanets ++;
    };
  }

  for (var property2 in ships) {
      totalShips++;
    if(ships[property2].kingdom==imperio){
        shipsKingdom ++;
    };
  }

  //adding info to the object kingdoms;
kingdoms[imperio].planets = imperioPlanets;
kingdoms[imperio].Inhabitants = Math.ceil(imperioInhabitents/1000000);
kingdoms[imperio].Army =Math.ceil(imperioInhabitents/10000000);
kingdoms[imperio].ships = shipsKingdom;

//adding info to the object GLOBAL STATISTICS;

GLOBAL_STATISTICS.planets = totalPlanets;
GLOBAL_STATISTICS.ships=totalShips;
GLOBAL_STATISTICS.Inhabitants= Math.ceil(totalInhabitents/1000000);
GLOBAL_STATISTICS.Army =  GLOBAL_STATISTICS.Inhabitants/10;
})

//fetching the cards data to the screen


Object.keys(kingdoms).forEach(king => {

    $('.group-empire').append(`<div class="kingdom">
    <h4>${kingdoms[king].name}</h4>
    <div class="kingdom-resume">
        <div class="kingdom-logo">
            ${kingdoms[king].logo}
        </div>
        <div class="kingdom-facts">
            <i class="fas fa-rocket"> ${kingdoms[king].ships}</i>
            <i class="fas fa-globe-americas"> ${kingdoms[king].planets}</i><br>
            <i class="fas fa-fist-raised"> ${kingdoms[king].Army} K</i>
            <i class="fas fa-users"> ${kingdoms[king].Inhabitants} MM</i>
        </div>
    </div>
    <a rel="${kingdoms[king].name.toLowerCase()}" class="selector-kingdom">Show Kingdom</a>
    
    </div>`)

});

//this part will show the user the whole universe or just the selected kingdom
let show_universe = 0; 
$('.selector-kingdom').click(function(){
 
if (show_universe==0){let selection = $(this)[0].attributes[0].nodeValue;
    $('.selector-kingdom').html('Show Kingdom')
    $(this).html("Show Universe");
    $('.selector-kingdom').css({"background":"transparent", 'color':'white'});
    $(this).css({"background":"greenyellow", 'color':'black'});
    $('.ships').hide();
    $('.'+selection).show();
    show_universe = 1;
}
    else{
        $('.ships').show();
        $(this).html("Show Kingdom");
        $(this).css({"background":"transparent", 'color':'white'});
        show_universe = 0;
    }
   
})


//adding the statistics area: 

let statistics_Group = ['planets','ships','Army'];
$('.full-stadistics-container').html("");
let statistics_string ="";

statistics_Group.forEach(sGroup=>{

    statistics_string+= `<div class="stats">
<h3>${sGroup}</h3>`;

    Object.keys(kingdoms).forEach(king => {
       statistics_string+= `
<div class="Statistics-bar statistics-planet-Empire">
    <span>${kingdoms[king].name} (${kingdoms[king][sGroup]})</span>
    <div class="Statistics-bar-full">
        <div style="width:${(kingdoms[king][sGroup]/GLOBAL_STATISTICS[sGroup])*100}%">${Math.round((kingdoms[king][sGroup]/GLOBAL_STATISTICS[sGroup])*100)}%</div>
        </div>
</div>`});
statistics_string+=`</div>`;
})

$('.full-stadistics-container').append(statistics_string);




// addin the crew to the ships and planets. 

$.when(getData()).done(showCrew);
        
        

});

