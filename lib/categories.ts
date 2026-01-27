
export const TARGET_CATEGORIES = [
    {
        slug: 'fmcg',
        name: 'FMCG',
        title: 'Fast-Moving Consumer Goods',
        description: 'Wholesale FMCG products, daily needs, and packaged food distribution.',
        keywords: ['FMCG wholesale on credit', 'FMCG distributors Kerala', 'FMCG manufacturers India', 'HUL distributors near me']
    },
    {
        slug: 'grocery',
        name: 'Grocery',
        title: 'Grocery & Staples',
        description: 'Bulk grocery supplies, staples, spices, and dry fruits.',
        keywords: ['Grocery wholesale credit', 'Kirana supply on credit', 'Grocery distributors Kerala', 'Rice wholesale Kerala']
    },
    {
        slug: 'textiles',
        name: 'Textiles',
        title: 'Textiles & Clothing',
        description: 'Wholesale fabrics, ready-made garments, and ethnic wear manufacturers.',
        keywords: ['Textile manufacturers Kerala', 'Clothing wholesale credit', 'Fabric suppliers India', 'Ladies wear wholesale']
    },
    {
        slug: 'electronics',
        name: 'Electronics',
        title: 'Consumer Electronics',
        description: 'Mobile accessories, consumer electronics, and home appliances wholesale.',
        keywords: ['Electronics wholesale credit', 'Mobile accessories distributors', 'Gadget suppliers Kerala']
    },
    {
        slug: 'pharma',
        name: 'Pharma',
        title: 'Pharmaceuticals',
        description: 'Medicines, healthcare products, and surgical equipment distribution.',
        keywords: ['Pharma distributors Kerala', 'Medicine wholesale credit', 'Healthcare supply chain', 'Ayurvedic wholesale']
    }
];

export function getCategoryBySlug(slug: string) {
    return TARGET_CATEGORIES.find(cat => cat.slug.toLowerCase() === slug.toLowerCase());
}
