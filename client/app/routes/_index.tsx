import { Box, Container, Grid } from '@radix-ui/themes'
import type { MetaFunction } from '@remix-run/cloudflare'
import { DummyBox } from '~/ui/dummy-box'

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
    <Container>
      <Box pt={'8'} />
      <Grid columns={{ initial: '1', sm: '3', md: '4' }} gap="4" width="auto" px="3">
        {Array.from({ length: 16 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <DummyBox key={i}>
            <div style={{ height: '180px' }} />
          </DummyBox>
        ))}
      </Grid>
    </Container >
  )
}
