import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from "./components/Counter";



function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <div>
      <h1>My React App</h1>
      <Counter />
    </div>
      <WelcomeMessage />
      <Footer />
    </div>
  );
}

export default App;










