const infoClima = document.getElementById("myWeather");
const misEmojis = ["🥵", "🥶", "😎", "😌👍🏽"];
const rainEmoji = "☂️";
const APIKEY = "bbfc41692373f1bc622f186b9c86a0eb"; //key = PRACTICA;

// obteniendo latitud y longitud del usuario

// const fetchWeather = () => {
//   fetch(
//     `https://api.openweathermap.org/data/3.0/onecall?lat=${latitud}&lon=${longitud}&exclude=hourly,daily&appid=${APIKEY}`
//   ).then((res) => res.json().then((data) => console.log(data)));
// };

// fetchWeather();

const getUserLocation = () => {
  const succes = (position) => {
    console.log(position);
    //obtener latitud y longitud
    const latitud = position.coords.latitude;

    const longitud = position.coords.longitude;
    const lang = "es";
    const unit = "metric";

    console.log("latitud " + latitud + " longitud:" + longitud);

    const apiUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&appid=${APIKEY}&units=${unit}&lang=${lang}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        console.log(data.current.temp);
        if (data.current.temp >= 30) {
          emoji = misEmojis[0];
        } else if ((data.current, temp < 29)) {
          emoji = misEmojis[2];
        }

        infoClima.innerText = `El clima en tu ciudad es de ${Math.floor(
          data.current.temp
        )}º ${emoji}`;
      });
  };

  const error = () => {
    alert("algo anda mal");
    // message
  };
  //render en el dom tempratura y ubicacion

  navigator.geolocation.getCurrentPosition(succes, error);
};
// mensaje.addEventListener("DOMContentLoaded", (e) => {
//   console.log(data);
//   mensaje.innerHTML = "";
// });
getUserLocation();
