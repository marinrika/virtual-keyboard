import chooseCurrentFunction from "./generic-function.js";
import setCase from "./case.js";
import setStartHiddenKeys from "./hidden-keys.js";

export function keyUp(e, currentState) {
  const keys = document.querySelectorAll(".keyboard__key");
  const { language } = currentState;
  let {
    currentCase,
    isAltPress,
    isCapsPress,
    isCtrlPress,
    isShiftPress,
  } = currentState;
  keys.forEach((key) => {
    if (key.classList[1] === e.code && e.code !== "CapsLock") {
      key.classList.remove("active");
    }
  });
  if (e.code === "CapsLock") {
    isCapsPress = false;
  }
  if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
    isShiftPress = false;
    if (currentCase === "up") {
      currentCase = setCase(currentCase, "down", language);
    } else if (currentCase === "shiftCaps") {
      currentCase = setCase(currentCase, "caps", language);
    }
  }
  if (e.code === "AltLeft") {
    isAltPress = false;
  }
  if (e.code === "ControlLeft") {
    isCtrlPress = false;
  }
  return {
    currentCase,
    isAltPress,
    isCapsPress,
    isCtrlPress,
    isShiftPress,
  };
}

export function keyDown(textarea, e, currentState) {
  const keys = document.querySelectorAll(".keyboard__key");
  const isKey = Array.from(keys).some((key) => key.classList[1] === e.code);
  let {
    language,
    currentCase,
    isAltPress,
    isCapsPress,
    isCtrlPress,
    isShiftPress,
    textIndex,
  } = currentState;
  if (isKey) {
    const pressedKey = document
      .querySelector(`.${e.code}`)
      .querySelector(`.${language}`)
      .querySelector(`.${currentCase}`).innerHTML;

    textIndex = chooseCurrentFunction(pressedKey, textIndex, textarea);

    keys.forEach((key) => {
      if (key.classList[1] === e.code && e.code === "CapsLock") {
        if (isCapsPress) {
          return;
        }
        isCapsPress = true;
        if (key.classList[2] === "active") {
          key.classList.remove("active");
          if (currentCase === "caps") {
            currentCase = setCase(currentCase, "down", language);
          } else if (currentCase === "shiftCaps") {
            currentCase = setCase(currentCase, "up", language);
          }
        } else {
          key.classList.add("active");
          if (currentCase === "down") {
            currentCase = setCase(currentCase, "caps", language);
          } else if (currentCase === "up") {
            currentCase = setCase(currentCase, "shiftCaps", language);
          }
        }
      }
      if ((key.classList[1] === e.code && e.code === "ShiftLeft") || (key.classList[1] === e.code && e.code === "ShiftRight")
      ) {
        if (isShiftPress) {
          return;
        }
        isShiftPress = true;
        if (currentCase === "down") {
          currentCase = setCase(currentCase, "up", language);
        } else if (currentCase === "caps") {
          currentCase = setCase(currentCase, "shiftCaps", language);
        }
      }
      if (key.classList[1] === e.code && e.code !== "CapsLock") {
        key.classList.add("active");
      }
      if (key.classList[1] === e.code && e.code === "AltLeft") {
        if (isAltPress) {
          return;
        }
        isAltPress = true;
        if (document.querySelector(".ControlLeft").classList[2] === "active") {
          if (language === "en") {
            language = "ru";
            setStartHiddenKeys("ru");
            currentCase = setCase(currentCase, currentCase, language);
            localStorage.setItem("language", language);
          } else {
            language = "en";
            setStartHiddenKeys("en");
            currentCase = setCase(currentCase, currentCase, language);
            localStorage.setItem("language", language);
          }
        }
      } else if (key.classList[1] === e.code && e.code === "ControlLeft") {
        if (isCtrlPress) {
          return;
        }
        isCtrlPress = true;
        if (document.querySelector(".AltLeft").classList[2] === "active") {
          if (language === "en") {
            language = "ru";
            setStartHiddenKeys("ru");
            currentCase = setCase(currentCase, currentCase, language);
            localStorage.setItem("language", language);
          } else {
            language = "en";
            setStartHiddenKeys("en");
            currentCase = setCase(currentCase, currentCase, language);
            localStorage.setItem("language", language);
          }
        }
      }
    });
  }
  return {
    language,
    currentCase,
    isAltPress,
    isCapsPress,
    isCtrlPress,
    isShiftPress,
    textIndex,
  };
}