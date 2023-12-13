Feature: End Game

  Scenario: Winning game
    Given there is an <enemy> in the screen
    And the user has an score of less than <enemy_lives>
    When the user hit the <enemy>
    Then the <enemy> disappears
    And the score sum more or equal than 50 points
    And the user win the game

    Examples: 
      | enemy    | lives |
      | asteroid |     1 |
      | lobster  |     8 |
      | rhino    |     4 |
      | beetle   |     1 |

  Scenario: Losing game
    Given there is an <enemy> in the screen
    And the user has one live
    When the <enemy> collision in the planet
    Then the user lose a live
    And the game ends

    Examples: 
      | enemy    |
      | asteroid |
      | lobster  |
      | rhino    |
      | beetle   |
