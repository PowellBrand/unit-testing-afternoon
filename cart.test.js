const cart = require('./cart');
const cars = require('./data/cars');

describe(`Cart Properties`, () => {
    test(`Expect cart to be empty array`, () => {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0)
    })

    test(`Check the total of the cart`, () => {
        expect(cart.total).toEqual(0)
    })
})


describe(`Cart Methods`, () => {

    afterEach(() => {
        cart.cart = [];
        cart.total = 0;
    })
    test(`Add a car object to Cart`, () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
    })

    test(`should increase the total`, () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[4])
        cart.addToCart(cars[6])
        expect(cart.total).toEqual(cars[0].price + cars[4].price + cars[6].price);

    })

    test(`remove an item from the cart`, () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(1, cars[1].price);
        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[2]);
    });
    test(`decrease the total`, () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[4]);
        cart.addToCart(cars[6]);

        cart.removeFromCart(0, cars[0].price);
        cart.removeFromCart(1, cars[4].price);
        expect(cart.total).toEqual(cars[6].price)
    })
    test(`checkout should empty the array and set the total to 0`, ()=>{
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);
        cart.checkout();

        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);
    })
})