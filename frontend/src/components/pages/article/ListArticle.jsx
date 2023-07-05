import PropTypes from "prop-types";
import dateUtils from "../../../helpers/date.utils";
import "../../../styles/login.css";

const ListArticle = ({ createAt, title, content }) => {
  return (
    <div className="home-card">
      <div className="home-card-date">
        <p>{dateUtils.getDayFromData(createAt)}</p>
        <p>{dateUtils.getMonthFromData(createAt)}</p>
      </div>
      <img
        className="home-card-img"
        src="https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg"
        alt=""
      />
      <div className="home-card-content">
        <div className="home-card-info">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <button className="btn-card">Read more</button>
      </div>
    </div>
  );
};

ListArticle.propTypes = {
  createAt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default ListArticle;
