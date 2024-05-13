// @ts-ignore
import CoreConcept from "../CoreConcept/CoreConcept.tsx";
// @ts-ignore
import {CORE_CONCEPTS} from "../../data";

export default function CoreConcepts() {
  return (
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem: any) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
  )
}