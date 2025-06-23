import { useState } from 'react'
import Drawer from '../../components/drawer'
import Graph from '../../modules/dashboard/graph'
import KeyIndicators from '../../modules/dashboard/key-indicators'
import Accordion from '../../modules/dashboard/results'
import Title from '../../modules/dashboard/title'
import { CARD_INDICATORS, CHART_CONFIG, ITEMS_RESULT } from '../../services/mock/dashboard'
import DashboardLayout from './layout'


function Dashboard() {
  const [show, setShow] = useState(false);

  const handleDrawer = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <DashboardLayout>
      <section>
        <Title handleDrawer={handleDrawer} />
        <Accordion items={ITEMS_RESULT} title="Best Scenario Result" />
      </section>
      <section className="bottom-0 relative align-bottom">
        <div className="flex flex-row  w-full gap-8 py-8">
          <Graph config={CHART_CONFIG} />
          <KeyIndicators cardData={CARD_INDICATORS} />
        </div>
      </section>
      <Drawer isOpen={show} setIsOpen={setShow}>
        <h1>Info from Redux</h1>
      </Drawer>
    </DashboardLayout>
  )
}

export default Dashboard
