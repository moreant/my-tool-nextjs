import Link from 'next/link'

export default function FirstPost () {
  return (
    <>
      <div className="bg-blue-700 divide-y divide-black divide-opacity-10">
        <div className="max-w-7xl mx-auto py-6 px-4 flex leading-5 ">
          <Link href="/"><div className="text-white text-2xl cursor-pointer">麦兔 - 驿站开发</div></Link>
          <div></div>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl tracking-wide text-white sm:text-4xl">
            <span className="block mb-1">UUID</span>
            <span className="block text-blue-300">通用唯一识别码</span>
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

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a></Link>
      </h2>
    </>

  )
}