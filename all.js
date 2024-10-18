document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('themeToggle');  
    const currentTheme = localStorage.getItem('theme');

    // загрузкадағы тема
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        toggleButton.textContent = 'Light theme';
    } else {
        toggleButton.textContent = 'Dark theme';
    }
    // өзгергенде
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = 'Light theme';
        } else {
            localStorage.setItem('theme', 'light');
            toggleButton.textContent = 'Dark theme';
        }
    });


    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        document.getElementById('currentDateTime').innerText = now.toLocaleString('en-US', options);
    }
    
    setInterval(updateDateTime, 1000); // Update every second
    updateDateTime(); 
    
    

    document.querySelectorAll('.accordion-title').forEach(title => {
            title.addEventListener('click', function () {
                const content = this.nextElementSibling;
                

                document.querySelectorAll('.accordion-content').forEach(section => {
                    if (section !== content) {
                        section.style.maxHeight = null; 
                    }
                });


                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }); 
});   

 