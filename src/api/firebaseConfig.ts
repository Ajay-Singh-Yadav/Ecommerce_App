import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUvrex_i7xs_5UYOHxISXf0fNFglpZXao",
  authDomain: "ecomapp-64bd8.firebaseapp.com",
  projectId: "ecomapp-64bd8",
  storageBucket: "ecomapp-64bd8.firebasestorage.app",
  messagingSenderId: "229473186475",
  appId: "1:229473186475:web:d08cd67cffc2e670ec7dee"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);






 //   export const addProduct = async () => {
//     try {
//       const product ={
//   id: "TSHIRT_003",

//   title: {
//     en: "Men's Black House Of The Dragon Iconic Graphic Printed T-shirt",
//     ar: "تيشيرت أسود بطباعة أيقونية هاوس أوف ذا دراجون للرجال"
//   },

//   brand: {
//     en: "Official House Of The Dragon Merchandise",
//     ar: "منتجات هاوس أوف ذا دراجون الأصلية"
//   },

//   category: {
//     id: "tshirts",
//     name: {
//       en: "T-Shirts",
//       ar: "تيشيرت"
//     }
//   },

//   subCategory: {
//     id: "topwear",
//     name: {
//       en: "Topwear",
//       ar: "ملابس علوية"
//     }
//   },

//   price: {
//     current: 549,
//     original: 999,
//     discount: 45,
//     currency: "₹"
//   },

//   fabric: {
//     en: "100% Cotton",
//     ar: "100٪ قطن"
//   },

//   rating: {
//     average: 4.7,
//     totalRatings: 161,
//     totalReviews: 161,
//     recommendationPercent: 96,
//     breakdown: {
//       5: 120,
//       4: 35,
//       3: 6,
//       2: 0,
//       1: 0
//     }
//   },

//   boughtInfo: {
//     count: 101,
//     days: 7,
//     message: {
//       en: "101 people bought this in the last 7 days",
//       ar: "101 شخص اشتروا هذا المنتج خلال آخر 7 أيام"
//     }
//   },

//   images: [
//     "https://images.bewakoof.com/t640/men-s-black-house-of-the-dragon-printed-t-shirt.jpg",
//     "https://images.bewakoof.com/original/men-s-black-house-of-the-dragon-printed-t-shirt-back.jpg"
//   ],

//   sizes: [
//     { size: "S", stockLeft: 5 },
//     { size: "M", stockLeft: 10 },
//     { size: "L", stockLeft: 1 },
//     { size: "XL", stockLeft: 8 },
//     { size: "2XL", stockLeft: 6 },
//     { size: "3XL", stockLeft: 4 }
//   ],

//   offers: [
//     {
//       id: 1,
//       title: {
//         en: "Buy 3 for ₹1199",
//         ar: "اشترِ 3 مقابل 1199 روبية"
//       },
//       description: {
//         en: "Auto applied offer on cart",
//         ar: "يتم تطبيق العرض تلقائيًا في السلة"
//       },
//       code: "AUTO1199",
//       tag: {
//         en: "AUTO APPLIED",
//         ar: "يطبق تلقائيًا"
//       }
//     }
//   ],

//   delivery: {
//     freeShipping: true,
//     message: {
//       en: "This product is eligible for FREE SHIPPING",
//       ar: "هذا المنتج مؤهل للشحن المجاني"
//     },
//     codAvailable: true,
//     estimatedDays: 4,
//     pincodeRequired: true
//   },

//   highlights: [
//     {
//       label: { en: "Design", ar: "التصميم" },
//       value: { en: "Graphic Print", ar: "طباعة رسومية" }
//     },
//     {
//       label: { en: "Fit", ar: "المقاس" },
//       value: { en: "Regular Fit", ar: "مقاس عادي" }
//     },
//     {
//       label: { en: "Neck", ar: "الرقبة" },
//       value: { en: "Round Neck", ar: "ياقة دائرية" }
//     },
//     {
//       label: { en: "Occasion", ar: "المناسبة" },
//       value: { en: "Casual Wear", ar: "ملابس يومية" }
//     },
//     {
//       label: { en: "Sleeve Style", ar: "الأكمام" },
//       value: { en: "Half Sleeve", ar: "نصف كم" }
//     },
//     {
//       label: { en: "Wash Care", ar: "الغسيل" },
//       value: { en: "Gentle Machine Wash", ar: "غسيل آلي لطيف" }
//     }
//   ],

//   description: {
//     en: "Premium 100% cotton t-shirt inspired by House Of The Dragon. Designed for comfort, durability, and bold everyday style.",
//     ar: "تيشيرت مصنوع من 100٪ قطن مستوحى من هاوس أوف ذا دراجون. مصمم للراحة والمتانة والأناقة الجريئة اليومية."
//   },

//   returnPolicy: {
//     title: {
//       en: "15 Days Returns & Exchange",
//       ar: "إرجاع واستبدال خلال 15 يوم"
//     },
//     description: {
//       en: "Know about return & exchange policy",
//       ar: "تعرف على سياسة الإرجاع والاستبدال"
//     }
//   },

//   badges: [
//     { title: { en: "100% Genuine Product", ar: "منتج أصلي 100٪" } },
//     { title: { en: "100% Secure Payment", ar: "دفع آمن 100٪" } },
//     { title: { en: "Easy Returns & Refunds", ar: "إرجاع واسترداد سهل" } }
//   ]
// }
//       await setDoc(doc(db, 'products', 'TSHIRT_003'), product);

//       console.log('✅ Product added successfully!');
//     } catch (error) {
//       console.log('❌ Error:', error);
//     }
//   };