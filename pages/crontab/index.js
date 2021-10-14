import cronParser from 'cron-parser'
import dayjs from 'dayjs'
import { MyHead, Nav, Container } from '../../components/Page'
import { ToolTitle, ToolDesc } from '../../components/ToolHead'
import { useState, useEffect } from 'react'

export default function Cron() {
  const [cronStr, setCronStr] = useState('0 0 * * * *')
  const [nextTimeList, setNextTimeList] = useState([])

  const getNextList = (interval) =>
    dayjs(interval.next().toString()).format('YYYY-MM-DD HH:mm:ss')

  useEffect(() => {
    try {
      let interval = cronParser.parseExpression(cronStr)
      setNextTimeList([
        getNextList(interval),
        getNextList(interval),
        getNextList(interval),
        getNextList(interval),
        getNextList(interval)
      ])
    } catch (e) {
      console.log(e)
    }
  }, [cronStr])

  return (
    <>
      <MyHead modul='Crontab' />
      <Nav />
      <Container>
        <ToolTitle
          title='Crontab'
          subtitle='Crontab 是用来让使用者在固定时间或固定间隔执行程序之用，换句话说，也就是类似使用者的时程表。'
          mdSubtitle='Crontab 是用来定期执行程序的命令。'
        />
        <ToolDesc text='目前仅支持 Spring 类型' />
        <div className='relative'>
          <input
            value={cronStr}
            onChange={(e) => setCronStr(e.target.value)}
            type='text'
            className='w-64 h-12 px-4 block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
            placeholder='0 0 * * * *'
          />
          <div className='mt-4 bg-white rounded-md shadow-sm divide-y'>
            {nextTimeList.map((item) => (
              <div className='p-4'>{item}</div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
