import { Play } from "@phosphor-icons/react";
import { useForm } from "react-hook-form"

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartComponentButton,
  TaskInput,
} from "./styles";




// Formas de trabalhar com o formulário com React:
// Controlled / uncontrolled 
//Controlled: forma de manter a informação do usuário no estado em tempo real; Ex: Pequenos, formularios, e poucos inputs
//Uncontrolled: busca a informação somente quando for preciso; Ex: Dashboards, varios inputs

export function Home() {

 const {register, handleSubmit, watch} = useForm()

/*
function register(name: string){
ela   return{
  onChange:() => void,
  onBlur:() => void,
  onFocus: () => void,
  }
}

*/

  function handleCreateNewCycle(data){
 console.log(data)


  }

  const task = watch('task')
  const isSubmitDisabled = !task;
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            list="task-suggestions"
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
           
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1 " />
            <option value="Projeto 2 " />
            <option value="Projeto 3 " />
            <option value="Projeto 4 " />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount',{valueAsNumber: true})}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartComponentButton disabled={isSubmitDisabled}  type="submit">
          Começar <Play size={24} />{" "}
        </StartComponentButton>
      </form>
    </HomeContainer>
  );
}
