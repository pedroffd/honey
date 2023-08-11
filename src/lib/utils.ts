import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export function getInitials(name: string): string {
    const initials = name
        .split(" ")
        .filter((part) => part !== "") // Remove any empty parts
        .map((part) => part.charAt(0).toUpperCase()) // Get the first character of each part and convert it to uppercase
        .slice(0, 2) // Take the first two initials
        .join(""); // Join the initials together

    return initials;
}
