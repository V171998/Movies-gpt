import { Provider } from "react-redux";
import Body from "./component/Body"
import AppStore from "./utils/AppStore";


function App() {
  return (
    <Provider store={AppStore}>
      <Body />
    </Provider>
  );
}

export default App
