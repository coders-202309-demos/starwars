import { useContext, useEffect } from "react";
import CharactersList from "../CharactersList/CharactersList";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import useCharactersApi from "../../hooks/useCharactersApi";
import UiContext from "../../features/ui/store/UiContext";

const App = (): React.ReactElement => {
  const { isError, isLoading } = useContext(UiContext);
  const { getCharacters } = useCharactersApi();

  useEffect(() => {
    (async () => {
      await getCharacters();
    })();
  }, [getCharacters]);

  return (
    <AppStyled>
      <Header />
      <main className="main-content">
        <CharactersList />
      </main>
      {isLoading && <Loading />}
      {isError && <Error />}
    </AppStyled>
  );
};

export default App;
