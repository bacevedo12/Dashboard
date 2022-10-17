function chartImacec() {
    const peticion6 = async (url) => {
     
      const data6 = await axios.get(url)
      .then((respuesta) => {
        const datos6 = respuesta.data.serie;
        console.log(datos6)
        let valores = datos6.map(element => element.valor);
        let fechas = datos6.map(element =>{
          let resultadoFecha6 = element.fecha.split('T');
          resultadoFecha6 = resultadoFecha6[0].split('-').reverse().join('-');
           return resultadoFecha6;
        });
        console.log(valores)
        console.log(fechas)
      charts6(fechas, valores); 
      });
    }
    const url = 'https://mindicador.cl/api/imacec';
    peticion6(url);
  
  };
  
  
  function charts6 (fechas, valores){
  const ctx = document.getElementById('myChartimacec').getContext('2d');
  const myChart6 = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: fechas.reverse(),
          datasets: [{
              label: 'IMACEC',
              data: valores.reverse(),
              borderColor:'red',
              borderWidth: 1
          }]
      },
  });
  }

  chartImacec()