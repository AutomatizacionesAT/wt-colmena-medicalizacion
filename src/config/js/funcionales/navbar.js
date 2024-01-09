const linkItems = document.querySelectorAll(".link-item");
const linkSublinks = document.querySelectorAll(".link-sublinks");
const indicator = document.querySelector(".indicator");

let elActive;
let elActiveIndex;
let indexBack;

    console.log('voy')
    linkItems.forEach((linkItem, index) => {
        if (linkItem.className.includes('active')) {
            elActive = linkItem
            elActiveIndex = index
        }
    
        linkItem.addEventListener("mouseenter", () => {
            document.querySelector(".active").classList.remove("active");
            linkItem.classList.add("active");
            indicator.style.left = `${index * 95 + 48}px`;
        })
    
        linkItem.addEventListener("mouseleave", () => {
            document.querySelector(".active").classList.remove("active");
            elActive.classList.add("active");
            indicator.style.left = `${elActiveIndex * 95 + 48}px`;
        })
    })
    
    linkSublinks.forEach((subLink)=>{
        subLink.addEventListener('mouseenter', ()=> {
            subLink.parentNode.childNodes[1].classList.add('active')
            indicator.style.left = `${elActiveIndex * 95 + 48}px`;
        })
        subLink.addEventListener('mouseleave', ()=> {
            subLink.parentNode.childNodes[1].classList.remove('active')
        })
    })