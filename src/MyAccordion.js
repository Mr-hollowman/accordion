import React, { useState } from "react";
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";

export default function MyAccordion() {
  const [expand, setExpand] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  return (
    <div>
      <CollapsibleComponent>
        <CollapsibleHead
          className="additionalClassForHead"
          isExpanded={expand ? true : false}
        >
          <h6 onClick={() => setExpand(!expand)}>Head title 1</h6>
        </CollapsibleHead>
        <CollapsibleContent
          className="additionalClassForContent"
          isExpanded={expand ? true : false}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{" "}
          </p>
        </CollapsibleContent>

        <CollapsibleHead isExpanded={expand2 ? true : false}>
          <h6 onClick={() => setExpand2(!expand2)}>Head title 2</h6>
        </CollapsibleHead>
        <CollapsibleContent isExpanded={expand2 ? true : false}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </CollapsibleContent>
        <CollapsibleHead isExpanded={expand3 ? true : false}>
          <h6 onClick={() => setExpand3(!expand3)}>Head title 3</h6>
        </CollapsibleHead>
        <CollapsibleContent isExpanded={expand3 ? true : false}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </CollapsibleContent>
      </CollapsibleComponent>
    </div>
  );
}
