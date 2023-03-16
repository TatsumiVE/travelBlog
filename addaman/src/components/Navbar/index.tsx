const navItem = [
  { link: "./", label: "Home" },
  { link: "./", label: "About" },
  { link: "./", label: "Places" },
  { link: "./", label: "Testimonials" },
  { link: "./", label: "Login" },
];

const Navbar = () => {
  return (
    <header>
      <div className="inner">
        <div className="layoutHeader">
          <div className="logo">
            <a href="./" target="_self">
              Travel
            </a>
          </div>
          <nav>
            <ul className="navbar">
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
