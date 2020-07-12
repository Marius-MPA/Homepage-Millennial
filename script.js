// Get all tabs as a NodeList

const tabs= document.querySelectorAll('.menu-item');
console.log(tabs);

// Convert tabs NodeList to an array
var tabsArr = Array.from(tabs);
console.log(tabsArr);


for(let i=0; i < tabsArr.length; i++){
    tabsArr[i].addEventListener('click', function(){
        // first we remove class="current" from all tabs
        tabsArr.map(elem => elem.classList.remove('current'));

        // second we add at current tab class="current"
        tabsArr[i].classList.add('current');
    })
}


// Add function Show/Hide - navbar @media (max-width:750px)



document.getElementById('menu-icon').onclick = function(){myFunction()};

function myFunction(){

    document.querySelector('.menu-list').classList.toggle('showNav');
    
    // pt test
    // console.log('hello'); 
    // document.querySelector('#menu-icon').classList.toggle('color-t');
}