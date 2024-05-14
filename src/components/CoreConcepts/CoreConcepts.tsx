// @ts-ignore
import CoreConcept from "../CoreConcept/CoreConcept.tsx";
// @ts-ignore
import {CORE_CONCEPTS} from "../../data";
import Section from "../Section/Section.tsx";

export default function CoreConcepts() {
  return (
      <Section title="Core Concepts" id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem: any) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </Section>
  )
}