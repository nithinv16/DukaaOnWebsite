
export const BLOG_POSTS = [
    {
        slug: 'dukaaon-vs-indiamart-vs-justdial-kerala',
        title: 'DukaaOn vs Indiamart vs Custom Logistics: Why Kerala Retailers Choose Us',
        excerpt: 'Unlike Indiamart (just listings) or Justdial (just numbers), DukaaOn offers Hyperlocal Delivery and Stock on Credit for retailers in Kerala.',
        date: '2026-01-27',
        author: 'DukaaOn Team',
        category: 'Industry Comparison',
        content: `
      <h2>The Problem with Traditional Directories</h2>
      <p>If you search on <strong>Indiamart</strong> or <strong>Justdial</strong>, you get a phone number. You still have to call, negotiate, arrange transport, and pay cash upfront.</p>
      
      <h2>The DukaaOn Difference: We Are Hyperlocal</h2>
      <p>DukaaOn isn't just a website; we are a <strong>hyperlocal operational partner</strong>.</p>
      <ul>
        <li><strong>Hyperlocal Delivery:</strong> We connect you with suppliers in your own district (e.g., Pathanamthitta, Idukki). This ensures next-day delivery.</li>
        <li><strong>Stock on Credit:</strong> We understand rural business. DukaaOn offers credit facilities to verified retailers, so you can buy stock now and pay later.</li>
        <li><strong>Verified Local Manufacturers:</strong> We promote local Kerala manufacturers who are often invisible on national platforms.</li>
      </ul>

      <h2>Why It Matters for Remote Areas (Ranni, Idukki)</h2>
      <p>In high-range areas like Idukki or towns like Ranni, heavy logistics from Bangalore or Chennai (like other major B2B apps) fail. DukaaOn's hyperlocal model thrives by connecting nearby wholesalers to nearby retailers.</p>
    `
    },
    {
        slug: 'stock-on-credit-for-kerala-retailers',
        title: 'How to Get Stock on Credit for Your Kirana Store in Kerala',
        excerpt: 'Stop blocking your working capital. Learn how DukaaOn provides credit facilities for supermarkets and kirana stores in Pathanamthitta, Kottayam, and beyond.',
        date: '2026-01-25',
        author: 'Finance Team',
        category: 'Financial Inclusion',
        content: `
      <h2>Cash Flow is King in Retail</h2>
      <p>For a retailer in Kottayam or Ranni, cash flow is the biggest challenge. Buying stock requires immediate cash, but customers might pay slowly.</p>
      
      <h3>DukaaOn's Credit Facility</h3>
      <p>We solve this by offering <strong>Stock on Credit</strong>. </p>
      <ul>
        <li><strong>No Collateral:</strong> Based on your transaction history.</li>
        <li><strong>Flexible Repayment:</strong> Sell the goods first, pay us later.</li>
        <li><strong>Digital Process:</strong> No paperwork headaches. Apply directly on the app.</li>
      </ul>
      
      <p>This empowers small retailers to compete with big supermarkets by keeping their shelves full without emptying their bank accounts.</p>
    `
    },
    {
        slug: 'hyperlocal-distribution-idukki-pathanamthitta',
        title: 'Hyperlocal Distribution: Reaching the Remote Hills of Idukki & Pathanamthitta',
        excerpt: 'How DukaaOn\'s micro-warehousing network ensures supply chain stability in Kerala\'s difficult terrains.',
        date: '2026-01-20',
        author: 'Operations Head',
        category: 'Logistics',
        content: `
      <h2>The Challenge of High Ranges</h2>
      <p>Distributing FMCG goods to remote areas in <strong>Idukki</strong> or <strong>Pathanamthitta</strong> is tough. Big logistics players often avoid these routes or charge extra.</p>
      
      <h2>Our Solution: Hyperlocal Connectivity</h2>
      <p>DukaaOn doesn't ship everything from a central warehouse. Instead, we connect retailers in Ranni to wholesalers in Ranni or nearby Pathanamthitta towns.</p>
      
      <h3>Benefits for Local Manufacturers</h3>
      <p>Local manufacturers in Kerala produce excellent products but lack distribution muscle. DukaaOn gives them a platform to sell to thousands of retailers in their own district without setting up a sales team.</p>
    `
    }
];

export function getPostBySlug(slug: string) {
    return BLOG_POSTS.find(post => post.slug === slug);
}
