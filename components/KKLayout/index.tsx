import React from "react";
import Header from "./Header";
import styles from "./styles.module.css";

interface KKLayoutProps {
    children: React.ReactNode;
}

const KKLayout: React.FC<KKLayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            {children}
        </div>
    );
};

export default KKLayout;