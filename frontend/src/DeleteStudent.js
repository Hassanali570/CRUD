import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteStudent(){

    const {id} = useParams();
    const navigate = useNavigate();
     function deleteId(id){
         try{
             axios.delete('http://localhost:8081/delete/'+id)
             window.location.reload();
         }
         catch(err){
             console.log(err);
         }
     }
    return(
        <div>{deleteId}</div>
    )
}