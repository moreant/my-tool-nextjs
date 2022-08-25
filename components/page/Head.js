import Head from 'next/head'

const MyHead = props => {
  let title = 'MyTool - 驿站开发'
  if (props.title) {
    title = props.title
  } else if (props.modul) {
    title = props.modul + ' - MyTool'
  }


  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>

  )
}

export default MyHead