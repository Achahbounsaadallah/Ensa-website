function ouvrirPDF(fichier) {
    fichier = fichier.replace(/ /g, "%20");
    window.open(fichier,"_blank");
}