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

// i joined ☺
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
      <FooterNav />
      <Footer/>
    </div>
  );
}

export default App;
