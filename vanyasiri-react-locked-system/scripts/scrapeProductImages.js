const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const { URL } = require('url');

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        protocol.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
            }
            if (response.statusCode !== 200) {
                return reject(new Error(`Failed ${url} (${response.statusCode})`));
            }
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => file.close(resolve));
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

const productUrls = [
    'https://vanyasiri.org/product/agar-wood-oil-copper-tamra/',
    'https://vanyasiri.org/product/agar-wood-oil-divine/',
    'https://vanyasiri.org/product/agar-wood-oil-gold-suvarna/',
    'https://vanyasiri.org/product/agar-wood-oil-silver-rajata/',
    'https://vanyasiri.org/product/champak-essential-oil/',
    'https://vanyasiri.org/product/gulab-oil-pink-3-ml/',
    'https://vanyasiri.org/product/gulab-oil-red-3-ml/',
    'https://vanyasiri.org/product/holy-basil-tulsi-essential-oil/',
    'https://vanyasiri.org/product/jasmine-oil-mallika-taila/',
    'https://vanyasiri.org/product/mitragyna-parvifolia/',
    'https://vanyasiri.org/product/kewda-pandanus-odoratissimus/',
    'https://vanyasiri.org/product/pink-lotus-oil-padma-taila-3-ml/',
    'https://vanyasiri.org/product/rajanighandha-oil-3ml/',
    'https://vanyasiri.org/product/sandal-wood-oil/',
    'https://vanyasiri.org/product/vetiver-root-oil-ushira-taila-5-ml/',
    'https://vanyasiri.org/product/white-champaka-oil-sveta-champaka-taila/',
    'https://vanyasiri.org/product/white-lotus-oil-pundarika-taila-3ml/',
    'https://vanyasiri.org/product/chintamani-king-of-all-the-rasamani/',
    'https://vanyasiri.org/product/500/',
    'https://vanyasiri.org/product/rasa-mani/',
    'https://vanyasiri.org/product/ashvakarna-resin/',
    'https://vanyasiri.org/product/rala-dhoopa/',
    'https://vanyasiri.org/product/chilaka-dhoopa/',
    'https://vanyasiri.org/product/sandal-wood/',
    'https://vanyasiri.org/product/raw-wild-honey/',
    'https://vanyasiri.org/product/wild-stingless-bees-honey/',
    'https://vanyasiri.org/product/hanuman-chalisa-palm-leaf-manuscript/',
    'https://vanyasiri.org/product/palm-leaf-engraving-lakshmi-narasimha-swamy/',
    'https://vanyasiri.org/product/natural-navaratna-stone-set/',
];

async function scrapeProductImage(url) {
    const res = await fetch(url);
    const html = await res.text();

    // Try to extract WooCommerce product image
    const ogImgMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (ogImgMatch) {
        return ogImgMatch[1];
    }
    const imgSrcMatch = html.match(/class="wp-post-image"[^>]+src="([^"]+)"/);
    if (imgSrcMatch) {
        return imgSrcMatch[1];
    }
    return null;
}

async function main() {
    const imgDir = path.join(process.cwd(), 'public', 'images');
    fs.mkdirSync(imgDir, { recursive: true });

    let downloaded = 0;
    const results = [];

    for (const productUrl of productUrls) {
        console.log(`Processing: ${productUrl}`);
        try {
            const imgUrl = await scrapeProductImage(productUrl);
            if (imgUrl) {
                const fileName = path.basename(new URL(imgUrl).pathname);
                const dest = path.join(imgDir, fileName);
                if (!fs.existsSync(dest)) {
                    await downloadImage(imgUrl, dest).catch(e => console.error(`  Download failed: ${e.message}`));
                    downloaded++;
                }
                results.push({ url: productUrl, image: `/images/${fileName}` });
                console.log(`  -> /images/${fileName}`);
            } else {
                results.push({ url: productUrl, image: null });
                console.log(`  -> No image found`);
            }
        } catch (e) {
            console.error(`  Error: ${e.message}`);
            results.push({ url: productUrl, image: null });
        }
    }

    fs.writeFileSync(path.join(process.cwd(), 'scripts', 'scraped_images.json'), JSON.stringify(results, null, 2));
    console.log(`\nDone! Downloaded: ${downloaded} images.\nResults saved to scripts/scraped_images.json`);
}

main();
