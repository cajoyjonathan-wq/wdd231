console.log("Review script is running!");

const open = document.querySelector("#open-modal");
const close = document.querySelector("#close-modal");
const modal = document.querySelector("#modal-open");

console.log("Open button:", open);
console.log("Modal:", modal);

open.addEventListener('click', () => modal.showModal());
close.addEventListener('click', () => modal.close());


