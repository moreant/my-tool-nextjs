import { Base64 } from 'js-base64'
import { Head, Nav, Container } from '../../components/Page'
import { ToolDesc, ToolTitle } from '../../components/ToolHead'
import QuickCopyTextarea from '../../components/QuickCopyTextarea'
import { useState } from 'react';

const utf16to8 = str => {
  var out, i, len, c

  out = ""
  len = str.length
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i)
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i)
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F))
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    }
  }
  return out
}

function utf8to16 (str) {
  var out, i, len, c;
  var char2, char3;

  out = "";
  len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++)
    switch (c >> 4) {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out += str.charAt(i - 1);
        break
      case 12: case 13:
        // 110x xxxx   10xx xxxx
        char2 = str.charCodeAt(i++)
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F))
        break
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = str.charCodeAt(i++)
        char3 = str.charCodeAt(i++)
        out += String.fromCharCode(((c & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) |
          ((char3 & 0x3F) << 0))
        break
    }
  }
  return out
}


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
        <ToolDesc text="进入页面后自动获取焦点，可直接Ctrl+C粘贴文本。" />
        <QuickCopyTextarea autoFocus value={inputValue} onChange={event => atob(event.target.value)} />
        {inputValue}
      </Container>
    </>
  )
}