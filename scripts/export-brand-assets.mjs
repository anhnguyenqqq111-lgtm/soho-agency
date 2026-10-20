import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const brand = path.join(root, 'public/assets/brand');

async function svgBuffer(file, width){
  return sharp(path.join(brand, file), {density: 300})
    .resize({width})
    .png()
    .toBuffer();
}

async function exportPrimaryPng(){
  await sharp(path.join(brand, 'soho-logo-primary.svg'), {density: 300})
    .resize({width: 1200})
    .png({compressionLevel: 9})
    .toFile(path.join(brand, 'soho-logo-transparent.png'));
}

async function updateOgImages(){
  const whiteLogo = await svgBuffer('soho-logo-white.svg', 220);
  const primaryLogo = await svgBuffer('soho-logo-horizontal.svg', 220);

  await sharp(path.join(root, 'public/og/soho-og-v2.png'))
    .composite([
      {input: Buffer.from('<svg width="280" height="96"><defs><linearGradient id="bg" x1="0" y1="0" x2="280" y2="96" gradientUnits="userSpaceOnUse"><stop stop-color="#181420"/><stop offset="1" stop-color="#1C1628"/></linearGradient></defs><rect width="280" height="96" fill="url(#bg)"/></svg>'), left: 66, top: 38},
      {input: whiteLogo, left: 88, top: 58}
    ])
    .png({compressionLevel: 9})
    .toFile(path.join(root, 'public/og/soho-og-v2.next.png'));

  await sharp(path.join(root, 'public/og/soho-projects-og.png'))
    .composite([
      {input: Buffer.from('<svg width="280" height="96"><rect width="280" height="96" rx="12" fill="#FAF9FD"/></svg>'), left: 66, top: 38},
      {input: primaryLogo, left: 88, top: 58}
    ])
    .png({compressionLevel: 9})
    .toFile(path.join(root, 'public/og/soho-projects-og.next.png'));

  await fs.rename(path.join(root, 'public/og/soho-og-v2.next.png'), path.join(root, 'public/og/soho-og-v2.png'));
  await fs.rename(path.join(root, 'public/og/soho-projects-og.next.png'), path.join(root, 'public/og/soho-projects-og.png'));
}

async function updateBlogThumbnails(){
  const archive = path.join(brand, 'archive/blog-thumbnails');
  const files = (await fs.readdir(archive)).filter(file => file.endsWith('.webp'));
  const logo = await svgBuffer('soho-logo-horizontal.svg', 204);
  const tile = Buffer.from('<svg width="264" height="146"><rect x="1" y="1" width="262" height="144" rx="22" fill="#FFFFFF" stroke="#141218" stroke-opacity=".08" stroke-width="2"/></svg>');

  await Promise.all(files.map(async file => {
    await sharp(path.join(archive, file))
      .composite([
        {input: tile, left: 1304, top: 28},
        {input: logo, left: 1334, top: 80}
      ])
      .webp({quality: 90, effort: 5})
      .toFile(path.join(root, 'public/blog', `${file}.next`));
    await fs.rename(path.join(root, 'public/blog', `${file}.next`), path.join(root, 'public/blog', file));
  }));
}

await exportPrimaryPng();
await updateOgImages();
await updateBlogThumbnails();
console.log('Brand raster exports updated.');
