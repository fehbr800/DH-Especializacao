import{ Play} from '@phosphor-icons/react'
import { CountDownContainer, FormContainer, HomeContainer, Separator } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="">durante</label>
          <input type="number" id="minutsAmount" />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <button type="submit">Começar <Play size={24}/> </button>
      </form>
    </HomeContainer>
  );
}
