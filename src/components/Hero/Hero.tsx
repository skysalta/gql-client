import { Title, Text } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Course Library
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="sm">
        This starter Vite project to combine GraphQL with Mantine.
      </Text>
    </>
  );
}
