import { Sidebar } from "../../layout/Sidebar";
import "../../../styles/article.css";

export const Article = () => {
  return (
    <div className="article-container">
      <Sidebar />
      <article className="article">
        <section className="article-header">
          <h1>LOREM IPSUM</h1>
          <h3>Julio 03 - 2023</h3>
        </section>
        <div className="article-separator"></div>
        <section className="article-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            facilisis sed ex vitae luctus. Mauris eu odio vel enim lobortis
            lacinia vitae non nisi. Duis eget elementum magna, vestibulum
            lacinia lectus. Aliquam interdum a augue eu malesuada. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Pellentesque dignissim et eros ac egestas. Nam vulputate,
            risus eu tincidunt gravida, urna justo molestie est, in accumsan sem
            risus eu ante. Nam posuere tortor eu ultricies tincidunt. Vivamus
            aliquam vulputate tellus, id interdum lacus venenatis nec. Nullam
            dignissim ante eget nisl semper hendrerit. Mauris nec ultricies
            nisi. Nunc blandit auctor cursus. Vestibulum eget fermentum enim.
            Fusce condimentum sem at libero sodales, vel faucibus felis
            efficitur. Praesent pretium tempor ligula. Praesent hendrerit tempus
            mollis. Cras vitae ultricies orci. Vestibulum pulvinar, nisl nec
            bibendum blandit, libero augue mattis erat, ac auctor est lectus
            quis massa. Maecenas pellentesque diam ut dapibus molestie. Mauris
            tristique suscipit quam, faucibus placerat justo commodo a. Integer
            lectus eros, tincidunt vitae viverra vel, tincidunt vitae velit.
            Nunc efficitur pellentesque purus. Aliquam finibus nibh nec erat
            posuere, nec rhoncus lorem finibus. Fusce facilisis nibh turpis, sed
            lobortis massa lobortis id.
          </p>
        </section>
      </article>
    </div>
  );
};
