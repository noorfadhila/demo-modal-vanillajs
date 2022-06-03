const loadModal = () => {
    const modalBtn = document.querySelectorAll('.btn-modal');
    const modalClass = document.querySelector('.modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');
    const pageBody = document.querySelector('body');

    const openModal = () => {
        modalClass.classList.remove('hide')
        modalClass.classList.add('show')
        pageBody.classList.add('modal-open')
    }

    const closeModal = () => {
        modalClass.classList.remove('show')
        modalClass.classList.add('hide')
        pageBody.classList.remove('modal-open')
    }

    modalBtn.forEach((btnClicked) => {
        btnClicked.addEventListener('click', (e) => {
            e.preventDefault();
            const dataTitle = btnClicked.getAttribute('data-title');
            const dataDesc = btnClicked.getAttribute('data-desc');
            const dataAuthor = btnClicked.getAttribute('data-author') || "";
            const dataDate = btnClicked.getAttribute('data-date');
            const dataUrl = btnClicked.getAttribute('data-url');
            const dataImg = btnClicked.getAttribute('data-img');
            modalTitle.textContent = dataTitle;
            modalBody.innerHTML = `
                <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style="" src="${dataImg}" data-holder-rendered="true">
                <p>Author: ${dataAuthor}</p>
                <p>Published At: ${dataDate}</p>
                <p>${dataDesc}</p>
                <p>source: <a href="${dataUrl}">${dataUrl}</a></p>
            `;
            
            if(modalClass.classList.contains('hide')){
                openModal();
            }
        })
    })

    modalClass.addEventListener('click', (e) => {
        console.log("tutup")
        if(!e.target.closest('.modal-content') || e.target.matches('.btn-close-modal')){
            closeModal();
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    })
}