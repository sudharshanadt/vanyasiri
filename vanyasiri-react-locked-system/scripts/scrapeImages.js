// A script to extract images from a webpage using regex and download them
const fs = require('fs');
const https = require('https');
const path = require('path');

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
            }
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function scrape() {
    const targetUrl = 'https://vanyasiri.org/';
    console.log(`Fetching HTML from ${targetUrl}...`);
    try {
        const res = await fetch(targetUrl);
        const text = await res.text();
        // find all image urls
        const imgRegex = /<img[^>]+src="([^">]+)"/g;
        let match;
        const urls = new Set();
        while ((match = imgRegex.exec(text)) !== null) {
            if (match[1].startsWith('http')) urls.add(match[1]);
        }

        console.log(`Found ${urls.size} images. Downloading...`);
        let count = 0;
        for (const url of urls) {
            if (!url.endsWith('.webp') && !url.endsWith('.png') && !url.endsWith('.jpg') && !url.endsWith('.jpeg')) continue;
            const fileName = path.basename(new URL(url).pathname);
            const dest = path.join(process.cwd(), 'public', 'images', fileName);
            if (!fs.existsSync(dest)) {
                console.log(`Downloading ${fileName}...`);
                await downloadImage(url, dest).catch(e => console.error(e));
                count++;
            }
        }
        console.log(`Downloaded ${count} images.`);
    } catch (e) {
        console.error(e);
    }
}

scrape();
