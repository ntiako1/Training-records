var btn = document.getElementById('btn');
var sidebar = document.getElementById('sidebar')

btn.addEventListener('click', function() {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
});

btn.addEventListener('click', function() {
    if (btn.classList.contains('fa-bars')) {
        btn.classList.remove('fa-bars');
        btn.classList.add('fa-x');
    } else {
        btn.classList.remove('fa-x');
        btn.classList.add('fa-bars');
    }
});