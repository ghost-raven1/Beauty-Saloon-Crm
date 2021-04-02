import bem from "easy-bem";
import cn from "classnames";
import "./Master.scss";

const b = bem("Master");

export default function Master({ master, className, onRemove }) {
  const { photo, name, position } = master;
  const _className = cn(b(), className);
  const _photo =
    photo ||
    "https://www.marketingmuses.com/wp-content/uploads/2018/01/invis-user.png";

  return (
    <div className={_className}>
      <div className={b("photo")}>
        <img src={_photo} />
      </div>
      <div className={b("name")}>{name}</div>
      <div className={b("position")}>{position}</div>

      <button onClick={onRemove}>X</button>
    </div>
  );
}
