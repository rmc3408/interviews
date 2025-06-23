import DynamicIcon from '../icons'

export default function MenuBar() {
  return (
    <aside
      className="w-20 h-[calc(100vh-64px)] bg-[#0d0d0d] flex flex-col justify-between items-center py-4"
    >
      <div className="flex flex-col gap-10">
        <DynamicIcon name="home" className="w-6 h-6" />
        <DynamicIcon name="bell" className="w-6 h-6" />
        <DynamicIcon name="notes" className="w-6 h-6" />
        <DynamicIcon name="cloud" className="w-6 h-6" />
        <DynamicIcon name="gear" className="w-6 h-6" />
      </div>
      <div
        className="text-2xl text-white cursor-pointer text-center py-4"
      >
        <DynamicIcon name="account" className="w-6 h-6" />
      </div>
    </aside>
  )
}
