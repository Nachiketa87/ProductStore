import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes} from "react-router-dom";
import CreatePage from './pages/CreatePage.jsx';
import Homepage from './pages/Homepage.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>
      <Box min={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App
