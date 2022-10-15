export function chartLibraCobre () {
        const peticion4 = async (url) => {
         
          const data4 = await axios.get(url)
          .then((respuesta) => {
            const datos4 = respuesta.data.serie;
            console.log(datos4)
            let valores = datos4.map(element => element.valor);
            let fechas = datos4.map(element =>{
              let resultadoFecha4 = element.fecha.split('T');
              resultadoFecha4 = resultadoFecha4[0].split('-').reverse().join('-');
               return resultadoFecha4;
            });
            console.log(valores)
            console.log(fechas)
          charts4(fechas, valores); 
          });
        }
        const url = 'https://mindicador.cl/api/libra_cobre';
        peticion4(url);
      
      };
       
  
  function charts4 (fechas, valores){
  const ctx = document.getElementById('myChart4').getContext('2d');
  const myChart4 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: fechas.reverse(),
        datasets: [{
            label: 'Libra De Cobre',
            data: valores.reverse(),
            borderColor:'red',
            borderWidth: 1
        }]
    },
    // options: {
    //   title:{
    //     display: true,
    //     text:'Indicadores de la UF',
    //     fontSize: 30,
    //     padding: 30,
    //     fontColor:'black',
    //   },
    //   legend:{
    //     position: 'bottom',
        
    //   },
    //   elements: {
    //     line:{
    //       borderWidth: 8,
    //       fill: false,
    //     },
    //   },
  

    
    // }
});
}

