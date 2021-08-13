import { Base64 } from 'js-base64'
import { MyHead, Nav, Container } from '../../components/Page'
import { ToolDesc, ToolTitle } from '../../components/ToolHead'
import QuickCopyTextarea from '../../components/QuickCopyTextarea'
import { useState } from 'react';
import ColumnLabel from '../../components/ColumnLabel';
import { DuplicateIcon } from '@heroicons/react/outline';

export default function MyBase64 () {

  const [inputValue, setInputValue] = useState('')
  const [base64Str, setBase64Str] = useState('')
  const [utf8Str, setUtf8Str] = useState('')

  const transfer = str => {
    btoa(str)
    atob(str)
    setInputValue(str)
  }

  // 编码
  const btoa = str => {
    try {
      setBase64Str(Base64.encode(str))
    } catch (e) {
      console.log(e);
    }
  }

  // 解码
  const atob = str => {
    let result = ''
    try {
      result = Base64.decode(str)
      setUtf8Str(result)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <MyHead modul="Base64" />
      <Nav />
      <Container>
        <ToolTitle title="Base64（开发中）" subtitle="网络上最常见的用于传输 8Bit 字节码的编码方式之一，是一种基于 64 个可打印字符来表示二进制数据的方法。" mdSubtitle="是一种基于64个可打印字符来表示二进制数据的方法。" />
        <ToolDesc text="进入页面后自动获取焦点，可直接 Ctrl+C 粘贴文本。" />
        <div className="mb-5">
          <ColumnLabel htmlFor="input" text="输入" />
          <QuickCopyTextarea autoFocus value={inputValue} onChange={event => transfer(event.target.value)} name="input" id="input" placeholder="Ctrl+V 粘贴" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <ColumnLabel text={<>编码 <DuplicateIcon className="inline w-5 h-5" /></>} />
            <div className="break-all">
              {base64Str}
            </div>
          </div>
          <div>
            <ColumnLabel text="解码" />
            <div className="break-all">
              {utf8Str}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}