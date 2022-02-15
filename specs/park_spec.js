const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur_1;
  let dinosaur_2;
  let dinosaur_3;

  beforeEach(function () {
    park = new Park('Dino Park', 10.00, 't-rex');
    dinosaur_1 = new Dinosaur('Velociraptor', 'omnivore', 39);
    dinosaur_2 = new Dinosaur('Triceratops', 'carnivore', 47);
    dinosaur_3 = new Dinosaur('Dilophosaurus', 'herbivore', 23);
  });

  it('should have a name', function () {
    assert.strictEqual(park.name, 'Dino Park');
  });

  it('should have a ticket price', function () {
    assert.deepStrictEqual(park.ticketPrice, 10.00);
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurCollection, []);
  });

  it('should be able to add a dinosaur to its collection',function(){
    park.addDinosaur(dinosaur_1);
    assert.strictEqual(park.checkDinosaur(dinosaur_1), true);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur()
    assert.deepStrictEqual(park.dinosaurCollection, []);
  });

  // it('should be able to find the dinosaur that attracts the most visitors');
  // I am not sure about this one!!

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_1);
    assert.deepEqual(park.returnSpecies(dinosaur_1.species), [dinosaur_1, dinosaur_1]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    assert.strictEqual(park.dailyVisitors(), 109);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    assert.strictEqual(park.yearlyVisitors(), 39785);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    assert.strictEqual(park.annualRevenue(), 397850);
  });

});
