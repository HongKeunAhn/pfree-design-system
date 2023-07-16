import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  margin: 0,
  padding: 0,
  font: 'inherit',
  color: 'inherit',
})

globalStyle('*, :before, :after, ::before, ::after', {
  boxSizing: 'border-box',
})

globalStyle('html, body', {
  height: '100%',
})

globalStyle('button, input, select, textarea', {
  fontSize: '1.6rem',
})

globalStyle('img, picture, video, svg, canvas', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('ul, ol, li', {
  listStyle: 'none',
})

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  fontSize: '100%',
  overflowWrap: 'break-word',
})

globalStyle('a', {
  textDecoration: 'none',
})

globalStyle('input, img, fieldset, iframe', {
  border: 0,
})

globalStyle('address, em, i', {
  fontStyle: 'normal',
})

globalStyle(':focus', {
  outline: 'none',
})
