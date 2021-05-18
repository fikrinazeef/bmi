
  function BMI() {
    var h=document.getElementById('height').value;
    var w=document.getElementById('weight').value;
    var bmi=w/(h/100*h/100);
    var bmic=(bmi.toFixed(2));

    document.getElementById("result").innerHTML="Your BMI is " + bmic;

  }
