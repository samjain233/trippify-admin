import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import CreateBlog from "./Pages/CreateBlog/CreateBlog";

function App() {
  return (
    <>
      <ChakraProvider>
        <div className="App">
          <CreateBlog />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
