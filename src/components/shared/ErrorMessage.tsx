import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
    title?: string;
    description?: string;
}

const ErrorMessage = ({
    title = "Oops! Something went wrong.",
    description,
}: ErrorMessageProps) => {
    return (
        <div className="border-destructive/50 bg-destructive/10 text-destructive flex flex-col items-center justify-center rounded-lg border p-8 text-center">
            <AlertCircle className="mb-3 h-8 w-8 opacity-80" />

            <p className="text-lg font-medium">{title}</p>

            {description && (
                <p className="mt-1 text-sm opacity-80">{description}</p>
            )}
        </div>
    );
};

export default ErrorMessage;
