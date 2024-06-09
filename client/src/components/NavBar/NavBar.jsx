import { Group } from '@mantine/core';
import classes from './NavBar.module.css';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg'


const data = [
  { link: '/', label: 'Movies'},
  { link: '/rated-movies', label: 'Rated movies'},
];


export const Navbar = () => {
  const location = useLocation()

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.link === location.pathname || undefined}
      href={item.link}
      key={item.label}
    >
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} >
          <img src={logo} alt=''/>
        </Group>
        {links}
      </div>
    </nav>
  );
}