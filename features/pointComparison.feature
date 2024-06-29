Feature: Point Comparison

  Scenario Outline: Handle various input formats
    Given the "NZ" home page is ready
    When the user inputs "<input>"
    Then the tool should display "<message>"

    Examples:
      | input   | message                                                |
      |         | Input is required.                                     |
      | 0,0     | Please enter more than 1 point                         |
      | 0,0 a,0 | Please make sure the input follows the format required |
      | 0,0 1,1 | Valid input                                            |