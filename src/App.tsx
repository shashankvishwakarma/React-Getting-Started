import './App.css'
// @ts-ignore
import {CORE_CONCEPTS} from "./data.js";
import Header from './components/Header/Header.tsx'
import CoreConcept from "./components/CoreConcept/CoreConcept.tsx";

function App() {
  return (
      <div>
        <Header/>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
                           image={CORE_CONCEPTS[0].image}/>
              <CoreConcept {...CORE_CONCEPTS[1]}/>
              <CoreConcept {...CORE_CONCEPTS[2]}/>
              <CoreConcept {...CORE_CONCEPTS[3]}/>
            </ul>
          </section>
        </main>
      </div>
  );
}

export default App;
