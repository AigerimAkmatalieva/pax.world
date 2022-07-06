import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Governance from "./pages/Governance";
import Communication from "./pages/Communication";
import Partners from "./pages/Partners";
import Landsale from "./pages/Landsale";
import Buildyourown from "./pages/Buildyourown";
import Roadmap from "./pages/Roadmap";
import Header from "./components/Header/Header";
import Header1 from "./components/Header1/Header1";
import FooterNav from "./components/FooterNav/FooterNav";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
        <Route path="/land-sale" element={ <Landsale/>}/>
          <Route path="/communication" element={ <Communication/>}/>
          <Route path="/build-your-own" element={ <Buildyourown />}/>
          <Route path="/governance" element={ <Governance/>}/>
          <Route path="/partners" element={ <Partners/>}/>
          <Route path="/roadmap" element={ <Roadmap/>}/>
        </Routes>
      </Layout>
      <Header />
      <Header1 />
      <FooterNav />
    </div>
  );
}

export default App;
