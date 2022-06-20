    import { Link } from "react-router-dom";
import "./Card.css";

export const Card = () => {
  return (
    <>
      <Link to={`/book/agro/1`}>
        <div className="CardContainer">
          <div className="CardImagem">
            <img src="" alt="..." />
          </div>
          <div className="CardInfoTitle" title="Título">
            Título
          </div>
        </div>
      </Link>
    </>
  );
};
