import React, { useState } from "react";

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

function SimpleString() {
  const [trigger, setTrigger] = useState<TriggerType>("clicked");
  return (
    <div className="simple-form">
      <label htmlFor="select-trigger">조건</label>
      <select
        id="select-trigger"
        value={trigger}
        onChange={(e) => setTrigger(e.target.value as TriggerType)}
      >
        {triggerSelectItems.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <br />
      <div>trigger 값: {trigger}</div>
    </div>
  );
}

export default SimpleString;
