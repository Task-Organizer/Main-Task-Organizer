// const signUpButton = document.getElementById("signUp");
// const signInButton = document.getElementById("signIn");
// const container = document.getElementById("container");

signUp.addEventListener("click", () => {
    containerLOG.classList.add("right-panel-active");
});

signIn.addEventListener("click", () => {
    containerLOG.classList.remove("right-panel-active");
});
const close = document.getElementById("close");
joinus.addEventListener("click", addActive )
login.addEventListener("click", addActive);
close.addEventListener("click",removeActive)

function addActive() {
    containerLOG.classList.add("activelog");
    document.getElementById("blur").classList.add("blur")
    document.querySelector(".hero-text").classList.add("blur")
}
function removeActive() {
    containerLOG.classList.remove("activelog");
    document.getElementById("blur").classList.remove("blur")
    document.querySelector(".hero-text").classList.remove("blur")

}