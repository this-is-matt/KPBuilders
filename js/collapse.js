let collapseBtns = document.querySelectorAll('.collapse');

collapseBtns.forEach((collapseBtn) => {
    let content = collapseBtn.nextElementSibling;

    collapseBtn.addEventListener('click', (e) => {
        content.classList.toggle('active-content');
        console.log("test");
        collapseBtn.classList.toggle('active-btn');
    })
})