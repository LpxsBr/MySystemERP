/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents: true,
    },
    env:{
        DATABASE_URL: process.env.DATABASE_URL,
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
    }
}

module.exports = nextConfig
