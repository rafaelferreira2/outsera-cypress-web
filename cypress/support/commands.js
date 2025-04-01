const users = require('../fixtures/users.json')

Cypress.Commands.add('login', (username, password) => {
  user = users.standard_user
  cy.visit('/')
  cy.get("div[data-test='login-container']")
    .should('be.visible')

  cy.get("input[data-test='username']").type(user.username)
  cy.get("input[data-test='password']").type(user.password)
  cy.get("input[data-test='login-button']").click()
  cy.titlePage()
    .should('have.text', 'Products')
})

Cypress.Commands.add('titlePage', () => {
  cy.get("span[data-test='title']")
})

Cypress.Commands.add('addToCart', (product) => {
  cy.get("button[data-test='add-to-cart']").click()
  cy.get("button[data-test='remove']")
    .should('be.visible')
})

Cypress.Commands.add('productRow', (product) => {
  cy.contains("div[data-test='inventory-item']", product)
})

Cypress.Commands.add('productName', () => {
  cy.get("div[data-test='inventory-item-name']")
})

Cypress.Commands.add('productDescription', () => {
  cy.get("div[data-test='inventory-item-desc']")
})

Cypress.Commands.add('productPrice', () => {
  cy.get("div[data-test='inventory-item-price']")
})

Cypress.Commands.add('addToCartHome', (product) => {
  cy.contains("div[data-test='inventory-item-description']", product)
    .within(() => {
      cy.get("button.btn_primary").click()
      cy.get("button.btn_secondary").should('be.visible')
    })
})

Cypress.Commands.add('cartIcon', () => {
  cy.get("span[data-test='shopping-cart-badge']")
})

Cypress.Commands.add('goToCart', () => {
  cy.cartIcon().click()
  cy.get('span[data-test="title"]').should('be.visible')
})

Cypress.Commands.add('goToReceiver', () => {
  cy.get("button[data-test='checkout']").click()
})

Cypress.Commands.add('fillReceiver', (receiver) => {
  if (receiver.first_name != '') { cy.get("input[data-test='firstName']").type(receiver.first_name) }
  if (receiver.last_name != '') { cy.get("input[data-test='lastName']").type(receiver.last_name) }
  if (receiver.postal_code != '') { cy.get("input[data-test='postalCode']").type(receiver.postal_code) }
  cy.get("input[data-test='continue']").click()
})

Cypress.Commands.add('alertError', () => {
  cy.get("h3[data-test='error']")
})

Cypress.Commands.add('subtotalPrice', () => {
  cy.get("div[data-test='subtotal-label']")
})

Cypress.Commands.add('confirmOrder', () => {
  cy.get("button[data-test='finish']").click()
})

Cypress.Commands.add('successMessageOrder', () => {
  cy.get("h2[data-test='complete-header']")
})