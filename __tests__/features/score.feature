
Scenario: Validate points at conflicts
Given I access "Defend your planet" page
When I enter a "valid" credential
And an <enemy> attack me
Then I should loose 1 point

Examples:
 | enemy        |
 | asteroid     | 
 | beetlemorph  |
 | lobstermorph |
 | planet       |
 | rhinomoph    |

Scenario: Validate points during attack
Given I access "Defend your planet" page
When I enter a "valid" credential
And I attack a <enemy> 
Then I should win 1 point

Examples:
 | enemy        |
 | asteroid     | 
 | beetlemorph  |
 | lobstermorph |
 | planet       |
 | rhinomoph    |
