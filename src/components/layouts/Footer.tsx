const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background mt-auto border-t">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-18 md:h-16 md:flex-row md:px-8 md:py-0">
                <p className="text-muted-foreground text-sm">
                    © {currentYear} News Aggregator. All rights reserved.
                </p>

                <div className="text-muted-foreground flex items-center gap-4 text-sm">
                    <a
                        href="#"
                        className="hover:text-foreground transition-colors"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        className="hover:text-foreground transition-colors"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
