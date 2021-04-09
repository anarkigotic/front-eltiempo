import './App.css';
import { DataProvider } from './components/context/DataContext';
import { NewsComponent } from './components/News';


function App() {



  return (
    <DataProvider>
      <div className="container">
              <NewsComponent/>
           
      </div>
    </DataProvider>
  );
}

export default App;
