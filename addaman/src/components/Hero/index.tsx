import Button from "../Button";
import styled from "./hero.module.css";
const MainVisual = () => {
  return (
    <section className={styled.mainVisual}>
      <div className={styled.hero}>
        <div className={styled.bg}>
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            id, qui blanditiis veniam voluptatem reiciendis maiores iusto earum
          </p>
          <Button className={styled.heroBtn} label="Explore Now"></Button>
        </div>
      </div>
    </section>
  );
};
export default MainVisual;
