import { Button } from './components/ui/button'
import './global.css'
export function App() {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <Button size={'lg'} variant={'default'}>
          Enviar
        </Button>
      </div>
    </>
  )
}
