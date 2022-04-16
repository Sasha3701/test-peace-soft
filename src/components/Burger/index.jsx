import styles from "./styles/index.module.css";
import { MenuIcon, AvatarIcon } from "../../images";
import { CloseButton, Button } from "react-bootstrap";
import { useState } from "react";
import { PATHS } from "../../const";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
  {
    id: 0,
    text: "Галерея",
    path: PATHS.GALLERY,
  },
  {
    id: 1,
    text: "Обо мне",
    path: PATHS.ABOUT_ME,
  },
];

const Burger = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.burger}>
      <div
        className={classNames(styles.burger__menu, {
          [styles.burger__menu_status_open]: open,
        })}
      >
        <nav className={styles.menu}>
          <div className={styles.menu__info}>
            <div className={styles.menu__avatar}>
              <AvatarIcon />
            </div>
            <p className={styles.menu__name}>Александр Ирхин</p>
            <a className={styles.menu__mail} href="mailto:workirhin@yandex.ru">
              workirhin@yandex.ru
            </a>
          </div>
          {links.map(({ id, text, path }) => (
            <Link
              key={id}
              className={classNames(styles.menu__link, {
                [styles.menu__link_visited]: pathname === path,
              })}
              to={path}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
      <div
        className={classNames(styles.burger__overlay, {
          [styles.burger__overlay_status_open]: open,
        })}
        onClick={handleClose}
      ></div>
      <div className={styles.burger__button}>
        {open ? (
          <CloseButton variant="white" onClick={handleOpen} />
        ) : (
          <Button className="p-0" variant="link" onClick={handleOpen}>
            <MenuIcon className={styles["burger__menu-icon"]} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Burger;
