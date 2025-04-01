Feature: Checkout

  Scenario: Checkout one product
    Given Im logged with "backpack" on cart
    When i fill with "valid_receiver" receiver step one
    And validate checkout step two with "backpack"
    And validate payment information "backpack"
    Then I see order confirmed

  Scenario: Checkout error receiver
    Given Im logged with "backpack" on cart
    When i fill with "<errorType>" receiver step one
    Then I alert error "<errorType>"

    Examples:
      | errorType         |
      | empty_first_name  |
      | empty_last_name   |
      | empty_postal_code |
      | empty_all_fields  |