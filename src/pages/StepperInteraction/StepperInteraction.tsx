import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./StepperInteraction.module.scss";
import addSound from "../../assets/stepper-interaction/add.mp3";
import minusSound from "../../assets/stepper-interaction/minus.mp3";

const numbers = Array(10).fill(null);

const addSoundAudio = document.createElement("audio");
addSoundAudio.src = addSound;

const minusSoundAudio = document.createElement("audio");
minusSoundAudio.src = minusSound;

export default function StepperInteraction() {
  const [count, setCount] = React.useState(5);

  return (
    <PageWrapper
      title="Stepper Interaction"
      inspirationUrl="https://x.com/nitishkmrk/status/1804132896766308587"
    >
      <div className={classes["stepper"]}>
        <button
          className={classes["stepper__button"]}
          onClick={() => {
            minusSoundAudio.pause();
            minusSoundAudio.currentTime = 0;
            minusSoundAudio.play();
            setCount((prevValue) => (prevValue === 0 ? 0 : prevValue - 1));
          }}
          disabled={count === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <div className={classes["stepper__value-container"]}>
          {count
            .toString()
            .split("")
            .map((count, index) => {
              return (
                <div className={classes["stepper__column"]} key={index}>
                  {numbers.map((_, _index) => {
                    const isActive = _index === parseInt(count);
                    const offset = parseInt(count) - _index;

                    return (
                      <div
                        className={classes["stepper__value"]}
                        key={_index}
                        style={{
                          transform: `translateY(${offset * 100}%) scale(${isActive ? 1 : 0.6})`,
                          opacity: isActive ? 1 : 0,
                          filter: isActive ? "blur(0px)" : "blur(5px)",
                        }}
                      >
                        <p>{_index}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
        <button
          className={classes["stepper__button"]}
          onClick={() => {
            addSoundAudio.pause();
            addSoundAudio.currentTime = 0;
            addSoundAudio.play();
            setCount((prevValue) => prevValue + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </PageWrapper>
  );
}
