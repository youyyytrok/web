import React from 'react'
import { defineConfig } from 'vocs'


const baseConfig = {
  //basePath: "https://docs.base.org/docs", // Comment out in local dev
  baseUrl: '/',
  title: 'Base Docs',
  description: 'Explore the documentation for Base, a secure, low-cost, builder-friendly Ethereum L2',
  iconUrl: {
    light: 'img/favicon.ico',
    dark: 'img/favicon.ico',
  },
  logoUrl: {
    light: 'img/base-logo.svg',
    dark: 'img/base-logo.svg',
  }
}

// used for global dismissable announcements, etc
const bannerConfig = {
  banner: "Welcome to Base Docs", 
}

const sidebarConfig = {
  sidebar: {
    '/getting-started':[{
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Guide 1',
          link: '/guides/guide-1',
        },
      ]
    }],
    '/onchainkit': [{
      text: 'Onchainkit',
      link: '/onchainkit/quickstart',
    },
    {
      text: 'Quickstart',
      link: '/onchainkit/quickstart',
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Guide 1',
          link: '/onchainkit/guide-1',
        },
      ]
    }],
  }
}

const topNavConfig = {
  topNav: [
    {
      text: 'Getting Started', link: '/getting-started', match: '/docs'
    },
    {
      text: 'Wallet Tools', link: '/wallet-tools', match: '/wallet-tools'
    },
    {
      text: 'Developer Tools', link: '/developer-tools', match: '/developer-tools'
    },
    {
      text: 'Chain Tools', link: '/chain-tools', match: '/chain-tools'
    },

  ],
}

const markdownConfig = {
  code: {
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    }
  }
}

// plugins for transforming markdown: https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
const pluggableConfig ={
  markdown: {
    remarkPlugins: [
    ]
  }
}


const blogConfig = {
  blogDir: "./blog"
}

// Can define path objects which return different meta tags for more control
const headConfig = {
  head: (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Base | Docs" />
      <meta property="og:image" content="https://docs.base.org/img/base-open-graph.png" />
      <meta property="og:description" content="Explore the documentation for Base, a secure, low-cost, builder-friendly Ethereum L2" />
      <meta property="twitter:title" content="Base | Docs" />
      <meta property="twitter:image" content="https://docs.base.org/img/base-open-graph.png" />
      <meta property="twitter:description" content="Explore the documentation for Base, a secure, low-cost, builder-friendly Ethereum L2" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="base.org" />
    </>
  ),
}

// vocs uses MiniSearch, check configs
const searchConfig = { 
  search: {
    fields: ['title', 'content', 'productLine', 'docType', 'userType'],  // Fields to index
    storeFields: ['title', 'snippet', 'productLine', 'docType'], // Fields to return in results
    searchOptions: {
      prefix: true, // Autocomplete
      fuzzy: 0.2,  // Typo tolerance
      boost: { docType: { 'API': 2, 'Guide': 1.5 }, recencyScore: 2 }, // Boosting by document type and recency
      filter: (doc: { productLine: string }) => doc.productLine === 'Base Protocol' || doc.productLine === 'OnchainKit', // Faceted search
      highlight: true, // Instant search result preview
      limit: 10 // Pagination
    }
  }
}

export default defineConfig({
  ...baseConfig,
  ...bannerConfig,
  ...sidebarConfig,
  ...topNavConfig,
  ...blogConfig,
  ...headConfig,
  ...markdownConfig,
  ...pluggableConfig,
  ...searchConfig,
})

/* Differences from Docusaurus

   * favicon not part of config 
   * onBrokenLinks and markdown links not in config
   * organizationName and projectName not in config
   *



*/