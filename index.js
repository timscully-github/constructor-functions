// example of a constructor function
// think of it like a factory where we can keep pumping out variables with the same properties

// function name starts with a capital letter to differentiate

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    // create properties that equal the input paramaters
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

// now we can create new objects off of the constructor

// using 'new' is the important key to designate each variant of a constructor
var houseKeeper1 = new HouseKeeper(5, "Bob", ["bathroom","bedroom","living room"]);
// inside the new variant you can provide the values of the properties

var houseKeeper2 = new HouseKeeper(1, "Jane", ["garage","kitchen","loft"]);

console.log(houseKeeper1.name);
console.log(houseKeeper2.cleaningRepertoire);

///---------------------------------------------------------------------//

// function within constructor associated with object, can be annonymous
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    // create properties that equal the input paramaters
    // function property does not need to be equal to a parameter if you execute the function on the object
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
      console.log("cleaning in progress...");
    }
}

var houseKeeper3 = new HouseKeeper(1, "Derek", ["kitchen","balcony","study"]);

houseKeeper3.clean();
