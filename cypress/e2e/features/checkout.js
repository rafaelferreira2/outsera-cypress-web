import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
const products = require('../../fixtures/products.json')
const receivers = require('../../fixtures/receivers.json')
const messages = require('../../fixtures/messages.json')

Given("Im logged with {string} on cart", (product) => {
  const productTarget = products[`${product}`]

  cy.login()
  cy.addToCartHome(productTarget.name)
  cy.goToCart()
  cy.goToReceiver()
  cy.titlePage()
    .should('have.text', 'Checkout: Your Information')
})

When("i fill with {string} receiver step one", function (receiverType) {
  const receiver = receivers[`${receiverType}`]
  cy.fillReceiver(receiver)
})

Then("validate checkout step two with {string}", function (product) {
  const productTarget = products[`${product}`]
  cy.productRow(productTarget.name)
    .within(() => {
      cy.productName()
        .should('have.text', productTarget.name)

      cy.productDescription()
        .should('have.text', productTarget.description)

      cy.productPrice()
        .should('have.text', productTarget.price)
    })
})

Then("validate payment information {string}", function (product) {
  const productTarget = products[`${product}`]

  cy.subtotalPrice()
    .should('include.text', productTarget.price)

  cy.confirmOrder()
})

Then("I see order confirmed", function () {
  cy.titlePage()
    .should('have.text', messages.confirm_order_title.message)

  cy.successMessageOrder()
    .should('have.text', messages.confirm_order_message.message)
})

Then("I alert error {string}", function (errorType) {
  const messageTarget = messages[`${errorType}`]

  cy.alertError()
    .should('have.text', messageTarget.message)
})
