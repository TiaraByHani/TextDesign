import FontSelection from "../font_selection/font_selection";
import TiaraLogo from "../../assets/TiaraLogo.png";
import style from "./main.module.scss";

export default function Main() {
  return (
    <div>
      <img className={style.logo} src={TiaraLogo} alt="TiaraLogo" />
      <FontSelection />
      <div className={style.header}>Tiara Han Enterprise</div>
    </div>
  );
}
