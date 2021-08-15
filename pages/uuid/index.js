import { useState, memo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import copy from 'copy-to-clipboard';
import { RefreshIcon, DuplicateIcon } from '@heroicons/react/outline'

import { MyHead, Nav, Container } from '../../components/Page'
import ColumnLabel from '../../components/ColumnLabel'
import { ToolTitle, ToolDesc } from '../../components/ToolHead'
import Button from '../../components/Button'
import QuickCopyTextarea from '../../components/QuickCopyTextarea';

function generateUUID (count) {
  return new Array(Number(count)).fill().map(() => {
    return uuidv4()
  }).join('\n')
}

const QuickCopyUUID = () => {

  const CopyItem = props => {
    return (
      <>
        <button onClick={() => { copy(generateUUID(props.quantity)) }} className="flex justify-center items-center px-6 py-3 md:py-5 text-gray-400 hover:text-gray-900 border border-gray-300 hover:bg-gray-50 rounded-md shadow-sm font-medium space-x-1 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200 bg-white">
          <span className="text-gray-900">{props.quantity} 个 </span>
          <span><DuplicateIcon className="w-5 h-5" /></span>
        </button>
      </>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <CopyItem quantity="1" />
        <CopyItem quantity="5" />
        <CopyItem quantity="10" />
        <CopyItem quantity="50" />
        <CopyItem quantity="100" />
        <CopyItem quantity="500" />
      </div>
    </>
  )
}

const CustomQuantity = memo(({ g }) => {

  const [count, setCount] = useState(Number(g))
  const [uuidList, setUuidList] = useState(generateUUID(g))

  // 异步路由导致需要监听
  // useEffect(() => {
  //   if (g > 0) {
  //     setCount(g)
  //     setUuidList(generateUUID(g))
  //   }
  // }, [g])

  const onInputChange = event => {
    const newCount = Number(event.target.value) > 1000 ? 999 : event.target.value
    setCount(newCount)
    setUuidList(generateUUID(newCount))
  }

  const refresh = () => {
    setUuidList(generateUUID(count))
  }

  return (
    <>
      <div className="flex flex-wrap mb-4">
        <div className="relative">
          <input
            name="count"
            id="count"
            value={count} onChange={event => onInputChange(event)} type="number"
            className="w-32 h-full block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder=""
          />
        </div>

        <Button onClick={refresh} className="ml-2">
          <RefreshIcon className="h-4 w-4 mr-1" /> 刷 新
        </Button>
      </div>
      <QuickCopyTextarea value={uuidList} onChange={event => setUuidList(event.target.value)} rows="11">
      </QuickCopyTextarea>
    </>
  )
})



export default function UUID () {

  return (
    <>
      <MyHead modul="UUID" />
      <Nav />
      <Container>
        <ToolTitle title="UUID 生成" subtitle="Universally unique identifier（通用唯一识别码）" mdSubtitle="UUID: 通用唯一识别码。" />
        <ToolDesc text="可以点击按钮直接复制对应数量的 UUID，亦可自定义生成的 UUID 数量（0~999）。" />
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x md:divide-y-0">
          <div className="pb-5 md:pb-0 md:pr-5">
            <ColumnLabel text="快速复制" />
            <QuickCopyUUID />
          </div>
          <div className="pt-5 md:pt-0 md:pl-5">
            <ColumnLabel htmlFor="count" text="自定数量" />
            <CustomQuantity g="10" />
          </div>
        </div>
      </Container>

    </>
  )
}