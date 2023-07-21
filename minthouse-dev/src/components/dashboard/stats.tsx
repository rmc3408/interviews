import { Card, Typography } from 'antd'
import { styled } from 'styled-components';
const { Text } = Typography;

const TopLevelCard = styled(Card)`
  width: 100%;
  margin-bottom: 24px;
`

const TitleMoneyTotal = styled.h1`
    margin-top: 0px;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 6px;
`


function StatisticTable() {
  return (
    <TopLevelCard>
      <Text >Earning YTD</Text>
      <TitleMoneyTotal>$ 56,201.00</TitleMoneyTotal>
      <Text>2.29%</Text>
    </TopLevelCard>
  )
}

export default StatisticTable
