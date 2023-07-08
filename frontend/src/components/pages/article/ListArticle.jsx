import PropTypes from "prop-types";
import dateUtils from "../../../helpers/date.utils";
import { useContext } from "react";
import { GlobalStateContext } from "../../../context";
import { useNavigate } from "react-router-dom";

const ListArticle = ({ userId, date, title, description, content }) => {
  const context = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const view = () => {
    context.setViewArticle({
      userId: userId,
      title: title,
      description: description,
      content: content,
      date: date,
    });
    console.log(context.viewArticle);
    navigate("/article");
  };

  return (
    <div className="home-card">
      <div className="home-card-date">
        <p>{date ? dateUtils.getDayFromData(date) : ""}</p>
        <p>{date ? dateUtils?.getMonthFromData(date) : ""}</p>
      </div>
      <img
        className="home-card-img"
        src="https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg"
        alt=""
      />
      <div className="home-card-content">
        <div className="home-card-info">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <button className="btn-card" onClick={view}>
          Read more
        </button>
      </div>
    </div>
  );
};

ListArticle.propTypes = {
  userId: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
};

export default ListArticle;
