import React, { useEffect } from "react";

export default function Component(Component, ComponentName) {
  return class OutComponent extends React.Component {
    componentDidMount() {
      console.log(`3. ComponentName: ${ComponentName}`);
    }
    render() {
      console.log("1. component render");
      return <Component {...this.props} />;
    }
  };
}

// const Component = (Component, ComponentName) => {
//     console.log("1. component render");
//   useEffect(() => {
//     console.log(`3. ComponentName: ${ComponentName}`);
//   });
//   return <Component {...Component.props} />;
// };
// export default Component;


//함수형으로 짜면 동작이 안된다... 왜인지 모르겠다..
// 제대로 못 바꿔서인거 같은데 어떻게 바꿔야할지 모르겠음
