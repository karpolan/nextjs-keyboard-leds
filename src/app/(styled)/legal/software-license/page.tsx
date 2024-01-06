import { Link, Typo, Wrapper } from '@/components';

/**
 * Content of "Software License" page
 * @page SoftwareLicensePage
 */
const SoftwareLicensePage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">Software License</Typo>

      <Typo variant="paragraph">
        This is the <strong>End User License Agreement</strong> (the &quot;Agreement&quot;) is a legal agreement between
        you, the end-user (&quot;Licensee&quot;), and{' '}
        <strong>
          <Link href="https://karpolan.com">KARPOLAN</Link>
        </strong>
        , the manufacturer and the copyright owner (&quot;Owner&quot;), for the use of the &quot;Keyboard Leds&quot; aka
        &quot;Keyboard Indicator&quot; aka &quot;Key Leds&quot; software product (&quot;Software&quot;).
      </Typo>
      <Typo variant="paragraph">
        By using this Software or storing this program on a computer drive (or other media), you are agreeing to be
        bound by the terms of this Agreement. If you do not agree with the terms of this Agreement, please remove this
        Software from all your media.
      </Typo>

      <Typo variant="header2">Rights</Typo>
      <Typo variant="paragraph">
        The Software is protected by copyright laws and international copyright treaties, as well as other intellectual
        property laws and treaties. Software is licensed, not sold. Software is free to use and includes no technical
        support. The origin of this Software must not be misrepresented.
      </Typo>

      <Typo variant="header2">Copyright</Typo>
      <Typo variant="paragraph">
        All title, including but not limited to copyrights, in and to the Software and any copies thereof are owned by
        Owner or its suppliers. All title and intellectual property rights in and to the content which may be accessed
        through use of the Software is the property of the respective content owner and may be protected by applicable
        copyright or other intellectual property laws and treaties. This Agreement grants you no rights to use such
        content. All rights not expressly granted are reserved by Owner.
      </Typo>

      <Typo variant="header2">Distribution</Typo>
      <Typo variant="paragraph">
        This Software may be distributed freely through on-line services, bulletin boards, or other forms of electronic
        media, as long as the files are distributed in their entirety. Computer Magazines/Archives are authorized to
        distribute Software on any Cover Disk or CD-ROM without an individual permission.
      </Typo>

      <Typo variant="header2">Restrictions</Typo>
      <Typo variant="paragraph">
        You may not alter this Software in any way, including changing or removing any messages or windows. You may not
        decompile, reverse engineer, disassemble or otherwise reduce this Software to a human perceivable form. You may
        not modify, rent or resell this Software for profit, or create any derivative works, based upon this Software.
      </Typo>

      <Typo variant="header2">Warranty Disclaimer</Typo>
      <Typo variant="paragraph" uppercase>
        This Software is provided on an &quot;as is&quot; basis without warranty of any kind, expressed or implied,
        including but not limited to the implied warranties of merchantability and suitability for a particular purpose.
        The person using the Software bears all risk as to the quality and performance of the Software. Owner will not
        be liable for any special, incidental, consequential, indirect or similar damages due to loss of data or any
        other reason, even if Owner or an agent of Owner has been advised of the possibility of such damages. In no
        event will Owner be liable for costs of any damages. You acknowledge that you have read this license, understood
        it, and agreed to be bound by its terms.
      </Typo>
    </Wrapper>
  );
};

export default SoftwareLicensePage;
