// Create the Dog class constructor
class Dog {
  constructor(name, age, breed, color) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.barkLevel = 10;
    this.energyLevel = 0;

  }

  pat() {
    this.energyLevel++;
    this.barkLevel = this.barkLevel - 1;
    console.log(`This dog is ${this.name}. ${this.name} is ${this.age} years old. Energy level: ${this.energyLevel}. Bark level:  ${this.barkLevel}.`);
  }
}

// Create Marty
let marty = new Dog("Marty", 5, "Corgi", "red")
// Pat him 5 times
marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat();