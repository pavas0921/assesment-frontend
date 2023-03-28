import "./App.css";
import { CustomRouter } from "./router";
import { Context, initialContext } from "./context";

function App() {
	return (
		<Context.Provider value={initialContext}>
			<div className="App">
				<CustomRouter />
			</div>
		</Context.Provider>
	);
}

export default App;
