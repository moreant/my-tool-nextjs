import Link from 'next/link'
import Container from '../components/Container'
import Head from '../components/Head'
import Nav from '../components/Nav'

const ToolList = props => {

  const itemList = [
    {
      text: 'UUID',
      links: [
        {
          text: '5个',
          href: '/uuid?g=5'
        },
        {
          text: '10个',
          href: '/uuid?g=10'
        }
      ]
    },
    // {
    //   text: 'Base64',
    //   links: [
    //     {
    //       text: '编码',
    //       href: '/posts/first-post'
    //     },
    //     {
    //       text: '解码',
    //       href: '/posts/first-post'
    //     }
    //   ]
    // },
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
      links: [
        {
          text: '互转',
          href: '/camel'
        }
      ]
    },
    {
      text: '+',
      links: [
        {
          text: '添加工具',
          href: '/posts/first-post'
        }
      ],
      type: 'add'
    }
  ]


  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
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
      <svg className="inline w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
      {props.right}
    </>
  )
}

const Item = props => {
  const { item = {} } = props
  const { links = [] } = item
  let boxClass = 'group text-xl text-gray-900 font-bold relative rounded-xl border border-gray-400 border-opacity-30 shadow-md w-full p-12'
  if (item.type && item.type === 'add') {
    boxClass += ' border-dashed'
  }
  return (
    <>
      <li className="flex w-64 min-w-full">
        <div className={boxClass}>
          <span className="tool group-hover:opacity-0 transition-opacity duration-100" > {item.text} </span>
          <div className="flex space-x-1 absolute inset-0 p-1 grid-cols-2 grid-flow-col opacity-0 hover:opacity-100">
            {props.children}
            {
              links.map((item, index) => <ItemLink key={index} href={item.href} text={item.text} />)
            }
          </div>
        </div>
      </li>
    </>
  )
}

const ItemLink = props => {
  return (
    <>
      <Link href={props.href}>
        <a className="transition-colors duration-150 w-full h-full bg-blue-200 bg-opacity-25 hover:bg-opacity-75 cursor-pointer rounded-lg flex items-center justify-center">
          <span className="text-blue-700">{props.text}</span>
        </a>
      </Link>
    </>
  )
}



export default function Home () {
  return (
    <>
      <Head />

      <Nav >
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl tracking-wide text-white sm:text-4xl">
              <span className="block mb-1">使用工具何必那么复杂，</span>
              <span className="block text-blue-300">移到工具，选择模式，粘贴复制。</span>
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
      <Container>
        <ToolList></ToolList>
      </Container>
    </>

  )
}
