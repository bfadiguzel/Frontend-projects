const faqButtons = document.querySelectorAll(".faq-toggle");
faqButtons.forEach(button =>{
    button.addEventListener('click',()=> button.parentNode.classList.toggle("active"));
});