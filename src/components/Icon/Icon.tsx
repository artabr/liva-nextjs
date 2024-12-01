import {
  TfiDribbble,
  TfiGithub,
  TfiLinkedin,
  TfiStackOverflow,
  TfiTwitter,
} from 'react-icons/tfi';

import { TfiIcons } from '@/components/Icon/Icon.types';

export type IconProps = {
  icon: string;
};

export const Icon = (props: IconProps) => {
  switch (props.icon) {
    case TfiIcons.github:
      return <TfiGithub />;
    case TfiIcons.linkedin:
      return <TfiLinkedin />;
    case TfiIcons.twitter:
      return <TfiTwitter />;
    case TfiIcons.dribbble:
      return <TfiDribbble />;
    case TfiIcons.stackoverflow:
      return <TfiStackOverflow />;
    default:
      return null;
  }
};
