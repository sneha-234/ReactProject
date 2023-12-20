import React from "react";
import Header from "./Header";
import FooterPage from "./Footer";


function LayoutPage({ children }) {
    return (
        <>
            <Header />
            {children}
            <FooterPage />
        </>
    )
}

export default LayoutPage;
