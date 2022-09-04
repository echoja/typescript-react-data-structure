import React, { useState } from "react";

interface INode {
  trigger: TriggerType;
  triggerMetaDelayMs?: number;
}

type TriggerType = "clicked" | "hovered";

const triggerSelectItems = [
  {
    value: "clicked",
    label: "클릭했을 때",
  },
  {
    value: "hovered",
    label: "마우스를 올렸을 때",
  },
];

function SimpleStringWithDelay() {
  const [node, setNode] = useState<INode>({
    trigger: "hovered",
    triggerMetaDelayMs: 500,
  });

  return (
    <div className="simple-form">
      <label htmlFor="select-trigger">조건</label>
      <select
        id="select-trigger"
        value={node.trigger}
        onChange={(e) =>
          setNode((node) => ({
            ...node,
            trigger: e.target.value as TriggerType,
          }))
        }
      >
        {triggerSelectItems.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {node.trigger === "hovered" ? (
        <>
          <br />
          <label htmlFor="delay">딜레이(ms)</label>
          <input
            type="number"
            id="delay"
            value={node.triggerMetaDelayMs}
            onChange={(e) =>
              setNode((node) => ({
                ...node,
                triggerMetaDelayMs: parseInt(e.target.value),
              }))
            }
          ></input>
        </>
      ) : null}
      <br />
      <pre>node 값 {JSON.stringify(node, undefined, 2)}</pre>
    </div>
  );
}

export default SimpleStringWithDelay;
