function changerLangue() {
    var langueSelectionnee = document.getElementById("langue").value;

    // Object contenant les traductions
    var traductions = {
        "aboutSection": {
            "fr": "À Propos de Moi",
            "en": "About Me"
        },
        "experienceSection": {
            "fr": "Expérience Professionnelle",
            "en": "Professional Experience"
        }
        // Ajouter d'autres traductions au besoin
    };

    // Mettre à jour le texte du menu
    var menuItems = document.querySelectorAll("#menu a");
    menuItems.forEach(function (item) {
        var sectionId = item.getAttribute("data-translate");
        item.textContent = traductions[sectionId][langueSelectionnee];
    });

    // Mettre à jour le texte des sections
    var sections = document.querySelectorAll(".section h2");
    sections.forEach(function (section) {
        var sectionId = section.textContent.trim();
        section.textContent = traductions[sectionId][langueSelectionnee];
    });
}
