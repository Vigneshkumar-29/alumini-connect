export interface PricingTier {
  name: 'Basic' | 'Standard' | 'Premium';
  price: number;
  features: string[];
  deliveryDays: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  orders: number;
  memberSince: string;
  bio?: string;
  location?: string;
  isOnline?: boolean;
}

export interface Gig {
  id: string;
  title: string;
  seller: Seller;
  image: string;
  description: string;
  category: string;
  startingPrice: number;
  pricingTiers: PricingTier[];
  reviews: Review[];
}

export const gigs: Gig[] = [
  {
    id: '1',
    title: 'I will create a professional resume and cover letter',
    seller: {
      id: 's1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 4.9,
      reviews: 127,
      orders: 89,
      memberSince: 'Jan 2022',
      bio: 'Professional career coach with 10+ years of experience helping job seekers land their dream positions.',
      location: 'New York, USA',
      isOnline: true,
    },
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    description: 'I will craft a compelling resume and cover letter that highlights your strengths and lands you interviews. With my expertise in ATS optimization and recruiter preferences, your application will stand out from the competition.',
    category: 'Career Services',
    startingPrice: 25,
    pricingTiers: [
      {
        name: 'Basic',
        price: 25,
        features: [
          'Resume rewrite',
          'Cover letter',
          'Basic formatting',
        ],
        deliveryDays: 3,
      },
      {
        name: 'Standard',
        price: 50,
        features: [
          'Professional resume',
          'Custom cover letter',
          'ATS optimization',
          '2 revisions',
          'LinkedIn profile tips',
        ],
        deliveryDays: 2,
      },
      {
        name: 'Premium',
        price: 99,
        features: [
          'Executive resume',
          'Tailored cover letter',
          'Full ATS optimization',
          'Unlimited revisions',
          'LinkedIn profile optimization',
          'Interview prep consultation',
          'Salary negotiation tips',
        ],
        deliveryDays: 1,
      },
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 weeks ago',
        text: 'Sarah transformed my resume completely. I got called for 3 interviews within a week! Highly recommend.',
      },
      {
        id: 'r2',
        author: 'Jessica Martinez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 month ago',
        text: 'Exceptional service. The attention to detail and personalization was impressive. Worth every penny!',
      },
      {
        id: 'r3',
        author: 'David Wong',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
        rating: 4,
        date: '2 months ago',
        text: 'Great work on the resume. Quick turnaround and very professional.',
      },
    ],
  },
  {
    id: '2',
    title: 'I will provide personalized career mentoring and guidance',
    seller: {
      id: 's2',
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      rating: 4.8,
      reviews: 95,
      orders: 156,
      memberSince: 'Mar 2021',
      bio: 'Tech industry veteran and career transition specialist with expertise in software engineering and product management.',
      location: 'San Francisco, USA',
      isOnline: true,
    },
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    description: 'Get one-on-one mentorship from an experienced career coach. I guide professionals through job transitions, salary negotiations, and skill development strategies to accelerate their career growth.',
    category: 'Mentorship',
    startingPrice: 50,
    pricingTiers: [
      {
        name: 'Basic',
        price: 50,
        features: [
          'Single 30-min session',
          'Career advice',
          'Action plan',
        ],
        deliveryDays: 7,
      },
      {
        name: 'Standard',
        price: 120,
        features: [
          '3 sessions (60 min each)',
          'Career planning',
          'Interview prep',
          'LinkedIn review',
          'Email support',
        ],
        deliveryDays: 30,
      },
      {
        name: 'Premium',
        price: 299,
        features: [
          '8 sessions over 2 months',
          'Comprehensive career planning',
          'Interview coaching',
          'Salary negotiation strategy',
          'Portfolio review',
          'Unlimited email support',
          'Job search strategy',
        ],
        deliveryDays: 60,
      },
    ],
    reviews: [
      {
        id: 'r4',
        author: 'Emily Zhang',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        text: 'James helped me transition from engineering to product management. His insights were invaluable!',
      },
      {
        id: 'r5',
        author: 'Robert Taylor',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 weeks ago',
        text: 'Best mentoring investment I\'ve made. Negotiated a $20k salary increase with James\'s help.',
      },
    ],
  },
];
