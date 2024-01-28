

const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});

function pageAnimation() {
    var elemC = document.querySelector('#elem-container');
var fixedImage=document.querySelector('#fixed-image');

elemC.addEventListener("mouseenter",function(){
    fixedImage.style.display="block";   
});
elemC.addEventListener("mouseleave",function(){
    fixedImage.style.display="none";   
});

var elems = document.querySelectorAll('.elem');

elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image");
        fixedImage.style.backgroundImage = `url(${image})`;
    })
})

var paragraph = document.querySelector("#paragraph");
var block1 = document.querySelector('#block1');
var block2 = document.querySelector('#block2');
var block3 = document.querySelector('#block3');
var rightImage = document.querySelector('#rightImage');
block1.addEventListener('click',function(){
    var image1 =block1.getAttribute("data-Image");
    rightImage.style.backgroundImage =`url(${image1})`;
    
    block2.style.borderLeft = "4px solid #504A45"
    block3.style.borderLeft = "4px solid #504A45"
    block1.style.borderLeft = "4px solid red"


    block1.style.color = "white"
    block3.style.color = "#504a45"
    block2.style.color = "#504a45"
    paragraph.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    
    
});



block2.addEventListener('click',function(){
    var image2 =block2.getAttribute("data-Image");
    
    rightImage.style.backgroundImage =`url(${image2})`;
    block1.style.borderLeft = "4px solid #504A45"
    block3.style.borderLeft = "4px solid #504A45"
    block2.style.borderLeft = "4px solid red"
    
    
    block2.style.color = "white"
    block3.style.color = "#504a45"
    block1.style.color = "#504a45"
    paragraph.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    
});



block3.addEventListener('click',function(){
    var image3 =block3.getAttribute("data-Image");
    
    rightImage.style.backgroundImage =`url(${image3})`;
    block1.style.borderLeft = "4px solid #504A45"
    block2.style.borderLeft = "4px solid #504A45"
    block3.style.borderLeft = "4px solid red"
    
    
    block3.style.color = "white"
    block2.style.color = "#504a45"
    block1.style.color = "#504a45"
    paragraph.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    
});

}

//swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    cssMode: true,
    
    
    mousewheel: true,
    keyboard: true,
});



function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation();
pageAnimation();