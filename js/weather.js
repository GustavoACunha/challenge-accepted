const cidade=[
  {
    "period": {
      "begin": "2017-02-01",
      "end": "2017-02-07"
    },
    "locale": {
      "id": 3735,
      "name": "Osasco",
      "state": "SP",
      "latitude": -23.5320,
      "longitude": -46.7920
    },
    "weather": [
      {
        "date": "2017-02-01",
        "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
        "temperature": {
          "min": 20,
          "max": 28
        },
        "rain": {
          "probability": 60,
          "precipitation": 20
        }
      },
      {
        "date": "2017-02-02",
        "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
        "temperature": {
          "min": 21,
          "max": 30
        },
        "rain": {
          "probability": 60,
          "precipitation": 10
        }
      },
      {
        "date": "2017-02-03",
        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
        "temperature": {
          "min": 22,
          "max": 31
        },
        "rain": {
          "probability": 60,
          "precipitation": 15
        }
      },
      {
        "date": "2017-02-04",
        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
        "temperature": {
          "min": 22,
          "max": 32
        },
        "rain": {
          "probability": 60,
          "precipitation": 16
        }
      },
      {
        "date": "2017-02-05",
        "text": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
        "temperature": {
          "min": 23,
          "max": 32
        },
        "rain": {
          "probability": 67,
          "precipitation": 19
        }
      },
      {
        "date": "2017-02-06",
        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
        "temperature": {
          "min": 22,
          "max": 33
        },
        "rain": {
          "probability": 60,
          "precipitation": 8
        }
      },
      {
        "date": "2017-02-07",
        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
        "temperature": {
          "min": 25,
          "max": 30
        },
        "rain": {
          "probability": 60,
          "precipitation": "11"
        }
      }
    ]
  },
  {
    "period": {
      "begin": "2017-02-01",
      "end": "2017-02-07"
    },
    "locale": {
      "id": 3477,
      "name": "São Paulo",
      "state": "SP",
      "latitude": -23.5480,
      "longitude": -46.6360
    },
    "weather": [
      {
        "date": "2017-02-01",
        "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
        "temperature": {
          "min": 19,
          "max": 27
        },
        "rain": {
          "probability": 60,
          "precipitation": 20
        }
      },
      {
        "date": "2017-02-02",
        "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
        "temperature": {
          "min": 20,
          "max": 29
        },
        "rain": {
          "probability": 60,
          "precipitation": 15
        }
      },
      {
        "date": "2017-02-03",
        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
        "temperature": {
          "min": 21,
          "max": 30
        },
        "rain": {
          "probability": 60,
          "precipitation": 15
        }
      },
      {
        "date": "2017-02-04",
        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
        "temperature": {
          "min": 21,
          "max": 31
        },
        "rain": {
          "probability": 60,
          "precipitation": 11
        }
      },
      {
        "date": "2017-02-05",
        "text": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
        "temperature": {
          "min": 22,
          "max": 31
        },
        "rain": {
          "probability": 67,
          "precipitation": 16
        }
      },
      {
        "date": "2017-02-06",
        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
        "temperature": {
          "min": 21,
          "max": 32
        },
        "rain": {
          "probability": 60,
          "precipitation": "8"
        }
      },
      {
        "date": "2017-02-07",
        "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
        "temperature": {
          "min": 22,
          "max": 33
        },
        "rain": {
          "probability": 60,
          "precipitation": 26
        }
      }
    ]
  }
];

/**** definição de variáveis ****/
var a=[], b=[], c=[], d=[], e=[], f=[],g=[], x=0, h=0, dataInicial=0, dataFinal=7;
var i, j, n, ano, dia, mes;
var  input, filter, ul, li, key;
var input = document.getElementById("busca");

/**** reconhece o que foi escrito na searchbar depois de um enter ****/
input.addEventListener('keyup', function(nomeBusca){
  key = nomeBusca.which || nomeBusca.keyCode;
  if(key == 13){
    submit();
  }
});

/**** define para onde vai o que foi escrito na searchbar ****/
function submit(){
  
  filter = input.value;
  dataInicial=0;
  dataFinal=7;
  if(filter == 'osasco'){
    x=0;
    seteDias();
  }
  else{
    
    if(filter == 'sao paulo'){
      x=1;
      seteDias();
    }
    else{
      alert('não temos essa cidade ainda!');   
    }
  }
}


