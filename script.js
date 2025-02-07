       // Show Modal
        function showModal() {
            document.getElementById('myModal').style.display = 'flex';
        }

        // Close Modal
        function closeModal() {
            document.getElementById('myModal').style.display = 'none';
        }

        // skill progress animation
        window.onload = () => {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width; 
                }, 100);
            });
        };

        (function(){
            emailjs.init("WQA_tzipDZPY57cVc"); // Replace with your EmailJS public key
        })();
    
        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault();
    
            const formMessage = document.getElementById("form-message");
            formMessage.textContent = "Sending...";
            formMessage.style.color = "#ffffff";
    
            emailjs.sendForm("service_npul4fi", "template_dt3xs51", this)
            .then(response => {
                formMessage.textContent = "Message sent successfully!";
                formMessage.style.color = "lightgreen";
                this.reset();
            }, error => {
                formMessage.textContent = "Failed to send message. Try again!";
                formMessage.style.color = "red";
            });
        });