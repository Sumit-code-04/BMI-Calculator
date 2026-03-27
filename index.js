let height,weight,BMI;
document.getElementById("submit").onclick = function(){
  height = document.getElementById("input1").value ;
  height = Number(height);
  height =  (height * 0.3048);
  height = height*height;
  weight = document.getElementById("input2").value ;
  weight = Number(weight);
  BMI = weight / height;
  //console.log(BMI);
  document.getElementById("result").textContent = `Your are BMI : ${BMI}`;
}