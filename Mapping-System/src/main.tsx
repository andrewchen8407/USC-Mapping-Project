// main.tsx

// EsriWithRef component imported from App.tsx; this import is paramount
// since this powers the entire Esri map application!

import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import EsriWithRef from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const esriRef = useRef<HTMLDivElement | null>(null);
  return (
    <div>
      <EsriWithRef
        url={"https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts"}
        // Boolean variable widgetToggle should be true if the Esri map functions as its
        // own website, or false if it is treated as an embedded applet/component.
        widgetToggle={true}
        ref={esriRef}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
