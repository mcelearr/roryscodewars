Test.describe("Basic tests",function(){
Test.assertSimilar(leagueCalculate("teamA","teamB","draw"), [["teamA",4],["teamB",4],["teamC",3],["teamD",3]])
Test.assertSimilar(leagueCalculate("teamC","teamD","win"), [["teamC",6],["teamA",4],["teamB",4],["teamD",3]])
Test.assertSimilar(leagueCalculate("teamA","teamC","draw"), [["teamC",7],["teamA",5],["teamB",4],["teamD",3]])
Test.assertSimilar(leagueCalculate("teamB","teamD","win"), [["teamB",7],["teamC",7],["teamA",5],["teamD",3]])
Test.assertSimilar(leagueCalculate("teamA","teamB","win"), [["teamA",8],["teamB",7],["teamC",7],["teamD",3]])
Test.assertSimilar(leagueCalculate("teamC","teamD","draw"), [["teamA",8],["teamC",8],["teamB",7],["teamD",4]])
Test.assertSimilar(leagueCalculate("teamD","teamA","draw"), [["teamA",9],["teamC",8],["teamB",7],["teamD",5]])
Test.assertSimilar(leagueCalculate("teamC","teamB","win"), [["teamC",11],["teamA",9],["teamB",7],["teamD",5]])
Test.assertSimilar(leagueCalculate("teamB","teamD","win"), [["teamC",11],["teamB",10],["teamA",9],["teamD",5]])
Test.assertSimilar(leagueCalculate("teamA","teamB","draw"), [["teamB",11],["teamC",11],["teamA",10],["teamD",5]])
})

Test.describe("Random tests",function(){
function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a);}
function leagueCalculate(team1, team2, result) {return leagueTable=leagueTable.map( ([n,s]) => [n,s+((n==team1)*((result=="win")*3+(result=="draw")) || n==team2 && result=="draw")] ).sort((a,b) => (b[1]-a[1])||(a[0]>b[0]) )}
var leagueTable = [["CodeWarriors",0],["Founders&Coders",0],["Quorans",0],["CodeCademists",0],["Eden of the East", 0],["Max Headroom", 0],["FSociety", 0],["Public Security Section 9", 0]]
var leagueSol = [["CodeWarriors",0],["Founders&Coders",0],["Quorans",0],["CodeCademists",0],["Eden of the East", 0],["Max Headroom", 0],["FSociety", 0],["Public Security Section 9", 0]]
var teams=["CodeWarriors", "Founders&Coders", "Quorans", "CodeCademists", "Eden of the East", "Max Headroom", "FSociety", "Public Security Section 9"]
)}
