const faqs = document.querySelectorAll(".faq__item");

faqs.forEach(faq__item => {
    faq__item.addEventListener("click", () => {
        faq__item.classList.toggle("show");
    })
})