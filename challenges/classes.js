// 1. Copy and paste your prototype in here and refactor into class syntax.


// function CuboidMaker(attributes) {
//     this.length = attributes.length;
//     this.width = attributes.width;
//     this.height = attributes.height;
//   }

//   CuboidMaker.prototype.getVolume = function() {
//     return this.length * this.width * this.height;
//   }

//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }
  
//   const cuboid = new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5
//   });

class CuboidMakerRefactored {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    getVolume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboidRefactored = new CuboidMakerRefactored(4, 5, 5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidRefactored.getVolume()); // 100
console.log(cuboidRefactored.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerRefactored{
    constructor(length, width, height){
        super(length, width, height);
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return  6 * Math.pow(this.length, 2); 
    }
}

const cube = new CubeMaker(6,6,6);

console.log(cube.volume());
console.log(cube.surfaceArea());

/// My cube formulas might be completely off... LOL math isn't my strong suit. Let me know though!