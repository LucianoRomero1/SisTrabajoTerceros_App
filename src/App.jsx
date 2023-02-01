import { Provider } from 'react-redux'
import { CustomRoutes } from "./routing/CustomRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <CustomRoutes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
