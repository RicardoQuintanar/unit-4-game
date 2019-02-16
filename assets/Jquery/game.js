// Global variables //
var baseAttack = 0;
var player;
var defender; 
var charArray = []; 
var playerSelected = false; 
var defenderSelected = false;

// Contruct(charcater design of internal information ( strength attack counter and image of character)) //
function Character(name, hp, ap, counter, pic) {
    this.name = name;
    this.healthPoints = hp;
    this.attackPower = ap;
    this.counterAttackPower = counter;
    this.pic = pic;
}
// function for Character initialization //
function initCharacters() {
    var gohan = new Character("Gohan",200, 60, 10, "assets/images/gohan1.gif")
    var goku = new Character("Goku",250, 50, 35, "assets/images/gokuplayercard.gif")
    var buu = new Character("Kid Buu",225, 40, 20,"assets/images/douchebuu.gif")
    var cell = new Character("Cell",250, 35, 25, "assets/images/perfectcell.gif")
    var frieza = new Character("Frieza",200, 30, 15, "assets/images/frieza.gif")
    charArray.push(gohan, goku, buu, cell, frieza)
    }
    
// Set character cards to pick from //
function characterCards (divID) {
    $(divID).children().remove();
    for (var i = 0; i < charArray.length; i++) {
        $(divID).append("<div />");
        $(divID + " div:last-child").addClass("card");
        $(divID + " div:last-child").append("<img />");
        $(divID + " img:last-child").attr("id", charArray[i].name);
        $(divID + " img:last-child").attr("class", "card-img-top");
        $(divID + " img:last-child").attr("src", charArray[i].pic);
        $(divID + " img:last-child").attr("width", 150);
        $(divID + " img:last-child").addClass("img-thumbnail");
        $(divID + " div:last-child").append(charArray[i].name + "<br>");
        $(divID + " div:last-child").append("HP: " + charArray[i].healthPoints);
        $(divID + " idv:last-child").append();
    }
}

// Increase the attack strength (this attack points + original attack points) // 
Character.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
};

// Performs an attack // 
Character.prototype.attack = function (Obj) {
    Obj.healthPoints -= this.attackPower;
    $("#msg").html("attacking" +
        Obj.name + "for " + this.attackPower + " damage points.");
    this.increaseAttack();
};

// Performs a counter attack //
Character.prototype.counterAttack = function (Obj) {
    Obj.healthPoints -= this.counterAttackPower;
    $("#msg").append("<br>" + this.name + " counter attacked you for " + this.counterAttackPower + " damage points.");
};


// 
// setting the on click an character to move it into user character chose and battlescreen//
function updatePics(fromDivID, toDivID) {
    $(fromDivID).children().remove();
    for(var i = 0; i < charArray.length; i++) {
        $(toDivID).append("<img />");
        $(toDivID + " img:last-child").attr("src", charArray[i].name);
        $(toDivID + " img:last-child").attr("src", charArray[i].pic);
        $(toDivID + " img:last-child").attr("width", 150);
        $(toDdivID + " img:last-child").addClass("img-thumbnail");

    }
};
// $(document).on("click", "img", function () {
//     if (playerSelected && !defenderSelected && (this.id != player.name)) {
//         for (var c = 0; c < charArray.length; i++) {
//             if (charArray[c].name == (this).id) {
//                 defender.charArray [c];
//                 charArray.splice[c , 1];
//                 defenderSelected=true;

//             }
//         };
        







function changeView(){
    $("#homescreen").empty();
    $("#battlescreen").show();
}

// Deploy //

$(document).ready(function (){
    $("#battlescreen").hide();
    $("#globalMsg").hide();
    initCharacters();
    characterCards("#game");

});
