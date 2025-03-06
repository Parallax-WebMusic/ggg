document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownLink = document.querySelector('.dropdown-link-div');
    
    if (!dropbtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
        dropdownLink.classList.remove('for-dropwodn-link');
        dropdownLink.classList.add('for-dropwodn-link-start');
    } else if (dropbtn.contains(event.target)) {
        dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
        dropdownLink.classList.remove('for-dropwodn-link-start');
        dropdownLink.classList.add('for-dropwodn-link');
    }   
});
window.addEventListener('scroll', function(){
    var navbar = this.document.querySelector('.navbar');
    navbar.classList.toggle('when-main', this.scrollY > 750);

    var hcfa = this.document.querySelector('.filler-about');
    var hcfst = this.document.querySelector('.filler-send-to');
    var hcf1 = this.document.querySelector('#hcf1');
    var heroFiller = this.document.querySelector('.hero-filler');

    if(this.window.scrollY > 0){

        hcfa.classList.remove('fill-top-start');
        hcfa.classList.add('fill-top-scroll');
        hcfst.classList.remove('fill-top-start');
        hcfst.classList.add('fill-top-scroll');
        
        hcf1.classList.remove('hfd-start');
        hcf1.classList.add('hfd-scroll');

        heroFiller.style.display = 'none';
    }else{
        hcfa.classList.remove('fill-top-scroll');
        hcfa.classList.add('fill-top-start');
        hcfst.classList.remove('fill-top-scroll');
        hcfst.classList.add('fill-top-start');
        
        hcf1.classList.remove('hfd-scroll');
        hcf1.classList.add('hfd-start');

        heroFiller.style.display = 'block';
    };
});

var mainVideo = document.querySelector('#mainVideo');

window.addEventListener('scroll', function() {
    const minWidth = 1100;
    const initialWidth = mainVideo.clientWidth;
    const scaleVideo = Math.max(.55 + this.scrollY * .0004, minWidth / initialWidth);

    mainVideo.style.transform = `scaleX(${scaleVideo}) translate(0,-23vh)`;
});

