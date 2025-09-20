    const button = document.querySelector('.btn')
    const main = document.querySelector('main')

    if (localStorage.getItem('main-fon') === 'true') {
        main.classList.add('main-fon');
        main.classList.remove('main');
    } else {
        main.classList.remove('main-fon');
        main.classList.add('main');
    }

    button.addEventListener('click', function(){
        main.classList.toggle('main-fon');
        main.classList.toggle('main')
        localStorage.setItem('main-fon', main.classList.contains('main-fon'));
    })

