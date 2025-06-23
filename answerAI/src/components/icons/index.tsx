import type { FC, SVGProps } from 'react'
import HomeIcon from '../../assets/dashboard/home.svg?react'
import BurgerIcon from '../../assets/dashboard/burger.svg?react'
import BellIcon from '../../assets/dashboard/bell.svg?react'
import NotesIcon from '../../assets/dashboard/clipboard-text-clock.svg?react'
import CloudIcon from '../../assets/dashboard/cloud-upload.svg?react'
import GearIcon from '../../assets/dashboard/cog.svg?react'
import AccountIcon from '../../assets/dashboard/account-circle.svg?react'
import LightBoltIcon from '../../assets/dashboard/lightning-bolt.svg?react'
import ClockReturnIcon from '../../assets/dashboard/clock-return.svg?react'
import UploadIcon from '../../assets/dashboard/upload.svg?react'
import StarYellowIcon from '../../assets/dashboard/star-yellow.svg?react'
import AUPPashIcon from '../../assets/dashboard/arrow-up-accordion.svg?react'


type IconProps = SVGProps<SVGSVGElement> ;
interface IconMap {
  [key: string]: FC<IconProps>
}

// Add more icons here
const icons: IconMap = {
  burger: (props: IconProps) => <BurgerIcon {...props} />,
  home: (props: IconProps) => <HomeIcon {...props} />,
  bell: (props: IconProps) => <BellIcon {...props} />,
  notes: (props: IconProps) => <NotesIcon {...props} />,
  cloud: (props: IconProps) => <CloudIcon {...props} />,
  gear: (props: IconProps) => <GearIcon {...props} />,
  account: (props: IconProps) => <AccountIcon {...props} />,
  lightbolt: (props: IconProps) => <LightBoltIcon {...props} />,
  clockreturn: (props: IconProps) => <ClockReturnIcon {...props} />,
  upload: (props: IconProps) => <UploadIcon {...props} />,
  arrowUpDashboard: (props: IconProps) => <AUPPashIcon {...props} />,
  starYellow: (props: IconProps) => <StarYellowIcon {...props} />,
}

const DynamicIcon: FC<IconProps & { name: string }> = ({ name, ...props }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};

export default DynamicIcon;