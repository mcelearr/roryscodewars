Test.describe("Basic tests",function(){
Test.assertEquals(calculator(5, 6, 1),"Bus","The bus should win this time!");
Test.assertEquals(calculator(4, 5, 1),"Walk","Come on, you can walk this!");
Test.assertEquals(calculator(5, 8, 0),"Walk","If the time is exactly the time, you should walk it!");
Test.assertEquals(calculator(5, 4, 3),"Walk","There's no point taking the bus if it drops you in the middle of nowhere!");
Test.assertEquals(calculator(11, 15, 2),"Bus","Don't be crazy! You'll destroy your lovely shoes!");
Test.assertEquals(calculator(0.6, 0.4, 0),"Walk","Wow. Seriously? How lazy are you?");
})

Test.describe("Random tests",function(){
    
  function solution(distance, busDrive, busWalk) {
  //solution kept secret
  }
  
  for (var i = 0; i < 40; i++){
    var d = Math.random() * (15 - 0) + 0;
    var bD = Math.random() * (15 - 0) + 0;
    var bW = Math.random() * (4 - 0) + 0;
  console.log(d.toFixed(2)+"km walking, "+ bD.toFixed(2)+"km by bus with "+ bW.toFixed(2)+"km to/from the bus stop");
  Test.assertEquals(calculator(d, bD, bW),solution(d, bD, bW),"Should also pass random tests!")
  }
})
