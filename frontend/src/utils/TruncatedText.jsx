import React, { useState, useEffect } from "react";

function TruncatedText({ text, maxLength }) {
  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    if (text.length > maxLength) {
      setTruncatedText(`${text.substring(0, maxLength)}...`);
    } else {
      setTruncatedText(text);
    }
  }, [text, maxLength]);

  return <>{truncatedText}</>;
}

export default TruncatedText;
