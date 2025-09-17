// animation macht object größer beim mausover
let animation = document.querySelectorAll(".anime");
for(let i=0;i<animation.length;i++){
    animation[i].addEventListener("mouseover",function(){
        animation[i].style.transform = "scale(1.2)";
    }); 
    //zuruck zu original größe bei mausout   
    for(let i=0;i<animation.length;i++){
        animation[i].addEventListener("mouseout",function(){
            animation[i].style.transform = "scale(1)";
        });
    }        
}

//Logo beim hover ersetzen
let nav_mail, nav_call, nav_insta;
//Element "mail"
    nav_mail= document.getElementById("nav_mail");
    nav_mail.addEventListener("mouseover", function(){
        nav_mail.src = 'img/logos/mail2.png';
    });
    nav_mail.addEventListener("mouseout", function(){
        nav_mail.src = 'img/logos/mail.png';
    });
    //Element "call"
    nav_call= document.getElementById("nav_call");
    nav_call.addEventListener("mouseover", function(){
        nav_call.src = 'img/logos/call2.png';
    });
    nav_call.addEventListener("mouseout", function(){
        nav_call.src = 'img/logos/call.png';
    });
    //Element "instagram"
    nav_insta= document.getElementById("nav_insta");
    nav_insta.addEventListener("mouseover", function(){
        nav_insta.src = 'img/logos/insta2.png';
    });
    nav_insta.addEventListener("mouseout", function(){
        nav_insta.src = 'img/logos/insta.png';
    });