//The variable index will be used to pick from array image, start with the first image
var index = 0;
//Calling/running the function show_slide defined below to show the first image by default
show_slide(index);

// defining the function with parameter Num: Value of Num will be -1 for Prev button click,+1 for Next
// It is used in HTML(id="prev" onclick="show_slide(-1)")
function show_slide(Num) {
    //When user click on next Num=1 and Index will increase by 1(eg 0 to 1)
    index = index+Num;
    //When Index is higher than 7 or lowe than 0 it sets to 0 or 7, so that it is repeating
    if (index>7) {
        index = 0;
    }
    if (index<0) {
        index = 7;
    }
    ///All Image code
    //this will create an array with our images called images
    var images = document.getElementsByClassName("image");
    
    //This will hide all the images before we will show the exact image we want
    for(i=0;i<8; i++){   
    images[i].style.display = "none";}

    // This is to show the exact image: eg. when Index=0 it will display first image, index=1:second image etc.
    images[index].style.display = "block";

    ///All Dot code
    //this will create an array with our dots called dot
    var dots = document.getElementsByClassName("dot");
    
     // remove the active class from the dot
    for (i = 0; i < dots.length; i++) 
    dots[i].className = dots[i].className.replace(" active", "");

      // only make the current dot active
     dots[index].className += " active";
}

