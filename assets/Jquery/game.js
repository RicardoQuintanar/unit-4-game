// Global variables
var baseAttack = 0;
var player;
var defender; 
var charArray = []; 
var playerSelected = false; 
var defenderSelected = false;

// Contruct(object design)
function Character(name, hp, ap, counter, pic) {
    this.name = name;
    this.healthPoints = hp;
    this.attackPower = ap;
    this.counterAttackPower = counter;
    this.pic = pic;
}


// Increase the attack strength (this attack points + original attack points)
Character.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
};

// Performs an attack
Character.prototype.attack = function (Obj) {
    Obj.healthPoints -= this.attackPower;
    $("#msg").html("attacking" +
        Obj.name + "for " + this.attackPower + " damage points.");
    this.increaseAttack();
};

// Performs a counter attack
Character.prototype.counterAttack = function (Obj) {
    Obj.healthPoints -= this.counterAttackPower;
    $("#msg").append("<br>" + this.name + " counter attacked you for " + this.counterAttackPower + " damage points.");
};

function initCharacters() {
var princess = new Character("Princess Leia","./assets/images/princess2.jpg")
var yoda = new Character("Master Yoda","./assets/images/yoda1-1.jpg")
var princess = new Character("Princess Leia","./assets/images/darthB.jpg")
var princess = new Character("Princess Leia","./assets/images/Anakin-Skywalker-1.jpg")
}









function changeView(){
    $("#homescreen").empty();
    $("#battlescreen").show();
}
