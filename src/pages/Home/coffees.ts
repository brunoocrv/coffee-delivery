import { Coffee } from '../../@types/coffee'

import espresso from '../../assets/coffees/espresso.png'
import americanEspresso from '../../assets/coffees/american.png'
import creamyEspresso from '../../assets/coffees/creamy-espresso.png'
import coldEspresso from '../../assets/coffees/cold-espresso.png'
import coffeMilk from '../../assets/coffees/coffee-milk.png'
import latte from '../../assets/coffees/latte.png'
import capuccino from '../../assets/coffees/capuccino.png'
import macchiato from '../../assets/coffees/macchiato.png'
import mochaccino from '../../assets/coffees/mochaccino.png'
import hotChocolate from '../../assets/coffees/hot-chocolate.png'
import cuban from '../../assets/coffees/cuban.png'
import hawaiian from '../../assets/coffees/hawaiian.png'
import arabian from '../../assets/coffees/arabian.png'
import irish from '../../assets/coffees/irish.png'

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Tradicional Espresso',
    description: 'Traditional coffee made with hot water and ground beans',
    tags: ['tradicional'],
    image: espresso,
    price: 9.9,
  },
  {
    id: 2,
    name: 'American Espresso',
    description: 'Diluted espresso, less intense than traditional',
    tags: ['tradicional'],
    image: americanEspresso,
    price: 9.9,
  },
  {
    id: 3,
    name: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    tags: ['tradicional'],
    image: creamyEspresso,
    price: 9.9,
  },
  {
    id: 4,
    name: 'Cold Espresso',
    description: 'Drink prepared with espresso and ice cubes',
    tags: ['tradicional', 'cold'],
    image: coldEspresso,
    price: 9.9,
  },
  {
    id: 5,
    name: 'Coffee with Milk',
    description: 'Half and half traditional espresso with steamed milk',
    tags: ['tradicional', 'milk'],
    image: coffeMilk,
    price: 9.9,
  },
  {
    id: 6,
    name: 'Latte',
    description: 'A shot of espresso with double the milk and creamy foam',
    tags: ['tradicional', 'milk'],
    image: latte,
    price: 9.9,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Cinnamon drink made from equal doses of coffee, milk and foam',
    tags: ['tradicional', 'milk'],
    image: capuccino,
    price: 9.9,
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Espresso mixed with some hot milk and froth',
    tags: ['tradicional', 'milk'],
    image: macchiato,
    price: 9.9,
  },
  {
    id: 9,
    name: 'Mochaccino',
    description: 'Espresso with chocolate syrup, little milk and foam',
    tags: ['tradicional', 'milk'],
    image: mochaccino,
    price: 9.9,
  },
  {
    id: 10,
    name: 'Hot Chocolate',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    tags: ['special', 'milk'],
    image: hotChocolate,
    price: 9.9,
  },
  {
    id: 11,
    name: 'Cuban',
    description: 'Iced espresso drink with rum, cream and mint',
    tags: ['special', 'cold', 'alcoholic'],
    image: cuban,
    price: 9.9,
  },
  {
    id: 12,
    name: 'Hawaiian',
    description: 'Sweet drink prepared with coffee and coconut milk',
    tags: ['special'],
    image: hawaiian,
    price: 9.9,
  },
  {
    id: 13,
    name: 'Arabian',
    description: 'Drink prepared with Arabic coffee beans and spices',
    tags: ['special'],
    image: arabian,
    price: 9.9,
  },
  {
    id: 14,
    name: 'Irish',
    description:
      'Drink made from coffee, Irish whiskey, sugar and whipped cream',
    tags: ['special', 'alcoholic'],
    image: irish,
    price: 9.9,
  },
]
