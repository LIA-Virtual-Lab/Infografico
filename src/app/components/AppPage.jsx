"use client";
import React, { useState } from "react";



const button = "absolute bg-gray-550 text-center transition-all duration-500 w-9 h-9 rounded-full shadow-black shadow-lg hover:bg-gray-700 hover:shadow-xl"

const Arduino = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");
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
    setBackgroundImage("");
  };

  return (
    <div className=" max-w-5xl mx-auto p-6 bg-white shadow-lg border border-gray-450">
      <h1 className="text-xl text-white bg-blue-900 p-4 rounded-md text-center">
        Conhecendo o Arduino
      </h1>
      <p className="text-justify text-base text-black font-sans p-5 rounded-lg shadow-md ">
        É preciso ter em mente que o Arduino é uma placa feita para prototipagem,
        ou seja, para produção de protótipos. O principal componente é o seu
        microcontrolador (ATMEGA328P), que executa uma função de um
        microcomputador armazenando e processando o que é mandado para ele. Para
        se comunicar com a placa se utiliza a linguagem de programação C++ o que
        possibilita que se escreva comandos para criação de sistemas.
      </p>

      <div className="relative m-20 p-30 mix-blend-x">
        <div
          className={`select-area ${backgroundImage ? "h-96" : ""}`}
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {!isPopupOpen && (
            <>
              <button
                className={button}
                style={{ top: "65%", left: "65%" }}
                onClick={(e) => handleClick(e, "#target_1", "select-item1")}
              >
                1
              </button>
              <button
                className={button}
                style={{ top: "5%", left: "42%" }}
                onClick={(e) => handleClick(e, "#target_2", "select-item2")}
              >
                2
              </button>
              <button
                className={button}
                style={{ top: "80%", left: "54%" }}
                onClick={(e) => handleClick(e, "#target_3", "select-item3")}
              >
                3
              </button>
              <button
                className={button}
                style={{ top: "80%", left: "65%" }}
                onClick={(e) => handleClick(e, "#target_4", "select-item4")}
              >
                4
              </button>
              <button
                className={button}
                style={{ top: "5%", left: "65%" }}
                onClick={(e) => handleClick(e, "#target_5", "select-item5")}
              >
                5
              </button>
              <button
                className={button}
                style={{ top: "30%", left: "20%" }}
                onClick={(e) => handleClick(e, "#target_6", "select-item6")}
              >
                6
              </button>
            </>
          )}
        </div>

        {activePopup && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0"
            onClick={handleClosePopup}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {activePopup === "#target_1" && (
                <p>
                  <strong>
                    Os terminais terra do Arduino, se localizam dos dois lados
                    da placa e é possível utilizar qualquer uma delas. São
                    utilizadas para alimentar o negativo dos componentes.
                  </strong>
                </p>
              )}
              {activePopup === "#target_2" && (
                <p>
                  <strong>
                    Antes que você possa começar a mexer é preciso entender como
                    funcionam as portas do Arduino, a maioria de suas entradas.
                    Vamos começar pelas portas GND (Ground), os terminais terra
                    do Arduino, se localizam dos dois lados da placa e é
                    possível utilizar qualquer uma delas. São utilizadas para
                    alimentar o negativo dos componentes.
                  </strong>
                </p>
              )}
              {activePopup === "#target_3" && (
                <p>
                  <strong>
                    Assim como ele pode alimentar os equipamentos, ele precisa
                    ser alimentado e possui três entradas para isso, sendo o
                    conector USB do tipo B que serve tanto como alimentação como
                    comunicação serial, um conector jack para ligação DC e sua
                    porta Vin.
                  </strong>
                </p>
              )}
              {activePopup === "#target_4" && (
                <p>
                  <strong>
                    Agora vamos falar das entradas e saídas digitais e
                    analógicas do Arduino. Começando pelos digitais, são saídas
                    que trabalham com dois níveis de tensão, sendo eles o alto
                    de 5V e o baixo de 0V, também podem ser de 1 e 0 ou ligado e
                    desligado. No Arduino, são as portas de 0 a 13 que recebem a
                    função de terminais digitais, podendo tanto ser de entrada
                    ou saída sendo configurados na programação.
                  </strong>
                </p>
              )}
              {activePopup === "#target_5" && (
                <p>
                  <strong>
                    Agora vamos falar das entradas e saídas digitais e
                    analógicas do Arduino. Começando pelos digitais, são saídas
                    que trabalham com dois níveis de tensão, sendo eles o alto
                    de 5V e o baixo de 0V, também podem ser de 1 e 0 ou ligado e
                    desligado. No Arduino, são as portas de 0 a 13 que recebem a
                    função de terminais digitais, podendo tanto ser de entrada
                    ou saída sendo configurados na programação.
                  </strong>
                </p>
              )}
              {activePopup === "#target_6" && (
                <p>
                  <strong>
                    As portas analógicas são identificadas como A0 a A5, elas
                    podem ser usadas para ler sinais analógicos, como os
                    provenientes de um potenciômetro ou sensor de temperatura.
                    Elas convertem o sinal analógico em digital.
                  </strong>
                </p>
              )}
            </div>
          </div>
        )}

        <div className="text-sm text-center mt-4">Placa Arduino</div>
        <div className="text-sm text-center text-gray-500">
          #pratodosverem: na imagem, uma placa de Arduino.
        </div>
      </div>
    </div>
  );
};

const getItemBackgroundImage = (itemId) => {
  switch (itemId) {
    case "select-item1":
      return "url(/img/fig2.jpg)";
    case "select-item2":
      return "url(/img/fig6.jpg)";
    case "select-item3":
      return "url(/img/fig7.jpg)";
    case "select-item4":
      return "url(/img/fig3.jpg)";
    case "select-item5":
      return "url(/img/fig4.jpg)";
    case "select-item6":
      return "url(/img/fig5.jpg)";
    default:
      return "";
  }
};

export default Arduino;
