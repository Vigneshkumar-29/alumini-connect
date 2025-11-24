export interface Gig {
  id: string;
  title: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
  image: string;
  startingPrice: number;
  category: string;
  pricingTiers: {
    name: 'Basic' | 'Standard' | 'Premium';
    price: number;
    features: string[];
    deliveryDays: number;
  }[];
  reviews: {
    id: string;
    author: string;
    avatar: string;
    rating: number;
    date: string;
    text: string;
  }[];
}

export const gigs: Gig[] = [
  {
    id: '1',
    title: 'Professional Web Design & Development',
    seller: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200&h=675',
    startingPrice: 299,
    category: 'Web Development',
    pricingTiers: [
      {
        name: 'Basic',
        price: 299,
        features: [
          'Single page website',
          'Responsive design',
          'Contact form',
          '5 revisions',
        ],
        deliveryDays: 7,
      },
      {
        name: 'Standard',
        price: 599,
        features: [
          'Multi-page website (up to 5 pages)',
          'Responsive design',
          'Contact form & newsletter signup',
          'SEO optimization',
          '10 revisions',
          'Basic analytics setup',
        ],
        deliveryDays: 14,
      },
      {
        name: 'Premium',
        price: 999,
        features: [
          'Full-featured website (unlimited pages)',
          'Advanced responsive design',
          'E-commerce functionality',
          'Advanced SEO optimization',
          'Unlimited revisions',
          'Advanced analytics & tracking',
          '3 months support',
          'SSL certificate included',
        ],
        deliveryDays: 21,
      },
    ],
    reviews: [
      {
        id: '1',
        author: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 weeks ago',
        text: 'Exceptional work! Sarah delivered exactly what I needed with attention to detail.',
      },
      {
        id: '2',
        author: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 month ago',
        text: 'Professional, responsive, and incredibly talented. Highly recommend!',
      },
      {
        id: '3',
        author: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
        rating: 4,
        date: '2 months ago',
        text: 'Great work overall. Communication was clear throughout the project.',
      },
    ],
  },
  {
    id: '2',
    title: 'Mobile App Development - React Native',
    seller: {
      name: 'David Kumar',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      rating: 4.8,
    },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200&h=675',
    startingPrice: 599,
    category: 'Mobile Apps',
    pricingTiers: [
      {
        name: 'Basic',
        price: 599,
        features: [
          'MVP development (single platform)',
          'Basic UI/UX design',
          'Core functionality',
          '5 revisions',
        ],
        deliveryDays: 14,
      },
      {
        name: 'Standard',
        price: 1199,
        features: [
          'Cross-platform development (iOS & Android)',
          'Professional UI/UX design',
          'API integration',
          'Payment gateway setup',
          '10 revisions',
          'User authentication',
        ],
        deliveryDays: 28,
      },
      {
        name: 'Premium',
        price: 1999,
        features: [
          'Full-featured cross-platform app',
          'Advanced UI/UX with animations',
          'Multiple API integrations',
          'Advanced payment & security',
          'Unlimited revisions',
          'Push notifications setup',
          '6 months support',
          'App store submission assistance',
        ],
        deliveryDays: 42,
      },
    ],
    reviews: [
      {
        id: '1',
        author: 'Lisa Anderson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 weeks ago',
        text: 'David is a true professional. The app works flawlessly and looks amazing!',
      },
      {
        id: '2',
        author: 'Robert Smith',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 month ago',
        text: 'Exceeded expectations. Very responsive to feedback and delivered ahead of schedule.',
      },
    ],
  },
  {
    id: '3',
    title: 'UI/UX Design & Prototyping',
    seller: {
      name: 'Amanda Foster',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200&h=675',
    startingPrice: 249,
    category: 'Design',
    pricingTiers: [
      {
        name: 'Basic',
        price: 249,
        features: [
          'Wireframes for 3-5 screens',
          'Low-fidelity prototypes',
          'User flow documentation',
          '3 revisions',
        ],
        deliveryDays: 5,
      },
      {
        name: 'Standard',
        price: 499,
        features: [
          'High-fidelity designs for 5-10 screens',
          'Interactive prototypes',
          'Design system & guidelines',
          'User testing recommendations',
          '7 revisions',
        ],
        deliveryDays: 10,
      },
      {
        name: 'Premium',
        price: 899,
        features: [
          'Complete design system',
          'Interactive prototypes (unlimited screens)',
          'Design specifications & handoff',
          'User research & testing',
          'Unlimited revisions',
          'Developer handoff support',
          'Design QA consultation',
        ],
        deliveryDays: 15,
      },
    ],
    reviews: [
      {
        id: '1',
        author: 'Thomas Beck',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        text: 'Fantastic designer! Amanda understood the vision perfectly and delivered beautiful work.',
      },
    ],
  },
  {
    id: '4',
    title: 'Full-Stack Web Application Development',
    seller: {
      name: 'James Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&q=80&w=1200&h=675',
    startingPrice: 899,
    category: 'Web Development',
    pricingTiers: [
      {
        name: 'Basic',
        price: 899,
        features: [
          'Landing page with backend',
          'Database setup',
          'Basic authentication',
          'Email notifications',
          '5 revisions',
        ],
        deliveryDays: 14,
      },
      {
        name: 'Standard',
        price: 1799,
        features: [
          'Multi-feature web application',
          'Advanced database design',
          'User authentication & authorization',
          'Payment processing',
          'Admin dashboard',
          '10 revisions',
          'API documentation',
        ],
        deliveryDays: 28,
      },
      {
        name: 'Premium',
        price: 2999,
        features: [
          'Enterprise-grade web application',
          'Scalable architecture',
          'Advanced security features',
          'Real-time features (WebSockets)',
          'Analytics & monitoring',
          'Unlimited revisions',
          'Performance optimization',
          '12 months support',
          'DevOps setup assistance',
        ],
        deliveryDays: 42,
      },
    ],
    reviews: [
      {
        id: '1',
        author: 'Sophie Johnson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 weeks ago',
        text: 'James is incredibly knowledgeable and professional. Delivered a robust, well-tested application.',
      },
      {
        id: '2',
        author: 'Mark Williams',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 month ago',
        text: 'Amazing developer. The code quality is outstanding and he provided excellent documentation.',
      },
      {
        id: '3',
        author: 'Jennifer Lee',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        rating: 4,
        date: '6 weeks ago',
        text: 'Great work. Would have appreciated more frequent communication during development.',
      },
    ],
  },
  {
    id: '5',
    title: 'WordPress Website & E-Commerce Setup',
    seller: {
      name: 'Nicole Thompson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 4.7,
    },
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?auto=format&fit=crop&q=80&w=1200&h=675',
    startingPrice: 199,
    category: 'Web Development',
    pricingTiers: [
      {
        name: 'Basic',
        price: 199,
        features: [
          'WordPress site setup',
          'Theme customization',
          'Basic plugins',
          'Mobile responsive',
          '5 revisions',
        ],
        deliveryDays: 5,
      },
      {
        name: 'Standard',
        price: 399,
        features: [
          'Custom WordPress theme',
          'E-commerce setup (WooCommerce)',
          'Product pages & catalog',
          'Payment gateway integration',
          'Inventory management',
          '10 revisions',
        ],
        deliveryDays: 10,
      },
      {
        name: 'Premium',
        price: 699,
        features: [
          'Advanced e-commerce site',
          'Custom theme development',
          'Multiple payment methods',
          'Marketing tools integration',
          'SEO optimization',
          'Unlimited revisions',
          'Speed optimization',
          '3 months support',
          'Training included',
        ],
        deliveryDays: 15,
      },
    ],
    reviews: [
      {
        id: '1',
        author: 'Alex Martinez',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 weeks ago',
        text: 'Nicole made everything so easy. The e-commerce setup was seamless and my store is performing great!',
      },
    ],
  },
];
