import "../../styles/sidebar.css";

export const Sidebar = () => {
  return (
    <div>
      <section className="sidebar-user">
        <div className="sidebar-user">
          <img
            className="logo-user"
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg?w=136&h=136"
            alt=""
          />
          <h1>ANDRÉS</h1>
        </div>
      </section>
      <div className="sidebar-separator"></div>
      <section className="sidebar-cards">
        <div className="card-container">
          <img
            className="card-img"
            src="https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg"
            alt=""
          />
          <div className="card-content">
            <div className="card-info">
              <h1>Titulo del blog</h1>
              <h3>Julio 03 - 2023</h3>
            </div>
            <img
              className="logo-user"
              src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg?w=136&h=136"
              alt=""
            />
          </div>
        </div>
        <div className="card-container">
          <img
            className="card-img"
            src="https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg"
            alt=""
          />
          <div className="card-content">
            <div className="card-info">
              <h1>Titulo del blog</h1>
              <h3>Julio 03 - 2023</h3>
            </div>
            <img
              className="logo-user"
              src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg?w=136&h=136"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};
