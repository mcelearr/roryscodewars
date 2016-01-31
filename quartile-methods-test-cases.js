Test.describe("Odd number of numbers",function(){
Test.assertEquals(Stats.median([1,2,3,4,5,6,7]),4);
Test.assertEquals(Stats.lowerQuartile([1,2,3,4,5,6,7]),2);
Test.assertEquals(Stats.upperQuartile([1,2,3,4,5,6,7]),6);
})

Test.describe("Even number of numbers",function(){
Test.assertEquals(Stats.median([1,2,3,4,5,6,7,8]),4.5);
Test.assertEquals(Stats.lowerQuartile([1,2,3,4,5,6,7,8]),2.5);
Test.assertEquals(Stats.upperQuartile([1,2,3,4,5,6,7,8]),6.5);
})

Test.describe("Unsorted arrays",function(){
Test.assertEquals(Stats.median([4,7,5,6,3,1,2]),4);
Test.assertEquals(Stats.lowerQuartile([6,7,4,3,5,2,1]),2);
Test.assertEquals(Stats.upperQuartile([5,1,4,2,3,6,7]),6);
})

Test.describe("Round to two decimal places",function(){
Test.assertEquals(Stats.median([1,2,3,4,5.5555,6,7,8]),4.78);
Test.assertEquals(Stats.lowerQuartile([1,2.2222,3,4,5,6,7,8]),2.61);
Test.assertEquals(Stats.upperQuartile([1,2,3,4,5,6.6666,7,8]),6.83);
})

Test.describe("Random tests",function(){

  var StatsTest = {};
    
    StatsTest.median = function(values) {
      values.sort(function(a,b){return a-b});
      var median = (values.length % 2 == 0) ? (values[(values.length/2) - 1] + values[(values.length / 2)]) / 2:values[Math.floor(values.length / 2)];
      return Math.round(median * 100) / 100;
    }; 
   
    StatsTest.lowerQuartile = function(values) {
      values.sort(function(a,b){return a-b});
      var q1Arr = (values.length % 2 == 0) ? values.slice(0, (values.length / 2)) : values.slice(0, Math.floor(values.length / 2));
      return this.median(q1Arr);
    };
    
    StatsTest.upperQuartile = function(values) {
      values.sort(function(a,b){return a-b});
      var q3Arr = (values.length % 2 == 0) ? values.slice((values.length / 2), values.length) : values.slice(Math.ceil(values.length / 2));
      return this.median(q3Arr);
    };
 
  for (var i = 0; i < 20; i++){
    var arrayLength = Math.floor(Math.random() * (20 - 5)) + 5;
    var array = [];
    
      for (var j = 0; j < arrayLength; j++){
        array[j] = Math.round(Math.random() * (1000 - 0) + 0 * 100) / 100;
      }
      
    Test.assertEquals(Stats.median(array),StatsTest.median(array),"Random test for median failed");
    Test.assertEquals(Stats.lowerQuartile(array),StatsTest.lowerQuartile(array),"Random test for lowerQuartile failed");
    Test.assertEquals(Stats.upperQuartile(array),StatsTest.upperQuartile(array),"Random test for upperQuartile failed"); 
  }

})