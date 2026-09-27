export interface ColoringSheet {
  id: string;
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
  tags: string[];
  imageSrc: string;
  altText: string;
  pdfUrl: string;
  aspectRatio: '8.5x11' | 'A4';
  difficulty: 'Easy' | 'Medium' | 'Intricate';
  dateAdded: string;
}

// In the initial foundation, no fake sheets are stored.
// Real content can be populated here or fetched from a headless CMS / MDX / database.
export const COLORING_PAGES_REGISTRY: ColoringSheet[] = [];

export function getColoringPageBySlug(slug: string): ColoringSheet | undefined {
  return COLORING_PAGES_REGISTRY.find((sheet) => sheet.slug === slug);
}

export function getColoringPagesByCategory(categorySlug: string): ColoringSheet[] {
  return COLORING_PAGES_REGISTRY.filter((sheet) => sheet.categorySlug === categorySlug);
}

export function getAllPublishedSlugs(): string[] {
  return COLORING_PAGES_REGISTRY.map((sheet) => sheet.slug);
}
