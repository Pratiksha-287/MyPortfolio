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
