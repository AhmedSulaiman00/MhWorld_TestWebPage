

let posMonster = 0;
let imgCountMonster = document.querySelectorAll(".monsters img").length;
let radiosMonster = document.querySelectorAll('.monsterRadios input[type="radio"]');
// let rek;


//die Breite von imgContainer wird angepasst, je nachdem wie viele Bilder da sind
document.querySelector(".monsters").style.width = imgCountMonster * 100 + "%";



//Schleife um
radiosMonster.forEach ((e, i) => {
	e.addEventListener("click", () => {moveMonster(i)})
})

let moveMonster = (i) => {
	document.querySelector('.monsters').style.marginLeft = 300-(i * 200) + "%";
	radiosMonster[i].checked = true;
	posMonster = i;
}

// let autoMoveMonster = () => {
	// rek = setTimeout(() =>{
		// posMonster++
		// if(posMonster > imgCountMonster-1){
			// posMonster = 0;
		// }
		// clearTimeout(rek);
		// moveMonster(posMonster);
		// autoMoveMonster();
	// }, 5000);
// };

let posWeapons = 0;
let imgCountWeapons = document.querySelectorAll(".weapons img").length;
let radiosWeapons = document.querySelectorAll('.weaponRadios input[type="radio"]');
// let rek;


//die Breite von imgContainer wird angepasst, je nachdem wie viele Bilder da sind
// document.querySelector(".weapons").style.width = imgCountWeapons * 100 + "%";



//Schleife um
radiosWeapons.forEach ((e, i) => {
	e.addEventListener("click", () => {moveWeapons(i)})
})

let moveWeapons = (i) => {
	document.querySelector('.weapons').style.marginLeft = 300-(i * 200) + "%";
	radios[i].checked = true;
	posWeapons = i;
}

// let autoMoveWeapons = () => {
	// rek = setTimeout(() =>{
		// posWeapons++
		// if(posWeapons > imgCountWeapons-1){
			// posWeapons = 0;
		// }
		// clearTimeout(rek);
		// moveWeapons(posWeapons);
		// autoMoveWeapons();
	// }, 5000);
// };


const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else{
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));let pos = 0;

