# پروژه Random Background - تغییر رنگ تصادفی پس‌زمینه

<img src="./preview.gif" alt="پیش‌نمایش پروژه" style="
border-radius: 8px;
margin: 1rem auto;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
display: block;
max-width: 100%;
height: auto;
"/>

## 🎨 توضیحات  
یک پروژه ساده و جذاب که هر 500 میلی‌ثانیه رنگ پس‌زمینه صفحه را به صورت تصادفی تغییر می‌دهد

## ✨ ویژگی‌های کلیدی  
- تولید رنگ‌های RGB کاملاً تصادفی  
- تغییر خودکار هر نیم ثانیه  
- نمایش کد رنگ در کنسول مرورگر  
- دکمه‌های زیبا با افکت hover  
- طراحی مینیمال و تمیز  

## 🛠️ فناوری‌ها  
<div align="center" style="display: flex; gap: 1rem; justify-content: center; margin: 1.5rem 0;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="50" height="50"/>
</div>

## 🎛️ عملکرد پروژه  
- تولید اعداد تصادفی بین 0 تا 255 برای مقادیر Red, Green, Blue  
- ساخت رشته RGB با مقادیر تولید شده  
- اعمال رنگ به پس‌زمینه صفحه  
- نمایش کد رنگ در کنسول برای بررسی  
- تکرار فرآیند هر 500 میلی‌ثانیه  

## 💻 نمونه خروجی کنسول  
```
rgb(123,45,67)
rgb(234,56,78)
rgb(45,167,89)
```

## 🚀 راه‌اندازی  
1. کلون کردن ریپازیتوری:  
```bash
git clone https://github.com/developer-iko-mike/JS_minis.git
```
2. رفتن به پوشه پروژه:  
```bash
cd JS_minis/Random-BG
```
3. اجرای پروژه:  
```bash
open RandomBG.html  # در مک‌اواس
start RandomBG.html # در ویندوز
```

## 📜 مجوز  
این پروژه تحت [مجوز MIT](https://opensource.org/licenses/MIT) منتشر شده است.  

<div style="margin-top: 2rem; text-align: center; font-size: 0.9rem; color: #666;">
  توسعه داده شده با ❤️ توسط developer-iko-mike
</div>

> نکته: برای تغییر سرعت تغییر رنگ‌ها، می‌توانید عدد 500 در تابع setInterval را در فایل JavaScript ویرایش کنید (عدد بر حسب میلی‌ثانیه است).