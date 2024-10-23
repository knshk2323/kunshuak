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
        document.getElementById('currentDateTime').innerText = now.toLocaleString('en-US', options);
    }

    // Событие для обновления времени по кнопке
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

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // тексеру
    if (username === 'admin' && password === '12345678') {               
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();

        // логин пароль тазалайды
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('Invalid username or password!');
    }
});



// батырмаға звук
let button = document.getElementById('themeToggle');
button.addEventListener('click', () => {
let sound = new Audio('sound.mp3');
sound.play();
});

button1.addEventListener('click', () => {
    let sound = new Audio('sound.mp3');
    sound.play();
 });
// Load weather on button click
document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const apiKey = 'f31f5ea28ceb56f1b59a677de69c9702'; // Your API key
    const city = 'Astana'; // The city for which to display the weather
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
