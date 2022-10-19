export function chartIpc() {
    const peticion5 = async (url) => {
     
      const data5 = await axios.get(url)
      .then((respuesta) => {
        const datos5 = respuesta.data.serie;
        console.log(datos5)
        let valores = datos5.map(element => element.valor);
        let fechas = datos5.map(element =>{
          let resultadoFecha5 = element.fecha.split('T');
          resultadoFecha5 = resultadoFecha5[0].split('-').reverse().join('-');
           return resultadoFecha5;
        });
        console.log(valores)
        console.log(fechas)
      charts5(fechas, valores); 
      });
    }
    const url = 'https://mindicador.cl/api/ipc';
    peticion5(url);
  
  };
  
  
  function charts5 (fechas, valores){
  const ctx = document.getElementById('myChart5').getContext('2d');
  const myChart5 = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: fechas.reverse(),
          datasets: [{
              label: 'IPC',
              data: valores.reverse(),
              borderColor:'blue',
              backgroundColor: 'rgb(4,37,58, 0.5)',
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Gráfico IPC'
          }
        }
      },
  });
  }


  // chartIpc()




