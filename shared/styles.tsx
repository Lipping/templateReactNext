import { css, Global } from "@emotion/react";

export const globalStyles = (
    <Global
        styles={css`
            html,
            body {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
                background: #222;
                min-height: 100%;
                font-family: "Poppins", sans-serif;
                font-size: 16px;
                color: #f7f7f7;
                line-height: 200%;
            }
        `}
    />
);
