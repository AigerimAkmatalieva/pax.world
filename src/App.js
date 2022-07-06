import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Governance from "./pages/Governance";
import Communication from "./pages/Communication";
import Partners from "./pages/Partners";
import Buildyourown from "./pages/Buildyourown";
import Roadmap from "./pages/Roadmap";
import Header from "./components/Header/Header";
import Landsale from "./pages/Landsale";
import FooterNav from "./components/FooterNav/FooterNav";
import Footer from "./components/Footer/Footer";
import Header1 from "./components/Header/Header1/Header1";
import Header2 from "./components/Header/Header2/Header2";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
        <Route path="/landsale" element={ <Landsale/>}/>
          <Route path="/communication" element={ <Communication/>}/>
          <Route path="/buildyourown" element={ <Buildyourown />}/>
          <Route path="/governance" element={ <Governance/>}/>
          <Route path="/partners" element={ <Partners/>}/>
          <Route path="/roadmap" element={ <Roadmap/>}/>
        </Routes>
      </Layout>
      <Header />
      <Header1 />
      <Header2/>
    </div>
  );
}

export default App;
