function calculerPrix() {
    let qte = document.getElementById("qte").innerHTML;
    let prix = document.getElementById("prix").innerHTML;

    let qte1 = document.getElementById("qte1").innerHTML;
    let prix1 = document.getElementById("prix1").innerHTML;

    let qte2 = document.getElementById("qte2").innerHTML;
    let prix2 = document.getElementById("prix2").innerHTML;

    let qte3 = document.getElementById("qte3").innerHTML;
    let prix3 = document.getElementById("prix3").innerHTML;

    let qte4 = document.getElementById("qte4").innerHTML;
    let prix4 = document.getElementById("prix4").innerHTML;
    
    let prixTotal = (qte * prix) + (qte1 * prix1) + (qte2 * prix2) + (qte3 * prix3) + (qte4 * prix4);

    document.getElementById("resultat").innerHTML = prixTotal;

    return prixTotal;
}