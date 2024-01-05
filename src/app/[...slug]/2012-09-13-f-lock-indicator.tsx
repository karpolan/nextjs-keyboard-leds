import { Typo } from '@/components';

export const categories = ['download', 'software'];
export const tags = ['download', 'discuss', 'software', 'feature'];
export const content = (
  <>
    <Typo variant="header1">F-Lock Keyboard Indicator</Typo>
    <Typo variant="paragraph">We often receive feedback like that:</Typo>
    <Typo variant="paragraph" tag="q">
      I was hoping to find something that would indicate my current FLock status (Microsoft Natural 4000 keyboard). This
      didn't do it.
    </Typo>
    <Typo variant="paragraph">So we've made some investigation:</Typo>
    <Typo variant="list" tag="ol">
      <li>F-Lock state cannot be controlled by software.</li>
      <li>
        The only way to detect is <strong>F-Lock</strong> On or Off is wait until user press some of <strong>Fx</strong>{' '}
        keys and compare the scan code.
      </li>
    </Typo>
    <Typo variant="paragraph">
      Sorry, we have no idea how to make <strong>F-Lock</strong> indicator :(
    </Typo>
  </>
);
