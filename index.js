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
var houseKeeper1 = new HouseKeeper
