export interface HeaderProps {
    title?: string;
    logo?: string;
    links?: { label: string; href: string }[];
}

export interface HomeProps {
    title?: string;
}

export interface AboutProps {
    title?: string;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    title: string;
    content: string;
    isOpen: boolean; 
    onClose: () => void; 
    onSubmit: (post: { title: string; content: string }) => void; 
}

export interface ButtonProps {
    label: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    type?: "button" | "submit" | "reset";
    onClick: () => void;
}