export function chartEuro() {
    const peticion3 = async (url) => {
     
      const data3 = await axios.get(url)
      .then((respuesta) => {
        const datos3 = respuesta.data.serie;
        console.log(datos3)
        let valores = datos3.map(element => element.valor);
        let fechas = datos3.map(element =>{
          let resultadoFecha3 = element.fecha.split('T');
          resultadoFecha3 = resultadoFecha3[0].split('-').reverse().join('-');
           return resultadoFecha3;
        });
        console.log(valores)
        console.log(fechas)
      charts3(fechas, valores); 
      });
    }
    const url = 'https://mindicador.cl/api/euro';
    peticion3(url);
  
  };
  
  
  function charts3 (fechas, valores){
  const ctx = document.getElementById('myChart3').getContext('2d');
  const myChart3 = new Chart(ctx, {
      type: 'line',
      data: {
          labels: fechas.reverse(),
          datasets: [{
              label: 'Euro',
              data: valores.reverse(),
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