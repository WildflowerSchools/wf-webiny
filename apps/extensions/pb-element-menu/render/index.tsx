import React from "react";
import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";

import MenuElement from "../shared/components/menuElement";
import Menu from "./components/menu"

export default () =>
    ({
        name: "pb-render-page-element-menu",
        type: "pb-render-page-element",
        elementType: "menu",
        render({ element }) {
            return <Menu element={element} />;
        }
    } as PbRenderElementPlugin);