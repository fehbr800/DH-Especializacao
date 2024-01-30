import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"


const SignUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})


type SignUpForm = z.infer<typeof SignUpForm>

export function SignUp(){

  const navigate = useNavigate()

  const {register, handleSubmit, formState :{isSubmitting}} = useForm<SignUpForm>()



  async function handleSignUp(data: SignUpForm) {

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

    await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Cadastro realizado com sucesso!.', {
        action: {
          label: 'Login',
          onClick: () => {
            navigate('/sign-in')
          },
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante!')
    }
  }

    return(
      <>
      <Helmet title="Register"/>

      <div className="p-8">
      <Button variant="link" asChild className="absolute right-8 top-8">
<Link to={'/sign-in'}>
         Tenho uma conta!
        </Link>
</Button>
      
      <div className="w-[350px] flex flex-col justify-center gap-6 ">
        
        <div className="flex flex-col gap-2 text-center">
          <h1 className=" text-2xl font-semibold tracking-tighter">
           Criar conta
          </h1>
          <p className="text-sm text-foreground">
           Seja um parceiro e comece suas vendas!
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)}  className="flex flex-col space-y-4 ">

          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input {...register('restaurantName')} id="restaurantName" type="text"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input {...register('managerName')} id="managerName" type="text"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input {...register('email')} id="email" type="email"/>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu telefone</Label>
            <Input {...register('phone')} id="phone" type="tel"/>
          </div>
          <Button disabled={isSubmitting} className="w-full" type="submit">Finalizar cadastro</Button>
       
        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
          Ao continuar, você  concorda com nossos Termos de serviço e políticas de privacidade.
        </p>
       
       </form>
       </div>
      </div>
       
      </>
    )

}