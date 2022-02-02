import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// var WheelIndicator = require('wheel-indicator');
const header = document.querySelector('.header');
// const hero = document.querySelector('.hero');
// const services = document.querySelector('.services-videos');
// const features = document.querySelector('.features');
// const featuresHeight = features.offsetHeight;
// const featuresOffset = offset(features).top;
// const scrollTop = window.scrollY;
// const servicesHeight = services.offsetHeight;
gsap.registerPlugin(ScrollTrigger);
gsap.to(".features__background", {
	scrollTrigger: {
		trigger: ".features__background",
		start: "-400px 60%",
		end: "-200px top",
		scrub: 1.8,
		toggleActions: "restart none resume pause"
	},
	x: 569,
	duration: 1.4
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
	var st = window.pageYOffset || document.documentElement.scrollTop;
	if (st > lastScrollTop) {
		header.style.top = "-100%";
		header.style.opacity = "0.94";
		header.style.transition = "2"
	} else {
		header.style.top = "0";
	}
	lastScrollTop = st;

	
}, false);

