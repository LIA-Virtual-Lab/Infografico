"use client";
import React, { useState } from 'react';
import styles from './style.css';

const Arduino = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = (e, target, itemId) => {
    e.preventDefault();
    setActivePopup(target);
    setIsPopupOpen(true);
    setBackgroundImage(getItemBackgroundImage(itemId));
  };

  const handleClosePopup = () => {
    setActivePopup(null);
    setIsPopupOpen(false);
    setBackgroundImage('');
  };

 

  return (
    <div className="corpo">
      <h1 style={{ paddingLeft: '13%', paddingRight: '13%' }}>Conhecendo o Arduino</h1>
      <p style={{
        textAlign: 'justify',
        fontSize: '18px',
        fontFamily: 'Arial, sans-serif',
        color: '#000000',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        É preciso ter em mente que o Arduino é uma placa feita para prototipagem, ou seja, para produção de protótipos. O principal componente é o seu microcontrolador (ATMEGA328P), que executa uma função de um microcomputador armazenando e processando o que é mandado para ele. Para se comunicar com a placa se utiliza a linguagem de programação C++ o que possibilita que se escreva comandos para criação de sistemas.
      </p>

      <div className="container">
        <div className="content-area">
          <div
            className="select-area"
            style={{
              backgroundImage: backgroundImage,
              backgroundSize: backgroundImage ? 'cover' : '',
              backgroundPosition: 'center',
              minHeight: backgroundImage ? '35rem' : ''
            }}
          >
            {isPopupOpen ? null : (
              <>
                <button
                  className="select-item"
                  id="select-item1"
                  style={{ top: '65%', left: '65%' }}
                  onClick={(e) => handleClick(e, '#target_1', 'select-item1')}
                >
                  1
                </button>
                <button
                  className="select-item"
                  id="select-item2"
                  style={{ top: '5%', left: '42%' }}
                  onClick={(e) => handleClick(e, '#target_2', 'select-item2')}
                >
                  2
                </button>
                <button
                  className="select-item"
                  id="select-item3"
                  style={{ top: '80%', left: '54%' }}
                  onClick={(e) => handleClick(e, '#target_3', 'select-item3')}
                >
                  3
                </button>
                <button
                  className="select-item"
                  id="select-item4"
                  style={{ top: '80%', left: '65%' }}
                  onClick={(e) => handleClick(e, '#target_4', 'select-item4')}
                >
                  4
                </button>
                <button
                  className="select-item"
                  id="select-item5"
                  style={{ top: '5%', left: '65%' }}
                  onClick={(e) => handleClick(e, '#target_5', 'select-item5')}
                >
                  5
                </button>
                <button
                  className="select-item"
                  id="select-item6"
                  style={{ top: '30%', left: '20%' }}
                  onClick={(e) => handleClick(e, '#target_6', 'select-item6')}
                >
                  6
                </button>
              </>
            )}
          </div>
        </div>

        {activePopup === '#target_1' && (
          <div className="popup" onClick={handleClosePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <p style={{ marginLeft: '6%' }}>
                <strong>Os terminais terra do Arduino, se localizam dos dois lados da placa e é possível utilizar qualquer uma delas. São utilizadas para alimentar o negativo dos componentes.</strong>
              </p>
            </div>
          </div>
        )}

        {activePopup === '#target_2' && (
          <div className="popup" onClick={handleClosePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <p style={{ marginLeft: '6%' }}>
                <strong>Antes que você possa começar a mexer é preciso entender como funcionam as portas do Arduino, a maioria de suas entradas. Vamos começar pelas portas GND (Ground), os terminais terra do Arduino, se localizam dos dois lados da placa e é possível utilizar qualquer uma delas. São utilizadas para alimentar o negativo dos componentes.</strong>
              </p>
            </div>
          </div>
        )}
                {activePopup === '#target_3' && (
          <div className="popup" onClick={handleClosePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <p style={{ marginLeft: '6%' }}>
                <strong>Assim como ele pode alimentar os equipamentos, ele precisa ser alimentado e possui três entradas para isso, sendo o conector USB do tipo B que serve tanto como alimentação como comunicação serial, um conector jack para ligação DC e sua porta Vin.</strong>
              </p>
            </div>
          </div>
        )}
      {activePopup === '#target_4' && (
          <div className="popup" onClick={handleClosePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <p style={{ marginLeft: '6%' }}>
                <strong>Agora vamos falar das entradas e saídas digitais e analógicas do Arduino. Começando pelos digitais, são saídas que trabalham com dois níveis de tensão, sendo eles o alto de 5V e o baixo de 0V, também podem ser de 1 e 0 ou ligado e desligado. No Arduino, são as portas de 0 a 13 que recebem a função de terminais digitais, podendo tanto ser de entrada ou saída sendo configurados na programação.</strong>
              </p>
            </div>
          </div>
        )}
      {activePopup === '#target_5' && (
          <div className="popup" onClick={handleClosePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <p style={{ marginLeft: '6%' }}>
                <strong>Agora vamos falar das entradas e saídas digitais e analógicas do Arduino. Começando pelos digitais, são saídas que trabalham com dois níveis de tensão, sendo eles o alto de 5V e o baixo de 0V, também podem ser de 1 e 0 ou ligado e desligado. No Arduino, são as portas de 0 a 13 que recebem a função de terminais digitais, podendo tanto ser de entrada ou saída sendo configurados na programação.</strong>
              </p>
            </div>
          </div>
        )}
      {activePopup === '#target_6' && (
          <div className="popup" onClick={handleClosePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <p style={{ marginLeft: '6%' }}>
                <strong>As portas analógicas são identificadas como A0 a A5, elas podem ser usadas para ler sinais analógicos, como os provenientes de um potenciômetro ou sensor de temperatura. Elas convertem o sinal analógico em digital.</strong>
              </p>
            </div>
          </div>
        )}

      

        <div style={{ fontSize: 'smaller', textAlign: 'center' }}>Placa Arduino</div>
        <div style={{ fontSize: 'smaller', textAlign: 'center' }}></div>
        <div className="pracegover">#pratodosverem: na imagem, uma placa de Arduino.</div>
      </div>
    </div>
  );
};
const getItemBackgroundImage = (itemId) => {
  switch (itemId) {
    case 'select-item1':
      return 'url(/img/fig2.jpg)'; 
    case 'select-item2':
      return 'url(/img/fig6.jpg)';
    case 'select-item3':
      return 'url(/img/fig7.jpg)';
    case 'select-item4':
      return 'url(/img/fig3.jpg)';
    case 'select-item5':
      return 'url(/img/fig4.jpg)';
    case 'select-item6':
      return 'url(/img/fig5.jpg)';
    default:
      return '';
  }
};

export default Arduino;
