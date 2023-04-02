function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm');
  const element = document.createElement('p');
  const message = document.createTextNode("L'email ne correspond pas");
  element.appendChild(message);
  element.setAttribute('id', 'alert');
  element.classList.add("alert_color");
  const contentField = document.getElementById('content_field');
  emailComfirmField.addEventListener('input', e =>{
      if (form.email.value !== form.email_confirm.value) 
      {
        if (!document.getElementById('alert')) 
        {
          contentField.parentNode.insertBefore(element, contentField);
          emailComfirmField.classList.add("alert_");
        }
      } 
      else 
      {
        emailComfirmField.classList.remove("alert_");
        element.parentNode.removeChild(element);
      }
    });
};

window.onload = emailValidation ;