document.addEventListener('DOMContentLoaded', function () {
    const options = {
        threshold: .5
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }else if(!entry.isIntersecting){
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    var divToAnimate = document.querySelectorAll('.movingImage');
    divToAnimate.forEach(element => {
        observer.observe(element);
    });
});

const photoGallery = document.querySelector('.photo-gallery');

window.addEventListener('scroll', function() {
    if (this.window.innerHeight > this.window.innerWidth) {
        const galleryTrans = 100 - this.scrollY * 1;
    
        photoGallery.style.transform = `translate(${galleryTrans}px,0)`;
    } else {
        const galleryTrans = 100 - this.scrollY * .15;
    
        photoGallery.style.transform = `translate(${galleryTrans}px,0)`;
    }
});

// mobile ////////////////////////////////////////////////////////////////////////////

function Mobile(){
    var viewportHeight = window.innerHeight;
    var viewportWidth = window.innerWidth;
    var page1Background = document.querySelector('.hero');
    var logo = document.getElementById('logo');
    var h3Logo = document.getElementById('h3-logo');
    
    function removeNavbarLinks() {
        var links = document.querySelectorAll('.navbar-fillers');
        links.forEach(function(element) {
            element.remove();
        });
    }
    
    // BM stands for Burger Menu /////////////////////////////////////////////////////
    var navbar = document.querySelector('.navbar');
    var page = document.querySelector('title');

    function switchToBM() {
        var burgerMenu = document.createElement('div');
        var iconBM = document.createElement('img');
        
        iconBM.className = 'burger-icon';
        iconBM.src = 'icons/menu.png';

        iconBM.style.height = '3vh';
        iconBM.style.width = '3vh';
        iconBM.style.margin = '.7vh 8vw 0 0'
        iconBM.style.filter = 'invert(100)';

        burgerMenu.appendChild(iconBM);
        navbar.appendChild(burgerMenu);

        var navbarMenu = document.querySelector('.navbar-menu');
        var menuOpened = document.createElement('div');
        menuOpened.className = 'menu-opened';
        navbarMenu.appendChild(menuOpened);

        var openedMenu = document.querySelector('.menu-opened');

        
        iconBM.addEventListener('click', function() {
            menuOpened.classList.remove('menu-closeAnim');
            menuOpened.classList.add('menu-openAnim');
            
            navbarMenu.style.zIndex = '999';
        
            var existingMenuNavbar = document.querySelector('.menu-navbar');
            if (!existingMenuNavbar) {
                var menuNavbar = document.createElement('div');
                var closeBtnDiv = document.createElement('div');
                var closeIMG = document.createElement('img');
        
                menuNavbar.className = 'menu-navbar';
                closeIMG.src = 'icons/close-button.png';
                closeIMG.style.height = '2vh';
                closeIMG.style.width = '2vh';
                closeIMG.style.marginTop = '3vh';
                closeIMG.style.marginRight = '8.5vw';
                closeIMG.style.filter = 'invert(100)';
        
                closeIMG.addEventListener('click', function(){
                    menuOpened.classList.remove('menu-openAnim');
                    menuOpened.classList.add('menu-closeAnim');
        
                    var closeAnim = document.querySelector('.menu-closeAnim');
                    closeAnim.addEventListener('animationend', function(){
                        navbarMenu.style.zIndex = '-999';
                    }, { once: true });
                });
        
                closeBtnDiv.appendChild(closeIMG);
                menuNavbar.appendChild(closeBtnDiv);
                openedMenu.appendChild(menuNavbar);
                
                var mappingLinks = document.createElement('div');
                var mapLink1 = document.createElement('a');
                var mapLink2 = document.createElement('a');
                var mapLink3 = document.createElement('a');
                var mapLink4 = document.createElement('a');
                
                mappingLinks.className = 'linked-map';

                mapLink1.className = 'map-link';
                mapLink2.className = 'map-link';
                mapLink3.className = 'map-link';
                mapLink4.className = 'map-link';
                
                if (page.textContent === 'Sokratis Apartments') {
                    mapLink1.href = 'nea-fokea.html';
                    mapLink2.href = 'our-apartments.html';
                    mapLink3.href = 'sightsees.html';
                    mapLink4.href = 'contacts-mobile-os.html';

                    mapLink1.textContent = 'about nea fokea';
                    mapLink2.textContent = 'our apartments';
                    mapLink3.textContent = 'sightsees';

                    mapLink4.textContent = 'contacts';
                    // mapLink4.style.fontWeight = '300';
                } else if (page.textContent === 'Village') {
                    mapLink1.href = 'index.html';
                    mapLink2.href = 'our-apartments.html';
                    mapLink3.href = 'sightsees.html';
                    mapLink4.href = 'contacts-mobile-os.html';

                    mapLink1.textContent = 'home';
                    mapLink2.textContent = 'our apartments';
                    mapLink3.textContent = 'sightsees';

                    mapLink4.textContent = 'contacts';
                    // mapLink4.style.fontWeight = '300';
                } else if (page.textContent === 'Rooms') {
                    mapLink1.href = 'index.html';
                    mapLink2.href = 'nea-fokea.html';
                    mapLink3.href = 'sightsees.html';
                    mapLink4.href = 'contacts-mobile-os.html';

                    mapLink1.textContent = 'home';
                    mapLink2.textContent = 'about nea fokea';
                    mapLink3.textContent = 'sightsees';

                    mapLink4.textContent = 'contacts';
                    // mapLink4.style.fontWeight = '300';
                } else if (page.textContent === 'Sightsees') {
                    mapLink1.href = 'index.html';
                    mapLink2.href = 'nea-fokea.html';
                    mapLink3.href = 'our-apartments.html';
                    mapLink4.href = 'contacts-mobile-os.html';

                    mapLink1.textContent = 'home';
                    mapLink2.textContent = 'about nea fokea';
                    mapLink3.textContent = 'out apartments';

                    mapLink4.textContent = 'contacts';
                    // mapLink4.style.fontWeight = '400';
                }
                

                mappingLinks.appendChild(mapLink1);
                mappingLinks.appendChild(mapLink2);
                mappingLinks.appendChild(mapLink3);
                mappingLinks.appendChild(mapLink4);
                openedMenu.appendChild(mappingLinks);
            }
        });        
    }

    var heroContentHelper = document.getElementById('hch');
    var heroFiller = document.querySelector('.hero-filler');
    var fillerAbout = document.querySelector('.filler-about');
    var fila = document.querySelector('.fila');
    var mobileFillerAbout = document.getElementById('mobileFillerAbout');
    var mobileFillerAboutH1 = document.getElementById('mobileFillerAboutH1');
    var copyrights = document.querySelector('.copyrights');
    
    if(viewportHeight > viewportWidth){
        if (page.textContent === 'Sokratis Apartments') {
            page1Background.style.background = 'url(videos/mobile-1-page.mp4)';
            page1Background.style.backgroundReapeat = 'no-repeat';
            page1Background.style.backgroundSize = 'cover';
            page1Background.style.backgroundPosition = 'center';
        };
        removeNavbarLinks();
        switchToBM();
        logo.style.fontSize = '3vh';
        logo.style.lineHeight = '1.5';
        h3Logo.style.transform = 'translate(0,-1.5vh)';
        heroContentHelper.style.width = '0';
        fila.style.all = 'unset';
        heroFiller.style.width = '100%';
        fillerAbout.style.width = '90%';
        fillerAbout.style.padding = '30% 10% 25% 10%';
        fillerAbout.style.background = 'rgba(0,0,0,.5';
        fillerAbout.style.backdropFilter = 'blur(5px)';
        fillerAbout.style.webkitBackdropFilter = 'blur(5px)';
        fillerAbout.style.maskImage = 'linear-gradient(to top, rgb(0,0,0) 60%, transparent 95%)';
        fillerAbout.style.wbkitMaskImage = 'linear-gradient(to top, rgb(0,0,0) 60%, transparent 95%)';
        mobileFillerAbout.style.fontSize = '2.5vh';
        mobileFillerAboutH1.style.fontSize = '3vh';
        mobileFillerAboutH1.style.fontWeight = '300';
        copyrights.style.transform = 'translateY(-4vh)';
    }
}
Mobile();