import React from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Clock, List, AlertTriangle } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import blogData from '@/data/blog.json';

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return blogData.map((post) => ({
    'blog-slug': post.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams['blog-slug'];
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Article Details',
    };
  }

  return {
    title: `${post.title} - Prematurite Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams['blog-slug'];
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <p className="mt-2 text-brand-brown">The requested blog post could not be located.</p>
        <Link href="/blog/" className="text-brand-coral underline mt-4 inline-block">
          Return to Blog Directory
        </Link>
      </div>
    );
  }

  // Find 2 related articles
  const relatedPosts = blogData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 md:space-y-16" id={`blog-detail-${slug}`}>

      {/* Back button */}
      <div>
        <Link
          href="/blog/"
          className="inline-flex items-center text-xs md:text-sm font-display font-bold text-brand-coral hover:text-brand-salmon transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog Directory
        </Link>
      </div>

      {/* 1. BLOG ARTICLE HERO */}
      <section className="space-y-4 max-w-4xl">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral/10 text-brand-coral">
          Educational Article
        </span>
        <h1 className="text-2xl md:text-4xl font-display font-extrabold text-brand-deep leading-tight">
          {post.title}
        </h1>

        {/* Author / Date / Time line */}
        <div className="flex flex-wrap gap-4 items-center text-xs md:text-sm text-brand-brown/70 font-semibold pt-2">
          <span className="flex items-center">
            <User className="w-4 h-4 mr-1.5 text-brand-coral" />
            {post.author}
          </span>

          <span>•</span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1.5 text-brand-coral" />
            {post.readTime}
          </span>
        </div>
      </section>

      {/* 2. ARTICLE LAYOUT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left column - Table of Contents & Related items */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 order-last lg:order-first">
          {/* Table of Contents */}
          <div className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-sm md:text-base flex items-center">
              <List className="w-4 h-4 mr-2 text-brand-coral" />
              Table of Contents
            </h3>
            <nav className="space-y-2">
              {post.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xs md:text-sm text-brand-brown hover:text-brand-coral transition-colors duration-200 truncate"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Related Articles box */}
          <div className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-sm md:text-base">
              Related Articles
            </h3>
            <div className="space-y-4">
              {relatedPosts.map((related) => (
                <div key={related.slug} className="space-y-1">
                  <h4 className="font-display font-bold text-brand-deep text-xs md:text-sm hover:text-brand-coral transition-colors duration-200">
                    <Link href={`/blog/${related.slug}/`}>
                      {related.title}
                    </Link>
                  </h4>
                  <p className="text-[11px] text-brand-brown">{related.readTime}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Article Body (800+ words rendered dynamically) */}
        <div className="lg:col-span-8 bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft">
          <div className="prose prose-stone max-w-none text-brand-brown text-sm md:text-base leading-relaxed space-y-6">

            {post.content.map((block, idx) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={idx}>
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h2
                    key={idx}
                    id={block.id}
                    className="font-display font-bold text-brand-deep text-lg md:text-xl border-b border-brand-coral/10 pb-2 mt-8"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2 mt-4">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}

          </div>
        </div>
      </section>

      {/* 3. CTA & RESOURCES LINKS */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 border border-brand-coral/15 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-2">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Looking for practical care tools?
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            Visit our Resource Library to download printable checking sheets, feeding logs, and doctor questions worksheets.
          </p>
        </div>
        <div className="md:col-span-4 flex justify-end">
          <Button href="/blog/" id={`article-resources-cta-${slug}`}>
            Explore More Articles
          </Button>
        </div>
      </section>

      {/* 4. MEDICAL DISCLAIMER strip */}
      <section className="max-w-3xl mx-auto">
        <DisclaimerBox />
      </section>

    </div>
  );
}
