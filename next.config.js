/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents: true,
    },
    env:{
        NEXT_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
        NEXT_GITHUB_ID: process.env.NEXT_PUBLIC_GITHUB_ID,
        NEXT_GITHUB_SECRET: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }
}

module.exports = nextConfig
