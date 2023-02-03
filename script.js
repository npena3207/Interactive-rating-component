const mainContainer = document.querySelector(".main-container")
const thankYouContainer = document.querySelector(".thank-you-container")
const submitBtn = document.getElementById("submit")
const rateAgainBtn = document.getElementById("rate-again")
const ratingDisplay = document.getElementById("rating")
const ratesBtn = document.querySelectorAll(".btn")


submitBtn.addEventListener("click", () =>{
    if(ratesBtn > 0){
    thankYouContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
}
})

rateAgainBtn.addEventListener("click", () =>{
thankYouContainer.classList.add("hidden");
mainContainer.style.display = "block";
})

ratesBtn.forEach((rate) => {
    rate.addEventListener("click", () =>{
        ratingDisplay.innerHTML = rate.innerHTML;
    })
});
