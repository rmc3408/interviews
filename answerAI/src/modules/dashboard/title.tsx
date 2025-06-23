import type { FC } from 'react';
import DynamicIcon from '../../components/icons';


interface TitleProps {
  handleDrawer: () => void;
}

const Title: FC<TitleProps> = ({ handleDrawer }) => (
  <div className="flex flex-row justify-between items-center w-full py-8">
    <div className="flex items-center gap-4">
      <DynamicIcon name="lightbolt" className="w-8 h-8 fill-white" />
      <h1 className="text-white m-0 text-3xl">Dashboard Title</h1>
    </div>
    <div className="flex items-center gap-4">
      <DynamicIcon name="clockreturn" className="w-10 h-10" />
      <div
        className="flex items-center border border-[#525252] rounded-lg px-4 py-2 bg-transparent text-white text-base cursor-pointer"
        onClick={handleDrawer}
      >
        Edit variables
      </div>
      <DynamicIcon name="upload" className="w-10 h-10" />
    </div>
  </div>
)

export default Title;