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
        scales:{
          xAxes:[{
            gridLines:{
              display:false,
            }
          }]
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
      console.log(valorDia[0]) 
      console.log(fechaDia[0])
      insertar(valorDia) 
    })
};
    const url = 'https://mindicador.cl/api/dolar';
    peticion(url);
}

function insertar (valorDia){
  let dolar =document.getElementById("dolarDia");
  dolar.innerHTML = `Valor Dolar= ${valorDia[0]}`;
}