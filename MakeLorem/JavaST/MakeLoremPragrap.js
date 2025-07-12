const $ = document;
const body = $.body;
let btn = $.querySelector("button");
let ipt = $.querySelector("input");
let footer = $.querySelector("footer");
const loremTitle = [
  "Beneath the pale morning sky, quiet winds carried the scent of rain across the rolling hills, as if the land itself had just taken a deep breath after a long slumber. The cobblestones beneath weary feet told stories that had been forgotten by time—echoes of laughter, whispers of sorrow, and the silent endurance of passing years. In that moment of stillness, with the sun hesitating on the horizon, it felt as though the world had paused not from fear, but to remember. Somewhere nearby, the sound of distant birds broke the hush, reminding the morning that life still moved forward.",
  
  "In a dimly lit room where only an old lamp flickered against the shadows, the silence was thick with the weight of things left unsaid. The air was heavy, pulsing with abandoned intentions and half-formed dreams. Time didn’t pass—it lingered, wrapping its fingers around every thought, stretching them thin between hope and hesitation. It was the kind of silence that knew your name but refused to speak it aloud. Outside, rain tapped gently against the window, each drop a soft reminder of everything unresolved.",
  
  "A single leaf spiraled through the chilled autumn air, carried by a breeze that held no destination. The streets lay empty, washed in the soft gray of a sky that neither promised rain nor sun. Somewhere in the background, the gentle notes of a forgotten piano tune drifted through a half-open window, blending memory with imagination. It wasn’t just the cold—it was the stillness of a world caught between seasons, between the past and what might never come. The leaf eventually landed without ceremony, as if even gravity moved more gently here.",
  
  "Along the winding riverbank, bare trees stood like sentinels, their reflections shimmering in the slow-moving current. Each ripple bent the image, twisting familiarity into abstraction—reminding us that even reality, under the right light, can deceive. Footsteps sank softly into the muddy earth as distant birds cried out in brief, brittle tones. The air smelled of water and memory, of change that comes slowly, without asking permission. And somewhere in the brush, the wind whispered a language only the river understood.",
  
  "A corridor of flickering lights stretched endlessly ahead, the ceiling humming with the artificial breath of old electricity. The air was sterile, yet tense, as if the walls themselves remembered conversations held in hushed tones. Every step echoed like a question without an answer, and the flicker of each bulb seemed timed to the heartbeat of a forgotten secret. It wasn’t just a hallway—it was a threshold between the known and the unknowable. With each step, something intangible shifted, like stepping further into memory.",
  
  "Among stacks of papers, crumpled sketches, and open code editors, the room vibrated with the tension between chaos and creativity. Inspiration didn’t come as a flash—it crept in slowly, in the pause between two lines of code or the margin of a failed drawing. It was a sacred kind of mess, a place where form chased function, and art danced on the edge of logic. The room, though cluttered, breathed in sync with its creator’s ambition. Here, even mistakes carried the scent of potential.",
  
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer malesuada, nunc ut dignissim luctus, neque purus porta tortor, a placerat libero purus sed libero. In hac habitasse platea dictumst. Morbi imperdiet arcu ut ligula tincidunt vulputate. Suspendisse potenti. Etiam iaculis blandit nunc, sit amet dignissim justo accumsan sit amet. Cras at lacus sed nunc iaculis feugiat. Pellentesque sed dui ac orci fermentum faucibus. Curabitur elementum, risus at scelerisque fringilla, enim tellus mattis ligula, sed bibendum nunc ante a nisi.",
  
  "The library had long since fallen into a silence more profound than absence. Its books stood aligned like timeless guardians of human thought, untouched but never unloved. Dust floated lazily in golden shafts of afternoon light, and every turned page echoed like a whisper across centuries. It was a temple for those who listened not just with ears, but with memory—with the quiet ache of understanding that some knowledge can only be felt, not told. Even the silence seemed curated, like a chapter waiting patiently to be read.",
  
  "Between fleeting moments of clarity, the fog returned—thick, deliberate, and without apology. It curled around the edges of thought like smoke around a candle’s flame, dulling the sharp lines of understanding. Movement became a guess, and direction a wish. Yet within that blur, something stirred—a quiet defiance, a pulse of determination reminding you that even in obscurity, there is still forward, and there is still purpose. Sometimes clarity isn’t light—it’s motion in darkness, stubborn and slow.",
  
  "My name is Mohammad Iko, and I’m a front-end developer with a strong passion for building modern, responsive, and accessible web applications. I’ve honed my skills in HTML and CSS—mastering Flexbox and Grid to create flexible, elegant layouts—and deepened my experience with JavaScript and React to craft dynamic, interactive user interfaces. After months of focused learning and hands-on development, I’m now eager to apply my skills to real-world projects. I’m open to freelance work, collaborations, or team-based development, and excited to grow both personally and professionally as I contribute to meaningful digital experiences. Technology inspires me, and I'm ready to turn challenges into creative, functional solutions."
];

const copyTextToClipboard = async e => {
  try {
    await navigator.clipboard.writeText(e.target.innerText);
    alert(" پاراگراف مورد نظر کپی شد!");
  } catch (err) {
    alert("کپی کردن متن انجام نشد");
  }
};





function makelorem() {
  footer.innerHTML = "";

  let iptValue = ipt.value;
  let randomNum = Math.floor(Math.random() * loremTitle.length);

  if (iptValue < 0 || iptValue > 99 || iptValue === "") {
    footer.innerHTML = loremTitle[randomNum];
  } else {
    let sliceArray = loremTitle.slice(0, iptValue);

    let finalTextArray = sliceArray
      .map(function (item) {
        return `<p onClick="copyTextToClipboard(event)"> ${item} </p>`;
      })
      .join("");
    footer.innerHTML = finalTextArray;
  }
  iptValue = "";
}
btn.addEventListener("click", makelorem);
body.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    makelorem();
  } else if (event.keyCode === 27) {
    footer.innerHTML = "";
  } else if (event.keyCode === 32) {
    makelorem();
  }
});
