import React, {Component} from "react";
import {UncontrolledCarousel} from "reactstrap";

const items = [
    {
        src: "https://han.gl/BwBBt",
        altText: " 슬라이드1 이미지 대체 문구",
        caption: " 슬라이드1 설명",
        header: " 슬라이드1 제목"
    },
    {
        src: "https://han.gl/hOXoF",
        altText: " 슬라이드2 이미지 대체 문구",
        caption: " 슬라이드2 설명",
        header: " 슬라이드2 제목"
    },
    {
        src: "https://han.gl/tnMfa",
        altText: " 슬라이드3 이미지 대체 문구",
        caption: " 슬라이드3 설명",
        header: " 슬라이드3 제목"
    }
]
const ReactstrapCarousel = () => {
    return (<div>
        <UncontrolledCarousel items={items}/>
    </div>)
}
export default ReactstrapCarousel;
