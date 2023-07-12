import { useEffect, useState } from "react";
import { fetchHelper } from "../../../../helpers/fetchHelper";
import { global } from "../../../../helpers/global";

const AdminArticles = () => {
  const [articles, setArticles] = useState({});
  const getArticles = async () => {
    try {
      const URI = global.url + "articles";
      const { data } = await fetchHelper(URI, "GET");
      setArticles(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return <div>Articles</div>;
};

export default AdminArticles;
