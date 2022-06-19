let select = document.querySelector("select");
let html = document.querySelector("html");

function update(bgcolor, txtcolor) {
    html.style.backgroundColor = bgcolor;
    html.style.color = txtcolor;
    
}


select.addEventListener('change', () => {
    let choice = select.value;

    switch (choice) {
        case 'black':
            update('black', 'white');
            break;
        case 'white':
            update('white', 'black');
            break;
        case 'blue':
            update('blue', 'white')
            break;
        case 'green':
            update('green', 'white')
    }
})



// select.addEventListener('change', () => (select.value === 'black') ? update('black', 'white'): update('white', 'black'))