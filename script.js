document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

   
    function handleFormSubmission(event) {
        event.preventDefault(); 
        
        if (validateForm()) {
           
            console.log('Form submitted');
            form.submit();
        } else {
            
            alert('Please enter both email and password.');
        }
    }

    
    function validateForm() {
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        return email.trim() !== '' && password.trim() !== '';
    }

   
    form.addEventListener('submit', handleFormSubmission);
});




// cart 

document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.cart-info a');
    removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            const row = button.closest('tr');
            row.remove(); 
            updateTotal(); 
        });
    });


    function updateTotal() {
        const prices = document.querySelectorAll('.cartpage table tr:not(:first-child) td:nth-child(3)');
        let subtotal = 0;
        prices.forEach(price => {
            subtotal += parseFloat(price.textContent.replace('$', ''));
        });
        const tax = subtotal * 0.175; 
        const total = subtotal + tax;
        
        document.querySelector('.total-price table tr:nth-child(1) td:nth-child(2)').textContent = `$${subtotal.toFixed(2)}`;
        document.querySelector('.total-price table tr:nth-child(2) td:nth-child(2)').textContent = `$${tax.toFixed(2)}`;
        document.querySelector('.total-price table tr:nth-child(3) td:nth-child(2)').textContent = `$${total.toFixed(2)}`;
    }

   
    updateTotal();
});



document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.probtn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            
    
            const productContainer = button.closest('.pro1');
            const productName = productContainer.querySelector('.desc h5').textContent;
            const productPrice = productContainer.querySelector('.desc h4').textContent;
            

            const product = {
                name: productName,
                price: productPrice
            };
            
        
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
           
            cart.push(product);
            
            
            localStorage.setItem('cart', JSON.stringify(cart));
            
          
            window.location.href = 'cart.html';
        });
    });
});

