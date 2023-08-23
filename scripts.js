document.getElementById("checkbox").addEventListener("change", function() {
    document.body.classList.toggle('dark-mode', this.checked);

    // Handle the navbar
    const navbar = document.querySelector('.navbar');
    if (this.checked) {
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
    } else {
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
    }
});
