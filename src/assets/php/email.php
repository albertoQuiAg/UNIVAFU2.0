<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $data = json_decode($json);

        switch($data->sendMailTo) {
            case "uvf" :
                $to = "community.manager@univafu.edu.mx";
                break;
            case "iiu" :
                $to = "iiu@univafu.edu.mx";
                break;
            case "fun" :
                $to = "fundacionunivafu@univafu.edu.mx";
                break;
            case "iri" :
                $to = "inst.rehabilitacion@univafu.edu.mx";
                break;
            case "inn" :
                $to = "community.manager@univafu.edu.mx";
                break;
            default :
                $to = "community.manager@univafu.edu.mx";
        }

        $subject = "Hola mi nombre es: " . $data->nombre;
        $msg = "nombre: " . $data->nombre . "\ntelefono: " . $data->telefono . "\nemail: " . $data->email .
                "\nmensaje: " . $data->mensaje;
        $msg = wordwrap($msg, 70, "\r\n");

        // echo $msg;

        echo mail($to, $subject, $msg);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}