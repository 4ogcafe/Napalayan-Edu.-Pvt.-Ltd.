
  //Bottam to Top Button function      

$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop()>100) {
			$('#myBtn').fadeIn();
		}else{
			$('#myBtn').fadeOut();
		}
	});
$('#myBtn').click(function(){
	$('html,body').animate({scrollTop:0},100);
});
});


//------------------- Image Gallery scrip ---------------

 $(document).ready(function(){
    $('.galler').magnificPopup({
     type: 'image',
     delegate: 'a',
     gallery: {
      enabled : true
     }
    });
   });


// form validation function
function validateForm() {
  var x = document.forms["myForm"]["name","mobile","email","msg"].value;
      if (x == "") {
    alert("Something is Empty Fields. Please Fill complete form.");
    return false;
  }else if(x!==""){
  	alert("Thank you for contact us. We will contact you within 20 Minutes.");
  	return true;
  }
}

 // Image change onmouseover or out function
 function fimg()
{
this.setAttribute("src","images/corona1.jpg");
}
function simg()
{
this.setAttribute("src","images/corona2.jpg");
}



//------------------map script --------------------------------
function initialize(){
        var opt = {
          zoom: 3,          center: new google.maps.LatLng(27.7090319,85.2911131),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
         var contentOpt =  "<h4>Kathmandu</h4> <img src='img/ktm.jpg' height=150px' width='300px'>"

         var contentOpt2 = "<h4> This is my hometown</h4> <img src='img/lumbini.jpg' height=150px' width='300px'>" 
 

               var contentOpt3 ="<h4> Kyoto is current address</h4> <img src='img/kyoto.jpg' height=150px' width='300px'>"


         
         
        var mm = document.getElementById("mymap");  
        map = new google.maps.Map(mm, opt);
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(27.7090319,85.2911131),
          map: map,
          title: "Kathmandu",
          
        });
        

        var marker2 = new google.maps.Marker({
          position: new google.maps.LatLng(28.1964754,81.710344),
          map: map,
          title: "Lumbini",
        });
        
        var marker3 = new google.maps.Marker({
          position: new google.maps.LatLng(35.0979177,135.4386736),
          map: map,
          title: "Kyoto, Japan",
        });
        
       
        var info = new google.maps.InfoWindow({
            
          content: contentOpt

        });
        var info2 = new google.maps.InfoWindow({
          content: contentOpt2
        });
        var info3 = new google.maps.InfoWindow({
          content: contentOpt3
        });
       
                

        google.maps.event.addListener(marker, "click", function(){info.open(map,marker);});
        google.maps.event.addListener(marker2, "click", function(){info2.open(map,marker2);});
        google.maps.event.addListener(marker3, "click", function(){info3.open(map,marker3);});
        
      }
    google.maps.event.addDomListener(window, 'load', initialize);


//------------------- Shope script ---------------------------------------------

function changeImage(event){
      document.querySelector(".pro-img").src=event.children[0].src

      }

// ------------------------ Java Script -------------------------------------------

  var w = null;
  // Open a window
  function openWindow(){
    w = open("http://www.kcg.edu", "KCGI", "width=600px, height=400");
  }
  // Close the window which is open.
  function closeWindow(){
    if(w){
      w.close();
      w = null;
    }
  }


  function showLastname(){
    var n = document.form1.username.value;
    alert("Hello Mr/Ms " + n);
  }


  function showLanguage(){

    var languages = '';
    for (var i = 0; i<document.form3.lang.length; i++) {
      if (document.form3.lang[i].checked) {
        languages = languages + document.form3.lang[i].value + '';
      }
    }
    if (languages=='') {
      alert("You didnot choose the language.");
    }else{

        alert(languages);
      }
    }
  





  function showCoures(){
  var options = document.form4.books.options;
  for (var i = 0; i<document.form4.books.options.length; i++) {
    if (document.form4.books.options[i].selected) {
      alert("You selected " + document.form4.books.options[i].text);
    }
  }
  }


  function showGender(){  
    if ( ( form2.gender[0].checked == false ) && ( form2.gender[1].checked == false ) ) {
      alert ( "Please choose your Gender: Male or Female" ); 
    return false;
    }
    if (form2.gender[0].checked == true) {
      alert("Male");
    }else{

      alert("Female");
    }
  }

      
// ------------------- Digital Clock -------------------------------------------

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}