import { Box, Container, Flex } from '@radix-ui/themes'
import type { MetaFunction } from '@remix-run/cloudflare'
import { DummyBox } from '~/ui/dummy-box'

export const meta: MetaFunction = () => {
  return [{ title: 'ryushiaok.dev' }, { name: 'name', content: 'content' }]
}

export default function Index() {
  return (
    <Container size={'2'}>
      <Box pt={'8'} />

      <Flex gap={'4'} direction="row" wrap="wrap" justify="center">
        {Array.from({ length: 8 }).map((_, i) => (
          <DummyBox>
            <div style={{ height: '180px', width: '300px' }} />
          </DummyBox>
        ))}
      </Flex>
    </Container>
  )
}
