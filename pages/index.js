import { ExternalLinkIcon, SwitchHorizontalIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { MyHead, Nav, Container } from '../components/Page'

const ToolList = props => {

  const itemList = [
    {
      text: 'UUID',
      href: '/uuid'
    },
    {
      text: 'Base64',
      href: '/base64'
    },
    // {
    //   text: 'Timestamp',
    //   links: [
    //     {
    //       text: '解析',
    //       href: '/posts/first-post'
    //     },
    //     {
    //       text: '生成',
    //       href: '/posts/first-post'
    //     }
    //   ]
    // },
    // {
    //   text: <TransferIcon left='RGBA' right='HEX' />,
    //   links: [
    //     {
    //       text: 'RGBA',
    //       href: '/posts/first-post'
    //     },
    //     {
    //       text: 'HEX',
    //       href: '/posts/first-post'
    //     }
    //   ]
    // },
    {
      text: <TransferIcon left='驼峰' right='蛇形' />,
      href: '/camel'
    },
    {
      text: '正则表达式',
      href: 'https://regex101.com/'

    },
    {
      text: <>添加工具<ExternalLinkIcon className="w-6 h-6 mx-auto inline mb-1 md:mb-1.5" /></>,
      href: 'https://github.com/moreant/my-tool/issues/new',
      target: '_blank',
      type: 'add'
    }
  ]


  return (
    <>
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 text-center">
        {
          itemList.map((item, index) => <Item key={index} item={item} />)
        }
      </ul>
    </>
  )
}

const TransferIcon = props => {
  return (
    <>
      {props.left}
      <SwitchHorizontalIcon className="inline w-4 h-4 mx-1 mb-1 md:mb-1.5" />
      {props.right}
    </>
  )
}

const Item = props => {
  const { item = {} } = props
  let boxClass = 'group text=xl md:text-2xl tracking-wider text-gray-900 font-bold relative rounded-xl border border-gray-400 border-opacity-30 transition-all duration-100 ease-in-out hover:shadow-xl hover:bg-blue-500 hover:text-white w-full md:w-full p-6 md:p-12 bg-white 2xl:py-14 2xl:text-3xl'
  if (item.type && item.type === 'add') {
    boxClass += ' border-dashed'
  }
  return (
    <>
      <li className="flex min-w-full">
        <Link href={item.href} >
          <a target={item.target ? item.target : '_self'} className={boxClass}>
            {item.text}
          </a>
        </Link>

      </li>
    </>
  )
}

export default function Home () {
  return (
    <>
      <MyHead />
      <Nav >
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl tracking-wide text-white sm:text-4xl">
              <span className="block mb-1">使用工具何必那么复杂，</span>
              <span className="block text-blue-300">自动焦点、饱和转化、实时生成、快速复制。</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                {/* <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-indigo-50"
                >
                  Get started
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Learn more
                </a> */}
              </div>
            </div>
          </div>
        </Container>
      </Nav>
      <div>
        <Container>
          <ToolList></ToolList>
        </Container>
      </div>
      <div className="text-center text-gray-400 mt-auto mb-5 relative w-full">
        <Link href="https://beian.miit.gov.cn">
          <a className="hover:text-gray-900">粤ICP备2021109792号</a>
        </Link>
      </div>
      <style jsx global>{`
      #__next{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }      
      `}</style>
    </>

  )
}
