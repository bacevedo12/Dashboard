let myChart

export function chartDolar (anio) {
    const peticion = async (url) => {
     
      const data = await axios.get(url)
      .then((respuesta) => {
        const datos = respuesta.data.serie;
        let valores = datos.map(element => element.valor);
        let fechas = datos.map(element =>{
          let resultadoFecha = element.fecha.split('T');
          resultadoFecha = resultadoFecha[0].split('-').reverse().join('-');
           return resultadoFecha;
        });
        charts(fechas, valores); 
      });
    }
    let url ='https://mindicador.cl/api/dolar';
    if (anio){
       myChart.destroy();
       url = 'https://mindicador.cl/api/dolar/'+ anio;
    }

    peticion(url);
    
  };

  
function charts (fechas, valores){
  const ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: fechas.reverse(),
          datasets: [{
              label: 'Dolar',
              data: valores.reverse(),
              borderColor:'rgb(30, 144, 255)',
              borderWidth: 2
              
          }]
      },
      options:{
        plugins: {
          title: {
            display: true,
            text: 'DOLAR ($)',
            color: '#754',
            font: {
              size: 20
             
            }

          }
        },
        scales: {
          y: {
            suggestedMin: 700,
            suggestedMax: 1200
          }
        },      
        layout:{
          padding:25,
        }
      }  
  });
  return myChart
}

export function dolarPublicado () {
  const peticion = async (url) => {
 
    const data = await axios.get(url)
    .then((respuesta) => {
      const datos = respuesta.data.serie;
      let valorDia = datos.map(element => element.valor); 
      let fechaDia = datos.map(element => element.fecha.split('T'));
      insertar(valorDia, fechaDia) 
    })
};
    const url = 'https://mindicador.cl/api/dolar';
    peticion(url);
}

function insertar (valorDia,fechaDia){
  let dolar =document.getElementById("dolarDia");
  let dia=document.getElementById("dia")
  let fecha= fechaDia[0][0].split('-').reverse().join('-');
  dolar.innerHTML = `<div class=" d-flex align-items-center justify-content-center indicador"> 
  <h6>Valor Dolar=$${valorDia[0]}</br></h6></div>`
  dia.innerHTML = `(${fecha})`;
}