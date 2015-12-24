<h1>Sports league table</h1>

Your local sports team manager wants to know how the team is doing in the league. You have been asked to write the manager a function that will allow them to update the league table.

<h3>League details</h3>

The possible results in the league are 'draw' and 'win' with 3 points for a win and 1 point each for a draw. For example:

-Team 1 wins against Team 2. Team 1 receives 3 points, Team 2 receives 0 points.

-Team 3 draws with Team 4. Team 3 receives 1 point, Team 4 receives 1 point.

The league table is stored in order from top to bottom in a 2-D array called ```leagueTable``` with each index containing a string (the team name) and a number (the number of points that team has). For example:
```javascript
[["teamC",6],["teamA",4],["teamB",4],["teamD",3]]
```
<h3>Function specification</h3>

Write a function called ```leagueCalculate()``` which takes three parameters; team 1 name, team 2 name and the result of the match. The function must add the correct points to teams 1 and 2 based on the result of the match and reorder the array based on new the league positions. League positions should be based first on the number of points then if points are equal, alphabetically.

You will be given the pre-loaded ```leagueTable```, in which the four teams currently all have 3 points. The function must return the updated array ```leagueTable``` after each result is input.
