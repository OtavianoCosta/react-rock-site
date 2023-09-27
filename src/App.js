import Header from './componentes/Header'
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos';

const AppConteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(180deg, #ffffff 15%, #808283); 
`

function App() {
  return (
<AppConteiner> 
    <Header/>
    <Pesquisa/>
      <UltimosLancamentos/>
</AppConteiner>
  );
}

export default App;
