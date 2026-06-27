import React from 'react';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ post }) {
  const { slug, title, author, date, readTime, excerpt } = post;

  return (
    <article className="group bg-brand-white hover:bg-brand-rose/20 transition-all duration-300 rounded-3xl p-6 border border-brand-coral/15 hover:border-brand-coral/45 shadow-soft hover:shadow-glow flex flex-col justify-between h-full">
      <div>
        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 items-center text-xs text-brand-brown/70 font-medium mb-4">
          <span className="flex items-center">
            <User className="w-3.5 h-3.5 mr-1" />
            {author}
          </span>

          <span className="w-1.5 h-1.5 rounded-full bg-brand-coral/30" />
          <span className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {readTime}
          </span>
        </div>

        {/* Content */}
        <h3 className="font-display text-lg md:text-xl font-bold text-brand-deep mb-3 group-hover:text-brand-coral transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-brand-brown text-sm leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>
      </div>

      {/* Action Link */}
      <div>
        <Link
          href={`/blog/${slug}/`}
          className="inline-flex items-center text-xs md:text-sm font-display font-bold text-brand-deep group-hover:text-brand-coral transition-colors duration-200 group-hover:translate-x-1 duration-300"
          aria-label={`Read article: ${title}`}
        >
          Read Article
          <ArrowRight className="w-4 h-4 ml-1.5 mt-0.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