/**** lê o JSON e guarda os valores utilizados no card para o index ****/
function climaIndex(){
  document.write(`<h4 id="tituloPrevisao">Previsão para ` + cidade[x].locale.name + ` - SP</h4>`);
  for(i=dataInicial; i<dataFinal; i++){
    g[i] = cidade[x].weather[i].date;
    n = g[i];
    ano = n.split("-")[0];
    mes = n.split("-")[1];
    dia = n.split("-")[2];
    a[i] = dia + '/' + mes + '/' + ano;
    b[i] = cidade[x].weather[i].text;
    c[i] = cidade[x].weather[i].temperature.max;
    d[i] = cidade[x].weather[i].temperature.min;
    e[i] = cidade[x].weather[i].rain.probability;
    f[i] = cidade[x].weather[i].rain.precipitation;
    write();
  }
};
/**** lê o JSON e guarda os valores utilizados no card para cada cidade nos 7 dias ****/
function seteDias(){
  corpo();
  for(i=dataInicial; i<dataFinal; i++){
    g[i] = cidade[x].weather[i].date;
    n = g[i];
    ano = n.split("-")[0];
    mes = n.split("-")[1];
    dia = n.split("-")[2];
    a[i] = dia + '/' + mes + '/' + ano;
    b[i] = cidade[x].weather[i].text;
    c[i] = cidade[x].weather[i].temperature.max;
    d[i] = cidade[x].weather[i].temperature.min;
    e[i] = cidade[x].weather[i].rain.probability;
    f[i] = cidade[x].weather[i].rain.precipitation;
    write();
  }
};

/**** repassa as informações de estilo para ser utilizado no write() ****/
function corpo(){
  document.write(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Climatempo</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">	
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </head>

  <body>
    <div class="content">
      <header>
        <img src="images/logo-white.png" alt="Logo Climatempo" id="logo">
      </header>

      <div class="search">
        <div class="row">
          <div class="col">
            <div class="dropdown">    

                <input type="text" id="busca" placeholder="Busque por uma cidade..." onclick=drop() onkeyup="filtro()">
                <img src="images/icons/search.png" id="icon" >

                <div id="myDropdown" class="dropdown-content">
                  <a href="">home</a>
                </div>
            </div>
          </div>
        </div>
      </div>		

      <div class="container">
        <h4 id="tituloPrevisao">Previsão para ` + cidade[x].locale.name + ` - SP</h4>
        <div id="card"></div>
        <script type="text/javascript" src="js/weather.js"></script>
      </div>
    </div>
    <script type="text/javascript" src="base/weather.json"></script>
  </body>
  </html>
`);
}
/**** código que monta e escreve o card ****/
function write(){
  document.write(`
    <link rel="stylesheet" href="css/style.css">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <p id="cardDate">`+ a[i] +`</p>
          <p id="cardText">`+ b[i] +`</p>
        </div>
        <div id="cardBody">
          <div class="cardIcons">
            <img src="images/icons/upload.png">
            <p class="cardDisplay" id="tempMax">`+ c[i] +`°C</p>
            <img src="images/icons/download.png">
            <p class="cardDisplay" id="tempMin">`+ d[i] +`°C</p>
          </div>
          <div class="cardIcons">
            <img src="images/icons/raindrop-close-up.png">
            <p class="cardDisplay">`+ e[i] +`mm</p>
            <img src="images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png">
            <p class="cardDisplay">`+ f[i] +`%</p>
          </div>
        </div>
      </div>
    </div>
  `);
}

/**** código para inserir os cards default no index ****/
function index(){
  x;
  dataFinal=2;
  climaIndex();
}

/**** onclick da opção Osasco do menu em cascata */
function osasco(){
  x=0;
  dataFinal=7;
  seteDias();
}

/**** onclick da opção São Paulo do menu em cascata */
function saoPaulo(){
  x=1;
  dataFinal=7;
  seteDias();
}
/**** código para executar o dropdown ****/
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/**** faz com que o dropdown da searchbar seja recolhido se o usuário clicar fora do campo ****/
window.onclick = function(event) {
  if (!event.target.matches('#busca')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/**** faz um filtro que reduz as buscas na searchbar ao escrever ****/
function filtro() {
  input = document.getElementById("busca");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  j = div.getElementsByTagName("a");
  for (i = 0; i < j.length; i++) {
    txtValue = j[i].textContent || j[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      j[i].style.display = "";
    } else {
      j[i].style.display = "none";
    }
  }
}
