import { type FC, useState } from 'react'
import DynamicIcon from '../../components/icons'

interface AccordionProps {
  title: string
  items: string[]
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [open, setOpen] = useState(true)

  return (
    <section>
      <div className="flex align-center justify-between pt-4 rounded-lg ">
        <div className="flex items-center gap-2">
          <DynamicIcon name="starYellow" width={24} height={24} />
          <h2 style={{ color: 'yellow', fontSize: '1.5rem', margin: '8px 0' }}>Best Scenario Result</h2>
        </div>
        <DynamicIcon name="arrowUpDashboard" onClick={() => setOpen((prev) => !prev)} />
      </div>

      <div>
        {open && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            {items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  border: '0.5px solid #C8E972',
                  color: '#C9FF3B',
                  padding: '15px 24px',
                  marginBottom: '15px',
                  borderRadius: '6px',
                  textAlign: 'left',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Accordion
