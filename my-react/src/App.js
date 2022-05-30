import "./App.css";
import { Card } from "./component/card/card";
import { Header } from "./component/header/header";
import { Info } from "./component/info/info";

function App() {
    return (
        <div className="container">
            <Header></Header>
            <Info></Info>
            <main className="main">
                <ul className="gentlemen">
                    <Card></Card>
                </ul>
            </main>
        </div>
    );
}

export default App;
