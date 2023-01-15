const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const auto = true;
const intervalTime = 5000;
let slideInterval;

// Button click listner 
nextBtn.addEventListener("click", (e) => {
 
    nextSlide();
    if(auto){
        clearInterval(slideInterval)

        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prevBtn.addEventListener("click", (e) => {
    prevSlide();

    if(auto){
        clearInterval(slideInterval)
        
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

const nextSlide = () => {
    // get current class
    const current = document.querySelector(".current");
    // remove current class
    current.classList.remove("current");
    // change current slide
    if(current.nextElementSibling){
        // jump current class to next class
        current.nextElementSibling.classList.add("current");
    }
    else{
        // reset slide
        slides[0].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
    // get current class
    const current = document.querySelector(".current");
    // remove current class
    current.classList.remove("current");
    // change current slide
    if(current.previousElementSibling){
        // jump current class to next class
        current.previousElementSibling.classList.add("current");
    }
    else{
        // reset slide
        slides[slides.length-1].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};

//  auto slide in interval time

if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}

// validation

// const btn = document.getElementById('button');

// document.getElementById('form')
//   .addEventListener('submit', function(event) {
//     event.preventDefault();

//     btn.value = 'Sending...';

//     const serviceID = 'default_service';
//     const templateID = 'template_sngpifg';

//     emailjs.sendForm(serviceID, templateID, this)
//       .then(() => {
//         btn.value = 'Send Email';
//         alert('Sent!');
//       }, (err) => {
//         btn.value = 'Send Email';
//         alert(JSON.stringify(err));
//       });
//   });


// function validation(){
//    var name = document.getElementById("from_name").value;
//    var email = document.getElementById("from_name").value;
//    var phone = document.getElementById("from_name").value;
//    var message = document.getElementById("from_name").value;
   
//    alert(name);
// }