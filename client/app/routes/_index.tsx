import { Avatar, Box, Code, Container, Flex } from '@radix-ui/themes'
import type { MetaFunction } from '@remix-run/cloudflare'
import { Heading } from 'node_modules/@radix-ui/themes/dist/cjs'
import { DummyBox } from '~/ui/dummy-box'

export const meta: MetaFunction = () => {
  return [{ title: 'ryushiaok.dev' }, { name: 'name', content: 'content' }]
}

export default function Index() {
  return (
    <Container size={'2'}>
      <Flex justify={'between'} align={'center'}>
        <Flex gap="4" align={'center'}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/55625375?v=4"
            fallback="A"
            size={'2'}
          />
          <Heading align="center" size={'3'}>
            RyushiAok.dev
          </Heading>
        </Flex>
        {/* <Flex gap="4">
          <HamburgerMenuIcon />
        </Flex> */}
      </Flex>

      <Box pt={'8'} />

      {/* <Grid columns={'1fr 1fr'} gap={'4'}>
      </Grid> */}
      <Flex gap={'4'} direction='column'>

        {
          Array.from({ length: 5 }).map((_, i) => (
            <DummyBox key={i} height={"9"}>
              <Code variant="ghost">F# |{'>'} I Love</Code>
            </DummyBox>
          ))
        }
      </Flex>
    </Container>
  )
}
