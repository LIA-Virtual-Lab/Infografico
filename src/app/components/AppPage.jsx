"use client";
import React, { useState } from "react";



const button = "absolute bg-gray-900 text-center text-white transition-all duration-500 w-6 h-6 rounded-full shadow-black shadow-lg hover:bg-gray-700 hover:shadow-xl"

const popup = "bg-white rounded-lg p-1 text-sm"

const area ="p-3  flex flex-col bg-white  relative m-16 " 


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
    <div className="relative min-h-screen bg-blue-150"> 
    <div className=" max-w-5xl mx-auto p-3  bg-white shadow-lg border ">
      <h1 className="text-3xl text-white bg-gray-600 p-4 rounded-md text-center font-hanken">
        Epiderme
      </h1>
      

      <div className="relative m-40 p-1 mix-blend-x">
        <div
          className={`select-area ${backgroundImage ? "h-20" : ""}`}
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor:"gray-150",
          }}
        >
          {!isPopupOpen && (
            <>
              <button
                className={button}
                style={{ top: "40%", left: "65%" }}
                onClick={(e) => handleClick(e, "#target_1", "select-item1")}
              >
                1
              </button>
              <button
                className={button}
                style={{ top: "61%", left: "32%" }}
                onClick={(e) => handleClick(e, "#target_2", "select-item2")}
              >
                2
              </button>
              <button
                className={button}
                style={{ top: "65%", left: "54%" }}
                onClick={(e) => handleClick(e, "#target_3", "select-item3")}
              >
                3
              </button>
              <button
                className={button}
                style={{ top: "70%", left: "65%" }}
                onClick={(e) => handleClick(e, "#target_4", "select-item4")}
              >
                4
              </button>
              <button
                className={button}
                style={{ top: "85%", left: "40%" }}
                onClick={(e) => handleClick(e, "#target_5", "select-item5")}
              >
                5
              </button>
            </>
          )}
        </div>

        {activePopup && (
  <div
    className="relative inset-0 z-50 bg-transparent "
    onClick={handleClosePopup}
  >
    <div className="relative flex justify-center">
      <div
        className={area}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex flex-col items-center p-1">
              {activePopup === "#target_1" && (
                <p className={popup}>
                  <strong>
                    Os terminais terra do Arduino, se localizam dos dois lados
                    da placa e é possível utilizar qualquer uma delas. São
                    utilizadas para alimentar o negativo dos componentes.
                  </strong>
                </p>
              )}
              {activePopup === "#target_2" && (
                <p className={popup}>
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
                <p className={popup}>
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
                <p className={popup}>
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
                <p className={popup}>
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
            </div>
          </div>
          </div>
          </div>
        )}

        <div className="text-sm text-center mt-4">Fragmento de Pele</div>
        <div className="text-sm text-center text-gray-500">
          #pratodosverem: na imagem, um Fragmento de Pele.
        </div>
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
    default:
      return "";
  }
};

export default Arduino;
