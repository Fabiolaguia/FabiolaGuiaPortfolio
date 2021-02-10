var json_data = {
    "habilidades":[
    { "nombre":"Javascript",
    "porcentaje": "65"
    },
    {
    "nombre":"CSS",
    "porcentaje": "65"
    },{
    "nombre":"HTML",
    "porcentaje": "75"
    },
    ,{
    "nombre":"Python",
    "porcentaje": "85"
    }
    ]
    };
    
    function llenar_skill(){
    var padre = document.getElementById("skills");
    var elemento = '';
    json_data["habilidades"].forEach((e)=>{
    elemento = elemento + '<div class="GrupoSkills"> <strong class="largo" style="width:'+e["porcentaje"]+'%;">'+ e["nombre"]+" "+e["porcentaje"]+'%</strong></div>';
    padre.innerHTML = elemento;
    });
		showSlides();
    }

    var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); 

    
}