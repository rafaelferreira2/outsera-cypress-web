Feature: Cart

  Scenario: Add product to cart on product page
    Given Im on the home page logged
    When I go to "backpack" detail
    And add a on cart
    Then valid cart icon to "1" products

  Scenario: Add product to cart on home page
    Given Im on the home page logged
    When in home page, add a "backpack" on cart
    Then valid cart icon to "1" products

  Scenario: Add 2 products to cart on home page
    Given Im on the home page logged
    When in home page, add a "backpack" on cart
    And in home page, add a "jacket" on cart
    Then valid cart icon to "2" products

  Scenario: Validate cart Page with 1 product
    Given Im on the home page logged
    When in home page, add a "backpack" on cart
    And i go to cart page
    Then valid the product "backpack" on cart

  Scenario: Validate cart Page with 2 products
    Given Im on the home page logged
    When in home page, add a "backpack" on cart
    And in home page, add a "jacket" on cart
    And i go to cart page
    Then valid the product "backpack" on cart
    And valid the product "jacket" on cart