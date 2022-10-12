export function chartDolar () {
    const peticion = async (url) => {
     
      const data = await axios.get(url)
      .then((respuesta) => {
        const datos = respuesta.data.serie;
        console.log(datos)
        let valores = datos.map(element => element.valor);
        let fechas = datos.map(element =>{
          let resultadoFecha = element.fecha.split('T');
           return resultadoFecha[0];
        });
        console.log(valores)
        console.log(fechas)
      charts(fechas, valores); 
      });
    }
    const url = 'https://mindicador.cl/api/dolar';
    peticion(url);
 
  };


function charts (fechas, valores){
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: fechas,
          datasets: [{
              label: 'Dolar',
              data: valores,
              borderColor:'red',
              borderWidth: 1
          }]
      },
      options: {
        title:{
          display: true,
          text:'Indicadores de la UF',
          fontSize: 30,
          padding: 30,
          fontColor:'black',
        },
        legend:{
          position: 'bottom',
          
        },
        elements: {
          line:{
            borderWidth: 8,
            fill: false,
          },
        },
    

      
      }
  });
}

