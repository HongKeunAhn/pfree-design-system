import { globalStyle, globalFontFace } from '@vanilla-extract/css'

import './reset.css'

const NOTO_SANS_KR = 'Noto Sans KR'
const SANS_SERIF = 'sans-serif'

globalFontFace(NOTO_SANS_KR, {
  src: `local(${NOTO_SANS_KR})`,
})

globalFontFace(SANS_SERIF, {
  src: `local(${SANS_SERIF})`,
})

globalStyle(':root', {
  fontSize: '62.5%',
  scrollBehavior: 'smooth',
})

globalStyle('body', {
  fontSize: '1.6rem',
  fontFamily: `${NOTO_SANS_KR}, ${SANS_SERIF}`,
})
