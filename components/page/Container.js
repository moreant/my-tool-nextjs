const Container = props => {
  return(
    <>
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        {props.children}
      </div>
    </>
    
  )
}

export default Container