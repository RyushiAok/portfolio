import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Box } from '@radix-ui/themes'
import { Link } from '@remix-run/react'
import { readmoreStyle } from './readmore-style.css'

export const ReadMore = () => {
  return (
    <Link to="/dummy" className={readmoreStyle}>
      <ArrowRightIcon width="1.5rem" height="1.5rem" />
      <Box>Read more</Box>
    </Link>
  )
}
