
// validation

function validation(){
    var name = document.getElementById("from_name").value;
    var email = document.getElementById("email_id").value;
    var phone = document.getElementById("phone_number").value;
    var message = document.getElementById("message").value;

    if(isNaN(phone) || phone.length !=10 ){
        return(false);
    }
    if(email.indexOf("@") == -1 || email.length < 6 ){
        return(false);
    }
    return true;
}   

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    if(validation()){

    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_sngpifg';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Successful!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
    }
    else{
        alert("Please enter valid data");
    }
  });