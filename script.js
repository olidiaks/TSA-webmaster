//Top Scroll button.
const scrollButton = () => {

	console.log(document.getElementById("#topButton"));

	function topFunction() {
  		document.body.scrollTop = 0; // For Safari
  		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	} 
};

scrollButton();
