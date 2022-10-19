let myChart6

export function chartImacec(anio) {
    const peticion6 = async (url) => {
     
      const data6 = await axios.get(url)
      .then((respuesta) => {
        const datos6 = respuesta.data.serie;
        let valores = datos6.map(element => element.valor);
        let fechas = datos6.map(element =>{
          let resultadoFecha6 = element.fecha.split('T');
          resultadoFecha6 = resultadoFecha6[0].split('-').reverse().join('-');
           return resultadoFecha6;
        });
      charts6(fechas, valores); 
      });
    }
    let url = 'https://mindicador.cl/api/imacec';
    if (anio){
      myChart6.destroy();
      url = 'https://mindicador.cl/api/imacec/'+ anio;
   }
    peticion6(url);
  
  };
  
  
  function charts6 (fechas, valores){
  const ctx = document.getElementById('myChart6').getContext('2d');
  myChart6 = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: fechas.reverse(),
          datasets: [{
              label: 'IMACEC',
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
            text: 'Gráfico IMACEC'
          }
        }
      },
  });
  return myChart6;
  }

  // chartImacec()