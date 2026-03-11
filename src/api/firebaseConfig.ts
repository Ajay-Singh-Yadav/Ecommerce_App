import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCUvrex_i7xs_5UYOHxISXf0fNFglpZXao',
  authDomain: 'ecomapp-64bd8.firebaseapp.com',
  projectId: 'ecomapp-64bd8',
  storageBucket: 'ecomapp-64bd8.firebasestorage.app',
  messagingSenderId: '229473186475',
  appId: '1:229473186475:web:d08cd67cffc2e670ec7dee',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const addShirts = async () => {
  try {
    const Shirts = {
      id: 'shirt_002',

      title: {
        en: "Men's White Cotton Linen Shirt",
        ar: 'تيشيرت أسود بطباعة أيقونية هاوس أوف ذا دراجون للرجال',
      },

      brand: {
        en: 'Bewakoof®',
        ar: 'منتجات هاوس أوف ذا دراجون الأصلية',
      },

      category: {
        id: 'shirts',
        name: {
          en: 'shirts',
          ar: 'قمصان',
        },
      },

      subCategory: {
        id: 'topwear',
        name: {
          en: 'Topwear',
          ar: 'ملابس علوية',
        },
      },

      price: {
        current: 1499,
        original: 2999,
        discount: 50,
        currency: '₹',
      },

      fabric: {
        en: 'Cotton Linen',
        ar: '100٪ قطن',
      },

      rating: {
        average: 4.7,
        totalRatings: 161,
        totalReviews: 161,
        recommendationPercent: 96,
        breakdown: {
          5: 120,
          4: 35,
          3: 6,
          2: 0,
          1: 0,
        },
      },

      boughtInfo: {
        count: 101,
        days: 7,
        message: {
          en: '55 people bought this in the last 7 days',
          ar: '55 شخص اشتروا هذا المنتج خلال آخر 7 أيام',
        },
      },

      images: [
        'https://images.bewakoof.com/t1080/men-s-white-cotton-linen-shirt-677615-1753957743-1.jpg',
        'https://images.bewakoof.com/original/men-s-white-cotton-linen-shirt-677615-1753957747-2.jpg',
        'https://images.bewakoof.com/original/men-s-white-cotton-linen-shirt-677615-1753957752-3.jpg',
        'https://images.bewakoof.com/original/men-s-white-cotton-linen-shirt-677615-1753701853-6.jpg',
      ],

      sizes: [
        { size: 'S', stockLeft: 2 },
        { size: 'M', stockLeft: 12   },
        { size: 'L', stockLeft: 13 },
        { size: 'XL', stockLeft: 14 },
        { size: '2XL', stockLeft: 16 },
        { size: '3XL', stockLeft: 14 },
      ],

      offers: [
        {
          id: 1,
          title: {
            en: 'Get ₹149 BK Cash upto ₹500',
            ar: 'احصل على 149 نقطة نقدية من بنك بي كي تصل إلى 500',
          },
          description: {
            en: 'Auto applied offer on cart',
            ar: 'يتم تطبيق العرض تلقائيًا في السلة',
          },
          code: 'GETCASH10',
          tag: {
            en: 'AUTO APPLIED',
            ar: 'يطبق تلقائيًا',
          },
        },
      ],

      delivery: {
        freeShipping: true,
        message: {
          en: 'This product is eligible for FREE SHIPPING',
          ar: 'هذا المنتج مؤهل للشحن المجاني',
        },
        codAvailable: true,
        estimatedDays: 4,
        pincodeRequired: true,
      },

      highlights: [
        {
          label: { en: 'Design', ar: 'التصميم' },
          value: { en: 'Graphic Print', ar: 'الطباعة' },
        },
        {
          label: { en: 'Fit', ar: 'المقاس' },
          value: { en: 'Regular Fit', ar: 'مقاس عادي' },
        },
        {
          label: { en: 'Neck', ar: 'الرقبة' },
          value: { en: 'Collar', ar: 'ياقة دائرية' },
        },
        {
          label: { en: 'Occasion', ar: 'المناسبة' },
          value: { en: 'Casual Wear', ar: 'ملابس يومية' },
        },
        {
          label: { en: 'Sleeve Style', ar: 'الأكمام' },
          value: { en: 'Full Sleeve', ar: 'نصف كم' },
        },
        {
          label: { en: 'Wash Care', ar: 'الغسيل' },
          value: { en: 'Gentle Machine Wash', ar: 'غسيل آلي لطيف' },
        },
      ],

      description: {
        en: "The Men's White Cotton Linen Shirt is the wardrobe MVP. Pair with jeans or linen pants, and slip into espadrilles or loafers for a polished off-duty vibe.Country of Origin - india",
        ar: 'نقدم لكم تيشيرت "هوب ستريت تايبوغرافي" الرجالي الأسود من بيواكوف، إضافة بسيطة وجريئة في آن واحد إلى خزانة ملابسكم. يتميز هذا التيشيرت بتصميم أنيق وأجواء إيجابية، مما يجعله الخيار الأمثل لمن يفضلون البساطة في أسلوبهم مع لمسة مميزة. تطبع كلمة "هوب" بخط بارز، لتكون بمثابة تذكير دائم بالتفاؤل والثقة بالنفس مهما كانت الظروف.'
      },

      returnPolicy: {
        title: {
          en: '15 Days Returns & Exchange',
          ar: 'إرجاع واستبدال خلال 15 يوم',
        },
        description: {
          en: 'Easy returns upto 15 days of delivery. Exchange available on select pincodes',
          ar: 'تعرف على سياسة الإرجاع والاستبدال',
        },
      },

      badges: [
        { title: { en: '100% Genuine Product', ar: 'منتج أصلي 100٪' } },
        { title: { en: '100% Secure Payment', ar: 'دفع آمن 100٪' } },
        { title: { en: 'Easy Returns & Refunds', ar: 'إرجاع واسترداد سهل' } },
      ],
    };
    await setDoc(doc(db, 'Shirts', 'shirt_002'), Shirts);

    console.log('✅ Shirt added successfully!');
  } catch (error) {
    console.log('❌ Error:', error);
  }
};
