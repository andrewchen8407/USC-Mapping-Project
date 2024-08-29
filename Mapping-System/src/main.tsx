/* main.tsx */

// EsriWithRef component imported from App.tsx; this import is paramount
// because it powers the entire Esri map program!

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
        ref={esriRef}

        // Each index signifies a unique use case; see layerArrays.tsx
        layerSubsetIndex={2}  // e.g. index 2 is for the public portal

        // Boolean variable toggle should be true if the Esri map functions as a
        // full-width component, or false if it is an embedded applet
        toggle={true}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
