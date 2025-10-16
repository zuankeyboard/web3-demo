import React from "react";
import Header from "./Header";

interface KKLayoutProps {
    children: React.ReactNode;
}

const KKLayout: React.FC<KKLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default KKLayout;