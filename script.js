const detectsScroll = document.getElementById("detectsScroll"), // the square at the top that detects if I have scrolled
      title = document.getElementById("title");

// checking if an object is visible on the viewport. 
// 
var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
    console.log('Element is visible on viewport', title.classList);
    title.classList.add("beforeScroll");
    title.classList.remove("afterScroll");

  } else if(entries[0].isIntersecting === false){
    console.log('Element is not visible viewport', title.classList);
    title.classList.add("afterScroll");
    title.classList.remove("beforeScroll");
  };
}, { threshold: [0] }); 
// a number that represents the viewable area of the detectsScroll element on the screen

// observing the detectsScroll element
observer.observe(detectsScroll);
