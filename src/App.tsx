
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Origin from './components/Origin';
import Capabilities from './components/Capabilities';
import Lab from './components/Lab';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Origin />
      <Capabilities />
      <Lab />
      <Work />
      <Footer />
    </MainLayout>
  );
}

export default App;
