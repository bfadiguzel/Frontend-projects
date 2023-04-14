const labels = document.querySelectorAll(".form-control label");
const inputs = document.querySelectorAll(".form-control input");

inputs.forEach(input =>{
input.addEventListener('change', () => {
    if(input.checkValidity() == false)
        input.value= "";  
})   
});

labels.forEach(label =>{
    label.innerHTML = label.innerHTML
    .split('')
    .map((letter,index) => `<span style="transition-delay:${index * 40}ms">${letter}</span>`)
    .join('');
});
