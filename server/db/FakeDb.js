import { Burger } from "../models/Burger.js";

export const burgers = [
  {
    id: 1,
    name: 'The Cowabunga',
    price: 6.99,
    vegetable: "mushrooms",
    hasBacon: true,
    condiment: "bacon-jam",
    cheese: "gorgonzola",
    hasGuac: false,
  },
  {
    id: 2,
    name: 'The Ranger',
    price: 7.99,
    vegetable: "onion-straws",
    hasBacon: true,
    condiment: "bbq",
    cheese: "gorgonzola",
    hasGuac: false,
  },
  {
    id: 3,
    name: 'Senor Spicy',
    price: 8.50,
    vegetable: "jalepeno",
    hasBacon: false,
    condiment: "chipotle",
    cheese: "queso-blanco",
    hasGuac: true
  }
]
