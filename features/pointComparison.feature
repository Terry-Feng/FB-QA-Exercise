Feature: Point Comparison

  Scenario Outline: Calculate closest, furthest, and average distances
    Given the "NZ" home page is ready
    When the user inputs "<input>" and click analyze button
    Then the expected closest distance is "<closest_dist>"
    Then the expected furthest distance is "<furthest_dist>"
    Then the average distance between all points is "<average_dist>"

    Examples:
      | scenario        | input                                   | closest_dist | furthest_dist | average_dist |
      | Negative        | 0,0 0,-4                                | 4.00         | 4.00          | 4.00         |
      | Multiple points | 0,0 1,1 2,2 3,3 4,4 5,5 6,6 7,7 8,8 9,9 | 1.41         | 12.73         | 5.19         |
