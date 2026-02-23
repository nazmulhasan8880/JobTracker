function updateCounts() {
const cards = document.querySelectorAll('.jobCard');
let total = cards.length;
let interview = 0;
let rejected = 0;

cards.forEach(card => {
if(card.dataset.status === "interview") interview++;
if(card.dataset.status === "rejected") rejected++;
});

document.getElementById("totalCount").innerText = total;
document.getElementById("interviewCount").innerText = interview;
document.getElementById("rejectedCount").innerText = rejected;
}

function updateStatus(btn, status) {
const card = btn.closest('.jobCard');
const tag = card.querySelector('.statusTag');



if(card.dataset.status === status){
card.dataset.status = "all";
tag.innerText = "NOT APPLIED";
tag.className = "statusTag text-xs px-3 py-1 rounded bg-blue-100 text-blue-600 font-semibold";
} else {
card.dataset.status = status;
tag.innerText = status.toUpperCase();
tag.className = status === "interview"
? "statusTag text-xs px-3 py-1 rounded bg-green-100 text-green-600 font-semibold"
: "statusTag text-xs px-3 py-1 rounded bg-red-100 text-red-600 font-semibold";
}

updateCounts();
}

function deleteCard(btn){
btn.closest('.jobCard').remove();
updateCounts();
filterJobs('all');
}

function filterJobs(type){
const cards = document.querySelectorAll('.jobCard');
let visible = 0;

cards.forEach(card => {
if(type === "all"){
card.style.display = "block";
visible++;
}
else if(card.dataset.status === type){
card.style.display = "block";
visible++;
}
else{
card.style.display = "none";
}
});

document.getElementById("tabCount").innerText = visible;

document.getElementById("noJobs").classList.toggle("hidden", visible !== 0);
}


///h

function filterJobs(type){

const cards = document.querySelectorAll('.jobCard');
const buttons = document.querySelectorAll('.tabBtn');
let visible = 0;


buttons.forEach(btn => {
btn.classList.remove("bg-blue-500", "text-white");
btn.classList.add("bg-gray-200", "text-black");

if(btn.innerText.toLowerCase() === type){
btn.classList.remove("bg-gray-200", "text-black");
btn.classList.add("bg-blue-500", "text-white");
}
});


cards.forEach(card => {
if(type === "all"){
card.style.display = "block";
visible++;
}
else if(card.dataset.status === type){
card.style.display = "block";
visible++;
}
else{
card.style.display = "none";
}
});

document.getElementById("tabCount").innerText = visible;
document.getElementById("noJobs").classList.toggle("hidden", visible !== 0);
}
