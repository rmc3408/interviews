import DynamicIcon from "../icons";


const Header = () => {
  return (
    <div className="flex justify-between items-center h-16 px-7 bg-[#0d0d0d] text-white">
      <div className="flex items-center gap-11">
      <DynamicIcon name="burger" className="w-6 h-6" />
      <button
        type="button"
        className="border border-[#B0B3B8] bg-[#212124] text-white rounded px-4 py-1 font-light text-base cursor-pointer"
      >
        Charging Station
      </button>
      <button type="button" className="text-white">Fleet Sizing</button>
      <button type="button" className="text-white">Parking</button>
      </div>
      <div>
      <input
        type="search"
        placeholder="Search..."
        className="px-3 py-1.5 rounded border border-gray-300 text-base text-white bg-transparent placeholder-gray-400"
      />
      </div>
    </div>
  )
};

export default Header;