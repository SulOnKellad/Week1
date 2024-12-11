const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const isWizard = confirm("Are you a wizard?");
const btnUpdateProfile = document.querySelector("#updateBtn");
//console.log(typeof isWizard);

if(isWizard === true){
    console.log("Welcome to Hogqarts!");
}
else {
    profileImage.src = "images/image2.jpg";
    firstNameSpan.innerHTML = "Dudely Dursley";
    ageSpan.innerHTML = 12;
    statusSpan.innerHTML = "Muggle";
    console.log("GET OUT!");
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/image3.jpg";
    firstNameSpan.innerHTML = "Lara Croft";
    ageSpan.innerHTML = 12;
    statusSpan.innerHTML = "Haua röövja";
    console.log("GET OUT!");


});