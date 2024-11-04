import { defineConfig } from 'vitepress'

import {RSSOptions, RssPlugin} from 'vitepress-plugin-rss'

const RSS: RSSOptions = {
  title: 'follow',
  baseUrl: 'https://follow-rss.vercel.app/',
  copyright: 'Copyright (c) 2021-present, zero',
  description: 'feedId:68575158365448192+userId:68479353307954176'
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "follow",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/example/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/example/markdown-examples' },
          { text: 'Runtime API Examples', link: '/example/api-examples' },
          { text: 'Follow', link: '/example/follow-airdrop' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  vite: {
    plugins: [
      RssPlugin(RSS)
    ]
  }
})
