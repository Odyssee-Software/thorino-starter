import * as Neutralino from "@neutralinojs/lib";
import PageRouter from './pages/main';

window['Neutralino'] = Neutralino;
Neutralino.init();

console.log(PageRouter);