
Scenario: Login
Given I access "Defend your planet" page
When I enter a <credential> credential
Then <expected_result>

Examples:
    | credential | expected_result                                       |
    | valid      | I should be redirected to the game                    |
    | invalid    | the message "Incorrect password!" should be displayed |
 