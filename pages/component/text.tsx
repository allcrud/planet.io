import React, { CSSProperties } from "react";

const Text: React.FC = () => {
  const blockEffectStyles: CSSProperties = {
    "--td": "2s",
  };

  const blockRevealStyles1: CSSProperties = {
    "--bc": "grey",
    "--d": ".1s",
    textAlign: "start",
  };

  const blockRevealStyles2: CSSProperties = {
    "--bc": "grey",
    "--d": ".5s",
    textAlign: "center",
  };
  const blockRevealStyles3: CSSProperties = {
    "--bc": "grey",
    "--d": ".5s",
    textAlign: "end",
  };

  return (
    <>
      <h1 className="block-effect" style={blockEffectStyles}>
        <div className="block-reveal" style={blockRevealStyles1}>
          Space
        </div>
        <div className="block-reveal" style={blockRevealStyles2}>
          For The
        </div>
        <div className="block-reveal" style={blockRevealStyles3}>
          Curious.
        </div>
      </h1>
    </>
  );
};

export default Text;
