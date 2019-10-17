const server = require("./server.js");
const request = require("supertest");

describe('get data', () => {
  it('should have status code 200', () => {
    return request(server).get('/')
      .then(res => {
        expect(res.status).toBe(200);
      })
  })
  it('return an array of at least size 1', () => {
    return request(server).get('/')
      .then(res => {
        expect(res.body.cars[0].name).toBe('honda');
      })
  })
})

describe('able to add car', () => {
  it('should return a car if succesfully added', () => {
    const car = {name:"toyota"}
    expect(server.add(car).name).toBe(car.name);
  })
  it('should return failure since car already exists', () => {
    const car = {name:"toyota"}
    expect(server.add(car).error).toBe("Car already exists");
  })
})

describe('able to delete car', () => {
  it('should return success', () => {
    const id = 2
    expect(server.delete(id).message).toBe('success!');
  })
  it('should return failure', () => {
    const id = 2
    expect(server.delete(id).message).toBe('failure');
  })
})