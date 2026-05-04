"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Clock, ExternalLink } from "lucide-react";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  categories: string[];
  platform: string;
}

// Add your blog profile URLs here
const FEEDS = [
  {
    platform: "Medium",
    // Replace with your actual Medium username
    rssUrl: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaviay0408",
  },
];

// Fallback posts shown if no feed is available yet
const FALLBACK_POSTS: BlogPost[] = [
  {
    title: "How I Reduced Snowflake Costs by 40% Using dbt Incremental Models",
    link: "https://medium.com/@kaviay0408",
    pubDate: "2025-03-15",
    thumbnail: "",
    description: "A deep dive into the incremental ELT patterns and Snowflake warehouse optimisations that cut our monthly costs by 40% while improving data freshness.",
    categories: ["Snowflake", "dbt", "Cost Optimisation"],
    platform: "Medium",
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").slice(0, 160) + "...";
}

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [posts, setPosts] = useState<BlogPost[]>(FALLBACK_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const results = await Promise.allSettled(
          FEEDS.map(async (feed) => {
            const res = await fetch(feed.rssUrl);
            const data = await res.json();
            if (data.status === "ok" && data.items?.length > 0) {
              return data.items.slice(0, 3).map((item: any) => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                thumbnail: item.thumbnail || "",
                description: stripHtml(item.description || item.content || ""),
                categories: item.categories?.slice(0, 3) || [],
                platform: feed.platform,
              }));
            }
            return [];
          })
        );

        const allPosts = results
          .filter((r) => r.status === "fulfilled")
          .flatMap((r) => (r as PromiseFulfilledResult<BlogPost[]>).value);

        if (allPosts.length > 0) {
          setPosts(allPosts);
        }
      } catch {
        // Keep fallback posts on error
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const platformColors: Record<string, string> = {
    Medium: "text-green-400",
    "Dev.to": "text-blue-400",
    Hashnode: "text-purple-400",
  };

  return (
    <section id="blog" className="py-32 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary">06</span>
            <div className="w-12 h-[1px] bg-border" />
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Blog</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Things I <span className="text-primary">write</span>
          </motion.h2>
        </div>

        <motion.a
          href="https://medium.com/@kaviay0408"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-3 border border-border px-6 py-3 text-sm uppercase tracking-wider text-muted-foreground hover:border-primary hover:text-primary transition-all self-start md:self-auto"
        >
          <ExternalLink className="w-4 h-4" />
          All posts on Medium
        </motion.a>
      </div>

      {/* Posts Grid */}
      {loading ? (
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card p-8 animate-pulse">
              <div className="h-3 bg-border rounded w-1/4 mb-6" />
              <div className="h-5 bg-border rounded w-3/4 mb-3" />
              <div className="h-5 bg-border rounded w-1/2 mb-6" />
              <div className="h-3 bg-border rounded w-full mb-2" />
              <div className="h-3 bg-border rounded w-5/6" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card p-8 hover:bg-secondary/30 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Platform + Date */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs uppercase tracking-wider font-medium ${platformColors[post.platform] ?? "text-primary"}`}>
                    {post.platform}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {formatDate(post.pubDate)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold leading-snug mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                {post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.categories.map((cat) => (
                      <span key={cat} className="text-xs px-2 py-1 bg-secondary text-muted-foreground uppercase tracking-wider">
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read More */}
                <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                  Read article
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}