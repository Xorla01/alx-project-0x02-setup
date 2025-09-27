import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
    label,
    size = "medium",
    shape = "rounded-md",
    type = "button",
    onClick 
}) => {
    const sizes = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-md",
        large: "px-6 py-3 text-lg"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                bg-blue-500 text-white font-semibold
                ${sizes[size]}
                ${shape}
                hover:bg-blue-600 trannsition
            `}
        >
            {label}
        </button>
    );
}

export default Button;