export interface Article {
  id: number;
  title: string;
  category: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
  extlink?: string;
}