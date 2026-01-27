
export const TARGET_LOCATIONS = [
    {
        slug: 'kerala',
        name: 'Kerala',
        type: 'State',
        description: 'Find hyperlocal wholesalers and manufacturers in Kerala. Get stock on credit and next-day delivery.',
        keywords: ['Kerala wholesale market', 'Kerala distributors', 'Stock on credit Kerala', 'FMCG Kerala']
    },
    {
        slug: 'ranni',
        name: 'Ranni',
        type: 'Town',
        description: 'Connect with certified distributors in Ranni via DukaaOn. Access credit facilities for your retail shop.',
        keywords: ['Ranni wholesale', 'Ranni distributors', 'Kirana supply Ranni', 'Stock on credit Ranni']
    },
    {
        slug: 'pathanamthitta',
        name: 'Pathanamthitta',
        type: 'City',
        description: 'Leading B2B marketplace in Pathanamthitta. Source directly from manufacturers with hyperlocal delivery.',
        keywords: ['Pathanamthitta wholesale market', 'Pathanamthitta distributors', 'FMCG Pathanamthitta']
    },
    {
        slug: 'idukki',
        name: 'Idukki',
        type: 'District',
        description: 'Reach remote retailers in Idukki. DukaaOn ensures supply chain connectivity even in high-range areas.',
        keywords: ['Idukki distributors', 'Wholesale suppliers Idukki', 'Spices export Idukki', 'Retail stock Idukki']
    },
    {
        slug: 'kottayam',
        name: 'Kottayam',
        type: 'City',
        description: 'Trusted wholesalers in Kottayam. Get working capital on credit for your supermarket or kirana store.',
        keywords: ['Kottayam wholesale market', 'Kottayam distributors', 'Rubber traders Kottayam', 'Stock loan Kottayam']
    },
    {
        slug: 'kochi',
        name: 'Kochi',
        type: 'City',
        description: 'Hub of manufacturers and distributors in Kochi. Join DukaaOn for hyperlocal trade connections.',
        keywords: ['Kochi wholesale market', 'Ernakulam distributors', 'FMCG Kochi', 'Electronics wholesale Kochi']
    },
    {
        slug: 'trivandrum',
        name: 'Trivandrum',
        type: 'City',
        description: 'Capital network of suppliers in Trivandrum. Fast delivery and credit options for local businesses.',
        keywords: ['Trivandrum wholesale', 'Thiruvananthapuram distributors', 'Grocery wholesale Trivandrum']
    },
    {
        slug: 'kozhikode',
        name: 'Kozhikode',
        type: 'City',
        description: 'Major trade center for spices and textiles in Kozhikode. Source directly on DukaaOn.',
        keywords: ['Kozhikode wholesale market', 'Calicut distributors', 'Textile wholesale Kozhikode']
    },
    {
        slug: 'thrissur',
        name: 'Thrissur',
        type: 'City',
        description: 'Best wholesale deals in Thrissur. Gold, textiles, and FMCG supervision directly from suppliers.',
        keywords: ['Thrissur wholesale', 'Thrissur distributors', 'Manufacturing units Thrissur']
    },
    {
        slug: 'alappuzha',
        name: 'Alappuzha',
        type: 'City',
        description: 'Connect with coir and marine product suppliers in Alappuzha. Hyperlocal B2B trade.',
        keywords: ['Alappuzha wholesale', 'Alleppey distributors', 'Coir manufacturers Alappuzha']
    }
];

export function getLocationBySlug(slug: string) {
    return TARGET_LOCATIONS.find(loc => loc.slug.toLowerCase() === slug.toLowerCase());
}
