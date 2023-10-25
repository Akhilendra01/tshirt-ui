import Tshirt from "./components/tshirt";
import RootContainer from "./components/rootContainer";
import InfoBlock from "./components/infoBlock";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import TshirtContextProvider from "./context/AppContext";
function App() {
  return (
    <MantineProvider>
      <TshirtContextProvider>
        <RootContainer>
          <Tshirt />
          <InfoBlock />
        </RootContainer>
      </TshirtContextProvider>
    </MantineProvider>
  );
}

export default App;
