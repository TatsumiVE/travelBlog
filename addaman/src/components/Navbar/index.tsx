import styled from "./navbar.module.css";
const navItem = [
  { link: "/", label: "Home" },
  { link: "/#service", label: "Services" },
  { link: "/#places", label: "Places" },
  { link: "/#testimonials", label: "Testimonials" },
  { link: "/login", label: "Login" },
];

const Navbar = () => {
  return (
    <header>
      <div className="inner">

        <div className={styled.layoutHeader}>
          <div className={styled.logo}>

            <a href="/" target="_self">
              Travel
            </a>
          </div>
          <nav>
            <ul className={styled.navbar}>
              {navItem.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link} target="_self">
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
