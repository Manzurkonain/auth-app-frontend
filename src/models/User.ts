export default interface User{
    id: string;
    email: string;
    name?: string;
    enable: boolean;
    image?: string | null;
    updatedAt?: string;
    createdAt?: string;
    provider?: string;
}