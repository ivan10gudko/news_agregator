import { Link } from "react-router";
import Logo from "../shared/Logo";
import { ModeToggle } from "../features/theme/ModeToogle";

const Header = () => {
    return (
        <header className="w-full border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <Link to="/">
                    <Logo />
                </Link>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
