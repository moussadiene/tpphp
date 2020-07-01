/**let form_type_client = document.getElementById('form_type_client')**/

var form_type_client = document.getElementById('form_type_client');

var form_client_physique = document.getElementById('form_client_physique');

var form_client_moral = document.getElementById('form_client_moral');

var form_compte = document.getElementById('form_compte');

var form_compte_simple = document.getElementById('form_compte_simple');

var form_courant = document.getElementById('form_courant');

var form_bloque = document.getElementById('form_bloque');

var form_existant = document.getElementById('form_existant');

var valider = document.getElementById('valider');
//
var nouveau = document.getElementById('nouveau');

var physique = document.getElementById('physique');
var entreprise = document.getElementById('entreprise');
var compte_courant = document.getElementById('compte_courant');

var simple = document.getElementById('simple');
var courant = document.getElementById('courant');
var bloque = document.getElementById('bloque');


window.onload = function(){
    form_type_client.style.display = 'none';
    form_client_physique.style.display = 'none';
    form_client_moral.style.display = 'none';
    form_compte.style.display = 'none';
    form_compte_simple.style.display = 'none';
    form_courant.style.display = 'none';
    form_bloque.style.display = 'none';
    form_existant.style.display = 'none';
    valider.style.display = 'none';
}

function choixClient() {

  
    if (nouveau.checked){
        form_type_client.style.display = 'block';
        form_existant.style.display = 'none';
        form_client_physique.style.display = 'none';
        form_client_moral.style.display = 'none';
        form_compte.style.display = 'none';
        form_compte_simple.style.display = 'none';
        form_courant.style.display = 'none';
        form_bloque.style.display = 'none';
        valider.style.display = 'none';
        return 1;
    } else {
        form_existant.style.display = 'block';
        form_type_client.style.display = 'none';
        /****/

        form_client_physique.style.display = 'none';
        form_client_moral.style.display = 'none';
        form_compte_simple.style.display = 'none';
        form_compte.style.display = 'none';
        form_courant.style.display = 'none';
        form_bloque.style.display = 'none';
        valider.style.display = 'none';

        return 2;
    }
}

function choixTypeClient() {

    if (physique.checked){
        form_client_physique.style.display = 'block';
        form_client_moral.style.display = 'none';
        compte_courant.style.display = 'block';

        simple.checked = false;
        bloque.checked = false;
        courant.checked = false;

        form_compte_simple.style.display = 'none';
        form_courant.style.display = 'none';
        form_bloque.style.display = 'none';
        valider.style.display = 'none';
        form_compte.style.display = 'block';
        return 1;
    } else {
        form_client_moral.style.display = 'block';
        form_client_physique.style.display = 'none';
        compte_courant.style.display = 'none';

        simple.checked = false;
        bloque.checked = false;
        courant.checked = false;

        form_compte_simple.style.display = 'none';
        form_courant.style.display = 'none';
        form_bloque.style.display = 'none';
        valider.style.display = 'none';
        form_compte.style.display = 'block';
        return 2;
    }
}

function choixTypeCompte(){

    valider.style.display = 'block';
    var choixcompte = document.getElementById('choixcompte');
    if (simple.checked){
        form_compte_simple.style.display = 'block';
        form_courant.style.display = 'none';
        form_bloque.style.display = 'none';
        choixcompte.value = 'simple';
        return 1;
    } else {
        if (courant.checked) {
            form_compte_simple.style.display = 'none';
            form_courant.style.display = 'block';
            form_bloque.style.display = 'none';
            choixcompte.value = 'courant';
            return 2;
        }else{
            form_compte_simple.style.display = 'none';
            form_courant.style.display = 'none';
            form_bloque.style.display = 'block';
            choixcompte.value = 'bloque';
            return 3;
        }
    }
}

function searchValid() {
    form_compte.style.display = 'block';
}


function testChamps(champ){
    if(champ.value.length < 2 || champ.value.length > 25){
         champ.style.borderColor = "red";
         return false;
    }else{
         champ.style.borderColor = "green";
         return true;
    }
 }

 function testEmail(champ){
    var format_email = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    if(!format_email.test(champ.value)){
        champ.style.borderColor = "#791A1A";
        return false;
    }else{
        champ.style.borderColor = "#004d00";
        return true;
    }

}

 function testNumero(champ){
     var formatNum = /^[77]{2}[0-9]{3}[0-9]{2}[0-9]{2}|[78]{2}[0-9]{3}[0-9]{2}[0-9]{2}|[70]{2}[0-9]{3}[0-9]{2}[0-9]{2}|[76]{2}[0-9]{3}[0-9]{2}[0-9]{2}$/;
     if(formatNum.test(champ.value)){
         if(champ.value.length == 9){
             champ.style.borderColor = "#004d00";
             return true;
         }else{
             champ.style.borderColor = "#791A1A";
             return false;
         }
     }else{
         champ.style.borderColor = "#791A1A";
         return false;
     }
  }
  function testCNI(champ){

     if(champ.value.length >= 13){
         champ.style.borderColor = "#004d00";
         return true;
     }else{
         champ.style.borderColor = "#791A1A";
         return false;
     }
  }
