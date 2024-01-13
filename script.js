//Top Scroll button.
const scrollButton = () => {

	document.getElementById("topButton").addEventListener('click', topFunction);

	function topFunction() {
  		document.body.scrollTop = 0; // For Safari
  		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	} 
};

scrollButton();
