import * as S from './styles';
import ImgLogo from './components/img/logohub.png';
import ImgAlgumaCoisa from './components/img/algumacoisa.png';
import { GlobalStyle } from './GlobalStyle';



const App = () => {
    return (
      <S.Wrap>
        <GlobalStyle />
        <S.Header>
          <S.ContainerHeader>
            <S.ImgLogo src={ImgLogo} alt='Logo'/>
            <S.BoxHeader>
              <S.Paragraph>Encontrar empregos</S.Paragraph>
              <S.Paragraph>Navegar pelas startups</S.Paragraph>
            </S.BoxHeader>
            <S.BoxLogin>
              <S.Paragraph>Para startups</S.Paragraph>
              <S.Span></S.Span>
              <S.Paragraph><S.Link href='#'>Sign in</S.Link></S.Paragraph>
            </S.BoxLogin>
          </S.ContainerHeader>
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
