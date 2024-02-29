// vanilla extract hover style by media query
import { whiteA } from '@radix-ui/colors'
import { style } from '@vanilla-extract/css'
const baseStyle = style({
  textDecoration: 'none',
  display: 'flex',
  gap: '0.5rem',
  color: whiteA.whiteA9,
  fontSize: '0.875rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  padding: '0.5rem 1.25rem 0.5rem  0.75rem',
  boxSizing: 'content-box',
  borderRadius: '1.5rem',
  border: '1px solid transparent',
})

const hoverStyle = style({
  '@media': {
    '(hover: hover)': {
      ':hover': {
        border: `1px solid ${whiteA.whiteA3}`,
        transition: 'border 0.2s',
      },
    },
  },
})
export const readmoreStyle = style([baseStyle, hoverStyle])
