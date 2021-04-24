/* Start of modal */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* End of modal */

function copyRef() {
    /* Get the text field */
    var copyText = document.getElementById("reflink");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

  function morePlan(){

    var button = document.getElementById("more");
    var button_container = document.getElementById("more-container");
    var more_content = document.getElementById("more-content");

    if(more_content.style.display=="none"){
      more_content.style.display="block";
     
    }else{
      
      more_content.style.display="none";
    }

  }