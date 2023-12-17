'use client';
import { useEffect, useState } from 'react';
import { Stack } from '@/components';
import TopMenuContent from './TopMenuContent';
import Logo from '../../Logo';
import { useOnMobile } from '../../../../hooks';
import styles from './HeaderDesktop.module.css';
import { IS_BROWSER } from '../../../../utils';

const HEIGHT_BIG = 192;
const HEIGHT_SMALL = 96;

const HeaderDesktop = () => {
  const [small, setSmall] = useState(window.scrollY || document.documentElement.scrollTop > HEIGHT_BIG);
  const onNarrowScreen = useOnMobile(1024);

  useEffect(() => {
    const onScroll = () => {
      const scrollDistance = window.scrollY || document.documentElement.scrollTop;
      if (scrollDistance > HEIGHT_BIG) {
        setSmall(true);
      }
      if (scrollDistance < HEIGHT_SMALL) {
        setSmall(false);
      }
    };
    if (IS_BROWSER) {
      window.addEventListener('scroll', onScroll, true);
    }
    return () => {
      if (IS_BROWSER) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, []);

  const classHeader = [styles.header, small ? styles.small : styles.big].join(' ');
  const logoSize = small ? 'small' : onNarrowScreen ? 'medium' : 'large';

  return (
    <div className={styles.wrapper}>
      <header className={classHeader} id="header">
        <Logo href="/" size={logoSize} />
        <Stack gap="1rem" direction="row" alignItems="center" role="navigation">
          <TopMenuContent />
          {/* <Stack direction="row" gap="0.5rem">
            <DownloadButton type="apple" />
            <DownloadButton type="google" />
          </Stack> */}
        </Stack>
      </header>
    </div>
  );
};

export default HeaderDesktop;
