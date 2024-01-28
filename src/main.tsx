import React from "react"; //A partir do react 17 nós não precisamos mais importar o react, essa linha de código não necessariamente precisa ser escrita
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
