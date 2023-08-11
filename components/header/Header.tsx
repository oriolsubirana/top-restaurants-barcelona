import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TOPIcon from '/public/top.svg';
import Image from 'next/image';
import styles from './Header.module.css';

export function Header() {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <Image
          priority={true}
          className={styles.logo}
          alt='TOP'
          src={TOPIcon}
        />
      </Toolbar>
    </AppBar>
  );
}
