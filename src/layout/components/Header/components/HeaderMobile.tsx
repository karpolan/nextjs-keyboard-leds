import { Button, Stack } from '@/components';
import Logo from '../../Logo';

const HeaderMobile = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Logo size="small" />
      <Button iconLeft="menu" />
      {/* <TopMenu /> */}
    </Stack>
  );
};

export default HeaderMobile;
