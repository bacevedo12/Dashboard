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
              borderColor:'rgb(154, 205, 50)',
              borderWidth: 2
          }]
      },
      options:{
        layout:{
          padding:25,
        }
      } 
  });
  }

  export function ufPublicada () {
    const peticion = async (url) => {
   
      const data = await axios.get(url)
      .then((respuesta) => {
        const datos = respuesta.data.serie;
        let valorDia = datos.map(element => element.valor); 
        let fechaDia = datos.map(element => element.fecha.split('T'));
        console.log(valorDia[0]) 
        console.log(fechaDia[0])
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