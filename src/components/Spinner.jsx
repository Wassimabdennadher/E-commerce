import { useContext } from "react";
import { ClockLoader } from "react-spinners";
import {ToogleModeContest} from "../context/DarkContext/ToogleMode"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function App() {
  const {dark} = useContext(ToogleModeContest)

  return (
    <div className="sweet-loading">
      <ClockLoader 
        color={`${dark ? 'black': 'white'}`}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default App;