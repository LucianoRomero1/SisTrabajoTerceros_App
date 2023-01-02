import { CustomRoutes } from "./routing/CustomRoutes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="layout">
      <ChakraProvider>
        <CustomRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
