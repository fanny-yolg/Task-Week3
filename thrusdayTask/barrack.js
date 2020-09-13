const { Knight, Spearman, Archer} = require('./army.js')
class Barrack {
    constructor(slots){
        this.slots = slots || []      
    }
    recruit(army){
        this.slots.push(army)  
    }
    summon(){
        console.log(this.slots)
    }       
    disband(name){
        for (let i=0; i<this.slots.length; i++){
            if(this.slots[i].name === name){
               this.slots.splice(i, 1)
            }
        }
    }
    group = {
        knight : [],
        spearman : [],
        archer : []
    }
    groups(){
    for (let i=0; i<this.slots.length; i++){
    if(this.slots[i].type === 'Knight'){
        this.group.knight.push(this.slots[i])
    } else if (this.slots[i].type === 'Spearman') {
        this.group.spearman.push(this.slots[i])            
    } else {
        this.group.archer.push(this.slots[i]) 
    }}
    console.log(this.group);
}};

module.exports = {Barrack : Barrack}

