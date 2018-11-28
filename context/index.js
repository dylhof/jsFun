const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    // Because const fly is an ES 6 arrow function, it binds the value of 'this' upon declaration.  Fly is declared in the global scope, so this is bound to the global window object. 
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // In this exercise, we have no object to bind 'this' to, therefore it defaults to the global window object.  
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Because getInfo is an annon funct, the value of 'this' is set upon invocation.  Because el is the object invoking the anon function in the event lister, the value of 'this' is bound to el. 
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // Because innerFunction is an annon func and it is nested into another annon funct, it looses it's context when invoked because it is never bound to the dog object. 
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // Write your annotation here as a comment
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment. Annotation should include explanation regarding the second argument of `poets` that is being passed
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Write your annotation here as a comment.
  },

  exerciseK() {
    const el = $('#btn');
    el.on('click', () => {
      console.log(this);
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Write your annotation here as a comment.
  }











};

module.exports = context;