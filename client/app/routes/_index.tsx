import { Container } from '@radix-ui/themes'
import type { MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'
// https://remix.run/docs/en/2.1.0/components/link#unstable_viewtransition

export const meta: MetaFunction = () => {
  return [
    { title: 'ryushiaok.dev' },
    {
      name: 'description',
      content: 'Welcome to Remix! Using Vite and Cloudflare!',
    },
  ]
}

export default function Index() {
  return (
    <>
      <Container size="2" px="1">
        {/* <Container pb="6">
          <Flex
            gap="4"
            align="center"
            style={{
              margin: '0 auto',
              width: 'fit-content',
            }}
          >
            <Avatar
              size="2"
              src="https://avatars.githubusercontent.com/u/55625375?v=4"
              alt="Icon"
              fallback={'A'}
            />
            <Flex gap="4" align="center">
              <Heading size="3">RyushiAok</Heading>
            </Flex>
          </Flex>
        </Container> */}

        {/* <Separator my="3" size="4" /> */}
        <Link
          to={'/dummy'}
          unstable_viewTransition
        >
          <img height="250" alt="tetris" src="https://github.com/RyushiAok/Tetris/assets/55625375/c1bde67b-885d-4967-b69b-736600743bac" />
        </Link>

      </Container>
    </>
  )
}
