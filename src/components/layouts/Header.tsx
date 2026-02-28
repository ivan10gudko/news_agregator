import { Link } from "react-router";
import Logo from "../shared/Logo";

const Header = () => {
    return (
        <header className="bg-background w-full border-b">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
        </header>
    );
};

export default Header;
