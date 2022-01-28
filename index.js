var spanContainers = document.querySelectorAll('.title div');

spanContainers.forEach(function (item) {
    var letters = item.children[0].textContent.split('');
    item.innerHTML = "";
    letters.forEach(function (el, index) {
        item.innerHTML += "<span style=\'transition-delay: " + 0.04 * index + "s\'>" + el + "</span>";
    });
});


// permet d'animer les lettres
// function animTitre() {
//
//     const title = document.getElementsByClassName('sample-title')[0];
//
//     let sampletext = 'Voici quelques exemples réalisés en Pure Js, HTML et CSS';
//
//     for (const i in sampletext) {
//         let newSpan = document.createElement('div');
//         newSpan.setAttribute('class', 'lettreTitre' + i);
//         newSpan.textContent = sampletext[i];
//
//         title.appendChild(newSpan);
//     }
// }


function textFadeIn(name) {
    let textDesign = document.getElementById(name);
    textDesign.style.opacity = "0";
    textDesign.style.transition = "0.4s";

    let description = document.getElementsByClassName(name)[0]
    description.style.display = 'block';
    description.style.opacity = "1";
    description.style.transition = "0.6s";
   description.style.transform = 'translateY(100px)';
   
}

function textFadeOut(name) {
    let textDesign = document.getElementById(name);
    textDesign.style.opacity = "1";
    textDesign.style.transition = "0.5s";

    let description = document.getElementsByClassName(name)[0]
    // description.style.display = 'none';
    description.style.opacity = "0";
    description.style.transition = "0.3s";
   description.style.transform = 'translateY(-100px)';


}


// window.onload = animTitre();
// window.onload = textMove();

// var textExemple = document.querySelectorAll('.titreL');
//
// textExemple.forEach(function (item) {
//
//     var lettres = item.textContent.split('');
//     item.innerHTML = "";
//     lettres.forEach(function (el, index) {
//         item.innerHTML += "<span style=\"transition-delay: " + 0.04 * index + "s\">" + el + "</span>";
//     });
// });



window.onscroll = function() {scrollLogo()};



function scrollLogo() {

    const midScreen = window.innerHeight/2;
    const transiTime = "0.6s"
    


    let logo_html = document.getElementById('logo-html');
    let logo_css = document.getElementById('logo-css');
    let logo_js = document.getElementById('logo-js');

   
   
        if (document.body.scrollTop > midScreen || document.documentElement.scrollTop > midScreen) {
            logo_html.style.transform = "translateX(0) ";
            logo_html.style.transition = transiTime;
            logo_js.style.transform = "translateX(0) ";
            logo_js.style.transition = transiTime;

            logo_css.style.transform = "translateY(0)";
            logo_css.style.opacity = "1";
            logo_css.style.transition = transiTime;
         
          

        }
        
     
}