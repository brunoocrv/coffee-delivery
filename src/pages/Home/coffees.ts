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
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    image: espresso,
    price: 9.9,
  },
  {
    id: 2,
    name: 'American Espresso',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    image: americanEspresso,
    price: 9.9,
  },
  {
    id: 3,
    name: 'Creamy Espresso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    image: creamyEspresso,
    price: 9.9,
  },
  {
    id: 4,
    name: 'Cold Espresso',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'cold'],
    image: coldEspresso,
    price: 9.9,
  },
  {
    id: 5,
    name: 'Coffee with Milk',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'milk'],
    image: coffeMilk,
    price: 9.9,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'milk'],
    image: latte,
    price: 9.9,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'milk'],
    image: capuccino,
    price: 9.9,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'milk'],
    image: macchiato,
    price: 9.9,
  },
  {
    id: 9,
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'milk'],
    image: mochaccino,
    price: 9.9,
  },
  {
    id: 10,
    name: 'Hot Chocolate',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['special', 'milk'],
    image: hotChocolate,
    price: 9.9,
  },
  {
    id: 11,
    name: 'Cuban',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['special', 'cold', 'alcoholic'],
    image: cuban,
    price: 9.9,
  },
  {
    id: 12,
    name: 'hawaiian',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['special'],
    image: hawaiian,
    price: 9.9,
  },
  {
    id: 13,
    name: 'Arabian',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['special'],
    image: arabian,
    price: 9.9,
  },
  {
    id: 14,
    name: 'Irish',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['special', 'alcoholic'],
    image: irish,
    price: 9.9,
  },
]
