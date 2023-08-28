import { Header } from "./components/header"
import { Aluno } from "./components/aluno"
import { Footer } from "./components/footer"

export default function App () {
  return (
    <div>
      <Header title = "Qualquer titulo"/>

      <Aluno nome="Raphael Almeida" idade = {31}/>

      <Footer/>
    </div>
  )
}



