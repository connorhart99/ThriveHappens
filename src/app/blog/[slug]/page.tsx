import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostParams {
  params: {
    slug: string;
  };
}

// Add generateStaticParams function
export async function generateStaticParams() {
  // Return all possible blog post slugs
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = params;
  
  // Find the blog post based on slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, return 404
  if (!post) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-purple-700 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex gap-2 justify-center mb-6">
              {post.categories.map((category, index) => (
                <span key={index} className="text-xs font-semibold uppercase tracking-wider text-purple-100 bg-purple-800 px-2 py-1 rounded">
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-lg text-purple-100">{post.date}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 bg-purple-100 rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center text-purple-700 text-2xl">
              [{post.title} Featured Image]
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* This would be replaced with actual blog content, perhaps from a CMS */}
            <p>
              In today's rapidly changing world, resilience has become more than just a desirable trait—it's an essential skill for navigating uncertainty and thriving under pressure.
            </p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in lacus faucibus fermentum. Phasellus scelerisque nisi sit amet lacus ultricies, eget fermentum magna bibendum. Ut at ante tortor. Proin congue quam vitae mauris semper, ut venenatis nulla hendrerit. Maecenas et risus quis nunc eleifend placerat.
            </p>
            
            <h2>The Foundation of Resilience</h2>
            
            <p>
              Maecenas in pharetra mi. Fusce diam massa, scelerisque vitae lobortis quis, finibus non tellus. Vivamus porttitor euismod turpis vitae dictum. Vivamus ornare laoreet neque, ut elementum lacus ultrices feugiat. Pellentesque risus ipsum, posuere nec tempus non, vestibulum eu diam.
            </p>
            
            <blockquote>
              "Resilience is not about bouncing back to where you were before, but about bouncing forward into a new and better place."
            </blockquote>
            
            <p>
              Phasellus bibendum erat vel lorem finibus, non pulvinar arcu ultrices. Curabitur consectetur scelerisque tempor. Pellentesque vel varius augue. Cras mollis libero at lacus tincidunt, vel hendrerit sem pulvinar. Cras eget quam at nisi hendrerit feugiat.
            </p>
            
            <h2>Practical Strategies for Building Resilience</h2>
            
            <p>
              Aenean mattis purus a felis molestie, a tincidunt est sollicitudin. Suspendisse potenti. Cras consequat sapien eu neque lacinia, non placerat nibh tincidunt. Integer accumsan eros at consequat pellentesque. Aenean tincidunt velit at venenatis ornare.
            </p>
            
            <ol>
              <li>
                <strong>Cultivate self-awareness:</strong> Understanding your thoughts, emotions, and behaviors is the first step toward resilience.
              </li>
              <li>
                <strong>Develop a support network:</strong> Strong relationships provide both emotional support and practical assistance during challenging times.
              </li>
              <li>
                <strong>Practice adaptive thinking:</strong> Learn to challenge negative thought patterns and develop more flexible perspectives.
              </li>
              <li>
                <strong>Take care of your physical health:</strong> Regular exercise, adequate sleep, and proper nutrition form the foundation of resilience.
              </li>
              <li>
                <strong>Find purpose and meaning:</strong> Connecting to something larger than yourself can provide motivation and perspective.
              </li>
            </ol>
            
            <p>
              Cras consequat sapien eu neque lacinia, non placerat nibh tincidunt. Integer accumsan eros at consequat pellentesque. Aenean tincidunt velit at venenatis ornare.
            </p>
            
            <h2>Conclusion</h2>
            
            <p>
              Building resilience is not a one-time event but an ongoing process. By incorporating these strategies into your daily life, you can develop the resilience needed to navigate uncertainty, overcome challenges, and thrive in all aspects of life.
            </p>
            
            <p>
              Remember, resilience isn't about never facing difficulties—it's about having the tools and mindset to move through those difficulties with grace and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-md">
            <div className="w-32 h-32 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-700">
              [Scott Hanley]
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">About Scott Hanley</h3>
              <p className="text-gray-700 mb-4">
                Scott Hanley is a renowned resilience coach and platform speaker dedicated to helping individuals and organizations thrive in challenging environments. With extensive experience in executive coaching and leadership development, Scott has developed a unique approach to building resilience.
              </p>
              <Link 
                href="/about"
                className="text-purple-700 font-semibold hover:text-purple-800 transition-colors"
              >
                Learn more about Scott →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Get 3 related posts (excluding current post) */}
            {blogPosts
              .filter(relatedPost => relatedPost.slug !== slug)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center text-purple-700">
                      [{relatedPost.title} Image]
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-700 transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedPost.date}</p>
                    <p className="text-gray-700 mb-6">{relatedPost.excerpt}</p>
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="text-purple-700 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Sample blog posts
const blogPosts = [
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