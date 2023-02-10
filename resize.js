function calcVH(){
    var vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', vh + 'px');
}

//Initial calculation
calcVH();

//re-calculate on resize
window.addEventListener('resize', calcVH());

//Re-calculate on device orientation change
window.addEventListener('orientationchange', calcVH());