class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.stregnth);
    }
    drinkSake(){
        this.strength += 10;
        console.log(this.stregnth)
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();