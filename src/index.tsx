import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    HashRouter, Route,
    Routes,
} from "react-router-dom";
import Root from "./routes/Root";
import CaseOne from "./routes/CaseOne";
import CaseTwo from "./routes/CaseTwo";
import CaseThree from "./routes/CaseThree";
import CaseFour from "./routes/CaseFour";
import CaseProd from "./routes/CaseProd";
import CaseFive from "./routes/CaseFive";
import CaseSix from "./routes/CaseSix";
import CaseDesktop from "./routes/CaseDesktop";
import CaseCarHire from "./routes/CaseCarHire";
import CaseLab from "./routes/CaseLab";
import Demo from "./routes/Demo";
import '@skyscanner/backpack-web/bpk-stylesheets';
import FormDemo from "./routes/FormDemo";

const App: React.FC = ()  => {
    return (
        <React.StrictMode>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Root/>}/>
                    <Route path="/case/prod" element={<CaseProd/>}/>
                    <Route path="/case/1" element={<CaseOne/>}/>
                    <Route path="/case/2" element={<CaseTwo/>}/>
                    <Route path="/case/3" element={<CaseThree/>}/>
                    <Route path="/case/4" element={<CaseFour/>}/>
                    <Route path="/case/5" element={<CaseFive/>}/>
                    <Route path="/case/desktop-1" element={<CaseDesktop/>}/>
                    <Route path="/reference/hotel-mweb" element={<CaseSix/>}/>
                    <Route path="/reference/carhire-mweb" element={<CaseCarHire />}/>
                    <Route path="/lab" element={<CaseLab />}/>
                    <Route path="/demo/september" element={<Demo />}/>
                    <Route path="/demo/form-demo" element={<FormDemo />}/>
                </Routes>
            </HashRouter>
        </React.StrictMode>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
