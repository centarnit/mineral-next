import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = (props: { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};
