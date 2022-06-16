import React, {Component, useState} from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

const ReactPagination = () => {
    const pagination = type => alert("GO " + type);
    return (<>
        <Pagination size="lg" aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink previous onClick={e => pagination("previous")}/>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={e => pagination("1")}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={e => pagination("2")}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last onClick={e => pagination("last")}/>
            </PaginationItem>
        </Pagination>
    </>)
}

export default ReactPagination;
