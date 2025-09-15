import { reactive, ref } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  gold: 0,

  clickUpgrades: [
    new Upgrade({
      name: 'Hammer',
      quantity: 1,
      multiplier: 1
    }),
    new Upgrade({
      name: 'Golden Beat-Stick',
      quantity: 1,
      multiplier: 10
    })

  ],

  autoUpgrades: [
    new Upgrade({
      name: 'Gold-cart',
      quantity: 1,
      multiplier: 5
    }),
    new Upgrade({
      name: 'Gold-o-matic',
      quantity: 1,
      multiplier: 20
    })
  ]

})
