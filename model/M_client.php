<?php
    require_once 'M_db.php';
    function addClientS($matricule,$cni,$nom,$prenom,$sexe,$datenaiss,$tel,$adresse,$email){
        $sql = "INSERT INTO personne VALUES('$matricule','$cni','$nom','$prenom','$sexe','$datenaiss','$tel',$adresse,'$email',null,null,null,null,null,null)";
        $db = getConnexion();
        return $db->exec($sql);
    }

    function addClientC($matricule,$cni,$nom,$prenom,$sexe,$datenaiss,$tel,$adresse,$email,$raison_sociale,$salaire,$nom_employeur,$adr_employeur){
        $sql = "INSERT INTO personne VALUES('$matricule','$cni','$nom','$prenom','$sexe','$datenaiss','$tel',$adresse,'$email','$raison_sociale',$salaire,'$nom_employeur','$adr_employeur',null,null)";
        $db = getConnexion();
        return $db->exec($sql);
    }

    function addEntreprise($nom_entreprise,$tel_entreprise,$email_entreprise,$budget_entreprise,$adr_entreprise){
        $budget_entreprise = floatval($budget_entreprise);
        $sql = "INSERT INTO entreprise VALUES(Null,'$nom_entreprise','$tel_entreprise','$email_entreprise',null,null,$budget_entreprise,'$adr_entreprise')";
        $db = getConnexion();

        $db->exec($sql);
        return  $db->lastInsertId();
    }

    // function getClient($matricule)
    // {
    //     $sql = "SELECT * From client WHERE ";
    //     $db = getConnexion();
    //     return $db->exec($sql);
    // }

