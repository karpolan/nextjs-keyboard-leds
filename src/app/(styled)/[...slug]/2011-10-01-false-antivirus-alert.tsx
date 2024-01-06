import { Link, Typo } from '@/components';

export const categories = ['software', 'download'];
export const tags = ['feature', 'memory', 'software', 'virus'];
export const title = 'False antivirus alert';
export const content = (
  <>
    <Typo variant="paragraph">
      Our customers report that some antiviruses mark <strong>Keyboard LEDs</strong> software as a virus!
    </Typo>
    <Typo variant="paragraph">
      We&apos;ve check the executable file at{' '}
      <Link href="https://www.virustotal.com/file-scan/report.html?id=243fe18531fc36a53726df1787368e41c0a8ccfe28a1603540c55b764b1ab437-1317476307">
        VirusTotal
      </Link>{' '}
      web service and understood that it was a false alarm. Almost all antiviruses removed any alert for keyboard
      indicators program now.
    </Typo>

    <Typo variant="paragraph">
      Please inform us if your antivirus alerts on some of{' '}
      <Link href="https://karpolan.com/software/">our software</Link>. Thank you.
    </Typo>
  </>
);
