import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
const products = require('../../fixtures/products.json')

Given("Im on the home page logged", () => {
  cy.login()
})

When("I go to {string} detail", function (product) {
  const productTarget = products[`${product}`]
  cy.contains(productTarget.name).click()
  cy.productName()
    .should('be.visible')
})

When("add a on cart", function () {
  cy.addToCart()
})

When("in home page, add a {string} on cart", function (product) {
  const productTarget = products[`${product}`]
  cy.addToCartHome(productTarget.name)
})

When("i go to cart page", function () {
  cy.goToCart()
})

Then("valid cart icon to {string} products", (quantity) => {
  cy.cartIcon()
    .should('have.text', quantity)
})

Then("valid the product {string} on cart", (product) => {
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