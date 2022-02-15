const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = []
}
  
Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    this.dinosaurCollection.pop(dinosaur);
};

Park.prototype.checkDinosaur = function(dinosaur){
    return this.dinosaurCollection.includes(dinosaur);
};

Park.prototype.returnSpecies = function(species){
    let species1 = this.dinosaurCollection.filter(function(el){
      return el.species == species;
    });
    return species1
};

Park.prototype.dailyVisitors = function(){
    let count = 0
    for (let i = 0; i < this.dinosaurCollection.length; i++){
      count += this.dinosaurCollection[i].guestsAttractedPerDay;
    };
    return count
};

Park.prototype.yearlyVisitors = function(){
    return this.dailyVisitors() * 365;
};

Park.prototype.annualRevenue = function(){
    return this.yearlyVisitors() * this.ticketPrice;
};


module.exports = Park;