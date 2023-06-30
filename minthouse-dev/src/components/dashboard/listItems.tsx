import { Table, Tag } from 'antd'

const { Column } = Table

interface DataType {
  key: React.Key
  item: string
  Date: string
  earning: number
  tags: string[]
}

const data: DataType[] = [
  {
    key: '1',
    item: 'John',
    Date: 'Brown',
    earning: 119000.00,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    item: 'Jim',
    Date: 'Green',
    earning: 42000.00,
    tags: ['loser'],
  },
  {
    key: '3',
    item: 'Joe',
    Date: 'Black',
    earning: 32000.00,
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    item: 'Joe',
    Date: 'Black',
    earning: 32000.00,
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    item: 'Joe',
    Date: 'Black',
    earning: 32000.00,
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    item: 'Joe',
    Date: 'Black',
    earning: 32000.00,
    tags: ['cool', 'teacher'],
  },
]

function ListItems() {
  return (
    <Table dataSource={data}>
      <Column title="Items" dataIndex="item" key="item" />
      <Column title="Date" dataIndex="Date" key="Date" />
      <Column title="Earning" dataIndex="earning" key="earning" />
      <Column title="Status" dataIndex="tags" key="tags"
        render={(tags: string[]) => (
          <>
            {tags.map((tag) => (
              <Tag color="#117B34FF" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
    </Table>
  )
}

export default ListItems
