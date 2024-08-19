import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES} from "./data";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";



function App() {

 const [selectedTopic, setSelectedTopic] = useState();
 
  const handleSelectTabBtn = (selectedBtn) => {
    setSelectedTopic(selectedBtn);
 }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(({ image, title, description }) => (
              <CoreConcepts
              key={title}
                title={title}
                description={description}
                image={image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
                <TabButton onSelect={()=>handleSelectTabBtn('components')}>Components</TabButton>
                <TabButton onSelect={()=>handleSelectTabBtn('jsx')}>JSX</TabButton>
                <TabButton onSelect={()=>handleSelectTabBtn('props')}>Props</TabButton>
                <TabButton onSelect={()=>handleSelectTabBtn('state')}>State</TabButton>
          </menu>
            {!selectedTopic ? (
              <p>Please select a topic</p>
            ) : (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            ) }
{/* інший варіант реалізації використовуючи логічне && більш читабельний*/}
{/* {!selectedTopic && <p>Please select a topic</p>}
            {selectedTopic && (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            ) } */}
        </section>
      </main>
    </div>
  );
}

export default App;
