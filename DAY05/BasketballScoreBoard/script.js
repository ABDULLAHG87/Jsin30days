
let homeEl = document.getElementById('home_count');
let guestEl = document.getElementById('guest_count');
home_count = 0;
guest_count  = 0;

// function incrementByOne(team){
//     home_count = home_count + 1;
//     unitCount = home_count % 10;
//     tensCount = Math.floor(home_count/10);
//     let realCount = String(tensCount) + String(unitCount); 
//     homeEl.textContent = realCount;
// }
// function incrementByTwo(){
//     home_count = home_count + 2;
//     unitCount = home_count % 10;
//     tensCount = Math.floor(home_count/10);
//     let realCount = String(tensCount) + String(unitCount); 
//     homeEl.textContent = realCount;
// }
// function incrementByThree(){
//     home_count = home_count + 3;
//     unitCount = home_count % 10;
//     tensCount = Math.floor(home_count/10);
//     let realCount = String(tensCount) + String(unitCount); 
//     homeEl.textContent = realCount;
// }
// function incrementGuestByOne(){
//     guest_count = guest_count + 1;
//     unitCount = guest_count % 10;
//     tensCount = Math.floor(guest_count/10);
//     let realCount = String(tensCount) + String(unitCount); 
//     guestEl.textContent = realCount;
// }
// function incrementGuestByTwo(){
//     guest_count = guest_count + 2;
//     unitCount = guest_count % 10;
//     tensCount = Math.floor(guest_count/10);
//     let realCount = String(tensCount) + String(unitCount); 
//     guestEl.textContent = realCount;
// }
// function incrementGuestByThree(){
//     guest_count = guest_count + 3;
//     unitCount = guest_count % 10;
//     tensCount = Math.floor(guest_count/10);
//     let realCount = String(tensCount) + String(unitCount); 
//     guestEl.textContent = realCount;
// }


function incrementScore(team, increment) {
    if (team === 'home') {
        home_count += increment;
        updateDisplay(homeEl, home_count)
    } else if (team ==='guest') {
        guest_count += increment;
        updateDisplay(guestEl, guest_count)
    }
    highlightLeadingTeam();
}


function updateDisplay(elementId, score) {
    let scoreValue = score < 10 ? `0${score}`: `${score}`;
    console.log(scoreValue);
    elementId.textContent = scoreValue;
}

function highlightLeadingTeam(){
    if (home_count > guest_count) {
        homeEl.style.color = 'green';
        guestEl.style.color = 'red';
    } else if (guest_count > home_count) {
        guestEl.style.color = 'green'
        homeEl.style.color ='red'
    } else {
        homeEl.style.color = 'red';
        guestEl.style.color = 'red';
    }
}