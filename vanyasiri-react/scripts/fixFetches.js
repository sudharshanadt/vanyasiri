const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if the file contains the fetch call and doesn't already have the catch
    if (content.includes('fetch("http://localhost:9000') || content.includes('fetch(`http://localhost:9000')) {
        let newContent = content.replace(
            /(const res = await fetch\(`?http:\/\/localhost:9000[\s\S]*?}\);)/g,
            '$1'.replace('});', '}).catch(() => null);')
        );

        // Update if (res.ok) to if (res && res.ok)
        newContent = newContent.replace(/if\s*\(res\.ok\)/g, 'if (res && res.ok)');
        newContent = newContent.replace(/if\s*\(\!res\.ok\)/g, 'if (!res || !res.ok)');

        // Remove console.error for fetching Medusa
        newContent = newContent.replace(/console\.error\("Error fetching.*", error\);?/g, '');
        newContent = newContent.replace(/console\.error\("Failed to fetch Medusa.*", error\);?/g, '');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent);
            console.log('Fixed', filePath);
        }
    }
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, '../src'));
files.forEach(replaceInFile);
console.log('Done fixing fetches.');
