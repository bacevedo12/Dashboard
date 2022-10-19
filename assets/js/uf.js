let myChart2

export function chartUf(anio) {
    const peticion2 = async (url) => {
     
      const data2 = await axios.get(url)
      .then((respuesta) => {
        const datos2 = respuesta.data.serie;
        let valores = datos2.map(element => element.valor);
        let fechas = datos2.map(element =>{
          let resultadoFecha2 = element.fecha.split('T');
          resultadoFecha2 = resultadoFecha2[0].split('-').reverse().join('-');
           return resultadoFecha2;
        });
        charts2(fechas, valores); 
      });
    }
    let url ='https://mindicador.cl/api/uf';
    
    if (anio){
      myChart2.destroy();
      url ='https://mindicador.cl/api/uf/'+ anio;
    }

    peticion2(url);
  
  };
  
  
  function charts2 (fechas, valores){
  const ctx = document.getElementById('myChart2').getContext('2d');
   myChart2 = new Chart(ctx, {
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
  return myChart2
  }

  export function ufPublicada () {
    const peticion = async (url) => {
   
      const data = await axios.get(url)
      .then((respuesta) => {
        const datos = respuesta.data.serie;
        let valorDia = datos.map(element => element.valor); 
        let fechaDia = datos.map(element => element.fecha.split('T'));
        insertar(valorDia, fechaDia) 
      })
  };
      const url = 'https://mindicador.cl/api/uf';
      peticion(url);
  }
  
  function insertar (valorDia,fechaDia){
    let uf =document.getElementById("ufDia");
    let fecha= fechaDia[0][0].split('-').reverse().join('-');
    uf.innerHTML = `<div class=" d-flex align-items-center justify-content-center indicador"> 
    <h6>Valor UF=$${valorDia[0]}</h6></div>`;
  }