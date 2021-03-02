import React, {useEffect, useState} from "react";
import $ from "jquery";
import axios from "axios";

function FormTeacher(props){
 const [formData,getFormData]=useState({
 fname:"",
 lname:"",
 phone:"",
 position:"Student",
 email:"",
 password:""
 })
    // try {
    //     var selectSimple = $('.js-select-simple');
    
    //     selectSimple.each(function () {
    //         var that = $(this);
    //         var selectBox = that.find('select');
    //         var selectDropdown = that.find('.select-dropdown');
    //         selectBox.select2({
    //             dropdownParent: selectDropdown
    //         });
    //     });
    
    // } catch (err) {
    //     console.log(err);
    // }

    function HandleChange(event){
        const {name,value}=event.target;
        getFormData(prevvalue =>{
            return{
                ...prevvalue,
                [name]:value
            }
        })

    }

    function handleFormSubmit(event){
        event.preventDefault();
        // console.log(formData);
        async function postFormData(){
            var url = "http://localhost:4000/api/register";
            
            const data = formData;
            console.log(data);
            if(formData.position=="Teacher"){
                url = url+'/teacher';
            }
            else if(formData.position=="Student"){
                url = url+'/student';
            }
            const request = await axios.post(url, data);
            return request;
        }

        postFormData().then((res)=>{            
            console.log(res.data);
        })
    }
    
    //   return (
      
      


      
  
    //   );
  }
  export default FormTeacher;