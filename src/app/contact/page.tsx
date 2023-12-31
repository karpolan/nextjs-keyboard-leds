import { Wrapper } from '@/components';
import BlockSocialMedia from './BlockSocialMedia';
import BlockContactForm from './BlockContactForm';

/**
 * Content of Contact page
 * @page Contact
 */
const ContactPage = () => {
  return (
    <Wrapper tag="article">
      <BlockContactForm />
      <BlockSocialMedia />
    </Wrapper>
  );
};

export default ContactPage;
