import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createHashRouter, HashRouter, Route,
    Routes,
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import CaseOne from "./routes/CaseOne";
import CaseTwo from "./routes/CaseTwo";
import CaseThree from "./routes/CaseThree";
import CaseFour from "./routes/CaseFour";
import CaseProd from "./routes/CaseProd";
import CaseFive from "./routes/CaseFive";
import CaseSix from "./routes/CaseSix";

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: "case/prod",
        element: <CaseProd />
    },
    {
        path: "case/1",
        element: <CaseOne />
    },
    {
        path: "case/2",
        element: <CaseTwo />
    },
    {
        path: "case/3",
        element: <CaseThree />
    },
    {
        path: "case/4",
        element: <CaseFour />
    },
    {
        path: "case/5",
        element: <CaseFive />
    },
    {
        path: "case/6",
        element: <CaseSix />
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<Root />} />
              <Route path="/case/prod" element={<CaseProd />} />
              <Route path="/case/1" element={<CaseOne />} />
              <Route path="/case/2" element={<CaseTwo />} />
              <Route path="/case/3" element={<CaseThree />} />
              <Route path="/case/4" element={<CaseFour />} />
              <Route path="/case/5" element={<CaseFive />} />
              <Route path="/case/6" element={<CaseSix />} />
          </Routes>
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
