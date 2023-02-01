const fuel = document.querySelector(".fuel")
const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stopengine")
const gas = document.querySelector(".gas")
const brake = document.querySelector(".brake")
const textarea = document.querySelector("textarea")
const wheels_1 = document.querySelector(".wheels-1")
const wheels_2 = document.querySelector(".wheels-2")

let start_engine = new Audio(`../audio/enginelong.mp3`);
let stop_engine = new Audio(`../audio/stop_engine (1).mp3`);
let speed_1x = new Audio(`../audio/speed_1x (2).mp3`);
let speed_2x = new Audio(`../audio/speed_2x.mp3`);
let carBrake = new Audio(`../audio/brake.mp3`)
let engine = new Audio(`../audio/engine.mp3`)
const fuel_icon = document.querySelector(".fuel-icon")

class Bugatti {
  isStared = false;
  isMoving = false;
  gas = 50;
  gasIntervalId = null;
  constructor(name, model, year, color) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    fuel.innerHTML = this.gas
  }
  startEngine() {
    this.gasIntervalId = setInterval(() => {
      this.gas--;
      fuel.innerHTML = this.gas
      console.log(`Gas: ${this.gas}`);
      if (this.gas === 0) {
        clearInterval(this.gasIntervalId);
      }
    }, 5000);
}
  move() {
    if(this.isStared = true){
      this.isMoving = true;
      console.log(`${this.name} is moving`);
      clearInterval(this.gasIntervalId);
      this.gasIntervalId = setInterval(() => {
        this.gas--;
        console.log(`Remaining fuel: ${this.gas}`);
        fuel.innerHTML = `${this.gas}`
        if (this.gas < 6 && this.gas !== 0) {
          console.log(
            `Running out of fuel. fill the tank faster.`
          );
        }
        if (this.gas === 0) {
          console.log("Ran out of fuel. fill the tank");
          clearInterval(this.gasIntervalId);
          start_engine.load()
          stop_engine.load()
          speed_1x.load()
          speed_2x.load()
          carBrake.load()
          wheels_1.style.animationName = "none"
          wheels_2.style.animationName = "none"
        }
      }, 1000);
    }
}
  brake() {
    this.isMoving = false;
    console.log(`${this.name} to stop.`);
    clearInterval(this.gasIntervalId);
}
  stopEngine() {
    this.isStared = false
    this.isMoving = false
    if (!this.isStared) {
      console.log(`${this.name} not yet ignited.`);
      return;
    }
    if (this.isMoving) {
      console.log("Oldin moshinani toxtat");
      return;
    }
    console.log(`${this.name} to stop`);
    clearInterval(this.gasIntervalId);
  }
  refulling() {
    bugatti.gas = 50
    fuel.innerHTML = bugatti.gas
  }
}

let bugatti = new Bugatti("Chiron", "Bugatti Chiron Sport 300+", 2022, "blue and white")
 console.log(bugatti);

startBtn.addEventListener("click", ()=>{
  start_engine.load()
  start_engine.play();
  bugatti.isStared = true
  bugatti.startEngine()
  textarea.innerHTML = "Start"
    console.log(bugatti.isStared);

 if(bugatti.isStared === true){
  console.log(bugatti.isStared);
gas.addEventListener("click", ()=>{
    if(bugatti.isStared == true){
      bugatti.move()
      console.log(bugatti.isStared);
    console.log("speed_2x");
    speed_2x.play()
    speed_1x.load()
    start_engine.load()
    bugatti.move()
    wheels_1.style.animationName = "wheels2x"
    wheels_2.style.animationName = "wheels2x"
    engine.load()
    brake.addEventListener("click", ()=>{
      engine.play()
    speed_1x.load()
    speed_2x.load()
    carBrake.play()
      bugatti.brake()
      textarea.innerHTML = ` ${bugatti.name} to'xtadi`
      wheels_1.style.animationName = "none"
      wheels_2.style.animationName = "none"
  })
    }
}) 
 } 

})
  stopBtn.addEventListener("click", ()=>{
    bugatti.isStared = false
    console.log(bugatti.isStared);
    bugatti.stopEngine()
    setTimeout(() => {
      start_engine.load()
    }, 500);
    stop_engine.play()
    speed_1x.load()
    speed_2x.load()
    bugatti.stopEngine()
    bugatti.brake()
    engine.load()
    wheels_1.style.animationName = "none"
    wheels_2.style.animationName = "none"
    textarea.innerHTML = ` ${bugatti.name} o'chdi`
  })

  fuel_icon.addEventListener("click", ()=>{
    console.log(bugatti.gas);
    bugatti.refulling()
  })
  fuel.innerHTML = bugatti.gas
  if(fuel.innerHTML <= 25){
    fuel.style.backgroundColor = "yellow"
  }if(fuel.innerHTML <= 15){
    fuel.style.backgroundColor = "red"
  }

  if(bugatti.gas <= 25){
    fuel_icon.style.animationName = "fuel"
  }

  console.log(bugatti.isStared);