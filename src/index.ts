import * as Neutralino from "@neutralinojs/lib";
console.log('ICI1')
import PageRouter from './pages/main';

window['Neutralino'] = Neutralino;
Neutralino.init();

console.log('ICI2')

console.log(PageRouter);