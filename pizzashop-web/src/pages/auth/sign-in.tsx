import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link, useSearchParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { signIn } from '@/api/sign-in'
import { supabase } from '@/lib/supabaseClient'

const signInForm = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()
  const { 
    register, 
    handleSubmit, 
    formState: { isSubmitting } 
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? ''
    }
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function sendSupabaseMagicLink(email) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: 'http://192.168.3.10:5173/',
      },
    })
  }

  async function handleSignIn(data: SignInForm) {
    try {
      // await authenticate({ email: data.email })
      await sendSupabaseMagicLink(data.email)
      
      toast.success('Enviamos um link de autenticação para o seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data)
        }
      })
    } catch (error) {
      toast.error('Credenciais inválidas!.')
    }
    
  } 
  
  return (
    <>
      <Helmet title='Login' />
      <div className='p-8'>
        <Button variant="ghost" asChild className='absolute top-8 right-8'>
          <Link to="/sign-up" className=''>
            Novo estabelecimento
          </Link>
        </Button>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Acessar painel</h1>
            <p className='text-sm text-muted-foreground'>Acompanhe suas vendas pelo painel do parceiro!</p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input id='email' type='email' {...register('email')} />
            </div>

            <Button 
              type='submit' 
              className='w-full'
              disabled={isSubmitting}
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}