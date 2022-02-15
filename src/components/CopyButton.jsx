import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";
import { CgCopy } from "react-icons/cg";
import { CgCheck } from "react-icons/cg";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (copied) return setCopied();
    }, 3000);
  }, [copied]);

  return (
    <aside className="aside-clipboard unique">
      <CopyToClipboard text="davidmartinez@gmail.com">
        <button className="button__copy-email" onClick={() => setCopied(true)}>
          {copied ? (
            // <span>Copiado!</span>
            <CgCheck size="22px" color="green" />
          ) : (
            // <span style={{ color: "white" }}> email copy !!!</span>
            <CgCopy size="22px" color="white" />
          )}
        </button>
      </CopyToClipboard>
    </aside>
  );
};

export default CopyButton;
