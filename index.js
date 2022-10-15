import {chartDolar} from './dolar.js';
chartDolar();

import {chartUf} from './uf.js';
chartUf();

import {chartEuro} from './euro.js';
chartEuro();

import {chartLibraCobre} from './libraCobre.js';
chartLibraCobre();
// (()=>{
//     const tabla = document.getElementById('valorDolar');
//     const peticion = async (url) => {
     
//       const data = await axios.get(url)
//       .then((respuesta) => {
//         const lista = respuesta.data.serie;
//         lista.filter(element => {
//           tabla.innerHTML += 
//           `
//            <p>${element.fecha [0]}</p>
//             <p>${element.valor[0]}</p>
//           </p>`
//         });
//       });
//     }
//     const url = 'https://mindicador.cl/api/dolar';
//     peticion(url);
  
//   })();
