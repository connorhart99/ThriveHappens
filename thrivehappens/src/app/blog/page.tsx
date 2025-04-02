import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  const { slug, title, excerpt, date, categories, image } = post;

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-48 bg-purple-100">
        <div className="absolute inset-0 flex items-center justify-center text-purple-700">
          [{title} Image]
        </div>
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-4">
          {categories.map((category, index) => (
            <span key={index} className="text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-1 rounded">
              {category}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-700 transition-colors">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm mb-4">{date}</p>
        <p className="text-gray-700 mb-6">{excerpt}</p>
        <Link 
          href={`/blog/${slug}`}
          className="text-purple-700 font-semibold hover:text-purple-800 transition-colors"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

// Types
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  image: string;
}

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    slug: 'building-resilience-in-uncertain-times',
    title: 'Building Resilience in Uncertain Times',
    excerpt: 'Learn practical strategies for developing resilience during periods of uncertainty and change.',
    date: 'May 15, 2023',
    categories: ['Resilience', 'Personal Growth'],
    image: '/blog/resilience-uncertain-times.jpg'
  },
  {
    slug: 'leadership-lessons-from-crisis',
    title: 'Leadership Lessons from Crisis Management',
    excerpt: 'Key insights about effective leadership drawn from high-pressure crisis situations.',
    date: 'April 22, 2023',
    categories: ['Leadership', 'Crisis Management'],
    image: '/blog/leadership-crisis.jpg'
  },
  {
    slug: 'mindfulness-for-resilient-leadership',
    title: 'Mindfulness Practices for Resilient Leadership',
    excerpt: 'How incorporating mindfulness into your daily routine can transform your leadership approach.',
    date: 'March 10, 2023',
    categories: ['Mindfulness', 'Leadership'],
    image: '/blog/mindfulness-leadership.jpg'
  },
  {
    slug: 'building-high-performance-teams',
    title: 'Building and Sustaining High-Performance Teams',
    excerpt: 'Strategies for creating team resilience and maintaining peak performance under pressure.',
    date: 'February 28, 2023',
    categories: ['Teams', 'Performance'],
    image: '/blog/high-performance-teams.jpg'
  },
  {
    slug: 'resilience-through-organizational-change',
    title: 'Navigating Organizational Change with Resilience',
    excerpt: 'How to help your team maintain productivity and wellbeing during periods of significant change.',
    date: 'January 15, 2023',
    categories: ['Organizational Change', 'Resilience'],
    image: '/blog/organizational-change.jpg'
  },
  {
    slug: 'communication-strategies-stress',
    title: 'Effective Communication Strategies Under Stress',
    excerpt: 'Techniques to maintain clear and impactful communication when tension is high.',
    date: 'December 5, 2022',
    categories: ['Communication', 'Stress Management'],
    image: '/blog/communication-stress.jpg'
  }
]; 