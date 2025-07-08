// اموزش ریجیکس - regexlearn.com/playground
const findMohammad = /mohammad/ // توی متن من دنبال کلمه محمد باش و به اولین محمدی که رسیدی متوقف شو و دیگه نگرد
const findAllMohammadWord = /mohammad/g // تمام کلمات محمد رو برگردون
const selectAll = /./g // دات یعنی تمامی کراکتر هارو انتخاب کن 
const find__M_o_h_a_m_m_a_d__Latter = /[mohammad]/g // این به این معناست که تمام کراکتر های داخل براکت رو بردار و توی متن سرچ کن این حرف هارو یعنی کراکتر های داخل براکت رو سرچ میکنه
const find__a_to_z = /[abcdefghijklmnopqrstuvwxyz]/g // این کد برای ما کلمات اینگلیسی ای تا زد کوچک انتخاب میکنه
const find__A_to_Z = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g //این کد برای ما کلمات اینگلیسی ای تا زد بزرگ انتخاب میکنه
const find__a_to_z__easyWave = /[a-z]/g // این روش دقیقا همون قبلیه میگیم از کراکتر ای تا زد کوچک اینگلیسی رو انتخاب کن
const find__A_to_Z__easyWave = /[A-Z]/g // این روش دقیقا همون قبلیه میگیم از کراکتر ای تا زد بزرگ اینگلیسی رو انتخاب کن
const find__0_to_9 = /[0123456789]/g // برای انتخاب عدد صفر تا نه باید به این صورت عمل کنیم وقتی توی براکت یک چیزی رو مینویسیم به این معنی که اگه کراکترمن صفریک ودو یا سه تا نه بودانتخابش بکن 
// /mohammad/g vs /[mohammad]/g : در پترن اول دنبال کلمه محمد میگرده اما در پترنی که داخل براکت هست دنبال حرف های ام او اچ ای ام ام ای و دی میره میگرده
const find__0_to_9__easyWave = /[0-9]/g // برای راحتی کار میایم یک دشت میزاریم بین صفر تا نه تمامی اعداد رو انتخاب میکنه
const find__0_to_9__a_to_z__A_to_Z___easyWave = /[0-9a-zA-Z]/g // میتونیم ترکیبی هم استفاده کنیم
const find__4_to_7 = /[4-7]/g // میتونیم با این روش اعداد چهار تا هفت هم فیلتر بکنیم
const find__q_to_y = /[q-y]/g // ما میتونیم توی کراکتر ها مثال بالا رو هم انحام بدیم
const findAllButNotabc = /[^abc]/g // اینجا میگیم تمامی کراکتر هارو سلکت کن بجز ای بی سی
const wordJust3NumberLatter = /W[123]school/g // W1school true W2school true W3school true W4school false W10school true W123school true // وقتی ما از کراکتر ست استفاده میکنم این وسط باید یک کراکتر باشه دارم میگم یکی از این سه تا متونه باشه یک یا دو یا سه یا یکی از این سه تا  یعنی این وسط یک کراکتر میتونه قرار بگیره یا یک باشه یا دو یا سه
const wordJustNot1_2_3NumberLatter = /W[^124-6]school/g  // 
const digits = /[/d]/g // digits یا اعداد صفر تا نه است یعنی کراکتر های صفر تا نه رو انتخاب بکن کراکتر های عددی رو انتخاب بکن 
const notDigits = /[/D]/g // notDigits یعنی اعداد انتخاب نکن  یعنی چی یعنی هر کراکتر ی بجز کراکتر های عددی هر چیزی بجز کراکتر عددی 
// /[/d]/g === /[0-9]/g   //  /[/D]/g === /[^0-9]/g  // این دو تا پترن کاملا شبیه همن
const space = /\s/g // یعنی هر چی اسپیس بود پیدا کن
const Notspace = /\S/g // یعنی هر چیزی غیر از اسپیس 
const allTrueLatter = /\w/g // a-z + A-Z + 0-9 + _ // تمام حرف های ای تا زد کوچک و بزرگ و صفر تا نه بع علاوه اندرلاین // === /[a-zA-Z0-9_]/
const NotallTrueLatter = /\W/g // دقیقا عکس مثال قبل تمام کراکتر ها بجز ای تا زد بزرگ و کوچک و صفر تا نه و اندرلاین // === /[^a-zA-Z0-9_]/
const phoneNumber = /09\d\d\d\d\d\d\d\d\d/g // 09876543210 برای تشخیص شماره موبایل از این پترن میتونیم استفاده کنیم یک صفر نه  و نه تا بک اصلش دی 
const phoneNumber_easyWave = /09\d{9}/g // /09\d{9}/g === /09\d\d\d\d\d\d\d\d\d/g دقیقا با هم برابری میکنند یعنی از کراکتری که سمت چپش امده نه بار تکرار کن
const exampleForAcolad = /W\d{3}school/g // === W520school true W3school false W999school true W100school true W1250school false // کلماتی رو انتخاب کن که با دابلیو بزرگ شروع شده باشن و باید سه کراکتر عددی داشته باشه و توی اکولاد هم مشخص میکنم چند کراکتر  عددی و در اخر باید اسکول قرار بگیرع 
const example2ForAcolad = /W\d{1,3}school/g // === W3school true W32school true W999school true W9870school true W1250school false // یعنی میتونه یک عدد یا دوعدد یا سه عدد داشته باشه  
const previewPlus = /W3+school/g // این پترن به این معناست که سه میتونه یک بار باشه میتونه صد تا باشه میتونه بی نهایت بار باشه
const previewMultiply = /W3*school/g // این دقیقا عملکرد قبلی رو داره با این تفاوت که سه نباشه هم درسته=
const exampleForPlus = /W3+school/g // Wschool === false W3school === true W33school === true W33333333school === true
const exampleForMultiply = /W3*school/g // Wschool === true W3school === true W33school === true W33333333school === true
const previewQuestionMark = /W\d?school/g // Wschool === true W3school === true W33school === true W33333333school === true // این پترن میگه اقا بعد از دابلیو میتونه یک کراکتر عدد باشه میتونه هم نباشه
const previewOr = /W(3|4|7)school/g // Wschool === false W3school === true W4school === true W7school === true W5school === false W347school === false خط عمودی یا او میگه یا سه یا چهار یا هفت نمیتونه همزمان سه تا باشه ققط یا سه یا چهار یا هفت
const exampleForGmailPattern = /\w{5,}@gmail.com/g // || /\w{5,}@gmail.com/g === /[a-zA-Z0-9_]@gmail.com // اینجا میگیرم که تمام حروف کوچک و بزرگ ای تا زد اعداد و اندرلاین پنج تا بیشتر بود درسته
// اگر داخل اکولاد مقدار اول رو وارد کنبم اما مقدار دوم رو وارد نکنیم به این معناست که مثلا از پنج تا بی نهایت // mohammad@gmail.com === true , mohammad@gmail@com === true , mohammad@gmail.ir === false
const exampleForGmailPatternOriginal = /\w{5,}@gmail\.com/g // mohammad@gmail.com === true , miko@gmail.com === false , mohmmmad@yahoo.com === false , johndoe@gmail.com === true
// /\w{5,}@gmail.com/g vs /\w{5,}@gmail\.com/g : در پترن اول هر کراکتری که بعد از کلمه جیمیل بیاد قبول میکنه ریجکس چرا ؟ چون دات به معنی تمامی کراکتر ها هست و برای رفع این مشکل باید یک بک اصلش پشت دات اضافه کنیم
const charset = /^\d{5}/g // یعنی میگه حتما باید توی متن ما اولش با پنج تا عدد شروع بشه حتما اولش با پنح تا عدد شروع بشه
const dollar = /\d{5}$/g // یعنی میگه حتما باید توی متن ما اخرش با پنج تا عدد شروع بشه حتما اخرش با پنح تا عدد شروع بشه
const phoneNumberOriginal = /(\+?989|0?9)\d{9}/g // وریفای شماره موبایل با اسپیس مابین 
// +989876543210  === true || 989876543210 === true || 09876543210 === true || 9876543210 === true
const phoneNumberOriginalWithSpace = /^(\+?98\s9|0?9)\d{2}\s(\d{3})\s(\d{4})/g // وریفای شماره موبایل با اسپیس مابین 
// +98 987 654 3210  === true || 98 987 654 3210 === true || 0987 654 3210 === true || 987 654 3210 === true
const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,5}$/g // برای برسی یو ار ال از این پترن استفاده میشه
// کرت یعنی ما میگیم حتما باید با جیزایی که من میگم شروع بشه ||  یعنی میتونی اس اخر اچ تی تی پی باشه میتونه نباشه  || و برای اینکه اسلش رو ساپورت کنه  || و یک علامت سوال میزاریم پشت این گروه که بگیم میتونه باشه میتونه نباشه || سپس یک گروه جدید باز میکنیم سه تا دابلیو با بک اسلش دات که مشخص کنیم منظورمون تمام کراکتر ها نیس  بعد گروه رو میبستیم و علامت سوال میزاریم میگیم این میتونه باشه  میتونه هم نباشه و یک براکت باز میکنیم میگیم تمام حرق های کوچیک و بزرگ اینگلیسی و اعداد و دشت و میگیم حدعقل یکی باید باشه بعد بک اسلش دات گذاشتیم به این معنی که تمام کراکتر هارو انتخاب   نکنه سپس میگیم که از حرف کوچیک اینگلیسی حدعقل دوتا و حداکثر پنج تا و با علامت دالر گفتیم که باید اخرش هم اینطوری تموم بشه
const positiveLookahead = /W3(?=school)/   // با این پترن میگیم که اون دابلیو تری اسکولیو انتخاب کن که بعد دابلیو و تری کلمه اسکول امده باشه باید وجود داشته باشه
const negativelookahead = /W3(?!school)/   // با این پترن میگیم که اون دابلیو تری اسکولیو انتخاب کن که بعد دابلیو و تری کلمه اسکول نیامده باشه باید وجود نداشته باشه
const positiveLookbehind = /(?<=W3)school/ // اینجا میگه اسکول اسکولیو انتخاب کن که که پشتش کلمه دابلیو تری وجود داشته باشه
const negativeLookbehind = /(?<!W3)school/ // اینجا میگه اسکول اسکولیو انتخاب کن که که پشتش کلمه دابلیو تری وجود نداشته باشه
const date = /^([12]\d{3})\s(1[012]|0?[1-9])\s(3[01]|2[0-9]|1[0-9]|0?[1-9])$/ // برای وریفای تاریخ میتونم از این پترن استفاده بکنیم 
const date__easyWave = /^([12]\d{3})\s(1[012]|0?[1-9])\s([3[01]|[12][0-9]]|0?[1-9])$/ // این هم روش بهتر نسبت به روش بالاییه
//m باعث میشود در هر خط کار کند
//u از کد های یونیک استفاده میکند
//

