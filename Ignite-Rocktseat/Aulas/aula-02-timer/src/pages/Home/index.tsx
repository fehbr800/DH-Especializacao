import { HandPalm, Play } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { differenceInSeconds } from "date-fns";

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartComponentButton,
  StopComponentButton,
  TaskInput,
} from "./styles";
import { useEffect, useState } from "react";
import { NewCycleForm } from "./components/NewCycleForm";

// Formas de trabalhar com o formulário com React:
// Controlled / uncontrolled
//Controlled: forma de manter a informação do usuário no estado em tempo real; Ex: Pequenos, formularios, e poucos inputs
//Uncontrolled: busca a informação somente quando for preciso; Ex: Dashboards, varios inputs



interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
 

  /*
function register(name: string){
ela   return{
  onChange:() => void,
  onBlur:() => void,
  onFocus: () => void,
  }
}

*/

  const activeCycle = cycles.find((cycle) => cycle.id == activeCycleId);




  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);

    reset();
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    document.title = `${minutes}:${seconds}`;
  }, [minutes, seconds, activeCycle]);

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id == activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
       
    <NewCycleForm/>
    <CountDownContainer activeCycle={activeCycle} />
       
        {activeCycle ? (
          <StopComponentButton onClick={handleInterruptCycle} type="button">
            Interromper <HandPalm size={24} />{" "}
          </StopComponentButton>
        ) : (
          <StartComponentButton disabled={isSubmitDisabled} type="submit">
            Começar <Play size={24} />{" "}
          </StartComponentButton>
        )}
      </form>
    </HomeContainer>
  );
}
