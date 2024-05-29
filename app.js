
// Menu data structure 
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];
// Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector("main");

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
const backColor = 'var(--main-bg)';
mainEl.style.backgroundColor = backColor;

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API
mainEl.classList = 'flex-ctr';

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
let topMenuColor = 'var(--top-menu-bg)';
topMenuEl.style.backgroundColor = topMenuColor;


// Add a class of flex-around to topMenuEl.
topMenuEl.classList = 'flex-around';

for( let i = 0; i < menuLinks.length; i++){
    const menuAEl = document.createElement('a');
    menuAEl.setAttribute('href',menuLinks[i]);
    menuAEl.textContent = menuLinks[i].text;
    topMenuEl.appendChild(menuAEl);
}




console.log(mainEl);
console.log(topMenuEl);