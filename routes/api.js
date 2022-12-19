const router = require("express").Router();
const carInfo = require('./cars.json')
const fs = require("fs");

router.get("/cars", async (req, res) => {
    res.json(carInfo.slice().reverse());
});

router.get("/cars/:id", (req, res) => {
    let id = req.params.id;
    let car = carInfo.filter(car => car.id === id);
    res.json(car);
});

router.post("/cars/:id", (req, res) => {
    let newCar = {
        ...req.body,
        ...req.params
    }
    let cars = carInfo;
    cars.push(newCar);
    fs.writeFile(`${__dirname}/cars.json`, JSON.stringify(cars), (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Success!');
        res.json(carInfo.slice().reverse());
    })
});

module.exports = router;