import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useNavigation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function App() {
  const navigation = useNavigation();

  return (
    <>
    <Header />
    <div className="text-center">
      {navigation.state === 'loading' && <Spinner />}
    </div>
    <Outlet />
    </>
  );
}

export default App;
