const header=document.querySelector(".header")
const footer=document.querySelector(".footer")
const main=document.querySelector(".main")
function choiceWhite(){
	header.style.background="white"
	header.style.transition="1s ease-out 0.5s"
	footer.style.background="white"
	footer.style.transition="1s ease-out 0.5s"
	footer.style.color="black"
	main.style.background="white"
	main.style.transition="1s ease-out 0.5s"
	main.style.color="black"
}
function choiceBlack(){
	header.style.background="black"
	header.style.transition="1s ease-out 0.5s"
	footer.style.background="black"
	footer.style.transition="1s ease-out 0.5s"
	footer.style.color="white"
	main.style.background="black"
	main.style.transition="1s ease-out 0.5s"
	main.style.color="white"
}