

var i=0;
var time =750;
var images=[];
  images[0]='image1.jpeg';
  images[1]='image2.jpeg';
  images[2]='image3.png';
  images[3]='image4.jpeg';
  function imageSlide(){
      document.slide.src=images[i]
 
      if (i <images.length -1){
        i++
      }
    
      else{
          i=0;
      } 
      setTimeout("imageSlide()",time );

  }

  window.onload=imageSlide;

