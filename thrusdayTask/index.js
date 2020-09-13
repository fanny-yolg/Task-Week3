const { Knight, Spearman, Archer} = require('./army.js');
const { Barrack } =  require('./barrack.js');

let paul = new Knight('Paul','Knight',5);
paul.talk();
paul.training();

let adam = new Knight('Adam', 'Knight', 6);

let rom = new Spearman('Rom','Spearman',9);
rom.talk();
rom.training();

let gree = new Archer('Gree','Archer',6);
rom.talk();
rom.training();

let barrack = new Barrack();
barrack.recruit(paul);
barrack.recruit(rom);
barrack.recruit(adam)
barrack.recruit(gree)
barrack.summon();
barrack.disband(paul);
barrack.summon();
barrack.groups();
