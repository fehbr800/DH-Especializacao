import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


const signinForm = z.object({
  email: z.string().email(),
})


type SignInForm = z.infer<typeof signinForm>

export function SignIn(){

  const {register, handleSubmit, formState :{isSubmitting}} = useForm<SignInForm>()



  async function handleSignIn(data: SignInForm) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

    await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleSignIn(data)
          },
        },
      })
    } catch (error) {
      toast.error('Credenciais inválidas.')
    }
  }

    return(
      <>
      <Helmet title="Login"/>

      <div className="p-8">
      <div className="w-[350px] flex flex-col justify-center gap-6 ">
        
        <div className="flex flex-col gap-2 text-center">
          <h1 className=" text-2xl font-semibold tracking-tighter">
            Acessar painel
          </h1>
          <p className="text-sm text-foreground">
            Acompanhe suas vendas no painel do parceiro
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignIn)}  className="flex flex-col space-y-4 ">

          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input {...register('email')} id="email" type="email"/>
          </div>
          <Button disabled={isSubmitting} className="w-full" type="submit">Acessar painel</Button>
        </form>
       </div>
      </div>
       
      </>
    )

}