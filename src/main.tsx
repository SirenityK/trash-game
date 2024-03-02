import { render } from "preact";
import { useState } from "preact/hooks";
import { Trashcan, getColor } from "./trashcan";
import { RandomImage } from "./selection";

function StartButton({ onClick }) {
  return (
    <h1 className="py-2 w-50" onClick={onClick}>
      Comenzar
    </h1>
  );
}

function Page() {
  const [gameState, setGameState] = useState({
    isGameStarted: false,
    message: "¿Qué tipo de desechable es este?",
    currentType: null,
    currentImage: <img src="" id={"showcase"} alt={"recyclable"} />,
    timedOut: false,
    counter: 3,
    points: 0,
  });

  const RecycleCard = () => {
    let count = gameState.counter;
    const interval = setInterval(() => {
      count--;
      if (count < 0) {
        clearInterval(interval);
        setGameState((prev) => ({
          ...prev,
          timedOut: true,
        }));
      }
    }, 1000);
    return (
      <div id="recycle-card">
        <div style={{ borderRadius: "1rem 0 0 1rem" }} className="img-fluid">
          {gameState.currentImage}
        </div>
        <div style={{ borderRadius: "0 1rem 1rem 0", display: "grid" }}>
          <h1>{gameState.message}</h1>
        </div>
      </div>
    );
  };

  const handleStartButton = () => {
    setGameState((prev) => ({
      ...prev,
      isGameStarted: !prev.isGameStarted,
    }));

    const [type, gentImage] = RandomImage();
    setGameState((prev) => ({
      ...prev,
      currentType: type,
      currentImage: gentImage,
    }));
  };

  const handleTrashCanClick = (clickedType: string) => {
    if (gameState.isGameStarted) {
      if (
        clickedType.replace("á", "a").toLowerCase() === gameState.currentType
      ) {
        setGameState((prev) => ({
          ...prev,
          message: "¡Correcto!\nAhora intenta con este otro.",
          points: prev.points + 100,
        }));
        const [a, b] = RandomImage();
        setGameState((prev) => ({
          ...prev,
          currentType: a,
          currentImage: b,
        }));
      } else {
        setGameState((prev) => ({
          ...prev,
          message: "¡Incorrecto! Inténtalo de nuevo.",
          points: prev.points - 50,
        }));
      }
      setGameState((prev) => ({
        ...prev,
        counter: 2,
        timedOut: false,
      }));
    }
  };

  return (
    <>
      <div className="container text-center mt-2 mt-md-0">
        <div className="row row-cols-2 row-cols-md-4" id="trash-locations">
          {[0, 1, 2, 3].map((index) => {
            const type = getColor(index);
            return (
              <div className="col trashcan" id={type}>
                <h1>{type}</h1>
                <Trashcan
                  type={type}
                  onClick={() => {
                    handleTrashCanClick(type);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="row row-cols-1 row-cols-md-3 mx-4 justify-content-center justify-content-md-center">
          <div className="col d-grid" id="start">
            {!gameState.isGameStarted && (
              <StartButton onClick={handleStartButton} />
            )}
          </div>
          <div className="col col-auto" id="case">
            {gameState.timedOut && gameState.currentImage}
          </div>
          <div className="col d-grid my-2" id="score">
            <h1 className="py-2 w-50">Puntos: {gameState.points}</h1>
          </div>
        </div>
      </div>
      {gameState.isGameStarted && !gameState.timedOut && <RecycleCard />}

      <div className="backImage">
        <div className="fondoImage">
          <picture>
            <source
              srcSet={new URL(
                "images/cielo.png?as=avif",
                // @ts-ignore
                import.meta.url
              ).toString()}
              type="image/avif"
            />
            <source
              srcSet={new URL(
                "images/cielo.png?as=webp",
                // @ts-ignore
                import.meta.url
              ).toString()}
              type="image/webp"
            />
            <img src="images/cielo.png" alt={"cielo"} loading={"eager"} />
          </picture>
        </div>

        <div className="bottomImage">
          <picture>
            <source
              srcSet={new URL(
                "images/zacate.png?as=avif",
                // @ts-ignore
                import.meta.url
              ).toString()}
              type="image/avif"
            />
            <source
              srcSet={new URL(
                "images/zacate.png?as=webp",
                // @ts-ignore
                import.meta.url
              ).toString()}
              type="image/webp"
            />
            <img
              // @ts-ignore
              src={new URL("images/zacate.png", import.meta.url).toString()}
              alt={"zacate"}
              loading={"eager"}
            />
          </picture>
        </div>
      </div>
    </>
  );
}

render(<Page />, document.body);
