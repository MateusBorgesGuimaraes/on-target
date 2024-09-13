'use client';

import {
  registerUserSchema,
  RegisterUserType,
} from '@/zodSchemas/register-zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from './formComponents/input';
import { ErrorComponent } from './error-compononent';

export const RegisterForm = () => {
  const methods = useForm<RegisterUserType>({
    resolver: zodResolver(registerUserSchema),
  });

  async function registerUser(data: RegisterUserType) {
    console.log('data', data);
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(registerUser)}
          className="flex flex-col gap-4"
        >
          <Input name="username" label="Nome" type="text" />
          {methods.formState.errors.username && (
            <ErrorComponent
              message={methods.formState.errors.username.message}
            />
          )}

          <Input name="email" label="email" type="email" />
          {methods.formState.errors.email && (
            <ErrorComponent message={methods.formState.errors.email.message} />
          )}

          <Input name="password" label="senha" type="password" />
          {methods.formState.errors.password && (
            <ErrorComponent
              message={methods.formState.errors.password.message}
            />
          )}

          <button
            className="font-bebas bg-neon-purple py-2 hover:bg-neon-purple/80 duration-300 rounded-sm text-2xl mt-6"
            type="submit"
          >
            REGISTRAR
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
