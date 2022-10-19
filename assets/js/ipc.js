let myChart5
export function chartIpc(anio) {
    const peticion5 = async (url) => {
     
      const data5 = await axios.get(url)
      .then((respuesta) => {
        const datos5 = respuesta.data.serie;
        let valores = datos5.map(element => element.valor);
        let fechas = datos5.map(element =>{
          let resultadoFecha5 = element.fecha.split('T');
          resultadoFecha5 = resultadoFecha5[0].split('-').reverse().join('-');
           return resultadoFecha5;
        });
      charts5(fechas, valores); 
      });
    }
    let url = 'https://mindicador.cl/api/ipc';
      if (anio){
        myChart5.destroy();
        url = 'https://mindicador.cl/api/ipc/'+ anio;
      }
    peticion5(url);
  
  };
  
  
  function charts5 (fechas, valores){
  const ctx = document.getElementById('myChart5').getContext('2d');
  myChart5 = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: fechas.reverse(),
          datasets: [{
              label: 'IPC',
              data: valores.reverse(),
              borderColor:'rgb(139, 0, 139)',
              borderWidth: 1
          }]
      },
      options:{
        layout:{
          padding:25,
        }
      } 
  });
  return myChart5;
  }


  // chartIpc()




