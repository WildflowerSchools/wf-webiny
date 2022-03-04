import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import { ReactComponent as MenuIcon } from "../assets/menu-icon.svg";
import Navigation from "theme/pageBuilder/components/Navigation";
import Menu from "./menu"

const outerWrapper = css({
    boxSizing: "border-box"
});

const PreviewBox = styled("div")({
    textAlign: "center",
    height: 50,
    svg: {
        height: 50,
        width: 50,
        color: "var(--mdc-theme-text-secondary-on-background)"
    }
});

const MenuElement = props => {
    const { element } = props;

    if (!element.data.menu.menuSlug) {
        return (
            <PreviewBox>
                <MenuIcon />
            </PreviewBox>
        );
    }

    return (
        <ElementRoot
            className={
                "webiny-pb-base-page-element-style webiny-pb-page-element-menu " + outerWrapper
            }
            element={element}
        >
            <nav className={"webiny-pb-section-header__navigation"}>
                <Menu slug={element.data.menu.menuSlug} component={Navigation} />
            </nav>
        </ElementRoot>
    );
};

export default MenuElement;