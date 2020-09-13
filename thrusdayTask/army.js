class Army{
    constructor(name,type,level){
        this.name = name;
        this.type = type;
        this.level = level || 1;
    }
    talk(){
        console.log(`Hi! I am ${this.name} a ${this.type} and my level is ${this.level}`)
    }
    training(){
        if (this.level < 10){
            this.level = this.level + 1
        } else {
            this.level = 10;
        }             
    }
}    
    
class Knight extends Army{
    constructor(name,type,level){
        super(name,type,level)
    }
    talk(){
        super.talk()
        console.log(`Knight will take the front position`);
    }
}


class Spearman extends Army{
    constructor(name,type,level){
        super(name,type,level)
    }
    talk(){
        super.talk()
        console.log(`Spearman will take the spear to win the war`);
    }
}

class Archer extends Army{
    constructor(name,type,level){
        super(name,type,level)
    }
    talk(){
        super.talk()
        console.log(`Archer will take the arrow to win the war`);
    }
}

module.exports = {
    Knight : Knight,
    Spearman : Spearman,
    Archer: Archer 
}
