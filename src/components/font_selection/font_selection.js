import { useState } from "react";
import style from "./font_selection.module.scss";

export default function FontSelection() {
  const [selectedFont, setSelectedFont] = useState(style.yellosun);
  const [fontSize, setFontSize] = useState(50);
  const [inputName, setInputName] = useState("");

  const fontType = [
    {
      name: "Font #1",
      styling: style.yellosun,
    },
    {
      name: "Font #2",
      styling: style.charlinda,
    },
    {
      name: "(Font #3)",
      styling: style.SweetHipster,
    },
    {
      name: "Font #4",
      styling: style.KindHeart,
    },
    {
      name: "Font #5",
      styling: style.CrowdPlease,
    },
    {
      name: "Font #6",
      styling: style.bebas,
    },
    {
      name: "Font #7",
      styling: style.HollywoodCapital,
    },
    {
      name: "Font #8",
      styling: style.HoleHearted,
    },
    {
      name: "Font #9",
      styling: style.HarryPotter,
    },
    {
      name: "Font #10",
      styling: style.badaboom,
    },
    {
      name: "Font #11",
      styling: style.hunter,
    },
    {
      name: "Font #12",
      styling: style.SundayBest,
    },
    {
      name: "[FONT|#13]",
      styling: style.KGDefyingGravity,
    },
    {
      name: "font #14",
      styling: style.inversionz,
    },
    {
      name: "Font #15",
      styling: style.revamped,
    },
    {
      name: "Font #16",
      styling: style.Killarney,
    },
    {
      name: "Font #17",
      styling: style.blacklisted,
    },
    {
      name: "Font #18",
      styling: style.hawaiianPunk,
    },
  ];

  const inputChangeHandler = (value) => {
    setInputName(value);
  };

  return (
    <div className={style.body}>
      <div className={style.title}>Tiara Font Preview</div>
      <p className={selectedFont} style={{ fontSize: fontSize + "px" }}>
        {inputName}
      </p>
      <div>
        <input
          type="text"
          className={style.inputField}
          value={inputName}
          onChange={(e) => inputChangeHandler(e.target.value)}
          placeholder="Type anything in here"
        />
        {selectedFont === style.KGDefyingGravity ? (
          <div className={style.alertBox}>
            <b>REMINDER: </b>
            {" Kindly use capital letters for this font. Do add "}
            <div className={`${style.KGDefyingGravity} ${style.contentDiv}`}>
              [
            </div>
            {" at the beginning of the name and add "}
            <div className={`${style.KGDefyingGravity} ${style.contentDiv}`}>
              ]
            </div>
            {" at the end of the name. Click the button below to add it."}
          </div>
        ) : selectedFont === style.SweetHipster ? (
          <div className={style.alertBox}>
            <b>REMINDER: </b>
            {" Kindly use capital letters for this font. Do add "}
            <div className={`${style.SweetHipster} ${style.contentDiv}`}>(</div>
            {" at the beginning of the name and add "}
            <div className={`${style.SweetHipster} ${style.contentDiv}`}>)</div>
            {" at the end of the name. Click the button below to add it."}
          </div>
        ) : selectedFont === style.inversionz ? (
          <div className={style.alertBox}>
            <b>REMINDER: </b>
            {" Kindly use small letters for this font."}
          </div>
        ) : null}

        <div>
          {selectedFont === style.SweetHipster ? (
            <>
              <button
                className={`${style.roundContainer} ${style.SweetHipster}`}
                onClick={() => setInputName(inputName + "(")}
              >
                (
              </button>
              <button
                className={`${style.roundContainer} ${style.SweetHipster}`}
                onClick={() => setInputName(inputName + ")")}
              >
                )
              </button>
            </>
          ) : selectedFont === style.KGDefyingGravity ? (
            <>
              <button
                className={`${style.roundContainer} ${style.KGDefyingGravity}`}
                onClick={() => setInputName(inputName + "[")}
              >
                [
              </button>
              <button
                className={`${style.roundContainer} ${style.KGDefyingGravity}`}
                onClick={() => setInputName(inputName + "]")}
              >
                ]
              </button>
              <button
                className={style.roundContainer}
                onClick={() => setInputName(inputName + "|")}
              >
                SPACE
              </button>
            </>
          ) : null}

          <button
            className={style.roundContainerPlus}
            onClick={() => setFontSize(fontSize + 4)}
          >
            +
          </button>
          <button
            className={style.roundContainerMinus}
            onClick={() => setFontSize(fontSize - 4)}
          >
            -
          </button>
        </div>
      </div>

      {fontType.map((items) => (
        <button
          className={`${style.container} ${items.styling} ${
            selectedFont === items.styling ? style.selected : null
          }`}
          onClick={() => setSelectedFont(items.styling)}
        >
          {items.name}
        </button>
      ))}
    </div>
  );
}
