//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//A28 Mercury Sedan Class
class mercuryA28 {
    constructor(maxPassengers, passenger, numOfWheels, maxSpeed, fuel, schService){
        this.maxPassengers = maxPassengers;
        this.passenger = passenger;
        this.numOfWheels = numOfWheels;
        this.maxSpeed = maxSpeed;
        this.fuel = fuel;
        this.schService = schService;
    }
    //methods
    loadPassenger(num){
        if (this.passenger < this.maxPassengers) 
        return avaliableRoom === true
    }

    start(){
        if(this.fuel > 0)
        return start === true
    }

    scheduledService(mileage){
        if(mileage > 30000)
        return timeForMaintence === true
    }

}
