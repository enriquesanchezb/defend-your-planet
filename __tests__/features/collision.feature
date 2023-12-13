Feature: Collision

  Scenario: Lose lives
    Given there is an <enemy> in the screen
    And the user has still lives
    When the <enemy> collision in the planet
    Then the user lose a live

    Examples: 
      | enemy    | lives |
      | asteroid |     1 |
      | lobster  |     8 |
      | rhino    |     4 |
      | beetle   |     1 |
