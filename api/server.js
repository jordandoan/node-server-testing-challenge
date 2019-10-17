const express = require("express");
const server = express();
server.use(express.json())
let currentId = 2;
let cars = [{id:1, name: "honda"}];
server.get('/', (req,res) => {
  res.status(200).json({cars: cars});
});

server.post('/', (req,res) => {
  console.log(req.car);
  const car = {id: currentId, name: req.body.name};
  cars.push(car)
  currentId++;
  res.status(201).json(car)
})

server.add = function (car) {
  const idx = cars.findIndex(carsCar => carsCar.name == car.name)
  if (idx != -1) {
    return {error: "Car already exists"}
  }

 const newCar = {id: currentId, name: car.name};
  cars.push(newCar)
  currentId++;
  return newCar
}

server.delete = function (id) {
  let idx = cars.findIndex(car => car.id == id);
  if (idx >= 0 ) {
    cars.splice(idx)
    return {message:"success!"}
  } else {
    return {message:"failure"}
  }
}
module.exports = server;