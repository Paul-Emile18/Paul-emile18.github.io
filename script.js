// Fonction pour remplir le formulaire avec les données stockées
function populateForm() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');

    if (name) document.getElementById('name').value = name;
    if (email) document.getElementById('email').value = email;
    if (message) document.getElementById('message').value = message;
}

// Fonction pour sauvegarder les données dans le Local Storage
function saveFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
}

// Événements
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire
    saveFormData(); // Sauvegarde les données
    alert('Données enregistrées !');
});

// Remplir le formulaire à l'ouverture de la page
window.onload = populateForm;
