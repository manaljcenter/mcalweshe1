# ملف المغامر الشخصي - Adventure Profile

موقع شخصي باللغة العربية لمحب المغامرات والسفر، مبني باستخدام Next.js و Tailwind CSS.

## المميزات

- 🌍 تصميم متجاوب يدعم اللغة العربية (RTL)
- 🎨 تصميم عصري وجذاب
- 📱 متوافق مع جميع الأجهزة
- ⚡ أداء سريع مع Next.js 15
- 🎯 أقسام متكاملة: الرئيسية، عني، مغامراتي، مهاراتي، تواصل معي

## التشغيل

```bash
# تثبيت المتطلبات
npm install

# تشغيل الخادم المحلي
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح لرؤية الموقع.

## البنية

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Navigation.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Adventures.tsx
    ├── Skills.tsx
    └── Contact.tsx
```

## التخصيص

1. **المحتوى**: عدّل النصوص في ملفات المكونات
2. **الصور**: أضف صورك في مجلد `public/`
3. **الألوان**: عدّل الألوان في `globals.css`
4. **الخط**: الموقع يستخدم خط Cairo للعربية

## الصور المطلوبة

ضع الصور التالية في مجلد `public/`:
- `hero-image.jpg` - صورة البطل الرئيسية
- `adventure1.jpg` إلى `adventure6.jpg` - صور المغامرات

## التقنيات المستخدمة

- **Next.js 15** - إطار العمل الأساسي
- **Tailwind CSS** - للتصميم
- **TypeScript** - للبرمجة
- **Heroicons** - للأيقونات
- **Google Fonts (Cairo)** - للخط العربي

## النشر

يمكن نشر الموقع على:
- Vercel (الأسهل)
- Netlify
- أي خدمة استضافة تدعم Next.js

```bash
npm run build
npm start
```
