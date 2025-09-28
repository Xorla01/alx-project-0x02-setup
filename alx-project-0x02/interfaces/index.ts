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

export interface PostProps {
    userId: number;
    title: string;
    content: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  name: string;
  email: string;
  address: Address;
}