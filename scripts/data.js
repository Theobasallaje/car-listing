'use strict'
const { faker } = require('@faker-js/faker');
const fs = require("fs");
const KSUID = require('ksuid')

let cars = []
let carImgs = [
    'https://img2.carmax.com/assets/23257293/hero.jpg?width=800&height=450',
    'https://img2.carmax.com/assets/23500192/hero.jpg?width=800&height=450',
    'https://img2.carmax.com/assets/23229581/hero.jpg?width=800&height=450',
    'https://img2.carmax.com/assets/22349508/hero.jpg?width=800&height=450',
    'https://img2.carmax.com/assets/23473571/hero.jpg?width=800&height=450',
    'https://img2.carmax.com/assets/23500604/hero.jpg?width=800&height=450',
    'https://img2.carmax.com/assets/23284177/hero.jpg?width=800&height=450',
    'https://img2.carmax.com/assets/23561429/hero.jpg?width=800&height=450',
    'https://img2.carmax.com/assets/22407772/hero.jpg?width=800&height=450',
    'https://img2.carmax.com/assets/23259996/hero.jpg?width=800&height=450'
]
for (let i = 0; i < 100; i++) {
    let carImg = Math.floor(Math.random() * 10);
    let id = KSUID.randomSync().string;
    cars.push({
        id,
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: faker.date.birthdate().getFullYear(),
        color: faker.vehicle.color(),
        category: faker.vehicle.type(),
        mileage: faker.datatype.number({ min: 10, max: 200000, precision: 0.01 }).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        fuel: faker.vehicle.fuel(),
        price: faker.finance.amount(20000, 15000000, 2),
        image: carImgs[carImg]
    })
}

console.log(cars);


fs.writeFile("../routes/cars.json", JSON.stringify(cars), (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Success!');
})
