import { Base64 } from 'js-base64'
import { MyHead, Nav, Container } from '../../components/Page'
import { ToolDesc, ToolTitle } from '../../components/ToolHead'
import QuickCopyTextarea from '../../components/QuickCopyTextarea'
import { useState } from 'react';
import ColumnLabel from '../../components/ColumnLabel';
import { ChevronUpIcon, TrashIcon } from '@heroicons/react/outline';
import Button from '../../components/Button';
import CopyButton from '../../components/CopyButton';

export default function MyBase64 () {

  const [inputValue, setInputValue] = useState('')
  const [base64Str, setBase64Str] = useState('')
  const [utf8Str, setUtf8Str] = useState('')

  const transfer = str => {
    try {
      // 编码
      setBase64Str(Base64.encode(str))
      // 解码
      setUtf8Str(Base64.decode(str))
    } catch (e) {

    }
    setInputValue(str)
  }

  const ResultBox = props => {
    return (
      <>
        <div className="mb-2">
          <ColumnLabel text={props.title} />
          <OperateBtn text={props.text} />
        </div>
        <div className="bg-white py-2 px-3 rounded-md shadow-sm break-all">
          {props.text ? props.text : '(尝试解码失败)'}
        </div>
      </>
    )
  }

  const OperateBtn = props => {
    return (
      <>
        <Button onClick={() => { transfer(props.text) }} className="ml-2">
          <ChevronUpIcon className="w-4 h-4" />
        </Button>
        <CopyButton text={props.text} />
      </>
    )
  }

  return (
    <>
      <MyHead modul="Base64 解码 / 编码" />
      <Nav />
      <Container>
        <ToolTitle title="Base64 解码 / 编码" subtitle="网络上最常见的用于传输 8Bit 字节码的编码方式之一，是一种基于 64 个可打印字符来表示二进制数据的方法。" mdSubtitle="是一种基于64个可打印字符来表示二进制数据的方法。" />
        <ToolDesc text="「⌃」按钮为再输入。进入页面后自动获取焦点，可直接 Ctrl+V 粘贴文本。" />
        <div className="mb-5">
          <div className="mb-2">
            <ColumnLabel htmlFor="input" text="输入" />
            <Button onClick={() => transfer('')} className="ml-2">
              <TrashIcon className="w-4 h-4" />
            </Button>
          </div>
          <QuickCopyTextarea autoFocus value={inputValue} onChange={event => transfer(event.target.value)} name="input" id="input" placeholder="Ctrl+V 粘贴" />
        </div>
        {
          inputValue
            ? <>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x md:divide-y-0">
                <div className="pb-5 md:pb-0 md:pr-5">
                  <ResultBox title="编码" text={base64Str} />
                </div>
                <div className="pt-5 md:pt-0 md:pl-5">
                  <ResultBox title="解码" text={utf8Str} />
                </div>
              </div>
            </>
            : <></>
        }

      </Container>
    </>
  )
}