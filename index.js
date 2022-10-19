import {chartDolar, dolarPublicado} from './assets/js/dolar.js';
import {chartUf, ufPublicada} from './assets/js/uf.js';
import {chartEuro, euroPublicado} from './assets/js/euro.js';
import {chartLibraCobre} from './assets/js/libraCobre.js';
import {chartIpc} from './assets/js/ipc.js';
import { chartImacec } from './assets/js/imacec.js';

chartDolar();
chartUf();
chartEuro();
chartLibraCobre();
chartIpc();
chartImacec();
dolarPublicado();
euroPublicado();
ufPublicada();

document.getElementById('selectAnio').addEventListener('change',(e) => {
    chartDolar(e.target.value)
    chartUf(e.target.value)
    chartEuro(e.target.value)
    chartLibraCobre(e.target.value)
    chartIpc(e.target.value)
    chartImacec(e.target.value)
});

