import { useState } from "react";

type TriggerType = "clicked" | { hoveredWithDelayMs: number };

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

function HoveredWithDelayMs() {
  const [trigger, setTrigger] = useState<TriggerType>("clicked");

  return (
    <div className="simple-form">
      <label htmlFor="select-trigger">조건</label>
      <select
        id="select-trigger"
        value={trigger === "clicked" ? trigger : "hovered"} // 분기를 달아줘야 함
        onChange={(e) => {
          const value = e.target.value;
          if (value === "clicked") {
            setTrigger(value);
          } else {
            setTrigger({ hoveredWithDelayMs: 500 }); // 무조건 기본값이 강제됨
          }
        }}
      >
        {triggerSelectItems.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <br />
      {typeof trigger === "object" && ( // 조건이 뭔가 이상함.
        <>
          <label htmlFor="delay">딜레이(ms)</label>
          <input
            type="number"
            id="delay"
            value={trigger.hoveredWithDelayMs}
            onChange={(e) =>
              setTrigger({
                hoveredWithDelayMs: Number.parseInt(e.target.value, 10),
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

export default HoveredWithDelayMs;
