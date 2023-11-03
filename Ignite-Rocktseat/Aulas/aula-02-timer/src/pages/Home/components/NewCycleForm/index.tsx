import { useForm, useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";

import { CyclesContext } from "../..";

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCycleForm(){
 const {activeCycle} = useContext(CyclesContext)
const {register} = useFormContext()
 

    return(
         <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            list="task-suggestions"
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            disabled={!!activeCycle}
            {...register("task")}
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
            disabled={!!activeCycle}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
    )
}