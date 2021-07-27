import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import copy from 'copy-to-clipboard';
import { RefreshIcon, ClipboardCopyIcon, ClipboardCheckIcon, XIcon, AcademicCapIcon } from '@heroicons/react/outline'

import Container from '../../components/Container'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import ToolHead from '../../components/ToolHead'

export default function UUID () {

  const router = useRouter()

  let { g = '0' } = router.query
  const [count, setCount] = useState(Number(g))
  const [uuidList, setUuidList] = useState(undefined)
  const [copyState, setCopyState] = useState(0)

  // 异步路由导致需要监听
  useEffect(() => {
    setCount(g)
    setUuidList(newUUIDList(g))
  }, [router.query])

  function newUUIDList (count) {
    return new Array(Number(count)).fill().map(() => {
      return uuidv4()
    }).join('\n')
  }

  const onInputChange = event => {
    const newCount = Number(event.target.value) > 1000 ? 999 : event.target.value
    setCount(newCount)
    setUuidList(newUUIDList(newCount))
  }

  const refresh = () => {
    setUuidList(newUUIDList(count))
  }

  const copyUuid = () => {
    if (copy(uuidList)) {
      setCopyState(1)
    }
    setTimeout(() => {
      setCopyState(0)
    }, 1000)
  }

  const CopyBtn = props => {
    const { state } = props
    let text = '复 制'
    if (state === 1) {
      text = '成功 !'
    }

    return (
      <>
        <a
          onClick={copyUuid}
          href="#"
          className="ml-3 flex items-center justify-center px-4 py-2  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          {
            state === 1
              ? <ClipboardCheckIcon className="h-4 w-4" />
              : <ClipboardCopyIcon className="h-4 w-4" />
          }
          <span className="ml-2">{text}</span>
        </a>
      </>
    )
  }



  return (
    <>
      <Head modul={`UUID ${g}`} />
      <Nav />
      <Container>
        <ToolHead name="UUID 生成" desc="Universally unique identifier（通用唯一识别码）" mdDesc="UUID: 通用唯一识别码" />
        <div className="prose mb-5">
          <p>TODO: 无需关心生成，直接复制即可</p>
        </div>

        <label htmlFor="count" className="block text-sm font-medium text-gray-700">生成数量</label>
        <div className="flex flex-wrap mb-4">
          <div className="relative">
            <input
              name="count"
              id="count"
              value={count} onChange={onInputChange} type="number"
              className="w-36 h-full block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder=""
            />
          </div>

          <a
            onClick={refresh}
            href="#"
            className="ml-3 flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md border-gray-300  hover:bg-gray-50"
          >
            <RefreshIcon className="h-4 w-4" />
            <span className="ml-2"> 刷 新 </span>
          </a>
          <CopyBtn state={copyState} />
        </div>
        <textarea value={uuidList} onChange={event => { setUuidList(event.target.value) }} rows="11" className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md">

        </textarea>
      </Container>

    </>
  )
}