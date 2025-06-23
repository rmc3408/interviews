import { type FC } from "react";
import type { CartDataType } from "../../services/mock/dashboard";


type KeyIndicatorsProps = {
  cardData: CartDataType[]
}

const KeyIndicators: FC<KeyIndicatorsProps> = ({ cardData }) => {
  return (
    <div className="grow h-auto relative">
      <div className="flex justify-between items-center mx-auto mb-4">
        <h1 className="text-2xl text-white text-left">Key Performance Indicators</h1>
        <button
          className="border border-[#B0B3B8] bg-transparent text-white rounded px-3 py-0.5 font-light text-base cursor-pointer"
        >
          Variable +
        </button>
      </div>
      <div className="grid gap-6" style={{ height: 'calc(100% - 48px)', gridTemplateColumns: 'repeat(2, 1fr)' }}  // grid-cols-2 doesn't support fractional columns with custom heights
      >
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#222325] rounded-xl border border-[#76787c] p-4 min-h-[200px] flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] relative"
          >
            <div className="text-left px-6 py-4">
              <div className="font-semibold text-lg text-white">{card.title}</div>
              <div className="text-[#888] text-sm mt-1">{card.subtitle}</div>
            </div>
            <div className="absolute right-6 bottom-6 text-2xl font-bold text-white">
              {card.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default KeyIndicators;