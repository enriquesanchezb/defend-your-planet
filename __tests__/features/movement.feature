Feature: Movements

  Scenario: Move the rocket
    Given the game is started
    And the user drags the mouse to the <direction>
    Then the rocket is moving to the  <direction>

    Examples: 
      | direction |
      | right     |
      | left      |
