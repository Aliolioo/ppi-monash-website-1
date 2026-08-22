// ============================================================================
// Part of the site content config (split from siteConfig.js).
// Re-exported by siteConfig.js — import from "../config/siteConfig" as usual.
// ============================================================================

// ─── 📰 Articles ─────────────────────────────────────────────────────────────
// Categories: "Student Guide" | "Event Recap" | "Campus Life" | "Accommodation"
// | "Finance & Banking" | "Transport" | "Food & Culture" | "Academic Tips"
// | "Career & Internship" | "Community News" | "Collaboration" | "Announcement"
// (add new ones by just using them — category filter buttons auto-generate)
//
// "body" supports a tiny markdown subset (see src/utils/markdown.js):
// blank-line-separated paragraphs, "## " subheadings, "- " list items,
// and **bold** / *italic* inline spans.
//
// MIGRATING ARTICLES FROM THE OLD WORDPRESS SITE?  See docs/MIGRATING_ARTICLES.md
// for the full step-by-step. There is a ready-to-copy PLACEHOLDER entry at the
// bottom of this array (id: "placeholder-article") marked `draft: true` so it
// stays hidden from the live site until you fill it in and remove the flag.
//
// Translatable fields (title, excerpt, body) accept EITHER a plain string OR a
// bilingual object { en: "...", id: "..." }. Plain strings show in both
// languages; use the object form once you have an Indonesian translation.
//
// To add a new article, copy-paste this template:
// {
//   id: "kebab-case-slug-year",        ← unique, used in the /articles/:id URL
//   title: { en: "Article Title", id: "Judul Artikel" },
//   date: "YYYY-MM-DD",                ← ISO format, used for sorting
//   dateDisplay: "DD Mon YYYY",
//   author: "Person or Department",
//   category: "Student Guide",         ← English; translated for display via tcat
//   tags: ["lowercase", "free-form", "tags"],   ← searched against
//   excerpt: { en: "Short preview…", id: "Pratinjau singkat…" },
//   body: { en: `Full body…`, id: `Isi lengkap…` },   ← or a plain `template string`
//   coverImage: null,                  ← image path, or null for icon fallback
//   externalUrl: null,                 ← set if originally published elsewhere
//   featured: false,                   ← true to show on the homepage
//   draft: false,                      ← true = hidden from listings/home (preview only)
//   relatedArticles: [],               ← explicit IDs, or [] to auto-pick by category
// },
//
export const ARTICLES = [
  {
    id: "one-world-2026",
    title: "One World: Indonesia Hand in Hand",
    date: "2026-05-20",
    dateDisplay: "20 May 2026",
    author: "PPI Monash Editorial",
    category: "Event Recap",
    tags: ["sports", "muiss", "community"],
    excerpt: {
      en: "MUISS OneWorld has once again delivered a wonderful event with students representing their country in four different sports!",
      id: "MUISS OneWorld kembali menghadirkan acara yang luar biasa dengan para mahasiswa yang mewakili negaranya di empat cabang olahraga berbeda!",
    },
    body: `In accordance with the common tradition. **MUISS OneWorld** has once again delivered us a wonderful event that celebrates all the different international cultures in Monash University! Unlike previous years that were mostly about bazaars and cultural showcases, this year added more competitive spirit through an **international sport tournament!** Students representing each country participated in **four different sport categories: futsal, basketball, dodge ball, and badminton.** This created an energetic atmosphere to encourage teamwork and friendly competition amongst international Monash students!

During its opening day, PPI committee members marched through the pathways while carrying Indonesian flags, cheering and chanting a hymn to motivate those who’re participating in the tournament! Chairs were quickly filled with anticipating audiences, eager to watch a battle unfold, and amongst them, our committee members were there wearing our signature jersey and supporting fellow Indonesians who represent our country throughout the tournament! Yet, despite the applause and encouragement to beat the other countries, we didn’t forget that this event is ultimately about **sportsmanship and international camaraderie.** Thus, the Indonesians played **not just for the sake of beating their opponents,** but to **learn more about them through their playstyle** as well. 

One of the highlights of the event was one of the dodgeball matches, specifically **Indonesia against Maldives and Brunei.** All players displayed quick reflexes and coordination that made the match look tense. Spectators were cheering and wondering which team would come out on top. Yet, the Indonesians showed a strong level of team communication that felt more cohesive as the match went on. It’s a brilliant spectacle when one of the players told the others to stand back to ensure they didn’t get hit by their opponents, and the player shot the ball straight into one of the Bruneians. The crowd erupted into cheers, especially the Indonesia supporters, who cheered the loudest. The match remained lively for most of the run, and in the end the Indonesians beat the Bruneians 2-0.

Another notable moment was in the badminton category, where both male and female players displayed agile and flexible skills in the game. There were many times where Indonesian players were able to get the first point of the game, often catching the opponent off guard. In fact, we have so many talented players this year, that by the end of the tournament, Indonesia managed to secure a **podium third place win in Badminton men singles!** It became one of the staples of the event, when the MC’s on the final day announced us achieving a spot on the podium. The PPI committee felt so proud of these players’ efforts to represent Indonesia in the best way

Unfortunately, we did experience some losses, as just before we could make it to the podium in the Basketball category, the team lost in the third place playoffs to Japan. Nevertheless, the fact that Indonesia managed to get so close to the podium is still impressive. We may have lost, but what matters is that the team did their best to proudly represent Indonesia.

Overall, this event based around sportsmanship and international rivalries was another success from MUISS. PPI is glad to have participated in this event and represented Indonesia once more with our hardworking and talented players. Here’s to hoping the next MUISS event will be another great one!

As we wait for that, **please remember to keep in touch with updates from PPI,** as new content will appear every so often. **We even recently hosted a new podcast episode, so please do watch that if you haven’t already!** Until the next new content, we hope you will **continue to support PPI and stay updated on the latest news!**`,
  coverImage: null,
  externalUrl: "https://ppimonashmalaysia.com/articles/one-world-2026/",
  featured: true,
  relatedArticles: ["study-tips-2026", "banking-101-malaysia-2026"],
},
  {
    id: "study-tips-2026",
    title: { en: "Study Tips from PPI", id: "Tips Belajar dari PPI" },
    date: "2026-02-10",
    dateDisplay: "10 Feb 2026",
    author: "PPI Monash Editorial",
    category: "Academic Tips",
    tags: ["study tips", "academic", "wellbeing"],
    excerpt: {
      en: "PPI is here to help by sharing five tips on how to balance your academics and social life as an international student.",
      id: "PPI hadir untuk membantu dengan berbagi lima tips menyeimbangkan akademik dan kehidupan sosial sebagai mahasiswa internasional.",
    },
    body: `Two months into the semester, many are **busy with their assignments** while **barely having enough time to socialize and spend time with other people.** Students still struggle to maintain a balanced lifestyle, so if you’re one of these students, **don’t worry!** Even our members in PPI are undergoing the same struggles, which is why we’re here to help by sharing you **five tips on** how to balance your academics & social life! These tips are simple and can be applied to almost any student, so we hope you can **make full use of these tips in the future!**

1. **Time Management**
   We can’t stress enough how important it is to plan ahead on how you’ll organize your schedule, from study time to social events. **Make a weekly schedule that allocates your tutorial classes, seminars, and social activities. Don’t forget to prioritize your academics and ensure that you have dedicated time to finish them.** This helps avert sudden changes and reduces stress significantly, allowing you to have time for both studies and social life.

2. **Non-Exclusive Study & Social life**
   Your academics and social life don’t have to be mutually exclusive. **Plan study groups together** or **attend workshops and conferences** to not only **grow academically,** but also **deepen your connection with friends.** You can even form new bonds in these social events, you never know! Embracing networking can not only **strengthen friendships,** but also **improve your experience** and open pathways to opportunities.

3. **Efficiency**
   While it’s important to allocate your time wisely, it’s equally important to **make full use of your time. Find work habits that can guarantee the most efficiency during your work hours and eliminate distractions so they don’t take away efficiency.** When you complete tasks productively, you have **more time to yourself** or to **spend time with friends!**

4. **Learn to Say No**
   We speak for everyone when we say it's hard to refuse offers to hang out with friends, but that’s why **establishing a boundary** is important! Learn to **politely decline invitations for activities in favor of more important ones like an upcoming test or assignment deadlines.** Besides, there is always another chance for future hangout events!

5. **Take Care of Yourself**
   Balancing studies and social life is not easy, hence it’s important to **take care of your physical and mental health. Exercise regularly, spend some time with your hobbies, and ensure you get enough sleep.** A healthy mind and body helps both your academic success and social interactions.

In conclusion, balancing your studies and community life can be challenging and requires practice. However, it’s incredibly important and rewarding so you can **make the most of your time in university.** Remember to frequently assess your progress: Are you balancing your academic pursuits and social life harmoniously or are there any tips or strategies you can implement to improve your university life? It may be tough at first, but **take things slow** and **embrace the journey.** We hope these tips will help you and please stay tuned for upcoming news from us!`,
    coverImage: null,
    externalUrl: "https://ppimonashmalaysia.com/articles/study-tips-2026/",
    featured: true,
    relatedArticles: [],
  },
  {
    id: "ramadhan-away-from-home-2025",
    title: { en: "Ramadhan Away From Home", id: "Ramadan Jauh dari Rumah" },
    date: "2025-03-05",
    dateDisplay: "5 Mar 2025",
    author: "Welfare Department",
    category: "Food & Culture",
    tags: ["ramadan", "culture", "community"],
    excerpt: {
      en: "Navigating the holy month as an Indonesian student abroad — finding community, iftar gatherings, and keeping traditions alive.",
      id: "Menjalani bulan suci sebagai mahasiswa Indonesia di luar negeri — menemukan komunitas, berbuka bersama, dan menjaga tradisi tetap hidup.",
    },
    body: `With Ramadhan underway, many new Muslim students struggle to celebrate the festivity while adjusting to a new environment and being away from their family for the first time. If you’re missing home, **don’t worry!** PPI is here to recommend several ways to ensure your first Ramadhan abroad is comfortable:

1. **Connect with a Muslim community**
   The biggest change for students is the missing community and common goal families provide during fasting. **Try to find friends or Muslim student groups who are fasting as well!** That way going through fasting feels more motivating and easier with people helping each other out! Luckily, Monash has their very own Islamic community! Find out more [here](https://www.monash.edu/).

2. **Maintain a Good Ramadan Schedule**
   Finding a Ramadan routine, especially without your family, is a tough task. It’s even tougher when you have to balance your class schedule and you feel like you’re not doing a good job growing in Allah. **That’s why it’s important to plan beforehand:** what time you will wake up for Suhoor, when Iftar begins, and even when you sleep. It’s best to get at least 8 hours of sleep each day to get enough energy for fasting! It’s important to not let yourself get too exhausted during the day to make fasting easier.

3. **Focus on Mental Health**
   Oftentimes, we focus so heavily on our routines and tasks that we forget to take things slow. Adapting to a new environment can be difficult for anyone, especially for international Muslims who’ve just moved into university. In PPI, we always remind our members to not put heavy pressure on themselves with how many tasks they have to manage. **That goes the same for you new students too!** Even while balancing the Ramadhan lifestyle and new adjustments, **remember to always check your mental health and talk to someone if you face any struggles!**

Hopefully these tips will help you get through the month of Ramadhan while you’re away from your parents and give you opportunities to connect with new friends and deepen your appreciation for the festivity! PPI wishes you a wonderful Ramadhan and an enjoyable first semester in Monash University!`,
    coverImage: null,
    externalUrl: "https://ppimonashmalaysia.com/articles/",
    featured: false,
    relatedArticles: [],
  },{
    id: "tips-and-tricks-cultural-events-2025",
    title: "Tips & Tricks for Making the Most of Cultural Events",
    date: "2025-05-29",
    dateDisplay: "29 May 2025",
    author: "PPI Monash Editorial",
    category: "Tips & Tricks",
    tags: ["university-life", "international-students", "tips", "monash"],
    excerpt: {
      en: "Starting university in a new country can be both exciting and overwhelming. Monash University Malaysia warmly welcomes international students each semester, offering academic excellence and a vibrant multicultural environment. No matter where you're from, this is the start of an unforgettable journey. Here are some key tips to help you adapt smoothly to university life.",
      id: "Memulai kehidupan universitas di negara baru bisa menjadi hal yang menyenangkan sekaligus menegangkan. Monash University Malaysia menyambut hangat para mahasiswa internasional setiap semester dengan menawarkan keunggulan akademik dan lingkungan multikultural yang dinamis. Dari mana pun Anda berasal, ini adalah awal dari perjalanan yang tak terlupakan. Berikut adalah beberapa tips utama untuk membantu Anda beradaptasi dengan lancar dalam kehidupan kampus.",
    },
    body: `Stepping into university life is both exciting and overwhelming, especially when you're starting in a new country. Monash University Malaysia proudly welcomes its vibrant international student community each semester, offering not just academic excellence, but also a multicultural environment for you to grow, connect, and thrive. Whether you're from across the region or a country far away, your journey here marks the beginning of an unforgettable chapter. Here are several important things that can help create a smoother adaptation process into your university life.

To kickstart your university experience, make sure you’ve sorted out the essentials:

*
- **Student ID and iKad:** Your Monash ID gives you access to campus facilities, events, and more. If you're an international student, iKad serves as your official identity card while studying in Malaysia. To get more information regarding these two, drop by the Student Hub to ask questions!
- **Timetable and Units:** Familiarize yourself with Web Enrollment System (WES) and Allocate+ so you can allocate your subjects early. This will help you secure your desired class slots faster and easier!
- **Transport:** Sunway City offers a free bus shuttle service that runs around Sunway, including to and from our campus. You can download the Sunway Super App for the bus route and operating hours. The BRT is also available and more reliable. For cheaper fares, you can apply for a student concession card that will get you 50% off for all public transportation in Malaysia. Check myRapid Concession Form for more information.
- **Banking & Finance:** Set up a Maybank account to make daily transactions easier! Remember that you need to submit your passport to campus by the time you arrive in Malaysia to get your student visa sticker and it takes a month for it to be returned. You can only register for a Maybank account after your passport has been returned to you with a student visa, so in the meantime, ensure you have sufficient cash! For more details, visit the Maybank office on campus, located right next to Subway.
- **Health Insurance & Support:** International students are automatically enrolled in health cover. Get to know your coverage and the campus health services.
- **Things to Have Around:** Malaysia’s weather can be a bit harsh, ranging from scorching sun to thunderstorms—sometimes both in one day! Always have an umbrella, a water tumbler, and a portable fan (if needed) with you!

Transitioning to university, especially in a different culture, takes time and effort. Here are some tips to make things less stressful:

- **Join Student Clubs:** Monash University Malaysia has a wide range of clubs, including student associations of different countries. Join events from your respective country’s student association to feel less homesick!
- **Attend Orientation Events:** Orientation week is crucial for new students as it provides valuable information that can help you understand how things work in Monash University Malaysia. This is also a perfect opportunity to make new friends! Remember, everyone else is just like you—new, curious, and unfamiliar. So don’t be afraid to reach out and say hi to someone sitting or standing next to you!
- **Time Management:** Here in Monash, most subjects require a lot of independent learning including pre-class reading, quizzes, and online lectures. Make sure you plan and organize your studies so you can balance it with a good social life.
- **Ask for Help:** If you’re feeling homesick, overwhelmed, or other psychological distress, keep in mind that Monash offers free counseling services for all students. Don’t hesitate to reach out, because here in Monash, you are never alone.

Visit this link for more information: [Counselling & Wellness – Monash University Malaysia](https://www.monash.edu.my/student-services/support-services/counselling-and-wellness)

University is not just about grades, it’s about growth. Make time for new friendships, explore Malaysian culture, and stay curious! Monash University Malaysia is more than just a campus, it’s a vibrant, global community where you belong. Welcome aboard, and here’s to a journey filled with endless possibilities!`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: ["study-playlist-2025"],
  },
  {
    id: "study-playlist-2025",
    title: "Study Playlist",
    date: "2025-06-14",
    dateDisplay: "14 June 2025",
    author: "PPI Eunoia",
    category: "Tips & Tricks",
    tags: ["music", "study-tips", "playlist", "productivity"],
    excerpt: {
      en: "As we’re entering the end of the semester, workloads are piling up. Whether you’re trying to finish an assignment, or catch up on your pre-recorded lectures, staying productive remains a challenge many of us face. However, the right music can make all the difference. PPI Eunoia has curated a playlist that creates a conducive studying environment to help you stay on track with your academics.",
      id: "Saat kita memasuki akhir semester, beban tugas mulai menumpuk. Baik Anda mencoba menyelesaikan tugas atau mengejar ketertinggalan rekaman kuliah, tetap produktif tetap menjadi tantangan bagi banyak dari kita. Namun, musik yang tepat bisa membuat perbedaan besar. PPI Eunoia telah mengkurasi daftar putar yang menciptakan suasana belajar yang kondusif untuk membantu Anda tetap fokus pada akademis.",
    },
    body: `As we’re entering the end of the semester, workloads are piling up. Whether you’re trying to finish an assignment, or catch up on your pre-recorded lectures, staying productive remains a challenge many of us face. However, the right music can make all the difference. PPI Eunoia has curated a playlist that creates a conducive studying environment to help you stay on track with your academics. Take a look at some of the standout tracks that provide the perfect company for studying:

    Listen to the full playlist here: [PPI Eunoia's Study Playlist on Spotify](https://open.spotify.com/playlist/47qhcaT6xuXXdiGFST63LX?si=Ot7lqffyRTK_wOyQtaar-Q)

1. **Shouldn’t Matter but It Does – John Mayer**
   The song combines gentle acoustic guitar tunes with John Mayer’s warm and soothing vocals that create a calming atmosphere.

2. **Chilly – NIKI**
   This song’s R&B, Lo-fi, and Jazz instrumentals are layered with Niki’s gentle vocals, which makes it a good company for your study session.

3. **Kiss of Life – Sade**
   The gentle sound of piano and trumpet acoustics, paired with a steady rhythm and soft vocals will help you focus quickly.

4. **Je te laisserai des mots – Patrick Watson**
   This timeless classical piece is known for its gentle, flowing melodies that soothe the mind and provide a serene environment for deep focus.

5. **Nocturne Op. 9 No. 2 – Frédéric Chopin**
   A delicate piano composition without lyrics that creates a peaceful atmosphere, ideal for a more focused study session.

6. **Cardigan – Taylor Swift**
   This song is a soft, melancholic track with gentle piano, airy vocals, and a dreamy folk-inspired production.

7. **Superposition – Daniel Caesar**
   This song is a mellow track with soft guitar, smooth vocals, and a gentle rhythm that creates a sense of warmth and tranquility.

8. **Say – Keshi**
   A catchy upbeat tune with soft vocals that can help maintain a positive mood while being productive.

9. **Sherbet Land – Mario Kart Theme Song**
   This playful theme song can refresh your energy and hype you up, especially when you’re rushing to finish your assignments at the last minute

Each of these songs will create the right ambience for a productive study session. From John Mayer to Lana Del Rey, this playlist caters to various music preferences, all while keeping you sharply focused. Plug in your earphones, press play, and let the music do the magic.`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: ["tips-and-tricks-cultural-events-2025"],
  },
  {
    id: "banking-101-malaysia-2026",
    title: {
      en: "Banking 101: Opening Your First Malaysian Bank Account",
      id: "Perbankan 101: Membuka Rekening Bank Malaysia Pertamamu",
    },
    date: "2026-01-15",
    dateDisplay: "15 Jan 2026",
    author: "PPI Monash Editorial",
    category: "Finance & Banking",
    tags: ["banking", "finance", "student guide"],
    excerpt: {
      en: "A step-by-step walkthrough of opening a bank account in Malaysia as a new international student — documents, timing, and which banks are most student-friendly.",
      id: "Panduan langkah demi langkah membuka rekening bank di Malaysia sebagai mahasiswa internasional baru — dokumen, waktu, dan bank mana yang paling ramah mahasiswa.",
    },
    body: `One of the first administrative tasks every new student faces is opening a local bank account. It sounds simple, but the process can be confusing if nobody warns you what to expect — so here's what you actually need.

## What to Bring

Most banks near Monash Malaysia (Sunway) will ask for the same core documents:

- Your original passport
- A copy of your student visa or visa approval letter
- A Student Verification Letter from the Monash student portal
- A completed account-opening form (usually available at the branch)

## Timing Matters

Try to open your account *within your first two weeks*, before your visa sticker is processed — some banks accept the approval letter as a temporary substitute, but policies vary by branch, so call ahead if you can.

**A tip from past students:** branches inside shopping malls (like Sunway Pyramid) tend to have shorter queues on weekdays than standalone branches. Bring a friend who's already been through the process if you can — having someone explain the form in person saves a lot of back-and-forth.`,
    coverImage: null,
    externalUrl: null,
    featured: true,
    relatedArticles: [],
  },
  {
    id: "settling-into-monash-2025",
    title: {
      en: "Settling Into Monash: A First-Semester Survival Guide",
      id: "Beradaptasi di Monash: Panduan Bertahan Semester Pertama",
    },
    date: "2025-08-01",
    dateDisplay: "1 Aug 2025",
    author: "Welfare Department",
    category: "Student Guide",
    tags: ["orientation", "student guide", "campus life"],
    excerpt: {
      en: "Everything we wish someone had told us before our first week at Monash Malaysia — from finding your way around campus to making your first friends.",
      id: "Semua hal yang kami harap seseorang beri tahu sebelum minggu pertama di Monash Malaysia — dari mengenali kampus hingga menjalin pertemanan pertama.",
    },
    body: `Your first week at Monash can feel overwhelming — new campus, new city, new everything. Here's a short guide from students who've been exactly where you are now.

## Before Classes Start

Walk the campus at least once before your first lecture. Knowing where Block H is *before* you're rushing to a 9am class makes a surprising difference to how calm your first week feels.

## Finding Your People

Orientation week activities can feel forced, but they're genuinely the fastest way to meet people. Beyond that:

- Join your faculty's student WhatsApp or Discord group early
- Say yes to the first PPI event you're invited to, even if you don't know anyone yet
- Sit with the same group in tutorials for the first few weeks — familiarity builds fast

**It gets easier.** Almost everyone we interviewed for this guide said the same thing: the first month is the hardest, and *then it just starts to feel like home.*`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: [],
  },
  {
    id: "shuttle-bus-survival-guide-2025",
    title: {
      en: "The Monash Shuttle Bus Survival Guide",
      id: "Panduan Bertahan Naik Bus Shuttle Monash",
    },
    date: "2025-09-12",
    dateDisplay: "12 Sep 2025",
    author: "PPI Monash Editorial",
    category: "Transport",
    tags: ["transport", "commute", "sunway"],
    excerpt: {
      en: "How to actually catch the shuttle bus on time, where it stops, and what to do when it doesn't show up — a practical guide for commuting students.",
      id: "Cara benar-benar mengejar bus shuttle tepat waktu, di mana haltenya, dan apa yang harus dilakukan saat bus tidak muncul — panduan praktis bagi mahasiswa komuter.",
    },
    body: `If you live off-campus around Sunway, the shuttle bus probably runs your life more than you'd like to admit. Here's how to make peace with it.

## Know the Real Schedule, Not the Posted One

The official timetable is a guideline at best. During peak hours, buses can run a few minutes early or late depending on traffic around the BRT line. Give yourself a 10-minute buffer if you have a class you absolutely cannot be late for.

Useful habits seasoned commuters swear by:

- Standing at the stop a few minutes early during exam season, when buses fill up fast
- Having a backup plan (Grab, walking, or a friend with a car) for when the shuttle is full
- Checking the driver group chat or app updates if your residence has one

**When all else fails**, walking from Sunway Pyramid to campus takes about 20 minutes — not glamorous, but reliable, and honestly a nice way to wake up before an early class.`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: [],
  },
  {
    id: "ppi-collab-spotlight-2026",
    title: {
      en: "Behind the Scenes: How PPI Builds Collaborations With Other Student Societies",
      id: "Di Balik Layar: Bagaimana PPI Membangun Kolaborasi dengan Himpunan Mahasiswa Lain",
    },
    date: "2026-04-02",
    dateDisplay: "2 Apr 2026",
    author: "External Relations Department",
    category: "Collaboration",
    tags: ["collaboration", "external relations", "community"],
    excerpt: {
      en: "A look at how PPI's External Relations department plans joint events with other student associations on campus — and what it takes to pull one off.",
      id: "Mengintip bagaimana departemen Hubungan Eksternal PPI merancang acara bersama himpunan mahasiswa lain di kampus — dan apa yang dibutuhkan untuk mewujudkannya.",
    },
    body: `Every joint event you see on our calendar — night markets, sports days, cultural showcases — starts months earlier as a quiet conversation between committee members from different student societies.

## Where Collaborations Start

Most partnerships begin informally, often at another society's own event. Someone from External Relations strikes up a conversation, exchanges contacts, and a rough idea starts to form. *Most ideas never make it past this stage* — but the ones that do tend to be the ones built on genuine shared interest, not just convenience.

## What It Actually Takes

Once an idea is greenlit, the real work begins:

- Aligning on a shared budget and who's responsible for what
- Booking venues that work for both societies' usual crowd sizes
- Cross-promoting through both societies' social media and WhatsApp groups

**The payoff is worth it.** Collaborative events consistently draw bigger, more diverse crowds than anything either society could pull off alone — and they're often where some of our members make friends outside the Indonesian community for the first time.`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: [],
  },
  {
    id: "merdeka-spirit-on-campus-2025",
    title: "Merdeka Spirit on Campus: Celebrating Independence Far From Home",
    date: "2025-08-20",
    dateDisplay: "20 Aug 2025",
    author: "Documentation Department",
    category: "Event Recap",
    tags: ["independence day", "culture", "community"],
    excerpt:
      "A recap of how PPI Monash brought Indonesian Independence Day celebrations to campus, complete with traditional games and a flag ceremony.",
    body: `Every August, PPI Monash takes a day to celebrate something that doesn't pause just because we're studying abroad: Indonesian Independence Day.

## A Flag Ceremony, Far From Home

This year's ceremony drew one of our biggest turnouts yet, with students gathering before sunset for a short but meaningful flag-raising and a moment of collective reflection on what home means when you're thousands of kilometres away from it.

## Games, Food, and a Lot of Noise

After the ceremony, the evening turned considerably louder. Traditional games like *panjat pinang* and balap karung had everyone — committee members included — laughing at themselves within minutes.

A few crowd favourites from the night:

- The sack race finals, which ended in a three-way photo finish
- A potluck table that ran out of food twice and got restocked twice
- An impromptu karaoke session that nobody planned but everyone joined

**Independence Day abroad will never feel quite like Independence Day at home** — but every year, PPI tries to close that gap a little more.`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: [],
  },
  
  {
    id: "“Kumpul Yuk!”: Sambutan Hangat untuk Para Siswa Baru Kami",
    title: "“Kumpul Yuk!”: A Warm Welcome to Our New Intakes",
    date: "2026-08-21",
    dateDisplay: "20 Aug 2026",
    author: "Events",
    category: "Event Recap",
    tags: [""],
    excerpt:
      "Just last week, PPI held an engaging event to welcome all Monash Indonesian students old and new to the new semester: a welcome party filled with games and challenges that encourage students to bond and enjoy themselves!",
    body: `Just last week, PPI held an engaging event to welcome all Monash Indonesian students old and new to the new semester: a welcome party filled with games and challenges that encourage students to bond and enjoy themselves! This semester, the theme is retro, with old-fashioned decorations and simple games. Although this party isn’t as flashy compared to our last events, the participants are still eager to compete in the games!

There are five games throughout the event. The first game, Song Association, had people try and guess songs containing a certain word spoken by the MC’s. There were times where the participants raised their hands even before the word was said and some even faked a song just to score the team a point! If the first game wasn’t competitive already, the second game, “Tebak kata” has participants try to guess a combination of letters and symbols that represent a word or phrase. Members of each team were thinking more thoughtfully for this one, but they started pointing fingers towards their teammates when they guessed the word. Overall, the games helped bring out the participant’s competitiveness to continue on with the games!

The next two games required more manpower than the last. The third game, Team Maze has players’ wrists being attached to a rope that connects to a marker. Their goal is to move the marker through a printed maze without hitting the walls, or they have to start from the beginning! Some teams managed to go through the maze first try, while others constantly hit walls and even made their own path through them! 

Afterwards, teams were escorted out into the fields where they’ll compete in Tunnel Vision. One teammate with a straw must traverse through a maze and not get hit by chairs that are placed randomly to place the straw in a bottle. However, they’re vision is covered and their teammates have to tell them which way to go without getting overpowered by the opposing team’s voice. Many players were screaming at the top of their lungs just to get their team to reach the end without fail! But many blindfolded teammates ended up getting confused, some even listened to the opposing team’s voice, which ended in them hitting the chairs and returning to the start!

After a break from the four games, the final game began. Newspaper Towers has all teams try and build the tallest tower out of newspaper and cardboard to test their teamwork. Things get creative as the participants use clever ways to build up the tower, from curling the newspaper into thin strips to using given cardboard to ensure the tower’s steady. Some even turned the newspapers into fans to stabilize the tower. But the most unique one is the team using full cardboard to ensure stability! Every team has a different tower, showing everyone’s creativity by the end of it.

Although some teams won over others, in the end PPI created an event that caters to all Indonesian students. Everyone enjoyed their time and PPI is glad to have created another special time for its community.`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: [],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // PLACEHOLDER / TEMPLATE — for migrating an article from the old WordPress
  // site. `draft: true` keeps it hidden from the homepage and the /articles
  // listing; you can still preview it at /articles/placeholder-article. To
  // publish: fill in the fields, then set `draft: false` (or delete the line).
  // Duplicate this whole object for each article you migrate. Full guide:
  // docs/MIGRATING_ARTICLES.md
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "placeholder-article",
    title: { en: "Untitled (migrated draft)", id: "Tanpa Judul (draf migrasi)" },
    date: "2026-01-01",
    dateDisplay: "1 Jan 2026",
    author: "PPI Monash Editorial",
    category: "Community News",
    tags: ["placeholder"],
    excerpt: {
      en: "Replace this with the article's one- or two-sentence summary.",
      id: "Ganti ini dengan ringkasan satu atau dua kalimat dari artikel.",
    },
    body: {
      en: `Paste the migrated article body here. Supported formatting:

## A subheading

A normal paragraph. Separate paragraphs with a blank line. Inline you can use **bold** and *italic*, and links like [PPI Monash](https://ppimonashmalaysia.com).

- A bullet point
- Another bullet point`,
      id: `Tempel isi artikel hasil migrasi di sini. Format yang didukung:

## Sebuah subjudul

Paragraf biasa. Pisahkan paragraf dengan satu baris kosong. Di dalam teks kamu bisa pakai **tebal** dan *miring*, serta tautan seperti [PPI Monash](https://ppimonashmalaysia.com).

- Poin daftar
- Poin daftar lainnya`,
    },
    coverImage: null,
    externalUrl: "https://ppimonashmalaysia.com/articles/REPLACE-WITH-SLUG/",
    featured: false,
    draft: true,
    relatedArticles: [],
  },
];
