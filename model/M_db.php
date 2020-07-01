<?php

    function getConnexion()
    {
        $host = 'localhost';
        $user = 'djine';
        $password = 'mosila21';
        $dbname = 'banquepeuple';
        $dsn = "mysql:host=$host;dbname=$dbname";

        try {
            $mydb = new PDO($dsn,$user,$password);
            $mydb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $ex) {
            die('Erreur : '.$ex->getMessage());
        }
        return $mydb;
    }

    function codeAleatoire($car)
    {
        $string = "";
        $chaine = "2643789ABDCEFGHJKMNPRTUVW";
        srand((double)microtime()*1000000);
        for($i=0; $i<$car; $i++)
        {
            $string .= $chaine[rand()%strlen($chaine)];
        }
        return $string;
    }
?>