import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { Navbar } from "./components/NavBar/NavBar";
import "./App.css"
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return (
      <BrowserRouter>
        <div className="wrap">
          <Navbar/>
          <div className="content">
            <AppRouter/>
          </div>
        </div>
      </BrowserRouter>
  );
})

export default App;
