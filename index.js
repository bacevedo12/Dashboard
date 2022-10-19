import {chartDolar, dolarPublicado} from './assets/js/dolar.js';
chartDolar();

import {chartUf} from './assets/js/uf.js';
chartUf();

import {chartEuro} from './assets/js/euro.js';
chartEuro();

import {chartLibraCobre} from './assets/js/libraCobre.js';
chartLibraCobre();

import {chartIpc} from './assets/js/ipc.js';
chartIpc();

import { chartImacec } from './assets/js/imacec.js';
chartImacec();


dolarPublicado();

document.getElementById('selectAnio').addEventListener('change',(e) => {
    chartDolar(e.target.value)
    chartUf(e.target.value)
    chartEuro(e.target.value)
    chartLibraCobre(e.target.value)
    chartIpc(e.target.value)
    chartImacec(e.target.value)
});

