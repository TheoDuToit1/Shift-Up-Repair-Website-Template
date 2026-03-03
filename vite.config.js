import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        shop: 'shop.html',
        product: 'product.html',
        services: 'services.html',
        contact: 'contact.html',
        faq: 'faq.html',
        whoWeAre: 'who-we-are.html',
        blog: 'blog.html',
        blogDetail: 'blog-detail.html',
        checkout: 'checkout.html'
      }
    }
  }
})
