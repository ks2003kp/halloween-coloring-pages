export interface CategoryItem {
  id: string;
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  recommendedFor: string;
  difficulty: 'Easy' | 'Medium' | 'Intricate' | 'All Ages';
  themes: string[];
  metaDescription: string;
  relatedSlugs: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  name: 'Halloween Coloring Pages',
  shortName: 'Halloween Coloring',
  domain: 'https://halloweencoloringpages.store',
  tagline: 'Free Printable Halloween Coloring Pages for Kids & Adults',
  description:
    'Free printable Halloween coloring pages for kids and adults. Clean, high-quality outlines of friendly pumpkins, cute ghosts, witches, black cats, and spooky fun.',
  contactEmailPlaceholder: 'contact@halloweencoloringpages.store',
  currentYear: 2026,
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Coloring Pages', href: '/coloring-pages' },
    { label: 'For Kids', href: '/coloring-pages/for-kids' },
    { label: 'For Adults', href: '/coloring-pages/for-adults' },
    { label: 'Categories', href: '/coloring-pages#categories' },
    { label: 'About', href: '/about' },
  ] as NavLink[],
  categories: [
    {
      id: 'for-kids',
      slug: 'for-kids',
      href: '/coloring-pages/for-kids',
      title: 'Halloween Coloring Pages for Kids',
      shortTitle: 'For Kids',
      description:
        'Engaging, playful Halloween coloring sheets designed with bold lines and cheerful seasonal themes for young artists.',
      longDescription:
        'Our Halloween coloring pages for kids feature cheerful jack-o\'-lanterns, smiling trick-or-treaters, gentle phantoms, and festive candy baskets. The outlines are crafted with clean, continuous strokes that give younger children confidence while developing hand-eye coordination and color creativity.',
      recommendedFor: 'Preschool to Elementary (Ages 3–10)',
      difficulty: 'Easy',
      themes: ['Friendly Ghosts', 'Smiling Pumpkins', 'Trick-or-Treat Candy', 'Playful Costumes', 'Cute Bats'],
      metaDescription:
        'Download and print free Halloween coloring pages for kids. Fun, friendly jack-o\'-lanterns, trick-or-treaters, and playful autumn themes.',
      relatedSlugs: ['easy', 'cute', 'pumpkin', 'ghost'],
    },
    {
      id: 'for-adults',
      slug: 'for-adults',
      href: '/coloring-pages/for-adults',
      title: 'Halloween Coloring Pages for Adults',
      shortTitle: 'For Adults',
      description:
        'Sophisticated, intricate Halloween illustrations featuring gothic architecture, detailed autumn foliage, and ornate designs.',
      longDescription:
        'Designed for teens and adults seeking relaxing, mindful creative time, our adult Halloween coloring collection balances spooky intrigue with artistic depth. Explore intricate haunted house facades, detailed botanical pumpkins, ornate witch cauldrons, and elegant gothic patterns suited for fine-tip markers and colored pencils.',
      recommendedFor: 'Teens & Adults',
      difficulty: 'Intricate',
      themes: ['Gothic Mansions', 'Intricate Mandalas', 'Autumn Florals', 'Ornate Cauldrons', 'Detailed Ravens'],
      metaDescription:
        'Printable Halloween coloring pages for adults and teens. Intricate, detailed designs featuring haunted manors, autumn botanicals, and gothic patterns.',
      relatedSlugs: ['pumpkin', 'witch', 'black-cat', 'ghost'],
    },
    {
      id: 'cute',
      slug: 'cute',
      href: '/coloring-pages/cute',
      title: 'Cute Halloween Coloring Pages',
      shortTitle: 'Cute Halloween',
      description:
        'Heartwarming kawaii Halloween illustrations with charming expressions, smiling treats, and gentle seasonal friends.',
      longDescription:
        'Not all Halloween fun needs to be spooky. Our cute Halloween coloring pages bring sweet smiles with kawaii-styled pumpkins, happy little vampires sipping hot cocoa, friendly mummies sharing candy, and cheerful little bats wearing party hats.',
      recommendedFor: 'All Ages (Especially Kids & Kawaii Lovers)',
      difficulty: 'Easy',
      themes: ['Kawaii Pumpkins', 'Baby Monsters', 'Sweet Candy Corn', 'Hugging Ghosts', 'Party Bats'],
      metaDescription:
        'Explore cute Halloween coloring pages with heartwarming kawaii characters, smiling pumpkins, sweet treats, and friendly little monsters.',
      relatedSlugs: ['easy', 'for-kids', 'pumpkin', 'black-cat'],
    },
    {
      id: 'easy',
      slug: 'easy',
      href: '/coloring-pages/easy',
      title: 'Easy Halloween Coloring Pages',
      shortTitle: 'Easy Outlines',
      description:
        'Simple, thick-lined Halloween coloring sheets ideal for toddlers, beginners, and quick holiday craft projects.',
      longDescription:
        'These easy Halloween coloring pages prioritize extra-wide outlines, expansive coloring zones, and minimal clutter. They are tailored for chunky crayons, finger paints, or dot markers, making them an excellent choice for daycare centers, preschool classrooms, and rainy fall afternoons.',
      recommendedFor: 'Toddlers, Preschoolers & Early Learners',
      difficulty: 'Easy',
      themes: ['Big Shape Pumpkins', 'Single Candy Pieces', 'Simple Moon & Stars', 'Basic Flying Bat', 'Happy Ghost'],
      metaDescription:
        'Free easy Halloween coloring pages with thick, clear outlines. Perfect for toddlers, preschool crafts, and young beginner colorists.',
      relatedSlugs: ['for-kids', 'cute', 'pumpkin', 'ghost'],
    },
    {
      id: 'pumpkin',
      slug: 'pumpkin',
      href: '/coloring-pages/pumpkin',
      title: 'Pumpkin Coloring Pages',
      shortTitle: 'Pumpkins',
      description:
        'A harvest of pumpkin coloring sheets ranging from classic carved jack-o\'-lanterns to rustic autumn pumpkin patches.',
      longDescription:
        'The undisputed symbol of the season, pumpkins come in every shape and mood. Our pumpkin coloring page collection features classic toothy jack-o\'-lantern grins, decorative heirloom squash, countryside harvest patches with curling vines, and modern geometric pumpkin patterns.',
      recommendedFor: 'All Ages',
      difficulty: 'All Ages',
      themes: ['Carved Jack-o\'-Lanterns', 'Pumpkin Patches', 'Curling Vines', 'Autumn Leaves', 'Stacked Pumpkins'],
      metaDescription:
        'Printable pumpkin coloring pages for Halloween and autumn. Carved jack-o\'-lanterns, countryside pumpkin patches, and harvest art.',
      relatedSlugs: ['for-kids', 'easy', 'cute', 'ghost'],
    },
    {
      id: 'ghost',
      slug: 'ghost',
      href: '/coloring-pages/ghost',
      title: 'Ghost Coloring Pages',
      shortTitle: 'Ghosts',
      description:
        'Floating spirits, sheet phantoms, and gentle friendly ghosts carrying trick-or-treat bags and festive banners.',
      longDescription:
        'From classic sheet ghosts floating through haunted corridors to goofy phantoms eating candy, our ghost coloring pages offer a wide variety of cheerful and slightly spooky designs. Perfect for quick printable decorations or party activities.',
      recommendedFor: 'All Ages',
      difficulty: 'Easy',
      themes: ['Floating Phantoms', 'Ghosts with Candy Bags', 'Boo Banners', 'Haunted Graveyards', 'Friendly Spirits'],
      metaDescription:
        'Free printable ghost coloring pages. Friendly floating spirits, trick-or-treating phantoms, and festive spooky outlines.',
      relatedSlugs: ['for-kids', 'cute', 'witch', 'pumpkin'],
    },
    {
      id: 'witch',
      slug: 'witch',
      href: '/coloring-pages/witch',
      title: 'Witch Coloring Pages',
      shortTitle: 'Witches',
      description:
        'Magical witch coloring pages featuring flying broomsticks, bubbling cauldrons, spellbooks, and starry hats.',
      longDescription:
        'Enter the magical realm of Halloween with enchanting witch coloring sheets. Discover friendly young witches stirring potion pots under the full moon, silhouetted riders soaring across star-filled skies, and detailed still-lifes of crystal balls, spell tomes, and wizardly herbs.',
      recommendedFor: 'Kids, Teens & Adults',
      difficulty: 'Medium',
      themes: ['Pointy Witch Hats', 'Bubbling Cauldrons', 'Broomstick Flights', 'Magical Potions', 'Spellbook Stacks'],
      metaDescription:
        'Magical witch coloring pages to print and color. Enchanting scenes of broomsticks, glowing cauldrons, potion bottles, and witch hats.',
      relatedSlugs: ['black-cat', 'for-kids', 'for-adults', 'pumpkin'],
    },
    {
      id: 'black-cat',
      slug: 'black-cat',
      href: '/coloring-pages/black-cat',
      title: 'Black Cat Coloring Pages',
      shortTitle: 'Black Cats',
      description:
        'Mysterious and adorable Halloween cat coloring sheets featuring feline companions with witch hats, pumpkins, and autumn leaves.',
      longDescription:
        'Celebrated as loyal witch familiars and autumn icons, black cats are a favorite subject for Halloween colorists. This collection highlights cozy kittens napping inside carved pumpkins, sleek felines perched on picket fences against the moon, and playful cats batting at autumn leaves.',
      recommendedFor: 'All Ages & Cat Enthusiasts',
      difficulty: 'All Ages',
      themes: ['Cats in Witch Hats', 'Fence Top Felines', 'Pumpkin Kittens', 'Prowling Silhouettes', 'Autumn Paws'],
      metaDescription:
        'Free black cat coloring pages for Halloween. Cute kittens in witch hats, mysterious cats under the moon, and festive feline artwork.',
      relatedSlugs: ['witch', 'cute', 'for-kids', 'for-adults'],
    },
  ] as CategoryItem[],
  faqs: [
    {
      question: 'What are Halloween coloring pages?',
      answer:
        'Halloween coloring pages are printable black-and-white line art sheets featuring holiday themes such as pumpkins, ghosts, witches, bats, and harvest scenes. They provide an enjoyable, creative activity for individuals of all ages to color with crayons, colored pencils, markers, or paints.',
    },
    {
      question: 'Can these Halloween coloring pages be printed at home?',
      answer:
        'Yes. All coloring pages on this site are designed formatted for standard desktop home printers (US Letter 8.5 x 11 inches and A4 paper sizes). For the best results, print at 100% scale on standard copy paper or heavier cardstock if using wet media like markers or watercolors.',
    },
    {
      question: 'Are Halloween coloring pages suitable for young children?',
      answer:
        'Yes. We offer dedicated categories for toddlers and preschool-age children with simplified shapes and thick outlines, as well as cute, friendly Halloween themes that are fun and welcoming without being frightening.',
    },
    {
      question: 'Can adults also enjoy Halloween coloring pages?',
      answer:
        'Absolutely. Coloring is a widely appreciated relaxing hobby for adults and teens. Our For Adults category features intricate architectural illustrations, botanical autumn patterns, and ornate gothic motifs that offer hours of mindful creativity.',
    },
    {
      question: 'What Halloween themes can I find on this website?',
      answer:
        'Our library is organized into specialized categories including Jack-o\'-lanterns and pumpkins, friendly ghosts, magical witches, black cats, cute kawaii monsters, easy outlines for beginners, and intricate sheets for adults.',
    },
    {
      question: 'Are there any costs or sign-ups required to download?',
      answer:
        'No. Halloween Coloring Pages is built as a completely free, open resource. You will not need an account, paid subscription, or credit card to access and print our coloring sheets.',
    },
  ],
  whyColoringCards: [
    {
      title: 'Creative Autumn Activity',
      description:
        'Coloring encourages self-expression, color experimentation, and artistic confidence for children and adults alike during the cozy fall season.',
    },
    {
      title: 'Screen-Free Entertainment',
      description:
        'Printable coloring sheets offer a calm, tactile alternative to digital screens, perfect for quiet afternoons, classrooms, or weekend family craft tables.',
    },
    {
      title: 'Accessible Printable Formats',
      description:
        'Clean black line drawings designed specifically for standard home printers, ensuring crisp outlines without consuming excessive black ink.',
    },
    {
      title: 'Festive Holiday Atmosphere',
      description:
        'Finished coloring pages double as homemade Halloween decorations for refrigerators, classroom bulletin boards, windows, and trick-or-treat treat bags.',
    },
  ],
  howItWorksSteps: [
    {
      step: '01',
      title: 'Choose a Theme',
      description:
        'Browse our curated categories—from friendly pumpkins and ghosts for kids to detailed gothic scenes for adults.',
    },
    {
      step: '02',
      title: 'Print or Download',
      description:
        'Save the high-resolution sheet to your device or send it directly to your home printer on standard letter paper.',
    },
    {
      step: '03',
      title: 'Color & Display',
      description:
        'Use crayons, markers, or pencils to bring the spooky autumn scene to life, then hang it up as holiday decoration!',
    },
  ],
};

export function getCategoryBySlug(slug: string): CategoryItem | undefined {
  return SITE_CONFIG.categories.find((c) => c.slug === slug);
}
