import { Box, Container, Heading } from '@radix-ui/themes'
import type { MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'ryushiaok.dev' },
    {
      name: 'description',
      content: 'Welcome to Remix! Using Vite and Cloudflare!',
    },
  ]
}

const dummy_text =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. '

export default function Index() {
  return (
    <>
      <Container size="2" px="1" pt="6">
        <Heading size="9">Tetris</Heading>
        <Box py="5">
          <Box>
            <Heading size="4">{dummy_text}</Heading>
          </Box>
        </Box>
        <Box>
          <Link
            to={'/'}
            unstable_viewTransition
            style={{
              margin: '0 auto',
              width: 'fit-content',
              display: 'flex',
            }}
          >
            <img
              height="350"
              alt="tetris"
              src="https://github.com/RyushiAok/Tetris/assets/55625375/c1bde67b-885d-4967-b69b-736600743bac"
            />
          </Link>
        </Box>
      </Container>
    </>
  )
}
