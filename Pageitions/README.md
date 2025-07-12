# پروژه Pageitions - سیستم صفحه‌بندی (Pagination)

<img src="./preview.gif" alt="پیش‌نمایش پروژه" style="
border-radius: 8px;
margin: 1rem auto;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
display: block;
max-width: 100%;
height: auto;
"/>

## 📄 توضیحات  
یک سیستم صفحه‌بندی کاربردی و تعاملی برای نمایش لیست کاربران با قابلیت پیمایش بین صفحات مختلف  

## ✨ ویژگی‌های کلیدی  
- نمایش 5 آیتم در هر صفحه  
- پیمایش آسان بین صفحات با دکمه‌های شماره صفحه  
- هایلایت صفحه فعال برای شناسایی آسان  
- انیمیشن‌های زیبا هنگام هاور روی دکمه‌ها و آیتم‌ها  
- طراحی ریسپانسیو و سازگار با موبایل  
- ساختار کد تمیز و ماژولار  

## 🛠️ فناوری‌ها  
<div align="center" style="display: flex; gap: 1rem; justify-content: center; margin: 1.5rem 0;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="50" height="50"/>
</div>

## 🎛️ عملکرد  
- هر صفحه حداکثر 5 کاربر نمایش داده می‌شود  
- دکمه‌های شماره صفحه در پایین لیست قرار دارند  
- صفحه فعال با رنگ سبز مشخص شده است  
- هاور روی دکمه‌ها باعث ایجاد انیمیشن می‌شود  
- هاور روی آیتم‌های لیست باعث تغییر رنگ زمینه می‌شود  

## 📊 ساختار داده  
- لیست کاربران شامل 24 آیتم با ساختار زیر:  
```javascript
{
  id: number,
  name: string,
  family: string
}
```

## 🚀 راه‌اندازی  
1. کلون کردن ریپازیتوری:  
```bash
git clone https://github.com/developer-iko-mike/JS_minis.git
```
2. رفتن به پوشه پروژه:  
```bash
cd JS_minis/Pageitions
```
3. اجرای پروژه:  
```bash
open Pageitions.html  # در مک‌اواس
start Pageitions.html # در ویندوز
```

## 📜 مجوز  
این پروژه تحت [مجوز MIT](https://opensource.org/licenses/MIT) منتشر شده است.  

<div style="margin-top: 2rem; text-align: center; font-size: 0.9rem; color: #666;">
  توسعه داده شده با ❤️ توسط developer-iko-mike
</div>

> نکته: برای تغییر تعداد آیتم‌های نمایش داده شده در هر صفحه، می‌توانید متغیر `rows` در فایل JavaScript را ویرایش کنید.