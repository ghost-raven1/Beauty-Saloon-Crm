import {useContext} from 'react';
import bem from "easy-bem";
import cn from "classnames";
import "./Master.scss";
import MastersContext from '../../context/MastersContext';

const b = bem("Master");

export default function Master({ master, className}) {
  const { id, photo, name, position } = master;
  const _className = cn(b(), className);
  const _photo =
    photo ||
    "https://www.marketingmuses.com/wp-content/uploads/2018/01/invis-user.png";

  const { removeMaster } = useContext(MastersContext);

  return (
    <div className={_className}>
      <div className={b("photo")}>
        <img src={_photo} />
      </div>
      <div className={b("name")}>{name}</div>
      <div className={b("position")}>{position}</div>

      <button onClick={() => removeMaster(id)}>X</button>
    </div>
  );
}
