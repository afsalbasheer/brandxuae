window.addEventListener('scroll',reveal);

function reveal(){
    var revealsOne = document.querySelectorAll('.section11');
    var revealsTwo = document.querySelectorAll('.section22');
    var revealsThree = document.querySelectorAll('.section33');
    
    for(var i=0; i<revealsOne.length; i++){
        var windowheight= window.innerHeight;
        var revealtop = revealsOne[i].getBoundingClientRect().top;
        var revealTwo = revealsTwo[i].getBoundingClientRect().top;
        var revealpoint = 130;

        if(revealtop < windowheight - revealpoint){
            revealsOne[i].classList.add('appear');
        }
        // else{
        //     revealsOne[i].classList.remove('appear');
        // } 
        
        
        if(revealTwo < windowheight - revealpoint){
            revealsTwo[i].classList.add('appear');
        }
        // else{
        //     revealsTwo[i].classList.remove('appear');
        // } 
    }
    for(var i=0; i<revealsThree.length; i++){
        var windowheight= window.innerHeight;
        var revealThree = revealsThree[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealThree < windowheight - revealpoint){
            revealsThree[i].classList.add('appear33');
        }    
    }

}


const technicalServicesContainer = document.querySelectorAll('.technical-service-container');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

technicalServicesContainer.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click',() => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth;
    })

})