let mainPattern = "example";
let flags = "g";

const defaultText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Similique necessitatibus dolor, omnis ducimus alias adipisci
illum, voluptatem quasi sit unde ut nam eius corporis vero eos officia!
Optio, fugit ullam. 1 2 3 4 5 6 7 8 9`;

const $ = document
const regexInput = $.getElementById('regexInput');
const textInput = $.getElementById('textInput');
const resultText = $.getElementById('resultText');
const currentPattern = $.getElementById('currentPattern');
const caseBtn = $.getElementById('caseBtn');
const globalBtn = $.getElementById('globalBtn');
const caseStatus = $.getElementById('caseStatus');
const globalStatus = $.getElementById('globalStatus');

// مقدار اولیه
regexInput.value = mainPattern;
currentPattern.textContent = `/${mainPattern}/${flags}`;
resultText.textContent = defaultText;

// به‌روزرسانی mainPattern و نمایش آن
regexInput.addEventListener('input', () => {
  mainPattern = regexInput.value || "example";
  updatePatternDisplay();
  testPattern();
});

// به‌روزرسانی متن
textInput.addEventListener('input', testPattern);

// دکمه حساسیت به حروف
caseBtn.addEventListener('click', () => {
  if (flags.includes('i')) {
    flags = flags.replace('i', '');
    caseStatus.textContent = 'On';
  } else {
    flags += 'i';
    caseStatus.textContent = 'Off';
  }
  updatePatternDisplay();
  testPattern();
});

// دکمه سراسری
globalBtn.addEventListener('click', () => {
  if (flags.includes('g')) {
    flags = flags.replace('g', '');
    globalStatus.textContent = 'Off';
  } else {
    flags += 'g';
    globalStatus.textContent = 'On';
  }
  updatePatternDisplay();
  testPattern();
});

function updatePatternDisplay() {
  currentPattern.textContent = `/${mainPattern}/${flags}`;
}

function testPattern() {
  let pattern = mainPattern;
  let text = textInput.value || defaultText;
  resultText.textContent = text;
  resultText.classList.remove('match', 'notMatch');

  try {
    let regex = new RegExp(pattern, flags);
    if (regex.test(text)) {
      resultText.classList.add('match');
    } else {
      resultText.classList.add('notMatch');
    }
  } catch (e) {
    resultText.classList.add('notMatch');
    resultText.textContent = "your pattern is not valid !";
  }
}

// مقدار اولیه
testPattern();