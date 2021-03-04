var togglersidebar = document.querySelector('.navbar-toggler-icon');
togglersidebar.addEventListener('click', () => {

    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');

});


const toogleMateryAll = document.querySelectorAll('.toogle-matery');

toogleMateryAll.forEach((matery) => {
    const next = matery.nextElementSibling;

    matery.addEventListener('click', function() {

        if (next.classList.contains('active')) {
            next.classList.remove('active');
        } else {
            let current = document.querySelector('.container-container-materias.active');
            if (current) {
                current.classList.remove('active');
            }
            next.classList.add('active');
        }
    })

});