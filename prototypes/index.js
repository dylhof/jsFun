const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.filter((kitty) => {
        return kitty.color === 'orange';
    }).map((orangeKitty) => {
        return orangeKitty.name;
    });
    return result;

    // Annotation:
    // This question is asking for an array of just names of orange kitties.  So because it is asking for an array that is smaller than the original array (just the orange kitties), I started with filter.  From there it is asking for just the names, so I chained map onto the filter method to return just an array with names. 
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((cat1, cat2) => {
  return cat2.age - cat1.age;
});
    return result;

    // Annotation:
    // this prompt was asking to sort the kitties by their age so I used the sort prototype. 
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map((kitty) => {
        return {name: kitty.name, age: kitty.age + 2, color: kitty.color};
    });
    return result;
  //Annotation:
  //this prompt was asking for an array with the data mutated by adding two to the kitties ages.  Because it is asking for an array of the same length but with the data changed, I used the map function to create an array of objects with the ages updated by adding 2. 

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
  club.members.forEach((member) => {
    if (!acc[member]) {
      acc[member] = [club.club];
    } else {
      acc[member].push(club.club);
        }
    })
    return acc
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map((mod) => {
        return { mod: mod.mod, studentsPerInstructor: mod.students/ mod.instructors }
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map((cake) => {
      return {flavor: cake.cakeFlavor, inStock: cake.inStock};
    });
    return result;

    // Annotation:
    // Because this prompt was asking us for an array of objects that just had the flavor of the cake and how much was in stock, implying an array of the same length as the original but with each object mutated to display less data, I chose to use the map array prototype. 
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter((cake) => {
      return cake.inStock > 0;
    });
    return result;

    // Annotation:
    // This prompt was asking for a subset of the cakes including only the cakes that are in stock.  The filter array prototype was able to return only those cakes that had some cakes in stock. 
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((numCakes, cake) => {
  numCakes += cake.inStock;
  return numCakes;
}, 0);
    return result;

    // Annotation:
    // This prompt was asking for a single sum to be returned from all the cakes inStock.  To me this means that I need to use the reduce array prototype method. 
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((topArr, cake) => {
  cake.toppings.forEach((topping) => {
    if (!topArr.includes(topping)) {
      topArr.push(topping)
    }
  });
  return topArr;
}, []);
    return result;

    // Annotation:
    // because this prompt was asking for just one array of strings, I used the reduce method.  Inside of the reduce array prototype method, I needed to iterate over each array of toppings and check if they were already included in my new topping array.  if they were not, I added them using the push array prototype method. 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((groceryList, cake) => {
     cake.toppings.forEach((topping) => {  
        if (!groceryList[topping]) {
          groceryList[topping] = 0;
        };
        groceryList[topping]++;
        });
     return groceryList;
    }, {});;
    return result;

    // Annotation:
    // This prompt was asking for a single object to be returned with keys that were unique toppings and the value being how often that topping appeared in the dataset as a whole.  This indicated that reduce would be a good method to use.  from there I needed to iterate over each topping to check if it was already a key so I used the forEach array prototype method to check each toppings array.  If it was not a key, I added it and assigned it a value of 0, then incremented the topping number.  If it was a key, the topping number was incremented up by one. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter((room) => {
      return room.program === 'FE';
    });;
    return result;

    // Annotation:
    // This prompt was asking for a subset of the classrooms array of objects so I used the filter array prototype method. 
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((roomCapObj, room) => {
  let feCap = roomCapObj.feCapacity;
  let beCap = roomCapObj.beCapacity;
  if (room.program === 'FE') {
    feCap += room.capacity;
  }; 
  if (room.program === 'BE') {
    beCap += room.capacity
  };
  return {
    feCapacity: feCap,
    beCapacity: beCap
  };
}, {
  feCapacity: 0,
  beCapacity: 0
});
    return result;

    // Annotation:
    // because this prompt was asking for a single object from the array of classroom objects and that single object is different from any of the objects in the array, I chose to use reduce to return a new object with an initialized object that had the room capacities as key/value pairs.  from there I used a conditional to sort the FE fooms from the BE rooms and added the current room's capacity to the total, eventually returning the new object. 
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((roomA, roomB) => {
  return roomA.capacity - roomB.capacity;
});
    return result;

    // Annotation:
    // This one wanted me to sort the current array by their capacity so I used the sort array prototype method. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((numOfBeers, brewery) => {
  numOfBeers += brewery.beers.length;
return numOfBeers
}, 0);
    return result;

    // Annotation:
    // This prompt wanted a single number back from all of the brewery object's beers arrays so I chose reduce to return a single number back.  I then added used the .length property to add the length of each brewery's beers array to get the total number of beers on offer. yum. so many delicious beers. 
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map((brewery) => {
  return {name: brewery.name, beerCount: brewery.beers.length}
});
    return result;

    // Annotation:
    // This prompt is asking for a new array of all the brewery objects in the current breweries but with each object modified to include only the name and a count of the beers they offer. Because it was askking for an array of the same length as the original array, I chose the map array prototype method. 
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((beer, brewery) => {
  let highABV = beer.abv;
  let highABVBeer = beer;
  brewery.beers.forEach((curBeer) => {
   if (highABV < curBeer.abv) {
     highABV = curBeer.abv;
     highABVBeer = curBeer;
   };
  });
  return highABVBeer
}, {abv: 0});
    return result;

    // Annotation:
    // because this was asking for a single object back, I chose the reduce array prototype method.  After declaring several initial variables and values to describe the highest ABV and the beer that belonged to that ABV, I iterated through all the beers to compare their ABV to the current value of those variables and update the variables if their ABV is higher. Then returning the beer with the highest ABV at the end. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    //map over instructors array
    //find the matching cohort for our current instructor 
    //grab the student count value from the matching cohort
    //return an object with the instructor name and student count value as properties

    const result = instructors.map((instructor) => {
        let matchingCohort = cohorts.find((cohort) => {
          return cohort.module === instructor.module
        });
        let numOfStudents = matchingCohort.studentCount;
        return { name: instructor.name, studentCount: numOfStudents }
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((stuPerTeachObj, cohort) => {
    let numStudents = cohort.studentCount;
    let numTeachers = instructors.filter((teacher) => {
      return teacher.module === cohort.module
    }).length;
    stuPerTeachObj[`cohort${cohort.cohort}`] = numStudents/numTeachers;
    return stuPerTeachObj
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = iinstructors.reduce((teachersObj, teacher) => {
      let teacherName = teachersObj[teacher.name] = [];
      teacher.teaches.forEach((subject) => {
        cohorts.forEach((cohort) => {
          if (cohort.curriculum.includes(subject) && !teacherName.includes(cohort.module)) {
            teacherName.push(cohort.module)
          }
        })
      })
    return teachersObj;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};



module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts
};