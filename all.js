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
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
    
        const dateTimeElement = document.getElementById('currentDateTime');
        dateTimeElement.innerText = now.toLocaleString('en-US', options);
        
        dateTimeElement.classList.add('blink', 'shift');
        
        setTimeout(() => {
            dateTimeElement.classList.remove('blink', 'shift');
        }, 1000); 
    }
    
    document.getElementById('updateTimeBtn').addEventListener('click', updateDateTime);
    

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

 let button = document.getElementById('themeToggle');

 button.addEventListener('click', () => {
    let sound = new Audio('sound.mp3');
    sound.play();
 });




document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const apiKey = 'f31f5ea28ceb56f1b59a677de69c9702'; // Your API key
    const city = 'Astana'; // The city for which to display the weather
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.classList.add('blink', 'shift');

    fetch(url)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            weatherInfo.innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        })
        .finally(() => {
 
            setTimeout(() => {
                weatherInfo.classList.remove('blink', 'shift');
            }, 1000); // Время совпадает с длительностью анимации
        });
});




