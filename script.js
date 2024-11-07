let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(pageIndex) {
    pages.forEach((page, index) => {
        page.style.display = index === pageIndex ? 'block' : 'none';
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Tampilkan halaman pertama
showPage(currentPage);