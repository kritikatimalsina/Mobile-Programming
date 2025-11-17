$(document).ready(function () {

    $('#hamburger').click(function () {
        $('#menu').toggle();
    });

    $('.menu a').click(function () {
        $('#menu').hide();
    });

    $('#searchBtn').click(function () {

        let city = $('#cityName').val().trim();

        if (city === "") {
            $('#result').html("⚠️ Please enter a city.");
        } else {
            let weatherOptions = [
                "☀ Sunny and bright!",
                "🌧 Light rain with cozy vibes.",
                "⛅ Cloudy but calm.",
                "🌩 Storm incoming! Stay safe.",
                "❄ Snowflakes everywhere!",
                "🌬 Windy – hold onto your hat!"
            ];

            let randomWeather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];

            $('#result').html("Weather in <b>" + city + "</b>: " + randomWeather);
        }

        // Slide-down animation
        $('#resultBox').hide().slideDown(500);
    });

});

