# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

I believe the biggest differences between the map array method and the forEach array method is that the map method runs some kind of computation on the array elements we pass
into our call back function then stores them into a new array. Which results in a new array so we do NOT mutate the origional array that we are mapping through.


2. What is the difference between a function and a method?
A function is a block of code that can be invoked time and time again. As long as the current scope we are in has a reference to the function. A method is a function that runs on an object. Usually an Array.

3. What is closure?

Closure happens when a function needs to use some variable from its parent scope. When the function accesses the parents variable, it can make changes to the variables data, but does not delete the changes. The best example I can think of is using a counter like we used in the assignments. When we use closure we can update the counter in the parent function scope allowing the variable to increment and retain that new information it has gained. If we didn't use closures every time we would use the function to increment the variable we would essentially create the variable and set it to 0, then increment it by how ever much, but once that function is done running that variable would either be "deleted" or assigned to 0 again. If we put the counter variable in the upper scope, we can call the function to increment the variable, while the parent functions scope will retain that new information we passed to it. 


4. Describe the four rules of the 'this' keyword.
The four rules of the THIS keyword are something like this..

1) Is the window binding. This means if we console.log(this) in the global execution context we will be refering to the window object.. This is because the THIS keyword refers to
whatever it is in context to.

2) Implicit binding
This is when we are inside an object, for example if we made a car object inside out global object and we made a method called Start() if we logged THIS in the start method, 
the THIS keyword would return the car object. This is because the THIS keyword is in context to the CAR object.

3) New Binding.
This one is a little harder for me to explain, but the best way I can get this accross is thinking about creating a class.
Once you create a class you set up your keys like is "this.name = name" While we have a constructor(name) function with name as a parameter.

Now when we create a new class object using the keyword NEW we can pass in a string which will be whatever that objects Name is. for example.
class Person {
    constructor(name) {
        this.name = name;
    }
}

const person1 = new Person("Dylan");

Now Dylan will = this.name, and if we console.logged this in that Person object, and used person1 to call it, the THIS keyword would refer to person1.

4) Explicit Binding.
explicit binding is binding this to an argument we pass in, we can use this keyword without using the keyword this by using the call, bind, and apply method. 


5. Why do we need super() in an extended class?

Super() allows us to grab the keys from the constructor function so we can have access to the keys in our newly create class when extended classes.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
