window.onload = function() {
	this.console.log("swiper slideshow");
	let rs = document.getElementsByName("r");
	let timer = this.setTimeout(() => circle(rs), 3000);
	for (let i of rs) {
		i.addEventListener("click", () => {
			clearTimeout(timer);
			console.log("clear");
			timer = this.setTimeout(() => circle(rs), 3000);
		});
	}
};

function circle(rs) {
	let swiperlength = rs.length;
	let currentCheck = this.document.querySelector("input[type='radio']:checked");
	let currentNumber = currentCheck.getAttribute("id")[1];
	let nextNumber = (currentNumber % swiperlength) + 1;
	rs[nextNumber - 1].click();
}
