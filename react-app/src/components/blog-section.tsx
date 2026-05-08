"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"

import { Link } from "react-router-dom"

const articles = [
  {
    id: 1,
    title: "10 Tips SEO untuk Meningkatkan Traffic Website Anda",
    excerpt: "Pelajari strategi SEO yang terbukti efektif untuk meningkatkan visibilitas website di mesin pencari...",
    date: "10 Jan 2024",
    category: "SEO",
    slug: "tips-seo-traffic-website",
    image: "/blog-1.jpg",
  },
  {
    id: 2,
    title: "Mengapa Website Cepat Penting untuk Bisnis Anda",
    excerpt: "Kecepatan website berdampak langsung pada user experience dan konversi. Simak penjelasannya...",
    date: "8 Jan 2024",
    category: "Web Development",
    slug: "website-cepat-penting",
    image: "/blog-2.jpg",
  },
  {
    id: 3,
    title: "Panduan Lengkap Local SEO untuk Bisnis Lokal",
    excerpt: "Dominasi pencarian lokal dengan strategi Local SEO yang tepat. Panduan lengkap untuk pemula...",
    date: "5 Jan 2024",
    category: "Local SEO",
    slug: "panduan-local-seo",
    image: "/blog-3.jpg",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Explore Our Thoughts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            The Innovation Diaries
          </h2>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={`/blog/${article.slug}`} className="group block">
                {/* Thumbnail with Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:"cover"}}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Dark overlay on image */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {article.category}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
