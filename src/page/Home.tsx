import { Container, Content, StartScreen } from "components";
import useGame from "hooks/useGame";

const Home = () => {
  const { startGame } = useGame();

  return (
    <Container>
      <Content>
        <StartScreen handleStarGame={startGame} />
      </Content>
    </Container>
  );
};

export default Home;
