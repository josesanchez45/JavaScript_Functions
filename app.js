console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  for (let i = 1; i < count; i += 2) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
printOdds(50);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age) {
  let aboveSixteen = "You can drive!";
  let belowSixteen = "Sorry, but you need to wait until you're 16.";
  if (age < 16) {
    console.log(belowSixteen);
  } else console.log(aboveSixteen);
}
checkAge(12);
checkAge(21);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkCoordinates(x, y) {
  if (x > 0 && y > 0) {
    console.log(`In Quadrant 1`);
  }
  if (x < 0 && y > 0) {
    console.log(`In Quadrant 2`);
  }
  if (x < 0 && y < 0) {
    console.log(`In Quadrant 3`);
  }
  if (x > 0 && y < 0) {
    console.log(`In Quadrant 4`);
  }
  if (x == 0) {
    console.log(`On the x axis`);
  }
  if (y == 0) {
    console.log(`On the y axis`);
  }
}
checkCoordinates(10, 9);
checkCoordinates(0, 7);
checkCoordinates(-5, -5);
checkCoordinates(1, 0);

//## Exercise 4: What type of triangle?
console.log("EXERCISE 4:\n==========\n");

function isTriangle(side1, side2, side3) {
  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log(`${side1}, ${side2} and ${side3} make a triangle`);
  } else console.log(`Not a vaid traingle`);
}

isTriangle(2, 3, 4);
isTriangle(1, 1, 2);
//## Exercise 5:
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage) {
  let periodLength = 30;
  console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
  console.log(`Average daily use ${usage / day} GB/day`);
  console.log(`Expected average use ${planLimit / periodLength}`);
  if (planLimit / periodLength > usage / day) {
    console.log(`You are projected to stay within your limit`);
  } else
    console.log(
      `You are exceeding your expected daily use of ${planLimit / periodLength}`
    );
  console.log(
    `To stay below your data plan, use no more than ${
      planLimit / periodLength
    } GB/day`
  );
}
dataPlan(70, 16, 20);
