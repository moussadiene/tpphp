<?php

    require_once '../model/M_client.php';
    require_once '../model/M_compte.php';

    


    extract($_POST);

    $mat = codeAleatoire(8);
    $numero = codeAleatoire(8);
    $solde = 0;
    $rib = 1;
    $dateOuve = getDateNow();

    if($choix_client == "nouveau"){

        if($choix_type_client == "physique"){
            if($choixcompte == "simple"){
                $client = addClientS($mat,$cni,$nom,$prenom,$sexe,$datenaiss,$tel,$adr,$email);
                $fraisOuv = 25000;
                $remuneration = 10000;
                $typeCompte = 1;
                $compte = addCompte($numero,$mat,$rib,$solde,$dateOuve,$fraisOuv,$remuneration,$typeCompte);

                var_dump($compte);
                header('location:../view/V_accueil.php?ok=1');
            }elseif($choixcompte == "courant"){
                $client = addClientC($mat,$cni,$nom,$prenom,$sexe,$datenaiss,$tel,$adr,$email,$raison_sociale,$salaire,$nom_employeur,$adr_employeur);
                $agios = 10000;
                $typeCompte = 2;
                $compte = addCompteCourant($numero,$mat,$rib,$solde,$dateOuve,$agios,$typeCompte);
                var_dump($compte);
                header('location:../view/V_accueil.php?ok=1');
            }else{
                $client = addClientS($mat,$cni,$nom,$prenom,$sexe,$datenaiss,$tel,$adr,$email);
                var_dump($client);
                $fraisOuv = 25000;
                $remuneration = 10000;
                $typeCompte = 3;
                $compte = addCompteBloque($numero,$mat,$rib,$solde,$dateOuve,$fraisOuv,$remuneration,$date_debut,$date_fin,$typeCompte);

                var_dump($compte);
                header('location:../view/V_accueil.php?ok=1');
            }

        }else{
            $id_entreprise = addEntreprise($nom_entreprise,$tel_entreprise,$email_entreprise,$budget_entreprise,$adr_entreprise);
            if($choixcompte == "simple"){
                $fraisOuv = 25000;
                $remuneration = 10000;
                $typeCompte = 1;
                $compte = addSimpleEntreprise($numero,$id_entreprise,$rib,$solde,$dateOuve,$fraisOuv,$remuneration,$typeCompte);
                header('location:../view/V_accueil.php?ok=1');
            }else{
                $fraisOuv = 20000;
                $remuneration = 7500;
                $typeCompte = 3;
                $compte =  addBloqueEntreprise($numero,$id_entreprise,$rib,$solde,$dateOuve,$fraisOuv,$remuneration,$date_debut,$date_fin,$typeCompte);

            }
        }
    }

    function getDateNow()
    {
        $tz_object = new DateTimeZone('UTC');
        $datetime = new DateTime();
        $datetime->setTimezone($tz_object);
        return $datetime->format('Y\-m\-d');
    }

?>