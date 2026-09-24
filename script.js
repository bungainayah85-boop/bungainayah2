alert("JavaScript berhasil terhubung!");
const petContainer = document.querySelector(".pet-container");
const prevPet = document.getElementById("prevPet");
const nextPet = document.getElementById("nextPet");

nextPet.addEventListener("click", function() {
    petContainer.scrollLeft += petContainer.offsetWidth;
});

prevPet.addEventListener("click", function() {
    petContainer.scrollLeft -= petContainer.offsetWidth;
});