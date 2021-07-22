import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  return (

    <>
      <div className="bg-blue-700 divide-y divide-black divide-opacity-10">
        <div className="max-w-7xl mx-auto py-6 px-4 flex leading-5 ">
          <Link href="/"><div className="text-white text-2xl cursor-pointer">麦兔</div></Link>
          <div></div>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl tracking-wide text-white sm:text-4xl">
            <span className="block mb-1">使用工具何必那么复杂，</span>
            <span className="block text-blue-300">移到工具，选择模式，粘贴复制。</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-indigo-50"
              >
                Get started
              </a>
            </div>·
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
          <li class="flex w-64 min-w-full">
            <div class="text-xl text-gray-900 font-bold relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full p-12" href="">
              <span class="tool"> UUID </span>
              <div class="w-full h-full absolute inset-0 flex p-1 space-x-1 opacity-0 hover:opacity-100">
                <Link href="/posts/first-post"><a class="transition-colors duration-150 bg-blue-200 bg-opacity-25  hover:bg-opacity-75 cursor-pointer w-1/2 h-full rounded-lg flex items-center justify-center">
                  <span class="text-blue-700">5</span>
                </a>
                </Link>
                <a class="transition-colors duration-150 bg-blue-200 bg-opacity-25 hover:bg-opacity-75 cursor-pointer w-1/2 h-full rounded-lg flex items-center justify-center">
                  <span class="text-blue-700">10</span>
                </a>
              </div>
            </div>
          </li>
          <li class="flex w-64 min-w-full">
            <a class="text-xl text-gray-900 font-bold relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full p-12" href=""> <span> Base64 </span> </a>
          </li>
          <li class="flex w-64 min-w-full">
            <a class="text-xl text-gray-900 font-bold relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full p-12" href=""> <span> Timestamp </span> </a>
          </li>
          <li class="flex w-64 min-w-full">
            <a class="text-xl text-gray-900 font-bold relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full p-12" href="">
              <span class="tool">
                rgba
                <svg class="inline w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Hex
              </span>
            </a>
          </li>
          <li class="flex w-64 min-w-full">
            <a class="text-xl text-gray-900 font-bold relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full p-12" href="">
              <span>
                下划线
                <svg class="inline w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                线驼峰
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>

  )
}
