document.getElementById("b1").addEventListener("click", function() {
    alert("Hello World!");
  });

  var x= document.getElementById("b2");
  x.addEventListener("mouseover", myfunction1);
  x.addEventListener("click", myfunction2);
  x.addEventListener("mouseout", myfunction3);

  function myfunction1(){
    document.getElementById("notification").innerHTML="mouse over <br>";
  }
  function myfunction2(){
    document.getElementById("notification").innerHTML="mouse cliked <br>";
  }
  function myfunction3(){
    document.getElementById("notification").innerHTML="mouse out <br>";
  }