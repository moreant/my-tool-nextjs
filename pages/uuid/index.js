import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'

import Container from '../../components/Container'
import Head from '../../components/Head'
import Nav from '../../components/Nav'



export default function UUID () {

  const router = useRouter()

  let { g = '0' } = router.query
  const [count, setCount] = useState(Number(g))

  // 异步路由导致需要监听
  useEffect(() => {
    setCount(g)
  }, [router.query])

  const uuidList = new Array(Number(count)).fill().map(() => {
    return uuidv4()
  })

  function onInputChange (event) {
    let count = Number(event.target.value) || 0
    if (count > 1000) {
      count = 999
    }
    setCount(count)

  }

  const uuidStr = uuidList.join('\n')

  return (
    <>
      <Head modul={`UUID - ${g}`} />
      <Nav />
      <Container>
        <div className="flex flex-wrap mb-4">
          <input value={count} onChange={onInputChange} type="text" placeholder="个数" className="py-3 px-4 border border-gray-200 rounded-md focus:border-light-blue-500 focus:outline-none focus:ring-1 focus:ring-light-blue-500" />
          <div onClick={() => setCount(4)} className=" ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              刷 新
            </a>
          </div>

        </div>

        <textarea value={uuidStr} onChange={() => { }} rows="11" className="w-full border rounded-md">

        </textarea>
      </Container>

    </>
  )
}