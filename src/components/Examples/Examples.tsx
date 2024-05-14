import TabButton from "../TabButton/TabButton.tsx";
import {useState} from "react";
// @ts-ignore
import {EXAMPLES} from "../../data";
import Section from "../Section/Section.tsx";

export default function Examples() {

  let tabContent = <p>Please select a topic.</p>;
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton: any) {
    setSelectedTopic(selectedButton)
  }

  if (selectedTopic) {
    tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
    );
  }

  return (
      <Section title="Examples" id="examples">
        <menu>
          <TabButton isSelected={selectedTopic == 'components'}
                     onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic == 'jsx'}
                     onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic == 'props'}
                     onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic == 'state'}
                     onClick={() => handleSelect('state')}>State</TabButton>
        </menu>
        {tabContent}
      </Section>
  )
}