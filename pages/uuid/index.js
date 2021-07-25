import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import copy from 'copy-to-clipboard';

import Container from '../../components/Container'
import Head from '../../components/Head'
import Nav from '../../components/Nav'

export default function UUID () {

  const router = useRouter()

  let { g = '0' } = router.query
  const [count, setCount] = useState(Number(g))
  const [uuidList, setUuidList] = useState(undefined)
  const [copyText, setCopyText] = useState('复 制')

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
    setCopyText('成功！')
    setTimeout(() => {
      setCopyText('复 制')
    }, 1000)
    copy(uuidList)
  }

  return (
    <>
      <Head modul={`UUID - ${g}`} />
      <Nav />
      <Container>
        <h2 className="text-3xl mb-4">UUID生成</h2>
        <div className="bg-indigo-600 mb-4 rounded-xl shadow-lg">
          <div className="max-w-7xl mx-auto py-3 px-3 lg:px-4">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-indigo-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">通用唯一识别码</span>
                  <span className="hidden md:inline">Universally unique identifier（通用唯一识别码）</span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  了解更多
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  {/* <XIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                </button>
              </div>
            </div>
          </div>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="ml-2"> 刷 新 </span>
            </a>
       
     
            <a
              onClick={copyUuid}
              href="#"
              className="ml-3 flex items-center justify-center px-4 py-2  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span className="ml-2">{copyText}</span>
            </a>
         
        </div>
        <textarea value={uuidList} onChange={() => { }} rows="11" className="w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md">

        </textarea>
      </Container>

    </>
  )
}