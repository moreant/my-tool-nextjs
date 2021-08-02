import Link from 'next/link'

const Nav = props => {
  return (
    <>
      <div className="bg-blue-700 divide-y divide-black divide-opacity-10">
      <div className="max-w-7xl mx-auto py-6 px-4 flex leading-5 ">
        <Link href="/"><div className="text-white text-2xl cursor-pointer">麦兔</div></Link>
        <div></div>
        </div>
        {props.children}
      </div>
    </>
    
  )
}

export default Nav