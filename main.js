function start() { navigator.mediaDevices.getUserMedia({audio:"true"}); classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Il1vnGDcv/model.json", modelResult); } 
function modelResult() { classifier.classify(gotResults); }

function gotResults(error,results){
  if(error){
    console.log("error")
  }
  else{
    console.log(results)
  }
  
  var red=Math.floor(Math.random()*255)+1
  var blue=Math.floor(Math.random()*255)+1
  var green=Math.floor(Math.random()*255)+1
  document.getElementById("col").innerHTML="sound heard"+results[0].label
  document.getElementById("con").innerHTML="accuracy"+(results[0].confidence*100)+"%"
  
  document.getElementById("col").style.color="rgb('+red+','+green+','+blue+')"
  document.getElementById("con").style.color="rgb('+red+','+green+','+blue+')"
  
  if(results[0].label=="bell"){
    document.getElementById("img1").src="aliens-01.gif"
     document.getElementById("img2").src="aliens-02.png"
    document.getElementById("img3").src="aliens-03.png"
    document.getElementById("img4").src="aliens-04.png"
  }
  else if(results[0].label=="clap"){
    document.getElementById("img1").src="aliens-01.png"
     document.getElementById("img2").src="aliens-02.gif"
    document.getElementById("img3").src="aliens-03.png"
    document.getElementById("img4").src="aliens-04.png"
  }
 else if(results[0].label=="snap"){
    document.getElementById("img1").src="aliens-01.png"
     document.getElementById("img2").src="aliens-02.png"
    document.getElementById("img3").src="aliens-03.gif"
    document.getElementById("img4").src="aliens-04.png"
  }
  else if(results[0].label=="Background Noise"){
    document.getElementById("img1").src="aliens-01.png"
     document.getElementById("img2").src="aliens-02.png"
    document.getElementById("img3").src="aliens-03.png"
    document.getElementById("img4").src="aliens-04.gif"
  }
  }
