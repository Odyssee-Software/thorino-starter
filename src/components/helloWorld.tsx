import { window } from '@neutralinojs/lib'
import style from './style.module.css'

export const HelloWorld = () => {

  let openDocs = async () => {

    window.create( 'https://neutralino.js.org/' , { 
      title: "Neutralino Documentation",
      x : 400,
      y : 400
    });

  }

  return <div class = {style.HelloWorld}>
    <div>
      <h1>Hello World ❤️</h1>
      <p>Je suis une production de thorium encapsulé dans une application NeutralioJS.</p>
      <div>
        <button _onmousedown = {openDocs} _textContent = 'Documentation' class = {style.Button} />
      </div>
    </div>
  </div>;
}