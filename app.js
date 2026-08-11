(function () {
  "use strict";

  /* ========== 词库（四～五年级） ========== */
  var WORD_BANK = [
    { en: "interesting", phonetic: "/ˈɪntrəstɪŋ/", zh: "有趣的", example: "This science book is interesting." },
    { en: "important", phonetic: "/ɪmˈpɔːtnt/", zh: "重要的", example: "Sleep is important for kids." },
    { en: "different", phonetic: "/ˈdɪfrənt/", zh: "不同的", example: "We have different hobbies." },
    { en: "favorite", phonetic: "/ˈfeɪvərɪt/", zh: "最喜欢的", example: "My favorite subject is English." },
    { en: "usually", phonetic: "/ˈjuːʒuəli/", zh: "通常", example: "I usually get up at seven." },
    { en: "already", phonetic: "/ɔːlˈredi/", zh: "已经", example: "She has already finished her homework." },
    { en: "suddenly", phonetic: "/ˈsʌdənli/", zh: "突然", example: "It suddenly started to rain." },
    { en: "carefully", phonetic: "/ˈkeəfəli/", zh: "仔细地", example: "Please read the question carefully." },
    { en: "politely", phonetic: "/pəˈlaɪtli/", zh: "礼貌地", example: "He asked for help politely." },
    { en: "celebrate", phonetic: "/ˈselɪbreɪt/", zh: "庆祝", example: "We celebrate Children's Day in June." },
    { en: "invitation", phonetic: "/ˌɪnvɪˈteɪʃn/", zh: "邀请；请柬", example: "I got an invitation to the party." },
    { en: "museum", phonetic: "/mjuˈziːəm/", zh: "博物馆", example: "We visited the museum last Sunday." },
    { en: "adventure", phonetic: "/ədˈventʃə/", zh: "冒险；奇遇", example: "The story is about a forest adventure." },
    { en: "discover", phonetic: "/dɪˈskʌvə/", zh: "发现", example: "Scientists discover new stars." },
    { en: "protect", phonetic: "/prəˈtekt/", zh: "保护", example: "We should protect wild animals." },
    { en: "environment", phonetic: "/ɪnˈvaɪrənmənt/", zh: "环境", example: "Keep the environment clean." },
    { en: "delicious", phonetic: "/dɪˈlɪʃəs/", zh: "美味的", example: "Mom cooked a delicious dinner." },
    { en: "comfortable", phonetic: "/ˈkʌmftəbl/", zh: "舒服的", example: "This chair is very comfortable." },
    { en: "dangerous", phonetic: "/ˈdeɪndʒərəs/", zh: "危险的", example: "Crossing the street alone is dangerous." },
    { en: "successful", phonetic: "/səkˈsesfl/", zh: "成功的", example: "Practice helps you be successful." },
    { en: "experience", phonetic: "/ɪkˈspɪəriəns/", zh: "经历；经验", example: "Camping was a great experience." },
    { en: "information", phonetic: "/ˌɪnfəˈmeɪʃn/", zh: "信息", example: "Please find information on the Internet." },
    { en: "conversation", phonetic: "/ˌkɒnvəˈseɪʃn/", zh: "对话；谈话", example: "We had a short conversation in English." },
    { en: "understand", phonetic: "/ˌʌndəˈstænd/", zh: "理解；明白", example: "Do you understand this sentence?" },
    { en: "remember", phonetic: "/rɪˈmembə/", zh: "记住；记得", example: "Remember to bring your notebook." },
    { en: "decide", phonetic: "/dɪˈsaɪd/", zh: "决定", example: "They decide to plant more trees." },
    { en: "collect", phonetic: "/kəˈlekt/", zh: "收集", example: "He likes to collect stamps." },
    { en: "borrow", phonetic: "/ˈbɒrəʊ/", zh: "借入", example: "May I borrow your eraser?" },
    { en: "return", phonetic: "/rɪˈtɜːn/", zh: "归还；返回", example: "Please return the book on time." },
    { en: "weekend", phonetic: "/ˌwiːkˈend/", zh: "周末", example: "We often go hiking on the weekend." },
    { en: "practice", phonetic: "/ˈpræktɪs/", zh: "练习", example: "Practice makes progress every day." },
    { en: "culture", phonetic: "/ˈkʌltʃə/", zh: "文化", example: "We learn about Chinese culture." },
    { en: "nature", phonetic: "/ˈneɪtʃə/", zh: "大自然", example: "I love walking in nature." },
    { en: "healthy", phonetic: "/ˈhelθi/", zh: "健康的", example: "Eating vegetables keeps us healthy." },
    { en: "curious", phonetic: "/ˈkjʊəriəs/", zh: "好奇的", example: "Kids are curious about the world." },
    { en: "journey", phonetic: "/ˈdʒɜːni/", zh: "旅程", example: "Our summer journey was wonderful." }
  ];

  /* ========== 多套绘本（按天轮换） ========== */
  var STORIES = [
    {
      title: "Bunny's Special Day",
      titleZh: "小兔子的特别一天",
      pages: [
        { scene: "home", icons: ["☀️", "🏠", "🐰"], en: "Bunny wakes up early. Today feels special and exciting.", zh: "小兔子早早醒来。今天让人觉得特别又兴奋。" },
        { scene: "home", icons: ["🥪", "🍎", "🐰"], en: "He prepares a delicious breakfast and packs his favorite book.", zh: "他准备了美味的早餐，并装上自己最喜欢的书。" },
        { scene: "school", icons: ["🎒", "🏫", "🐰"], en: "Bunny walks to school with Duck. They talk about a museum trip.", zh: "小兔子和鸭子一起步行去学校。他们谈论博物馆之旅。" },
        { scene: "school", icons: ["📚", "🔬", "🐰"], en: "In class, they discover interesting information about wild animals.", zh: "课堂上，他们发现了关于野生动物的有趣信息。" },
        { scene: "park", icons: ["🌳", "🛡️", "🐰"], en: "After school, they clean the park to protect the environment.", zh: "放学后，他们打扫公园，保护环境。" },
        { scene: "night", icons: ["🌙", "⭐", "🐰"], en: "At night, Bunny writes about this successful day in his diary.", zh: "晚上，小兔子在日记里写下这成功的一天。" }
      ],
      questions: [
        { q: "1. What does Bunny pack besides breakfast?", options: ["His favorite book", "A football", "A camera", "A toy car"], answer: 0 },
        { q: "2. What do Bunny and Duck talk about on the way?", options: ["A birthday cake", "A museum trip", "A rainy day", "A new bike"], answer: 1 },
        { q: "3. Why do they clean the park?", options: ["To play football", "To find treasure", "To protect the environment", "To wait for the bus"], answer: 2 }
      ]
    },
    {
      title: "Mia's Rainy Adventure",
      titleZh: "米娅的雨天冒险",
      pages: [
        { scene: "home", icons: ["🌧️", "🏠", "👧"], en: "It suddenly rains in the morning. Mia stays home and feels bored.", zh: "早上突然下雨。米娅待在家里，觉得有点无聊。" },
        { scene: "home", icons: ["📚", "✏️", "👧"], en: "She decides to practice English and write a short story carefully.", zh: "她决定练习英语，并认真写一篇短故事。" },
        { scene: "home", icons: ["📞", "👵", "👧"], en: "Then she calls Grandma. They have a warm conversation.", zh: "然后她给奶奶打电话。她们进行了一次温暖的谈话。" },
        { scene: "park", icons: ["🌈", "🌳", "👧"], en: "After the rain, a rainbow appears. Mia goes outside happily.", zh: "雨后出现了彩虹。米娅开心地走到外面。" },
        { scene: "park", icons: ["🐕", "⚽", "👧"], en: "She plays with her dog and collects colorful leaves.", zh: "她和狗狗玩耍，并收集彩色的树叶。" },
        { scene: "night", icons: ["🌙", "📖", "👧"], en: "At night, Mia reads her story again and feels proud.", zh: "晚上，米娅又读了一遍自己的故事，感到很自豪。" }
      ],
      questions: [
        { q: "1. Why does Mia stay home in the morning?", options: ["It suddenly rains", "She is sick", "School is closed", "She forgets her bag"], answer: 0 },
        { q: "2. Who does Mia call?", options: ["Her teacher", "Grandma", "Duck", "A doctor"], answer: 1 },
        { q: "3. What does Mia collect after the rain?", options: ["Stones", "Flowers only", "Colorful leaves", "Shells"], answer: 2 }
      ]
    },
    {
      title: "Leo at the Museum",
      titleZh: "利奥去博物馆",
      pages: [
        { scene: "home", icons: ["☀️", "🎒", "👦"], en: "Leo gets an invitation to visit the city museum.", zh: "利奥收到了参观城市博物馆的邀请。" },
        { scene: "school", icons: ["🚌", "🏫", "👦"], en: "He goes with his classmates. Everyone feels curious.", zh: "他和同学们一起去。大家都感到很好奇。" },
        { scene: "school", icons: ["🦕", "🖼️", "👦"], en: "They discover dinosaur bones and beautiful paintings.", zh: "他们发现了恐龙骨头和美丽的画作。" },
        { scene: "school", icons: ["🧑‍🏫", "📝", "👦"], en: "A guide shares important information politely.", zh: "讲解员礼貌地分享了重要信息。" },
        { scene: "park", icons: ["🍦", "🌳", "👦"], en: "After the visit, they eat delicious ice cream outside.", zh: "参观后，他们在外面吃了美味的冰淇淋。" },
        { scene: "night", icons: ["🌙", "📔", "👦"], en: "Leo writes about this great experience in his notebook.", zh: "利奥把这次很棒的经历写进笔记本。" }
      ],
      questions: [
        { q: "1. Where does Leo go?", options: ["The city museum", "The zoo", "The beach", "The library only"], answer: 0 },
        { q: "2. What do they discover?", options: ["Cars", "Dinosaur bones and paintings", "Candy shops", "Sports balls"], answer: 1 },
        { q: "3. What does Leo do at night?", options: ["Watches TV", "Plays football", "Writes in his notebook", "Goes swimming"], answer: 2 }
      ]
    },
    {
      title: "Camping with Friends",
      titleZh: "和朋友一起露营",
      pages: [
        { scene: "park", icons: ["⛺", "🌲", "👧"], en: "On the weekend, friends go camping near the forest.", zh: "周末，朋友们去森林附近露营。" },
        { scene: "park", icons: ["🥾", "🗺️", "👦"], en: "They follow a map carefully and start a small adventure.", zh: "他们仔细跟着地图，开始了一场小冒险。" },
        { scene: "park", icons: ["🔥", "🌽", "👧"], en: "At lunch, they cook corn. It smells delicious.", zh: "午饭时，他们烤玉米。闻起来很香。" },
        { scene: "park", icons: ["🐦", "🔍", "👦"], en: "They watch birds and learn to protect nature.", zh: "他们观察鸟类，并学习保护大自然。" },
        { scene: "night", icons: ["🌌", "⭐", "👧"], en: "At night, the sky is beautiful. They feel comfortable.", zh: "夜里天空很美。他们觉得很舒服。" },
        { scene: "night", icons: ["🛌", "😊", "👦"], en: "Before sleep, they agree it is a successful trip.", zh: "睡觉前，他们都觉得这是一次成功的旅行。" }
      ],
      questions: [
        { q: "1. When do they go camping?", options: ["On the weekend", "On Monday morning", "At midnight only", "During class"], answer: 0 },
        { q: "2. What do they cook for lunch?", options: ["Pizza", "Corn", "Noodles", "Cake"], answer: 1 },
        { q: "3. What do they learn to protect?", options: ["Toys", "Cars", "Nature", "Phones"], answer: 2 }
      ]
    },
    {
      title: "A Healthy Day",
      titleZh: "健康的一天",
      pages: [
        { scene: "home", icons: ["🌅", "🥛", "👦"], en: "Tom usually drinks milk and eats fruit for breakfast.", zh: "汤姆通常早餐喝牛奶、吃水果。" },
        { scene: "school", icons: ["🏃", "🏫", "👦"], en: "At school, he runs in PE class and feels healthy.", zh: "在学校，他在体育课跑步，感觉很健康。" },
        { scene: "school", icons: ["🥗", "🍱", "👦"], en: "For lunch, he chooses vegetables. They are delicious.", zh: "午饭他选择蔬菜。它们很美味。" },
        { scene: "park", icons: ["🚴", "🌳", "👦"], en: "After school, he rides a bike in the park with Dad.", zh: "放学后，他和爸爸在公园骑自行车。" },
        { scene: "home", icons: ["📚", "🛏️", "👦"], en: "He finishes homework early and goes to bed on time.", zh: "他很早完成作业，并按时睡觉。" },
        { scene: "night", icons: ["😴", "⭐", "👦"], en: "Good sleep helps him remember new words better.", zh: "良好的睡眠帮他更好地记住新单词。" }
      ],
      questions: [
        { q: "1. What does Tom usually have for breakfast?", options: ["Milk and fruit", "Chips", "Candy only", "Ice cream"], answer: 0 },
        { q: "2. What does he do after school?", options: ["Sleeps at once", "Rides a bike with Dad", "Watches TV all night", "Goes to a museum"], answer: 1 },
        { q: "3. What helps him remember new words?", options: ["Loud music", "Late games", "Good sleep", "Skipping lunch"], answer: 2 }
      ]
    },
    {
      title: "The Library Surprise",
      titleZh: "图书馆的惊喜",
      pages: [
        { scene: "school", icons: ["📚", "🏫", "👧"], en: "Amy goes to the library to borrow a new book.", zh: "艾米去图书馆借一本新书。" },
        { scene: "school", icons: ["🔍", "📖", "👧"], en: "She looks carefully and finds an adventure story.", zh: "她仔细寻找，发现了一本冒险故事。" },
        { scene: "school", icons: ["📖", "🤫", "👧"], en: "She reads quietly because libraries need silence.", zh: "她安静地阅读，因为图书馆需要安静。" },
        { scene: "school", icons: ["👩‍🏫", "💬", "👧"], en: "The librarian answers her questions politely.", zh: "图书管理员礼貌地回答了她的问题。" },
        { scene: "home", icons: ["🏠", "📘", "👧"], en: "Amy returns home and shares interesting information with Mom.", zh: "艾米回家后，和妈妈分享有趣的信息。" },
        { scene: "night", icons: ["🌙", "✨", "👧"], en: "She decides to return the book next weekend.", zh: "她决定下周末去还书。" }
      ],
      questions: [
        { q: "1. Why does Amy go to the library?", options: ["To borrow a new book", "To buy candy", "To play football", "To cook lunch"], answer: 0 },
        { q: "2. What kind of story does she find?", options: ["A cookbook", "An adventure story", "A math paper", "A map only"], answer: 1 },
        { q: "3. When will she return the book?", options: ["Tonight", "Tomorrow morning", "Next weekend", "Never"], answer: 2 }
      ]
    },
    {
      title: "Festival Morning",
      titleZh: "节日的早晨",
      pages: [
        { scene: "home", icons: ["🎉", "🏠", "👧"], en: "Today the family will celebrate a summer festival.", zh: "今天家里要庆祝一个夏日节日。" },
        { scene: "home", icons: ["🧧", "🎁", "👦"], en: "The children prepare invitations for their friends.", zh: "孩子们为朋友们准备请柬。" },
        { scene: "park", icons: ["🏮", "🎵", "👧"], en: "In the park, people sing and dance together.", zh: "公园里，大家一起唱歌跳舞。" },
        { scene: "park", icons: ["🥟", "🍡", "👦"], en: "There is delicious food everywhere. Everyone is happy.", zh: "到处都是美味的食物。大家都开心。" },
        { scene: "park", icons: ["🧹", "🌱", "👧"], en: "After the party, they clean up to protect the environment.", zh: "派对后，他们清理场地来保护环境。" },
        { scene: "night", icons: ["🎆", "🌙", "👦"], en: "At night, fireworks light the sky. What a successful day!", zh: "夜里烟花点亮天空。多么成功的一天！" }
      ],
      questions: [
        { q: "1. What will the family celebrate?", options: ["A summer festival", "A math test", "A rainy day", "A sports meeting only"], answer: 0 },
        { q: "2. What do the children prepare?", options: ["Homework", "Invitations for friends", "A school bus", "Winter coats"], answer: 1 },
        { q: "3. What do they do after the party?", options: ["Leave trash", "Sleep in the park", "Clean up to protect the environment", "Buy more fireworks"], answer: 2 }
      ]
    }
  ];

  /* ========== 日期与每日配置 ========== */
  var dailyConfig = {
    date: "",
    wordSeed: 1,
    storyIndex: 0
  };

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function localDateStr(d) {
    d = d || new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }

  function daySeedFromDate(dateStr) {
    var parts = dateStr.split("-");
    return Number(parts[0]) * 10000 + Number(parts[1]) * 100 + Number(parts[2]);
  }

  function dayOfYear(d) {
    var start = new Date(d.getFullYear(), 0, 0);
    return Math.floor((d - start) / 86400000);
  }

  function buildLocalDailyConfig() {
    var now = new Date();
    var dateStr = localDateStr(now);
    return {
      date: dateStr,
      wordSeed: daySeedFromDate(dateStr),
      storyIndex: dayOfYear(now) % STORIES.length
    };
  }

  function seededShuffle(arr, seed) {
    var a = arr.slice();
    var s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    for (var i = a.length - 1; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      var j = s % (i + 1);
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function weekKey() {
    var d = new Date();
    var oneJan = new Date(d.getFullYear(), 0, 1);
    var week = Math.ceil((((d - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
    return d.getFullYear() + "-W" + week;
  }

  /* ========== iOS Safari 友好朗读 ========== */
  var voicesReady = false;
  var speechUnlocked = false;
  var speakQueue = [];
  var speaking = false;

  function loadVoices() {
    if (!window.speechSynthesis) return [];
    return window.speechSynthesis.getVoices() || [];
  }

  if (window.speechSynthesis) {
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = function () {
        voicesReady = true;
        loadVoices();
      };
    }
    // iOS sometimes pauses speech; keep it alive
    setInterval(function () {
      try {
        if (window.speechSynthesis && window.speechSynthesis.speaking) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      } catch (e) {}
    }, 12000);
  }

  function pickEnglishVoice() {
    var voices = loadVoices();
    var i;
    for (i = 0; i < voices.length; i++) {
      if (/en(-|_)?US/i.test(voices[i].lang) && /samantha|karen|daniel|moira|female|male/i.test(voices[i].name)) {
        return voices[i];
      }
    }
    for (i = 0; i < voices.length; i++) {
      if (/^en/i.test(voices[i].lang)) return voices[i];
    }
    return null;
  }

  function unlockSpeech() {
    if (speechUnlocked || !window.speechSynthesis) return;
    try {
      var warm = new SpeechSynthesisUtterance(" ");
      warm.volume = 0;
      warm.rate = 1;
      window.speechSynthesis.speak(warm);
      window.speechSynthesis.cancel();
      speechUnlocked = true;
    } catch (e) {}
  }

  function speakNext() {
    if (!window.speechSynthesis || speaking) return;
    if (!speakQueue.length) return;
    speaking = true;
    var text = speakQueue.shift();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.9;
    u.pitch = 1;
    var voice = pickEnglishVoice();
    if (voice) u.voice = voice;

    u.onend = function () {
      speaking = false;
      speakNext();
    };
    u.onerror = function () {
      speaking = false;
      speakNext();
    };

    // iOS: cancel then slight delay before speak
    try { window.speechSynthesis.cancel(); } catch (e) {}
    setTimeout(function () {
      try {
        window.speechSynthesis.speak(u);
      } catch (err) {
        speaking = false;
      }
    }, 60);
  }

  function speak(text, append) {
    if (!window.speechSynthesis) {
      alert("当前浏览器暂不支持朗读。请确认系统设置里已开启朗读功能，或更新 iOS。");
      return;
    }
    unlockSpeech();
    if (!append) {
      speakQueue = [];
      speaking = false;
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    speakQueue.push(String(text));
    speakNext();
  }

  function speakList(texts) {
    if (!texts || !texts.length) return;
    unlockSpeech();
    speakQueue = [];
    speaking = false;
    try { window.speechSynthesis.cancel(); } catch (e) {}
    for (var i = 0; i < texts.length; i++) speakQueue.push(texts[i]);
    speakNext();
  }

  // Unlock on first touch/click anywhere (required by iOS)
  function firstInteract() {
    unlockSpeech();
    document.removeEventListener("touchstart", firstInteract, true);
    document.removeEventListener("click", firstInteract, true);
  }
  document.addEventListener("touchstart", firstInteract, true);
  document.addEventListener("click", firstInteract, true);

  /* ========== UI 状态 ========== */
  var dailyOffset = 0;
  var dailyWords = [];
  var flashWords = [];
  var flashIndex = 0;
  var quizData = [];
  var pageIndex = 0;
  var currentStory = STORIES[0];

  function currentPages() {
    return currentStory.pages;
  }

  function currentQuestions() {
    return currentStory.questions;
  }

  function updateBadge() {
    var el = document.getElementById("today-badge");
    if (!el) return;
    var parts = dailyConfig.date.split("-");
    el.textContent = "今日更新 " + Number(parts[1]) + "月" + Number(parts[2]) + "日 · 绘本《" + currentStory.titleZh + "》";
  }

  /* ========== 标签切换 ========== */
  var tabs = document.querySelectorAll(".tab-btn");
  var panels = document.querySelectorAll(".panel");
  for (var t = 0; t < tabs.length; t++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove("active");
        for (var j = 0; j < panels.length; j++) panels[j].classList.remove("active");
        btn.classList.add("active");
        document.getElementById(btn.getAttribute("data-tab")).classList.add("active");
      });
    })(tabs[t]);
  }

  /* ========== 每日单词 ========== */
  function renderDaily() {
    var seed = dailyConfig.wordSeed + dailyOffset * 97;
    dailyWords = seededShuffle(WORD_BANK, seed).slice(0, 6);
    var parts = dailyConfig.date.split("-");
    document.getElementById("daily-date").textContent =
      Number(parts[1]) + "月" + Number(parts[2]) + "日今日单词（早上自动更新）· 共 " + dailyWords.length + " 个，点喇叭听发音";

    var box = document.getElementById("daily-words");
    var html = "";
    for (var i = 0; i < dailyWords.length; i++) {
      var w = dailyWords[i];
      html += '<article class="word-card">' +
        '<div class="word-en">' + w.en + "</div>" +
        '<div class="word-phonetic">' + w.phonetic + "</div>" +
        '<div class="word-zh">' + w.zh + "</div>" +
        '<div class="example">' + w.example + "</div>" +
        '<button type="button" class="speak-btn" style="margin-top:12px" data-speak="' + w.en + '">🔊 朗读</button>' +
        "</article>";
    }
    box.innerHTML = html;

    var buttons = box.querySelectorAll("[data-speak]");
    for (var b = 0; b < buttons.length; b++) {
      buttons[b].addEventListener("click", function (ev) {
        speak(ev.currentTarget.getAttribute("data-speak"));
      });
    }
  }

  document.getElementById("refresh-daily").addEventListener("click", function () {
    dailyOffset += 1;
    renderDaily();
  });

  document.getElementById("speak-all").addEventListener("click", function () {
    var list = [];
    for (var i = 0; i < dailyWords.length; i++) list.push(dailyWords[i].en);
    speakList(list);
  });

  /* ========== 单词速记 ========== */
  function initFlash() {
    flashWords = seededShuffle(WORD_BANK, dailyConfig.wordSeed + 3).slice(0, 10);
    flashIndex = 0;
    showFlash();
  }

  function showFlash() {
    var w = flashWords[flashIndex];
    var card = document.getElementById("flash-card");
    card.classList.remove("flipped");
    document.getElementById("flash-front-text").textContent = w.en;
    document.getElementById("flash-back-text").textContent = w.zh;
    document.getElementById("flash-back-meta").textContent = w.phonetic + " · " + w.example;
    document.getElementById("flash-progress").textContent = (flashIndex + 1) + " / " + flashWords.length;
  }

  document.getElementById("flash-card").addEventListener("click", function () {
    document.getElementById("flash-card").classList.toggle("flipped");
  });
  document.getElementById("flash-flip").addEventListener("click", function () {
    document.getElementById("flash-card").classList.toggle("flipped");
  });
  document.getElementById("flash-prev").addEventListener("click", function () {
    flashIndex = (flashIndex - 1 + flashWords.length) % flashWords.length;
    showFlash();
  });
  document.getElementById("flash-next").addEventListener("click", function () {
    flashIndex = (flashIndex + 1) % flashWords.length;
    showFlash();
  });
  document.getElementById("flash-speak").addEventListener("click", function () {
    speak(flashWords[flashIndex].en);
  });

  /* ========== 每周测评 ========== */
  function buildWeeklyQuiz() {
    var seedBase = 0;
    var wk = weekKey();
    for (var c = 0; c < wk.length; c++) seedBase += wk.charCodeAt(c);
    var words = seededShuffle(WORD_BANK, seedBase).slice(0, 8);
    quizData = [];
    for (var idx = 0; idx < words.length; idx++) {
      var w = words[idx];
      var type = idx % 2;
      var wrongPool = [];
      for (var k = 0; k < WORD_BANK.length; k++) {
        if (WORD_BANK[k].en !== w.en) wrongPool.push(WORD_BANK[k]);
      }
      var wrongs = seededShuffle(wrongPool, idx * 17 + 5).slice(0, 3);
      var options;
      var answerText;
      var question;
      if (type === 0) {
        question = (idx + 1) + ". “" + w.en + "” 的中文意思是？";
        options = seededShuffle([w.zh, wrongs[0].zh, wrongs[1].zh, wrongs[2].zh], idx + 11);
        answerText = w.zh;
      } else {
        question = (idx + 1) + ". “" + w.zh + "” 对应的英文是？";
        options = seededShuffle([w.en, wrongs[0].en, wrongs[1].en, wrongs[2].en], idx + 23);
        answerText = w.en;
      }
      quizData.push({ question: question, options: options, answer: options.indexOf(answerText) });
    }

    var list = document.getElementById("quiz-list");
    var html = "";
    for (var i = 0; i < quizData.length; i++) {
      var item = quizData[i];
      html += '<div class="quiz-item" data-q="' + i + '"><h3>' + item.question + '</h3><div class="options">';
      for (var j = 0; j < item.options.length; j++) {
        html += '<label class="option"><input type="radio" name="q' + i + '" value="' + j + '" /><span>' +
          item.options[j] + "</span></label>";
      }
      html += "</div></div>";
    }
    list.innerHTML = html;
    document.getElementById("score-box").classList.remove("show");
    document.getElementById("score-box").textContent = "";
  }

  document.getElementById("submit-quiz").addEventListener("click", function () {
    var score = 0;
    for (var i = 0; i < quizData.length; i++) {
      var item = quizData[i];
      var block = document.querySelector('.quiz-item[data-q="' + i + '"]');
      var options = block.querySelectorAll(".option");
      var selected = block.querySelector('input[name="q' + i + '"]:checked');
      for (var o = 0; o < options.length; o++) {
        options[o].classList.remove("correct");
        options[o].classList.remove("wrong");
      }
      options[item.answer].classList.add("correct");
      if (selected) {
        var val = Number(selected.value);
        if (val === item.answer) score += 1;
        else options[val].classList.add("wrong");
      }
    }
    var box = document.getElementById("score-box");
    var stars = score >= 7 ? "⭐⭐⭐ 太棒了！" : score >= 5 ? "⭐⭐ 不错哦！" : "⭐ 再复习一下，你可以的！";
    box.textContent = "得分：" + score + " / " + quizData.length + "　" + stars;
    box.classList.add("show");
  });

  document.getElementById("reset-quiz").addEventListener("click", buildWeeklyQuiz);

  /* ========== 绘本 ========== */
  function renderBook() {
    var pages = currentPages();
    document.getElementById("book-title").textContent = "绘本阅读：《" + currentStory.titleZh + "》";
    document.getElementById("book-hint").textContent =
      "今日绘本会在每天早上自动更换。先读完再做 3 道题，可点“朗读本页”。";

    var pagesEl = document.getElementById("book-pages");
    var dotsEl = document.getElementById("page-dots");
    var html = "";
    var dots = "";
    for (var i = 0; i < pages.length; i++) {
      var p = pages[i];
      html += '<div class="book-page' + (i === pageIndex ? " active" : "") + '">' +
        '<div class="scene ' + p.scene + '">' +
        "<span>" + p.icons[0] + "</span><span>" + p.icons[1] + "</span><span>" + p.icons[2] + "</span>" +
        "</div><p class=\"story-text\">" + p.en + '<span class="zh">' + p.zh + "</span></p></div>";
      dots += '<span class="dot' + (i === pageIndex ? " on" : "") + '"></span>';
    }
    pagesEl.innerHTML = html;
    dotsEl.innerHTML = dots;

    document.getElementById("book-prev").disabled = pageIndex === 0;
    document.getElementById("book-next").textContent =
      pageIndex >= pages.length - 1 ? "去做练习" : "下一页";
  }

  function showReadingQuiz() {
    document.getElementById("book-reader").classList.add("hidden");
    document.getElementById("book-quiz").classList.remove("hidden");
    var questions = currentQuestions();
    var box = document.getElementById("reading-quiz");
    var html = "";
    for (var i = 0; i < questions.length; i++) {
      var item = questions[i];
      html += '<div class="quiz-item" data-rq="' + i + '"><h3>' + item.q + '</h3><div class="options">';
      for (var j = 0; j < item.options.length; j++) {
        html += '<label class="option"><input type="radio" name="rq' + i + '" value="' + j + '" /><span>' +
          item.options[j] + "</span></label>";
      }
      html += "</div></div>";
    }
    box.innerHTML = html;
    document.getElementById("reading-score").classList.remove("show");
  }

  document.getElementById("book-prev").addEventListener("click", function () {
    if (pageIndex > 0) {
      pageIndex -= 1;
      renderBook();
    }
  });

  document.getElementById("book-next").addEventListener("click", function () {
    if (pageIndex < currentPages().length - 1) {
      pageIndex += 1;
      renderBook();
    } else {
      showReadingQuiz();
    }
  });

  document.getElementById("book-speak").addEventListener("click", function () {
    var page = currentPages()[pageIndex];
    if (page) speak(page.en);
  });

  document.getElementById("submit-reading").addEventListener("click", function () {
    var score = 0;
    var questions = currentQuestions();
    for (var i = 0; i < questions.length; i++) {
      var item = questions[i];
      var block = document.querySelector('.quiz-item[data-rq="' + i + '"]');
      var options = block.querySelectorAll(".option");
      var selected = block.querySelector('input[name="rq' + i + '"]:checked');
      for (var o = 0; o < options.length; o++) {
        options[o].classList.remove("correct");
        options[o].classList.remove("wrong");
      }
      options[item.answer].classList.add("correct");
      if (selected) {
        var val = Number(selected.value);
        if (val === item.answer) score += 1;
        else options[val].classList.add("wrong");
      }
    }
    var box = document.getElementById("reading-score");
    var msg = score === 3 ? "满分！你是阅读小达人 🌟" : score === 2 ? "很棒，再看一遍故事会更好！" : "没关系，再读一遍绘本再试试～";
    box.textContent = "阅读理解得分：" + score + " / 3　" + msg;
    box.classList.add("show");
  });

  document.getElementById("reread-book").addEventListener("click", function () {
    pageIndex = 0;
    document.getElementById("book-quiz").classList.add("hidden");
    document.getElementById("book-reader").classList.remove("hidden");
    renderBook();
  });

  /* ========== 启动：本地日期 + 远端 daily.json ========== */
  function applyDailyConfig(cfg) {
    dailyConfig = cfg;
    currentStory = STORIES[((cfg.storyIndex % STORIES.length) + STORIES.length) % STORIES.length];
    dailyOffset = 0;
    pageIndex = 0;
    updateBadge();
    renderDaily();
    initFlash();
    buildWeeklyQuiz();
    document.getElementById("book-quiz").classList.add("hidden");
    document.getElementById("book-reader").classList.remove("hidden");
    renderBook();
  }

  function startApp() {
    var localCfg = buildLocalDailyConfig();
    applyDailyConfig(localCfg);

    // 远端每日配置（GitHub Action 每天早上更新），失败则继续用本地日期
    var url = "daily.json?t=" + encodeURIComponent(localCfg.date);
    try {
      fetch(url, { cache: "no-store" })
        .then(function (res) {
          if (!res.ok) throw new Error("no daily");
          return res.json();
        })
        .then(function (data) {
          if (!data || !data.date) return;
          // 若服务器已是今天或更新的内容，则采用服务器配置
          if (data.date >= localCfg.date) {
            applyDailyConfig({
              date: data.date,
              wordSeed: Number(data.wordSeed) || daySeedFromDate(data.date),
              storyIndex: Number(data.storyIndex) || 0
            });
          }
        })
        .catch(function () {});
    } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startApp);
  } else {
    startApp();
  }
})();
