// ===== References sections collapse buttons ==== 
function changeCollapseButton1(){
    console.log("Inside changeCollapseButton1 function");
	 	var oneFirstButton = document.getElementById("1button-1row");
  	var oneSecondButton = document.getElementById("1button-2row");

  	if (oneSecondButton.classList.contains('display-none')) { //If first button is visible
  		console.log("Inside changeCollapseButton1 function's IF");
      changeUp(oneFirstButton, oneSecondButton);
  	} else { //Second button is visible
  		console.log("Inside changeCollapseButton1 function's ELSE");
      changeDown(oneFirstButton, oneSecondButton);
  	}
}

function changeCollapseButton2(){	
  	var twoFirstButton = document.getElementById("2button-1row");
  	var twoSecondButton = document.getElementById("2button-2row");

  	if (twoSecondButton.classList.contains('display-none')) { //If first button is visible
  		changeUp(twoFirstButton, twoSecondButton);
  	} else {  	// Second button is visible
  		changeDown(twoFirstButton, twoSecondButton);
  	}
}

// Make the second button visible and first unvisible
function changeUp(firstRow, secondRow){
  firstRow.classList.toggle('display-none', true); //Add class display-none
  secondRow.classList.toggle('display-none', false); //Remove class display-none
}

// Make the first button visible and second unvisible
function changeDown(firstRow, secondRow) {
	 firstRow.classList.toggle('display-none', false); //Remove class display-none
	 secondRow.classList.toggle('display-none', true); //Add class display-none	
}


//=========================

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});