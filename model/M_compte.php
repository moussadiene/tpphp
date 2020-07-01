<?php

    require_once 'M_db.php';

    function addCompte($numero,$matricule,$rib,$solde,$dateOuve,$fraisOuv,$remuneration,$typeCompte){

        $sql = "INSERT INTO compte (numero, mat, rib, solde, dateOuverture, fraisOuverture, remuneration, typeCompte)
             VALUES ('$numero','$matricule',$rib,$solde,'$dateOuve',$fraisOuv,$remuneration,$typeCompte)";
        $db = getConnexion();

        return $db->exec($sql);
    }

    function addCompteCourant($numero,$matricule,$rib,$solde,$dateOuve,$agios,$typeCompte){

        $sql = "INSERT INTO compte (numero, mat, rib, solde, dateOuverture, agios, typeCompte)
             VALUES ('$numero','$matricule',$rib,$solde,'$dateOuve',$agios,$typeCompte)";
        $db = getConnexion();

        return $db->exec($sql);
    }

    function addCompteBloque($numero,$matricule,$rib,$solde,$dateOuve,$fraisOuv,$remuneration,$date_debut,$date_fin,$typeCompte){

        $sql = "INSERT INTO compte (numero, mat, rib, solde, dateOuverture, fraisOuverture, remuneration, dateDebut,dateFin,typeCompte)
             VALUES ('$numero','$matricule',$rib,$solde,'$dateOuve',$fraisOuv,$remuneration,'$date_debut','$date_fin',$typeCompte)";
        $db = getConnexion();

        return $db->exec($sql);
    }

    function addSimpleEntreprise($numero,$id_entreprise,$rib,$solde,$dateOuve,$fraisOuv,$remuneration,$typeCompte){

        $sql = "INSERT INTO compte (numero, id_entreprise, rib, solde, dateOuverture, fraisOuverture, remuneration, typeCompte)
             VALUES ('$numero','$id_entreprise',$rib,$solde,'$dateOuve',$fraisOuv,$remuneration,$typeCompte)";
        $db = getConnexion();

        return $db->exec($sql);
    }

    function addBloqueEntreprise($numero,$id_entreprise,$rib,$solde,$dateOuve,$fraisOuv,$remuneration,$date_debut,$date_fin,$typeCompte){

        $sql = "INSERT INTO compte (numero, id_entreprise, rib, solde, dateOuverture, fraisOuverture, remuneration, dateDebut,dateFin,typeCompte)
             VALUES ('$numero','$id_entreprise',$rib,$solde,'$dateOuve',$fraisOuv,$remuneration,'$date_debut','$date_fin',$typeCompte)";
        $db = getConnexion();

        return $db->exec($sql);
    }

