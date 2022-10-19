let myChart3;

export function chartEuro(anio) {
    const peticion3 = async (url) => {
     
      const data3 = await axios.get(url)
      .then((respuesta) => {
        const datos3 = respuesta.data.serie;
        let valores = datos3.map(element => element.valor);
        let fechas = datos3.map(element =>{
          let resultadoFecha3 = element.fecha.split('T');
          resultadoFecha3 = resultadoFecha3[0].split('-').reverse().join('-');
           return resultadoFecha3;
        });
        charts3(fechas, valores); 
      });
    }
    let url ='https://mindicador.cl/api/euro';
    if (anio){
       myChart3.destroy();
       url = 'https://mindicador.cl/api/euro/'+ anio;
    }
    
    peticion3(url);
  
  };
  
  
  function charts3 (fechas, valores){
    const ctx = document.getElementById('myChart3').getContext('2d');
     myChart3 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas.reverse(),
            datasets: [{
                label: 'Euro',
                data: valores.reverse(),
                borderColor:'rgb(30, 144, 255)',
                borderWidth: 2
              }]
            },
            options:{
              layout:{
                padding:25,
              },
              legend:{
                labels:{
                  fontColor:'red'
              }
              }
            } 
        });
        return myChart3;
        }

    export function euroPublicado () {
      const peticion = async (url) => {
     
        const data = await axios.get(url)
        .then((respuesta) => {
          const datos = respuesta.data.serie;
          let valorDia = datos.map(element => element.valor); 
          let fechaDia = datos.map(element => element.fecha.split('T'));
          insertar(valorDia, fechaDia) 
        })
    };
        const url = 'https://mindicador.cl/api/euro';
        peticion(url);
    }
    
    function insertar (valorDia,fechaDia){
      let euro =document.getElementById("euroDia");
      let fecha= fechaDia[0][0].split('-').reverse().join('-');
      euro.innerHTML = `<div class=" d-flex align-items-center justify-content-center indicador"> 
      <h6>Valor Euro=$${valorDia[0]}</h6></div>`;
    }