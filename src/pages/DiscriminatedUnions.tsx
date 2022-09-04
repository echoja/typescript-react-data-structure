import React, { useState } from "react";

type TriggerType = { type: "clicked" } | { type: "hovered"; delayMs: number };

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

function DiscriminatedUnions() {
  const [trigger, setTrigger] = useState<TriggerType>({ type: "clicked" });

  return (
    <div className="simple-form">
      <label htmlFor="select-trigger">조건</label>
      <select
        id="select-trigger"
        value={trigger.type}
        onChange={(e) => {
          setTrigger({
            delayMs: 500,
            ...trigger,
            type: e.target.value as TriggerType["type"],
          });
        }}
      >
        {triggerSelectItems.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <br />
      {trigger.type === "hovered" && (
        <>
          <label htmlFor="delay">딜레이(ms)</label>
          <input
            type="number"
            id="delay"
            value={trigger.delayMs}
            onChange={(e) =>
              setTrigger({
                ...trigger,
                type: "hovered",
                delayMs: Number.parseInt(e.target.value, 10),
              })
            }
          />
        </>
      )}
      <br />
      <pre>trigger 값 {JSON.stringify(trigger, undefined, 2)}</pre>
    </div>
  );
}

export default DiscriminatedUnions;
