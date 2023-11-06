// import validator from 'validator';
import  validator  from 'validator';

function validations(data) {
    // console.log(data , "data");
    const errors = {};

    if (validator.isEmpty(data?.username))
        errors.username = "Please provide your username.";

    if(validator.isEmpty(data?.number)) {
        errors.number = "Please provide your mobile number.";
        // console.log("mobiler");
    } else if(data?.number.length >10) {
        errors.number = "The mobile number must be 10 characters in length."
    }

    if(validator.isEmpty(data?.Email)) {
        errors.Email = "Please provide your email address.";
        // console.log("emailer");
    } else if(!validator.isEmail(data?.Email)) {
        errors.Email = "Please enter valid email address."
        // console.log("emailer2");
    }

    if(validator.isEmpty(data?.password)){
        errors.password = "Please provide your possword.";
    } else if(!validator.isStrongPassword(data?.password)) {
        // console.log("pass2");
        errors.password = "Password must contain at least One Uppercase letter, One Number and One Special Character and minimum 8 digits long."
    }

    if(validator.isEmpty(data?.confir_pass)){
        errors.confir_pass = "Please confirm your password.";
    }
    else if(!validator.equals(data?.password , data.confir_pass)){
        errors.confir_pass = "Passwords do not match."
    }

    return { errors, isValid: Object.keys(errors).length <= 0 };
}

export default validations;
