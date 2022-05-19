import React from "react";
import ReactDOM from "react-dom/client";
import App from "./twitter/components/App";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    // <React.StrictMode>
    <App/>
    // </React.StrictMode>
);

// StrictMode로 App을 감싸고 있으면 개발모드에서 (개발 단계시 오류를 잘 잡기위해) 두 번씩 렌더링한다.