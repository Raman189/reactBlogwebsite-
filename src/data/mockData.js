export const mockArticles = [
  {
    id: '1',
    title: 'The Future of Web Development: What You Need to Know in 2025',
    subtitle: 'Exploring the latest trends, frameworks, and best practices shaping modern web development',
    content: `The landscape of web development continues to evolve at a breathtaking pace. As we navigate through 2025, several key trends have emerged that are fundamentally changing how we build and think about web applications.

## The Rise of AI-Assisted Development

Artificial Intelligence has moved from being a buzzword to an essential tool in every developer's arsenal. Modern IDEs now come equipped with intelligent code completion, bug detection, and even architectural suggestions that can significantly boost productivity.

## Component-Driven Architecture

The shift towards component-driven development has solidified across all major frameworks. React, Vue, and Angular have all embraced this paradigm, making code more reusable, testable, and maintainable.

## Performance as a Priority

With users expecting instant loading times, performance optimization has become non-negotiable. Techniques like lazy loading, code splitting, and efficient caching strategies are now standard practice.

## The JavaScript Ecosystem

The JavaScript ecosystem continues to mature with better tooling, improved package management, and more stable APIs. TypeScript adoption has reached an all-time high, bringing type safety to the forefront.

## Conclusion

As we look ahead, the future of web development appears more exciting than ever. The key to success lies in continuous learning and adapting to new technologies while maintaining a solid foundation in core principles.`,
    author: {
      id: 'author1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Senior Software Engineer | Tech Writer | Building the future of web',
      followers: 12500
    },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
    category: 'Programming',
    readTime: 8,
    claps: 2400,
    comments: 156,
    publishedDate: '2025-01-15',
    tags: ['Web Development', 'JavaScript', 'Technology', 'Programming']
  },
  {
    id: '2',
    title: 'Mastering the Art of Minimalist Design',
    subtitle: 'How less is more when it comes to creating beautiful user experiences',
    content: `Minimalism in design is not about removing features or functionality. It's about removing distractions and focusing on what truly matters to your users.

## Understanding Minimalism

Minimalist design strips away unnecessary elements, leaving only what's essential. This approach creates clarity, improves usability, and often results in more elegant solutions.

## Key Principles

### White Space is Your Friend

Don't be afraid of empty space. White space gives your content room to breathe and helps guide the user's attention to what's important.

### Typography Matters

With fewer visual elements competing for attention, typography becomes even more critical. Choose fonts carefully and establish a clear hierarchy.

### Color with Purpose

In minimalist design, every color choice should be intentional. A limited color palette can create a more cohesive and sophisticated look.

## Practical Application

Start by removing one element at a time. If removing it doesn't hurt the functionality or user experience, it probably didn't need to be there in the first place.`,
    author: {
      id: 'author2',
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'UI/UX Designer | Design Systems Advocate | Speaker',
      followers: 8900
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200',
    category: 'Design',
    readTime: 6,
    claps: 1850,
    comments: 92,
    publishedDate: '2025-01-14',
    tags: ['Design', 'UX', 'Minimalism', 'UI']
  },
  {
    id: '3',
    title: 'Building Resilient Systems: Lessons from Production Outages',
    subtitle: 'What we learned after our biggest system failure and how we recovered',
    content: `Every engineer will face a production outage at some point in their career. What matters is how you respond, learn, and prevent similar issues in the future.

## The Incident

It was 3 AM when the alerts started flooding in. Our payment processing system was down, affecting thousands of customers. This is the story of what went wrong and how we fixed it.

## Root Cause Analysis

The issue stemmed from an unexpected cascade failure in our microservices architecture. A single service became overloaded, which caused a ripple effect across our entire system.

## Immediate Response

Our incident response team kicked into action immediately. We followed our runbook, but also had to improvise when we encountered unexpected scenarios.

## Prevention Strategies

After the incident, we implemented several key changes: circuit breakers, better monitoring, automated failover systems, and comprehensive load testing.

## Cultural Takeaways

Perhaps most importantly, we learned that blameless post-mortems and open communication are crucial for building a culture of resilience and continuous improvement.`,
    author: {
      id: 'author3',
      name: 'Emily Watson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: 'VP of Engineering | Infrastructure Expert | Cloud Architecture',
      followers: 15600
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    category: 'Engineering',
    readTime: 10,
    claps: 3200,
    comments: 234,
    publishedDate: '2025-01-13',
    tags: ['Engineering', 'DevOps', 'Infrastructure', 'Best Practices']
  },
  {
    id: '4',
    title: 'The Power of Habit Stacking for Productivity',
    subtitle: 'How I transformed my daily routine and achieved more by doing less',
    content: `Productivity isn't about doing more things. It's about doing the right things consistently. Habit stacking is a simple yet powerful technique that can help you build lasting routines.

## What is Habit Stacking?

Habit stacking is the practice of pairing a new habit with an existing one. Instead of trying to build habits in isolation, you leverage routines you already have.

## My Morning Routine

After I pour my morning coffee, I write down three priorities for the day. After I finish my coffee, I spend 10 minutes reading. These small stacks have compounded into significant results.

## The Science Behind It

Our brains love patterns and routines. By linking new behaviors to existing ones, we reduce the mental friction required to start new habits.

## Getting Started

Start small. Choose one existing habit and stack a tiny new habit onto it. The key is consistency, not intensity.`,
    author: {
      id: 'author4',
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      bio: 'Productivity Coach | Author | Keynote Speaker',
      followers: 22100
    },
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200',
    category: 'Productivity',
    readTime: 5,
    claps: 4100,
    comments: 312,
    publishedDate: '2025-01-12',
    tags: ['Productivity', 'Self Improvement', 'Habits', 'Lifestyle']
  },
  {
    id: '5',
    title: 'Understanding React Server Components',
    subtitle: 'A deep dive into the future of React and what it means for your applications',
    content: `React Server Components represent a paradigm shift in how we think about building React applications. They blur the line between client and server, offering new possibilities for performance and developer experience.

## What Are Server Components?

Server Components are React components that render exclusively on the server. They never send JavaScript to the client, resulting in smaller bundle sizes and faster initial page loads.

## Key Benefits

### Zero Bundle Size

Server Components don't add to your JavaScript bundle. This means you can use heavy libraries without impacting client-side performance.

### Direct Backend Access

You can directly access databases, file systems, and other server-only resources without building API endpoints.

### Automatic Code Splitting

React automatically handles code splitting for client components, optimizing what gets sent to the browser.

## Practical Considerations

While Server Components are powerful, they're not a replacement for all client-side rendering. You'll still need client components for interactivity.

## The Future

Server Components are still evolving, but they represent an important step forward in web development. Understanding them now will give you a significant advantage.`,
    author: {
      id: 'author1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Senior Software Engineer | Tech Writer | Building the future of web',
      followers: 12500
    },
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200',
    category: 'Programming',
    readTime: 12,
    claps: 2890,
    comments: 178,
    publishedDate: '2025-01-11',
    tags: ['React', 'Web Development', 'JavaScript', 'Frontend']
  },
  {
    id: '6',
    title: 'The Economics of Remote Work',
    subtitle: 'How distributed teams are reshaping the global economy',
    content: `Remote work has transitioned from emergency measure to permanent fixture in the modern workplace. The economic implications are far-reaching and profound.

## The Great Reshuffling

Workers are no longer tied to expensive urban centers. This migration is redistributing wealth and opportunity across regions.

## Cost-Benefit Analysis

Companies save on office space, while employees save on commuting. But new costs have emerged: home office setups, collaboration tools, and maintaining company culture.

## Global Talent Pool

Geographic constraints have dissolved. Companies can now hire the best talent regardless of location, leading to more diverse and skilled teams.

## Challenges Ahead

Time zone coordination, maintaining productivity, and ensuring work-life balance remain significant challenges that organizations must address.

## Long-term Outlook

Remote work is here to stay. The question is no longer whether to embrace it, but how to do it effectively.`,
    author: {
      id: 'author5',
      name: 'Jennifer Liu',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      bio: 'Economist | Business Analyst | Future of Work Researcher',
      followers: 9800
    },
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200',
    category: 'Business',
    readTime: 7,
    claps: 1650,
    comments: 143,
    publishedDate: '2025-01-10',
    tags: ['Remote Work', 'Economics', 'Business', 'Future of Work']
  }
];

export const trendingArticles = [
  mockArticles[3],
  mockArticles[0],
  mockArticles[4],
  mockArticles[1],
  mockArticles[2],
  mockArticles[5]
];

export const categories = [
  'For you',
  'Following',
  'Programming',
  'Design',
  'Technology',
  'Productivity',
  'Business',
  'Engineering'
];