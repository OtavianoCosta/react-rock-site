import Header from './componentes/Header'
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa'

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
</AppConteiner>
  );
}

export default App;
