import * as S from './styles';
import ImgLogo from './components/img/logo.png';
import ImgAlgumaCoisa from './components/img/algumacoisa.png';

const App = () => {
    return (
      <S.Wrap>
        <S.Header>
          <S.ImgLogo src={ImgLogo} alt='Logo'/>
        </S.Header>
        <S.Main>
          <S.Contain>
            <S.Box>
              <S.Text>Encontre os empregos mais interessantes nas startups</S.Text>
              <S.ImgGrafismo src={ImgAlgumaCoisa} alt='Imagem gráfismo'/>
            </S.Box>
          </S.Contain>
        </S.Main>
      </S.Wrap>
  );

}

export default App;
