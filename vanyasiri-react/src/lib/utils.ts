/**
 * Utility to extract price from various product data structures
 * Handles both our static products.json and Medusa v2 product objects
 */
export function extractPrice(product: any): number {
    if (!product) return 0;

    // 1. Static products.json structure
    if (typeof product.price === 'number') {
        return product.price;
    }

    // 2. Medusa v2 structure (variants[0].prices[0].amount)
    if (product.variants && product.variants.length > 0) {
        const variant = product.variants[0];
        if (variant.prices && variant.prices.length > 0) {
            // Medusa usually stores prices in cents/smallest unit,
            // but for this site we assume it matches our display currency
            return variant.prices[0].amount || 0;
        }
    }

    // 3. Fallback for potential direct string prices
    if (typeof product.price === 'string') {
        const parsed = parseFloat(product.price.replace(/[^0-9.]/g, ''));
        return isNaN(parsed) ? 0 : parsed;
    }

    return 0;
}

/**
 * Safely format a price for display in Indian Rupees (INR)
 */
export function formatPrice(price: number | undefined | null): string {
    const safePrice = (typeof price === 'number' && !isNaN(price)) ? price : 0;
    return safePrice.toLocaleString("en-IN");
}
