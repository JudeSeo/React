import React, {Component, useState, useEffect} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";

const ReactTab = () => {
    const [tabState, setTabState] = useState("React");
    const toggle = (tab) => {
        if (tabState !== tab)
            setTabState(tab);
    }
    return (<>
        <Nav tabs>
            <NavItem>
                <NavLink onClick={() => {
                    toggle("React")
                }}>First Tab</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => {
                    toggle("200")
                }}>Second Tab</NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={tabState}>
            <TabPane tabId="React"><h3>React</h3></TabPane>
            <TabPane tabId="200"><h3>200</h3></TabPane>
        </TabContent>
    </>)
}

export default ReactTab;
