var header = document.getElementsByClassName("header");
function toggleMenu(){
    header[0].style.display = 'block';

    var closeIcon = document.getElementsByClassName("close-menu-icon");
    closeIcon[0].style.display = 'block';

    header[0].classList.add("header-toggle");
}
function closeMenu(){
    header[0].style.display = 'none';
}
window.addEventListener('resize', function(event){
    var menuDropdown = document.getElementsByClassName('menuDropdownClass');
    var featureDropDown = document.getElementsByClassName('menuLinks-featuredropdown');
    var companyDropDown = document.getElementsByClassName('menuLinks-companydropdown');
    if(this.window.innerWidth>768){
        featureDropDown[0].style.removeProperty('display');
        companyDropDown[0].style.removeProperty('display');  
        header[0].classList.remove("header-toggle");
        if(menuDropdown[0]){
            if(menuDropdown[0].classList.contains('mobileViewDropDown')){
                menuDropdown[0].classList.remove("mobileViewDropDown");
            }
        }
    }
});
function toggleFeatureMenu(menuDropdownClass){
    // debugger
    var menuDropdown = document.getElementsByClassName(menuDropdownClass);
    if(this.window.innerWidth <=768){
    if(!menuDropdown[0].classList.contains('active')){
        menuDropdown[0].setAttribute( 'style', 'display: block !important' );
        menuDropdown[0].classList.add("active");
        menuDropdown[0].classList.add("mobileViewDropDown");
    }
    else{
        menuDropdown[0].setAttribute( 'style', 'display: none !important' );
        menuDropdown[0].classList.remove("active");
        menuDropdown[0].classList.remove("mobileViewDropDown");
    }
   }
}
