import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Paper,
  Select,
  SimpleGrid,
  Skeleton,
  Text,
  TextInput,
  Title,
  rem,
} from '@mantine/core';
import classes from './MainLayout.module.css';

const PRIMARY_COL_HEIGHT = rem(400);

export function MainLayout() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Box h={PRIMARY_COL_HEIGHT} p={'md'} className={classes.columnForm}>
          <TextInput
            label="Course name"
            description="Input description"
            placeholder="Input placeholder"
          />
          <TextInput
            label="Input length"
            description="Input description"
            placeholder="Input placeholder"
          />
          <Select
            label="Course field"
            placeholder="Select field"
            data={['React', 'Angular', 'Vue', 'Svelte']}
          />
          <Select
            label="Teacher"
            placeholder="Select teacher"
            data={['React', 'Angular', 'Vue', 'Svelte']}
          />
          <Button>Add Course</Button>
        </Box>
        <Grid gutter="md">
          <Grid.Col>
            <Box h={SECONDARY_COL_HEIGHT} pt={'md'}>
              <TextInput
                label="Teacher"
                description="Add teacher name"
                placeholder="Add name"
                mb={'md'}
              />
              <Button>Add Teacher</Button>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper
              className={classes.stat}
              radius="md"
              shadow="md"
              p="md"
              h={SECONDARY_COL_HEIGHT}
              bg={'#dee2e6'}
            >
              <Text size="sm">Course amount </Text>
              <Flex justify="flex-end" align="center" direction="column" p="md">
                <Title size={72}>10</Title>
              </Flex>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper
              className={classes.stat}
              radius="md"
              shadow="md"
              p="md"
              h={SECONDARY_COL_HEIGHT}
              bg={'#dee2e6'}
            >
              <Text size="sm">Teacher amount </Text>
              <Flex justify="flex-end" align="center" direction="column" p="md">
                <Title size={72}>8</Title>
              </Flex>
            </Paper>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      <SimpleGrid cols={3} p={'md'}>
        <Box bg={'teal'} p={'md'}>
          1
        </Box>
        <Box bg={'teal'} p={'md'}>
          2
        </Box>
        <Box bg={'teal'} p={'md'}>
          3
        </Box>
        <Box bg={'teal'} p={'md'}>
          4
        </Box>
        <Box bg={'teal'} p={'md'}>
          5
        </Box>
      </SimpleGrid>
    </Container>
  );
}
