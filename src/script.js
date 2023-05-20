const sections= document.querySelectorAll(".section");
const sectBtns= document.querySelectorAll(".controls");
const sectBtn= document.querySelectorAll(".control");
const allSections= document.querySelector(".main-content");
var validRegex = /\S+@\S+\.\S+/;


function PageTransitions(){
    //Button click active class
     for(let i =0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn= document.querySelectorAll('.active-btn');
            currentBtn[0].className= currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
     }
     //Section activeClass
     allSections.addEventListener('click', (e)=>{
        const id= e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element= document.getElementById(id);
            element.classList.add('active');        
        }

     })
     //toggle theme
     const themeBtn= document.querySelector('.theme-btn');
     themeBtn.addEventListener('click', ()=>{
         let element= document.body;
         element.classList.toggle('light-mode')
})
}

PageTransitions();

function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    const serviceID="service_qxsob1h";
    const templateID="template_r5855hk";
    if(params.name=='' || params.email=='' || params.subject=='' || params.message=='' || params.email!==validRegex){
        alert("Please fill all the details correctly");
    }
    else{        
        emailjs
   .send(serviceID, templateID, params)
   .then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("subject").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message sent successfully");
    })
    .catch((err)=>
    alert("Error! Please try again later"));
    }   
}
