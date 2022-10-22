let myChart4

export function chartLibraCobre (anio) {
    const peticion4 = async (url) => {
      
      const data4 = await axios.get(url)
      .then((respuesta) => {
        const datos4 = respuesta.data.serie;
        let valores = datos4.map(element => element.valor);
        let fechas = datos4.map(element =>{
          let resultadoFecha4 = element.fecha.split('T');
          resultadoFecha4 = resultadoFecha4[0].split('-').reverse().join('-');
            return resultadoFecha4;
        });
      charts4(fechas, valores); 
      });
    }
    let url = 'https://mindicador.cl/api/libra_cobre';
      if (anio){
        myChart4.destroy();
        url = 'https://mindicador.cl/api/libra_cobre/'+ anio;
    }
    peticion4(url);
  
  };
       
  
  function charts4 (fechas, valores){
  const ctx = document.getElementById('myChart4').getContext('2d');
  myChart4 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: fechas.reverse(),
        datasets: [{
            label: 'Libra De Cobre',
            data: valores.reverse(),
            borderColor:'rgb(135, 206, 255)',
            borderWidth: 2

        }]
    },
    options:{
      plugins: {
        title: {
          display: true,
          text: 'LIBRA DE COBRE (dólares)',
          color: '#754',
          font: {
            size: 20
           
          }

        }
      },

      layout:{
        padding:25,
      }
    }
});
return myChart4;
}

