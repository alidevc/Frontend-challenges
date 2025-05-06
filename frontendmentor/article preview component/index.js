const mediaQuery = window.matchMedia('(max-width: 768px)');
const toggleBtns = document.querySelectorAll(".share-btn");
const articleOp = document.querySelector(".article-op");
const shareLinks = document.querySelector(".share-link");
const arrowDown = document.querySelector(".arrow-down");

let articleOpBtn = toggleBtns[0];
let shareLinksBtn = toggleBtns[1];

function desktopLinks() {
    if(shareLinks.classList.contains('hidden')){
        shareLinks.classList.remove('hidden');
        shareLinks.classList.add('active');

        arrowDown.classList.remove('hidden');
        arrowDown.classList.add('active');
    } else if(shareLinks.classList.contains('active')){
        shareLinks.classList.remove('active');
        shareLinks.classList.add('hidden');

        arrowDown.classList.remove('active');
        arrowDown.classList.add('hidden');
    }
}


function mobileLinks(e){
    if(e.matches){
        if(articleOp.classList.contains('active')){
            articleOp.classList.remove('active');
            articleOp.classList.add('hidden');
    
            shareLinks.classList.remove('hidden');
            shareLinks.classList.add('active');
            
            shareLinksBtn.classList.remove('hidden');
            shareLinksBtn.classList.add('active');

            arrowDown.classList.remove('active');
            arrowDown.classList.add('hidden');
        }
    }
}

articleOpBtn.addEventListener('click', desktopLinks);
mediaQuery.addEventListener('change', mobileLinks);