
import Buy from './components/buy/Buy';
import Description from './components/description/Description';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hp from './components/hp/Hp';
import Promotion from './components/promotion/Promotion';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Description />
      <Promotion />
      <Hp />
      <Buy />
      <Footer />
    </div>
  );
}

export default App;
