'use client';
import { useOnMobile } from '@/hooks';
import HeaderDesktop from './components/HeaderDesktop';
import HeaderMobile from './components/HeaderMobile';

const Header = () => {
  const onMobile = useOnMobile();

  return onMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
