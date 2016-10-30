// Javascript Codes // 


function Player(name){
	this.name = name;
	this.health = 100;
	this.weapon = 25;
	this.armor = 10;
	this.exp =0;
	this.level = 1;


}

Player.prototype.attack = function(defender){

	var random = Math.floor(Math.random()*10)

	if(random<3){

		defender.health -= this.weapon;

	}else{

	defender.health += defender.armor;
	defender.health -= this.weapon

	}
}

Player.prototype.attackMonster= function(){

	var counter = Math.floor(Math.random()*10);

	if(	counter < 3	){

		this.exp += 40;
		this.health -=40;

	}
	else if( counter < 8 ){

		this.exp += 25;
		this.health -= 25;

	}else{

		this.exp += 15;
		this.health -=15;
	}
	if(this.exp>100){
		this.levelUp();
	}
	if(this.health<0){
		alert("Game over you lost");
	}
}
Player.prototype.healPotion= function(){
	this.health+=40;
}

Player.prototype.levelUp = function(){

	this.exp = 0;
	this.level++;
	this.health +=50;
	this.weapon+=25;
	this.armor+= 15;

}


var blake = new Player("Blake");

var ali = new Player("Ali");

