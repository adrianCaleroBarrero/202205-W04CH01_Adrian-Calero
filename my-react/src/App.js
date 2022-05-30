import "./App.css";
import { Card } from "./component/card/card";
import { Header } from "./component/header/header";

function App() {
    return (
        <div className="container">
            <Header></Header>
            <section className="controls">
                <p className="info">0 gentlemen pointing at you</p>
                <button className="button button--select">Select all</button>
            </section>
            <main className="main">
                <ul className="gentlemen">
                    <Card></Card>
                </ul>
            </main>
        </div>
    );
}

export default App;
