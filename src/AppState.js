import { reactive, ref } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  autoMultiplier: 0,
  multiplier: 1,
  gold: 0,

  clickUpgrades: [
    new Upgrade({
      id: 1,
      name: 'Hammer',
      quantity: 1,
      price: 10,
      multiplier: 1
    }),
    new Upgrade({
      id: 2,
      name: 'Golden Beat-Stick',
      quantity: 1,
      price: 100,
      multiplier: 10
    })

  ],

  autoUpgrades: [
    new Upgrade({
      id: 3,
      name: 'Gold-Cart',
      quantity: 1,
      price: 50,
      multiplier: 5
    }),
    new Upgrade({
      id: 4,
      name: 'Gold-O-Matic',
      quantity: 1,
      price: 250,
      multiplier: 20
    })
  ]

})
