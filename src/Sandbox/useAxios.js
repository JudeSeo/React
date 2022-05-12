import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    };
    useEffect(() => {
        axiosInstance(opts)
            .then((data) => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch((error) => {
                setState({ ...state, loading: false, error });
            });
    }, [trigger]);

    if (!opts.url) return; // hooks는 어떤 값이 return되기 전에 정의되어야 하기때문에 if-return을 위에서 사용시 에러발생
    return { ...state, refetch };
};

export default useAxios;

//===================================================


// import React from "react";
// import ReactDOM from "react-dom";
// import useAxios from "./Sandbox/useAxios";
//
// const App = () => {
//     const { loading, data, refetch } = useAxios({
//         url: "https://yts.mx/api/v2/list_movies.json"
//     });
//     return (
//         <div className="App" style={{ height: "1000vh" }}>
//             <h1>{data && data.status}</h1>
//             <h2>{loading && "Loading"}</h2>
//             <button onClick={refetch}>Refetch</button>
//         </div>
//     );
// };
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

