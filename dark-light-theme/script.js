let select = document.querySelector('select');
let html = document.querySelector('html');


function changeTheme(bgcolor, txtcolor) {
    html.style.backgroundColor = bgcolor;
    html.style.color = txtcolor;
}
select.addEventListener('change', () => (select.value === 'black' ) ? changeTheme('black', 'white') : changeTheme('white', 'black'));