function FormValider(form) {
    if(choixClient()==1){
        if(choixTypeClient()==1){
            var cni = testCNI(document.getElementById('cni'));
            var nom = testChamps(document.getElementById('nom'));
            var prenom = testChamps(document.getElementById('prenom'));
            var sexe = testChamps(document.getElementById('sexe'));
            var datenaiss = testChamps(document.getElementById('datenaiss'));
            var tel = testNumero(document.getElementById('tel'));
            var email = testEmail(document.getElementById('email'));
            if(cni && nom && prenom && sexe && datenaiss && tel && email){
                return true;
            }else{
               return false;
            }
        }else{
            var nom_entreprise = testChamps(document.getElementById('nom_entreprise'));
            var tel_entreprise = testChamps(document.getElementById('tel_entreprise'));
            var budget_entreprise = testChamps(document.getElementById('budget_entreprise'));
            var email_entreprise = testEmail(document.getElementById('email_entreprise'));
            if(nom_entreprise && tel_entreprise && budget_entreprise && email_entreprise){
                alert("Tous les champs sont bien renseigné");
                return true;
            }else{
                return false;
            }
        }
    }else{

    }

    // var search = document.getElementById('search');

    // var xhttp = new XMLHttpRequest();

    // var url = "../../controller/C_compte.php";

}
























// if(choixTypeClient()=="1"){

    //     var cni = testCNI(document.getElementById('cni'));
    //     var nom = testChamps(document.getElementById('nom'));
    //     var prenom = testChamps(document.getElementById('prenom'));
    //     var sexe = testChamps(document.getElementById('sexe'));
    //     var datenaiss = testChamps(document.getElementById('datenaiss'));
    //     // var adr = testChamps(document.getElementById('adr'));
    //     var tel = testNumero(document.getElementById('tel'));
    //     var email = testEmail(document.getElementById('email'));

    //     if(cni && nom && prenom && sexe && datenaiss && tel && email){
    //         return true;
    //         // if(choixTypeCompte() == 1){
    //         //     alert("simple");
    //         //     return true;
    //         // }else{
    //         //     if(choixTypeCompte() == 2){
    //         //         alert("courant");
    //         //         var raison_sociale = testChamps(document.getElementById('raison_sociale'));
    //         //         var salaire = testChamps(document.getElementById('salaire'));
    //         //         var nom_employeur = testChamps(document.getElementById('nom_employeur'));
    //         //         // var adr_employeur = testChamps(document.getElementById('adr_employeur'));
    //         //         if(raison_sociale && salaire && nom_employeur ){
    //         //             alert("Tous les champs sont bien renseigné");
    //         //             return true;
    //         //         }else{
    //         //             return false;
    //         //         }
    //         //     }else{
    //         //         alert("blowué");
    //         //         var date_debut = testChamps(document.getElementById('date_debut'));
    //         //         var date_fin = testChamps(document.getElementById('date_fin'));
    //         //         if(date_debut && date_fin){
    //         //             alert("Tous les champs sont bien renseigné");
    //         //             return true;
    //         //         }else{
    //         //             return false;
    //         //         }
    //         //     }
    //         // }

    //     }else{
    //         return false;
    //     }
    // }else{
    //     var nom_entreprise = testChamps(document.getElementById('nom_entreprise'));
    //     var tel_entreprise = testChamps(document.getElementById('tel_entreprise'));
    //     var budget_entreprise = testChamps(document.getElementById('budget_entreprise'));
    //     var email_entreprise = testEmail(document.getElementById('email_entreprise'));
    //     // var adr_entreprise = testChamps(document.getElementById('adr_entreprise'));
    //     if(nom_entreprise && tel_entreprise && budget_entreprise && email_entreprise){
    //         alert("Tous les champs sont bien renseigné");
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }




































// function Formulaire(form)
// {
//     alert("ok");
//     var email = testEmail(form.email);
//     var nomUt = testChamps(form.nomUt);
//     var solde = testChamps(form.solde);
//     if(typeCompte()==1){
//         var raison = testChamps(form.raison);
//         var sal = testChamps(form.sal);
//         var nomEmp = testChamps(form.nomEmp);
//         var telEmp = testChamps(form.telEmp);
//         var cniEmp = testChamps(form.cniEmp);
//         if(raison && sal && nomEmp && telEmp && cniEmp && email && nomUt && solde){
//             alert("Tous les champs sont bien renseigné");

//             return true;

//         }else {
//             return false;
//         }
//     }else{
//         if(typeCompte()==2){
//             if(email && nomUt && solde){
//                 alert("Tous les champs sont bien renseigné");
//                 return true;
//             }else {
//                 return false;
//             }
//         }else{
//             var dd = testChamps(form.dd);
//             var df = testChamps(form.df);
//             if(df && dd && email && nomUt && solde){
//                 alert("Tous les champs sont bien renseigné");
//                 return true;
//             }else {
//                 return false;
//             }
//         }
//     }
// }