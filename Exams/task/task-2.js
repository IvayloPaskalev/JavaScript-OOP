/* globals module */

"use strict";

function solve() {
    class Product {
        constructor(productType, name, price) {
            this._productType = productType;
            this._name = name;
            this._price = price;
        }

        get productType() {
            return this._productType;
        }

        set productType(value) {
            if (typeof value !== 'string') {
                throw "";
            }
            this._productType = value;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            if (typeof value !== 'string') {
                throw "";
            }
            this._name = value;
        }

        get price() {
            return this._price;
        }

        set price(value) {
            if (typeof value !== 'number') {
                throw '';
            }
            this._price = value;
        }
    }
    class ShoppingCart {
        constructor() {
            this._products = [];
        }
        get products() {
            return this._products;
        }
        add(product) {
            this._products.push(product);
            return this;
        }
        remove(product) {
            for (var i = 0; i < this._products.length; i++) {
                if (this._products[i]._productType === product.productType &&
                    this._products[i]._name === product.name &&
                    this._products[i].price === product.price) {
                    this._products.splice(i, 1);
                    return this;
                }
            };
            throw '';
        }
        showCost() {
            return this._products.reduce((c, p) => c + p.price, 0);
        }
        showProductTypes() {
            var productTypes = this._products.map(p => p.productType);
            var unique = [...new Set(productTypes)];

            return unique.sort();
        }
        getInfo() {
            let allProducts = {};
            this.products.forEach(pr => {
                if (!allProducts[pr.name]) {
                    allProducts[pr.name] = {
                        "name": pr.name,
                        "totalPrice": 0,
                        "quantity": 0
                    };
                }

                allProducts[pr.name].totalPrice += pr.price;
                allProducts[pr.name].quantity += 1;
            });

            let products = Object.keys(allProducts)
                .sort((k1, k2) => k1.localeCompare(k2))
                .map(key => allProducts[key]);

            let totalPrice = products.reduce((tp, pr) => tp + pr.totalPrice, 0);
            return {
                products,
                totalPrice
            };
        }
    }
    return {
        Product,
        ShoppingCart
    };
}

module.exports = solve;