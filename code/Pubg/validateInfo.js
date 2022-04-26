

export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }
  else if (!/^[A-Za-z]+/.test(values.username.trim())) {
    errors.username = 'Enter a valid name';
  }

  if (!values.email) {
    errors.email = 'Email required';
    errors.email = 'Email address is invalid';
  }
// number
  if(!values.number){
    errors.number = 'enter a WhatsApp no.';
  } 
  else if(isNaN(values.number)){
    errors.number = 'enter a WhatsApp no '
  }
  else if (/[0-9]/.test(values.number)){
   
  }

else if(!values.number.length<10 ){
    errors.number = 'Mobile Number must be 10 digit'
   
  }
 

  else if(!values.number.length>10){
    errors.number = 'Mobile Number must be 10 digit'
  }
  // bgmi gaming name 
  if (!values.BgmiName) {
    errors.BgmiName = 'BGMI Name required';
  }
  if (!values.BgmiID) {
    errors.BgmiID = 'BGMI ID required';
  }
  else if(isNaN(values.BgmiID)){
    errors.BgmiID = 'enter a BGMI ID number'
  }
  // else if (/[0-9]/.test(values.BgmiID)){
  //  errors
  // }

  return errors;
}
