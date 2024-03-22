import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Storage from "./components/Storage";
import SubFooter from "./components/SubFooter";
import SubNav from "./components/SubNav";
import ImageSlider from "./components/images/ImageSlider";

function App() {
  return (
    <div >
     <Navbar/>
     <SubNav/>
     <Search/>
     <Categories/>
     <ImageSlider/>
     <Storage/>
     <Footer/>
     <SubFooter/>
    </div>
  );
}

export default App;
