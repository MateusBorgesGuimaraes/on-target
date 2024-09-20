'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { Input } from './formComponents/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUserSchema, LoginUserType } from '@/zodSchemas/login-zod';
import { ErrorComponent } from './error-compononent';
import { postLoginUser } from '@/actions/post-login-user';
import { useToast } from '@/hooks/use-toast';
import { useUserStore } from '@/store/user-store';

export const LoginForm = () => {
  const { setUser } = useUserStore();
  const { toast } = useToast();
  const methods = useForm<LoginUserType>({
    resolver: zodResolver(loginUserSchema),
  });

  async function loginUser(data: LoginUserType) {
    const reponse = await postLoginUser(data);

    if (reponse.error) {
      toast({
        variant: 'destructive',
        title: 'Algum erro ocorreu ao tentar logar.',
        description: reponse.error,
      });
      return;
    }

    if (reponse.ok) {
      setUser(reponse.data.user);
    }
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(loginUser)}
          className="flex flex-col gap-4"
        >
          <Input name="identifier" label="Nome" type="text" />
          {methods.formState.errors.identifier && (
            <ErrorComponent
              message={methods.formState.errors.identifier.message}
            />
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
            Entrar na sua conta
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
