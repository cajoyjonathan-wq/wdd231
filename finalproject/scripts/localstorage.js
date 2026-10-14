let confirmation = Number(localStorage.getItem("reviews")) || 0;

confirmation++;

localStorage.setItem("reviews", confirmation);

const displayCount = document.querySelector(".review");
if (displayCount) {
    displayCount.textContent = `You have currently have ${confirmation} confirmed applications! We will send a short confirmation shortly about your application.`;
}