/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Говорим Next.js собрать чистый HTML/CSS/JS в папку out
  images: {
    unoptimized: true,       // Добавляем эту строку, чтобы отключить серверное сжатие картинок
  },
};

export default nextConfig;