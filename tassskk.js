
document.addEventListener('DOMContentLoaded', function() {
   
    const buttons = document.querySelectorAll('.button');
    const counters = document.querySelectorAll('.counter-button');
    const resetButton = document.querySelector('.reset-button');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
           
            let count = parseInt(counters[index].textContent, 10);
            counters[index].textContent = count + 1;
        });
    });
    
    resetButton.addEventListener('click', () => {
    
        counters.forEach(counter => {
            counter.textContent = '0';
        });
    });
});
