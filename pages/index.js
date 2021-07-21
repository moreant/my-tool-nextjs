import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div class="h-screen">
      <div class="p-24">
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
          <li class="flex w-64 min-w-full">
            <div class="text-xl text-gray-900 font-bold relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full p-12" href="">
              <span class="tool"> UUID </span>
              <div class="w-full h-full absolute inset-0 flex p-1 space-x-1 opacity-0 hover:opacity-100">
                <a class="transition-colors duration-150 bg-blue-200 bg-opacity-25  hover:bg-opacity-75 cursor-pointer w-1/2 h-full rounded-lg flex items-center justify-center">
                  <span class="text-blue-700">5</span>
                </a>
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
    </div>

  )
}
