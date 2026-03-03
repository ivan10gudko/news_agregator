const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t bg-background">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-18 md:h-16 md:flex-row md:px-8 md:py-0">
                <p className="text-sm text-muted-foreground">
                    © {currentYear} News Aggregator. All rights reserved.
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <a
                        href="#"
                        className="transition-colors hover:text-foreground"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        className="transition-colors hover:text-foreground"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
