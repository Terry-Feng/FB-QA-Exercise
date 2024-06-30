Feature: Format validation on input and output

  @inputValidation
  Scenario Outline: Handle various input formats
    Given the "NZ" home page is ready
    When the user inputs "<input>"
    Then the tool should display message "<message>"

    Examples:
      | input                                         | message                                                |
      |                                               | Input is required.                                     |
      | 0,0                                           | Please enter more than 1 point                         |
      | 0,0 a,0                                       | Please make sure the input follows the format required |
      | 0,0 1,1                                       | Valid input                                            |
      | 0,0 1,1 2,2 3,3 4,4 5,5 6,6 7,7 8,8 9,9 10,10 | Error: Exceeds max pairs                               |

  Scenario Outline: Check output formats
    Given the "NZ" home page is ready
    When the user inputs "<input>" and click analyze button
    Then the closest points are "<closest_A>" and "<closest_B>" with distance "<closest_dist>"
    Then the furthest points are "<furthest_A>" and "<furthest_B>" with distance "<furthest_dist>"
    Then the average distance between all points is "<average_dist>"

    Examples:
      | scenario     | input           | closest_A | closest_B | closest_dist | furthest_A | furthest_B | furthest_dist | average_dist |
      | Regular      | 0,0 0,1         | 0.0,0.0   | 0.0,1.0   | 1.00         | 0.0,0.0    | 0.0,1.0    | 1.00          | 1.00        |
      | Duplicate    | 0,0 0,0         | 0.0,0.0   | 0.0,0.0   | 0.00         | 0.0,0.0    | 0.0,0.0    | 0.00          | 0.00         |
      | Negative     | 0,0 0,-4        | 0.0,0.0   | 0.0,-4.0  | 4.00         | 0.0,0.0    | 0.0,-4.0   | 4.00          | 4.00         |
      | Float number | 0,0 0.123,1.123 | 0.0,0.0   | 0.1,1.1   | 1.13         | 0.0,0.0    | 0.1,1.1    | 1.13          | 1.13         |