import React from 'react';
import { Box, TextInput, Group, Button, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

import { useAuth } from '../providers/AuthProvider';

interface LoginFormFields {
  username: string;
  password: string;
}

export const Login = () => {
  const { error, login } = useAuth();
  const form = useForm<LoginFormFields>({
    initialValues: {
      username: '',
      password: '',
    },
  });

  const handleSubmit = (formValues: LoginFormFields) => {
    login(formValues.username, formValues.password);
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          withAsterisk
          label="Username"
          placeholder="your@email.com"
          {...form.getInputProps('username')}
        />

        <TextInput
          withAsterisk
          label="Password"
          {...form.getInputProps('password')}
        />
        {error && (
          <Text size={'xs'} style={{ marginTop: '10px' }} color="red">
            {error}
          </Text>
        )}
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
