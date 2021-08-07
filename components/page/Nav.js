import Link from 'next/link'

const Nav = props => {
  return (
    <>
      <div className="bg-blue-700 divide-y divide-black divide-opacity-10">
        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex leading-5 ">
        <Link href="/"><a className="text-white text-2xl cursor-pointer">麦兔</a></Link>
        <div></div>
        </div>
        {props.children}
      </div>
    </>
    
  )
}

export default Nav