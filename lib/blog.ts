import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogHeading {
  level: number;
  text: string;
  id: string;
}

export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  featuredImageAlt?: string;
  published: boolean;
  content: string;
  readingTime: string;
  headings: BlogHeading[];
}

const BLOG_DIRECTORY = path.join(process.cwd(), 'content', 'blog');

/**
 * Calculates human-readable reading time from markdown content (~220 words per minute)
 */
export function calculateReadingTime(content: string): string {
  // Strip code blocks and markdown formatting to count real prose words
  const cleanText = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_~`>-]/g, ' ')
    .trim();

  const words = cleanText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

/**
 * Generates URL-friendly anchor id from heading text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/**
 * Extracts H2 and H3 headings from markdown content for the Table of Contents
 */
export function extractHeadings(content: string): BlogHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: BlogHeading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    // Strip bold/italic/links inside heading for clean anchor text
    const cleanText = rawText
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

    headings.push({
      level,
      text: cleanText,
      id: slugify(cleanText),
    });
  }

  return headings;
}

/**
 * Retrieves all blog posts from content/blog/
 * Skips files beginning with an underscore (such as _TEMPLATE.mdx)
 */
export async function getBlogPosts(includeUnpublished = false): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  const entries = fs.readdirSync(BLOG_DIRECTORY);
  const mdxFiles = entries.filter(
    (file) =>
      (file.endsWith('.mdx') || file.endsWith('.md')) &&
      !file.startsWith('_')
  );

  const posts: BlogPost[] = [];

  for (const filename of mdxFiles) {
    const filePath = path.join(BLOG_DIRECTORY, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const isPublished = Boolean(data.published);
    if (!includeUnpublished && !isPublished) {
      continue;
    }

    const defaultSlug = filename.replace(/\.(mdx|md)$/, '');
    const slug = data.slug ? String(data.slug).trim() : defaultSlug;

    // Normalize tags array
    let tags: string[] = [];
    if (Array.isArray(data.tags)) {
      tags = data.tags.map(String);
    } else if (typeof data.tags === 'string') {
      tags = data.tags.split(',').map((t) => t.trim()).filter(Boolean);
    }

    const readingTime = calculateReadingTime(content);
    const headings = extractHeadings(content);

    posts.push({
      title: data.title ? String(data.title) : 'Untitled Post',
      description: data.description ? String(data.description) : '',
      slug,
      date: data.date ? String(data.date) : new Date().toISOString().split('T')[0],
      updated: data.updated ? String(data.updated) : undefined,
      author: data.author ? String(data.author) : 'Halloween Coloring Pages',
      category: data.category ? String(data.category) : 'Halloween Coloring Pages',
      tags,
      featuredImage: data.featuredImage ? String(data.featuredImage) : undefined,
      featuredImageAlt: data.featuredImageAlt ? String(data.featuredImageAlt) : undefined,
      published: isPublished,
      content,
      readingTime,
      headings,
    });
  }

  // Sort newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Retrieves a single post by slug
 */
export async function getBlogPostBySlug(
  slug: string,
  includeUnpublished = false
): Promise<BlogPost | null> {
  const posts = await getBlogPosts(includeUnpublished);
  const match = posts.find((p) => p.slug === slug);
  return match || null;
}

/**
 * Returns slugs of all published blog posts
 */
export async function getAllPublishedBlogSlugs(): Promise<string[]> {
  const posts = await getBlogPosts(false);
  return posts.map((p) => p.slug);
}

/**
 * Finds related published articles based on matching category or shared tags
 */
export async function getRelatedPosts(currentPost: BlogPost, limit = 2): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts(false);
  const others = allPosts.filter((p) => p.slug !== currentPost.slug);

  if (others.length === 0) {
    return [];
  }

  // Score posts by relevance: +3 points for exact category, +1 point for each matching tag
  const scored = others.map((post) => {
    let score = 0;
    if (post.category.toLowerCase() === currentPost.category.toLowerCase()) {
      score += 3;
    }
    const commonTags = post.tags.filter((t) =>
      currentPost.tags.map((ct) => ct.toLowerCase()).includes(t.toLowerCase())
    );
    score += commonTags.length;

    return { post, score };
  });

  // Sort by score descending, then date
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });

  return scored.slice(0, limit).map((s) => s.post);
}
