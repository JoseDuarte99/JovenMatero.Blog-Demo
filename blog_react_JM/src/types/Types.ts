export type PostType = {
    id: number;
    title: string;
    subtitle: string;
    text: string;
    author?: string;
    category: { id: number; name: string }; tags: { id: number; name: string }[];
    published: Date | string;
    image: string;
}