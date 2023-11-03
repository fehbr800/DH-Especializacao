import { HandPalm, Play } from "@phosphor-icons/react";
import { useForm, FormProvider } from "react-hook-form";
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
import { createContext,  useState } from "react";
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

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
  amountSecondsPassed: number
}

export const CyclesContext = createContext({} as CyclesContextType);

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(5).max(60),
  });

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

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id == activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

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
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDownContainer activeCycle={activeCycle} />
        </CyclesContext.Provider>
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
