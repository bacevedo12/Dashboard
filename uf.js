export function chartUf() {
    const peticion2 = async (url) => {
     
      const data2 = await axios.get(url)
      .then((respuesta) => {
        const datos2 = respuesta.data.serie;
        console.log(datos2)
        let valores = datos2.map(element => element.valor);
        let fechas = datos2.map(element =>{
          let resultadoFecha2 = element.fecha.split('T');
          resultadoFecha2 = resultadoFecha2[0].split('-').reverse().join('-');
           return resultadoFecha2;
        });
        console.log(valores)
        console.log(fechas)
      charts2(fechas, valores); 
      });
    }
    const url = 'https://mindicador.cl/api/uf';
    peticion2(url);
  
  };
  
  
  function charts2 (fechas, valores){
  const ctx = document.getElementById('myChart2').getContext('2d');
  const myChart2 = new Chart(ctx, {
      type: 'line',
      data: {
          labels: fechas.reverse(),
          datasets: [{
              label: 'UF',
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