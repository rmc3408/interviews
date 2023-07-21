import { Row, Col, Space, Card } from 'antd'
import Title from 'antd/es/typography/Title'
import { styled } from 'styled-components'
import Chart from './chart'
import ListItems from './listItems'
import StatisticTable from './stats'

function DashboardContent() {
  return (
    <div style={{ paddingLeft: '48px' }}>
      <Row>
        <Title level={3}>Top Performing Articles</Title>
      </Row>
      <Row>
        <Col sm={24} xl={14}>
          <ListItems />
        </Col>
        <Col offset={1} xs={24} xl={8}>
          <StatisticTable />
          <Chart />
        </Col>
      </Row>
    </div>
  )
}

export default DashboardContent
