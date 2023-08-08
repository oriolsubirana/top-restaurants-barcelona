import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TOPIcon from './top.svg';
import Image from 'next/image';
import styles from './Header.module.css';

export function Header() {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <div className={styles.toolBar}>
          <Image
            priority={true}
            className={styles.logo}
            alt='TOP'
            src={TOPIcon}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
