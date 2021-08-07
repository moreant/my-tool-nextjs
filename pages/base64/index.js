import { Base64 } from 'js-base64'
import { Head, Nav, Container } from '../../components/Page'
import { ToolDesc, ToolTitle } from '../../components/ToolHead'
import QuickCopyTextarea from '../../components/QuickCopyTextarea'
import { useState } from 'react';

export default function MyBase64() {

  const [inputValue, setInputValue] = useState('')

  const atob = str => {
    // TODO 转换
    console.log(Base64.decode(str));
    setInputValue(str)
  }

  return (
    <>
      <Head modul="Base64" />
      <Nav />
      <Container>
        <ToolTitle title="Base64（开发中）" subtitle="网络上最常见的用于传输 8Bit 字节码的编码方式之一，是一种基于 64 个可打印字符来表示二进制数据的方法。" mdSubtitle="是一种基于64个可打印字符来表示二进制数据的方法。" />
        <ToolDesc text="进入页面后自动获取焦点，可直接 Ctrl+C 粘贴文本。" />
        <QuickCopyTextarea autoFocus value={inputValue} onChange={event => atob(event.target.value)} />
        {inputValue}
      </Container>
    </>
  )
}