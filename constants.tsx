
import React from 'react';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'المجموعة الملكية الرئيسية',
    category: 'Gift Boxes',
    price: 350.00,
    weight: '2 كجم',
    image: 'https://njchsnmgxydeztuofoki.supabase.co/storage/v1/object/public/product-images/IMG-20260115-WA0056.jpg',
    description: 'أفخر أنواع التمور والمكسرات المغربية في صندوق واحد مصمم بعناية ليناسب أرقى الأذواق.',
    bestSeller: true,
    rating: 5.0,
    numReviews: 245
  },
  {
    id: '2',
    name: 'مزيج المكسرات البريميوم',
    category: 'Nuts',
    price: 180.00,
    weight: '1 كجم',
    image: 'https://njchsnmgxydeztuofoki.supabase.co/storage/v1/object/public/product-images/IMG-20260115-WA0057.jpg',
    description: 'لوز، جوز، وأكاجو محمص بالطريقة المغربية التقليدية، قرمشة مثالية ونكهة أصيلة.',
    bestSeller: true,
    rating: 4.8,
    numReviews: 189
  },
  {
    id: '3',
    name: 'الصندوق العائلي الفاخر',
    category: 'Dates',
    price: 260.00,
    weight: '1.5 كجم',
    image: 'https://njchsnmgxydeztuofoki.supabase.co/storage/v1/object/public/product-images/IMG-20260115-WA0058.jpg',
    description: 'تمر مجهول من نخب أول مع تشكيلة واسعة من الفواكه المجففة، مثالية للجلسات العائلية.',
    bestSeller: true,
    rating: 4.7,
    numReviews: 112
  },
  {
    id: '4',
    name: 'صندوق الهدايا الصغير',
    category: 'Gift Boxes',
    price: 120.00,
    weight: '500 غرام',
    image: 'https://njchsnmgxydeztuofoki.supabase.co/storage/v1/object/public/product-images/IMG-20260115-WA0058%20(1).jpg',
    description: 'هدية رمزية فاخرة تحتوي على أجود أنواع التمور المحشوة، مغلفة بلمسة ذهبية ساحرة.',
    bestSeller: false,
    rating: 4.9,
    numReviews: 76
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'أمين العلمي',
    role: 'زبون دائم',
    content: 'منذ سنوات، أنا عميل مخلص لشركة BMK، وأنا دائماً أتفاجأ بجودة منتجاتهم الاستثنائية. التمور والمكسرات تأتي طازجة ومغلفة بعناية فائقة، والتوصيل داخل المغرب سريع وموثوق. شكراً لفريق BMK على هذا المستوى من الرقي والاهتمام بالتفاصيل، الذي يجعل كل طلب تجربة مميزة.',
    avatar: 'https://i.pravatar.cc/150?u=amin_male'
  },
  {
    id: 2,
    name: 'سارة بناني',
    role: 'عاشقة للحلويات الطبيعية',
    content: 'لا يوجد هدية أفضل من منتجات BMK في المناسبات الخاصة. التغليف الفاخر يعكس الفخامة المغربية الأصيلة، والمحتوى الطبيعي 100% يضمن رضا الجميع. أنا أحب كيف يجمعون بين الجودة العالية والنكهات التقليدية، مما يجعلها خياراً مثالياً للعائلة والأصدقاء. أوصي بها بشدة لكل من يبحث عن التميز.',
    avatar: 'https://i.pravatar.cc/150?u=sarah_banani&gender=female'
  }
];

export const ZellijIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/20">
    <path d="M12 2L2 12l10 10 10-10L12 2z" />
    <path d="M12 6L6 12l6 6 6-6-6-6z" />
  </svg>
);
