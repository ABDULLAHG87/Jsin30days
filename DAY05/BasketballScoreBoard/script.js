
let homeEl = document.getElementById('home_count');
let guestEl = document.getElementById('guest_count');
home_count = 0;
guest_count  = 0;

function incrementByOne(team){
    if team ==
    home_count = home_count + 1;
    unitCount = home_count % 10;
    tensCount = Math.floor(home_count/10);
    let realCount = String(tensCount) + String(unitCount); 
    homeEl.textContent = realCount;
}
function incrementByTwo(){
    home_count = home_count + 2;
    unitCount = home_count % 10;
    tensCount = Math.floor(home_count/10);
    let realCount = String(tensCount) + String(unitCount); 
    homeEl.textContent = realCount;
}
function incrementByThree(){
    home_count = home_count + 3;
    unitCount = home_count % 10;
    tensCount = Math.floor(home_count/10);
    let realCount = String(tensCount) + String(unitCount); 
    homeEl.textContent = realCount;
}
function incrementGuestByOne(){
    guest_count = guest_count + 1;
    unitCount = guest_count % 10;
    tensCount = Math.floor(guest_count/10);
    let realCount = String(tensCount) + String(unitCount); 
    guestEl.textContent = realCount;
}
function incrementGuestByTwo(){
    guest_count = guest_count + 2;
    unitCount = guest_count % 10;
    tensCount = Math.floor(guest_count/10);
    let realCount = String(tensCount) + String(unitCount); 
    guestEl.textContent = realCount;
}
function incrementGuestByThree(){
    guest_count = guest_count + 3;
    unitCount = guest_count % 10;
    tensCount = Math.floor(guest_count/10);
    let realCount = String(tensCount) + String(unitCount); 
    guestEl.textContent = realCount;
}

if (home_count > guest_count) {
    homeEl.style.color = 'green'
} else if(guest_count > home_count) {
    guestEl.style.color = 'green';
} else {
    homeEl.style.color = 'white';
    guestEl.style.color = 'white';
}