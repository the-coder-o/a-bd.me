export const BlogData = [
  {
    slug: 'tailwind-over-everything',
    blog_title: 'Tailwind over everything. Mocking the iOS Weather app UI',
    blog_description: 'This is why I will use Tailwind CSS for almost every project moving forward.',
    blog_publish_date: 'Dec 12, 2023',
    blog_main_image_url: 'https://www.b-r.io/_next/image?url=%2Fblog%2Ftailwind%2Fimage.png&w=750&q=100',
    blog_main_description:
      "Tailwind CSS is a utility-first CSS framework that has taken the web development world by storm. It has quickly become a go-to choice for developers who want to streamline their CSS workflow and build websites faster. If you're not already familiar with Tailwind, you may be wondering what all the fuss is about. In this blog, we'll explore some of the key benefits of using Tailwind CSS as well as some of the drawbacks of more traditional approaches to CSS development. By the end of this post, you'll have a better understanding of how Tailwind can make your development process more efficient and effective, and why it's quickly becoming a must-have tool for web developers of all levels.",
    blogs: [
      {
        blog_title: "Let's Talk about DX",
        blog_description:
          "In design, there's User Interface, User Experience, and Human Interface (as Apple calls it), but let's not forget about the Developer Experience. Tailwind is a great example of a tool that makes the developer experience better" +
          'Working with CSS files that go unused can be a frustrating experience for developers. When a CSS file contains styles that are no longer used in the project, it can make it difficult to find and update the styles that are needed. in the long run. Here are a couple key points to consider:',
        blog_list: ['Less time thinking of funky names', 'Reduce the size of your CSS files', 'Editing already existing styles feels safer'],
        blog_paragraph: [
          '1 - Tailwind helps you save time and effort by eliminating the need to create unique class names for every element in your UI. You no longer have to struggle to come up with abstract or irrelevant names such as "sidebar-inner-wrapper" or "content-container".',
          "2 - making it easier to manage and maintain. Unlike traditional CSS, where you need to create new stylesheets for every new feature, Tailwind's utility classes can be easily reused throughout your project, significantly reducing the need to write new CSS code.",
          "3 - because classes are local to the HTML elements. With global CSS, any change you make can have unforeseen consequences elsewhere in your project, but with Tailwind, you can make changes with confidence, knowing that you won't accidentally break anything.",
        ],
      },
      {
        blog_title: 'Looking forward',
        blog_description:
          "On the bright side, we're starting to see more and more tools prioritizing the developer experience. This is a huge plus for us developers who want to focus on building slices and functionality, rather than spending hours trying to figure out how to style a component.",
      },
      {
        blog_title: 'Speed and Efficiency',
        blog_description:
          'Check out this iOS weather widget. I was able to create this component in less than 5 minutes, which would have taken me much longer if I had to write the CSS and having to switch between files.',
      },
      {
        blog_title: 'The Power of Reusable Components',
        blog_description:
          'One of the key advantages of Tailwind CSS is its promotion of reusable components. Which is now a standard in the front-end world. By using pre-defined classes, Tailwind allows developers to create reusable components that can be easily used throughout the codebase.',
        blog_code_block:
          'const WeatherList = () => {\n' +
          '  return (\n' +
          '    <div className="my-8 flex flex-col gap-2">\n' +
          '      {data.map((item, index) => (\n' +
          '        <CityCard key={index} data={item} />\n' +
          '      ))}\n' +
          '    </div>\n' +
          '  );\n' +
          '};',
      },
      {
        blog_description:
          "Continuing with the weather theme here, let's create a reusable card component that can be used to display the current weather for a list of cities. With Tailwind, you can style your HTML elements without having to write any CSS rules. This can save you a lot of time, especially if you are working on a large project. Then when you need to reuse this, you don't have to go look for the styles.css file and copy it to a new location.",
        blog_code_block:
          'export default const CityCard = ({item}) => {\n' +
          '  return (\n' +
          '    <div\n' +
          '      className={`flex justify-between rounded-3xl bg-gradient-to-br text-white p-4 lg:px-8\n' +
          '      ${item.color}\n' +
          '    `}>\n' +
          '      <div>\n' +
          '        <p className="text-xl font-bold">{item.city}</p>\n' +
          '        <p className="text-sm font-medium mb-5 opacity-75">{item.time}</p>\n' +
          '        <p className="text-sm font-medium mt-auto">{item.state}</p>\n' +
          '      </div>\n' +
          '      <div className="flex flex-col justify-between">\n' +
          '        <p className="text-5xl">{item.temperature}°</p>\n' +
          '        <p className="text-sm font-medium mt-auto opacity-75">\n' +
          '          H:{item.temperature + 7}°\n' +
          '          L:{item.temperature - 7}°\n' +
          '        </p>\n' +
          '      </div>\n' +
          '    </div>\n' +
          '  );\n' +
          '};',
      },
      {
        blog_description:
          'So what? This approach not only makes development more efficient but also ensures that the UI is consistent across the project. Additionally, reusable components can be easily updated and maintained, reducing the amount of duplicate code and improving the overall quality of the codebase.',
      },
      {
        blog_title: 'What About Other UI Libraries?',
        blog_paragraph: [
          "While there are many UI libraries available, from my experience, I always found myself overriding the default styles of the library to match my project's design language. UI libraries can be a great choice for small projects where you want to quickly create a functional and visually appealing user interface.",
          'However, at scale, you typically have branding and a company design language that you want to follow or set forth. In these cases, using a UI library may not be the best approach as it can be challenging to customize the styles to fit your branding and design requirements.',
          "Instead, creating custom components using a utility-first CSS framework like Tailwind can be a better option, as it allows for more flexibility and control over the styling of the components. Overall, while UI libraries can be useful for smaller projects, it's important to consider the specific requirements and constraints of each project before making a decision on which approach to take.",
        ],
      },
    ],
    blog_tags: ['Styling', 'Css', 'TailwindCss'],
  },
  {
    slug: 'itpark-my-new-work-place',
    blog_title: 'It-Park of Uzbekistan, My new work place.',
    blog_description: 'I joined the It park company 2 months ago, and now we are doing various projects together with our team',
    blog_publish_date: 'Dec 18, 2023',
    blog_main_image_url: 'https://i.ibb.co/VvMzGpd/1.jpg',
    blog_main_description:
      'IT Park is a complex of facilities, buildings and structures designed to ensure the startup and market access, an extraterritorial free economic zone for IT companies, including integration with scientific and educational organizations.',
    blogs: [
      {
        blog_title: 'IT Park Today',
        blog_description:
          'On July 24, 2019 the first IT Park in the Republic of Uzbekistan opened its doors in Tashkent. In a given short amount of time, IT Park has already brought its first fruits in the form of 28 new startups, created dozens of projects in the field of information technology, as well as trainings, workshops and meetings to encourage the youth of our country, their interest in this area and develop computer literacy among the population.',
        blog_list: [
          'IT Park is a complex of facilities, buildings and structures designed to ensure the',
          'startup and market access, an extraterritorial free economic zone for IT',
          'companies, including integration with scientific and educational organizations.',
        ],
        blog_video_url: [
          {
            url_image: 'https://www.spot.uz/media/img/2022/08/dK6J7q16617527520523_l.jpg',
            url_video: 'https://youtu.be/zgFs5IZTHyA',
            video_title: 'How is compensation for international IT certifications?',
            video_description:
              'IT Park helped students get internships and covered 70% of their educational expenses. Students covered the rest of their tuition through an international certificate program.',
          },
        ],
        blog_alert:
          'We are looking for startup projects in the field of IT, aimed at the global market. If you meet the criteria described above, then join us for a three-month program to gain the skills necessary for entrepreneurs to create and manage their company.',
      },
      {
        blog_title: 'Do you want to become a resident?',
        blog_description:
          'Legal entities registered on the territory of the Republic of Uzbekistan can become the resident of IT Park. The status gives an opportunity to be exempted from paying taxes, as well as receive a number of benefits.',
        blog_paragraph: [
          '1 On November 20, 2019 President Republic of Uzbekistan Shavkat Mirziyoyev visited IT Park and laid the first symbolic stone for the construction of a new stage. “The stability of our economy, high-quality and efficient operation in all sectors, the convenience of life of the population depend on information technologies. Therefore, it is necessary to create more extensive opportunities for this sphere, the necessary infrastructure, to encourage specialists, to educate capable youth”, said Shavkat Mirziyoyev.',
          '2 During the first visit of the President of the Republic of Uzbekistan Shavkat Mirziyoyev to the Republic of India, which was held from September 30 to October 2, 2018, Uzbek and Indian Parties agreed to expand cooperation in the field of IT. The Uzbek side, together with the information and technology companies of India, expressed interest in creating an Information Technology Park in Uzbekistan on basis of their best practices in software development and accelerating startups. Thus, it can be noted that IT Park was created on the initiative of the President of the Republic of Uzbekistan to improve the startup ecosystem and startup projects and their implementation in our country.',
        ],
        blog_images: ['https://i.ibb.co/VvMzGpd/1.jpg', 'https://i.ibb.co/NtjRBjX/7.jpg', 'https://i.ibb.co/K5P43SQ/3.jpg', 'https://i.ibb.co/Wz343NF/6.jpg'],
      },
      {
        blog_title: 'The American publication Stock Investor highlights the attractiveness of the IT market in Uzbekistan for foreign investors',
        blog_description:
          'The American publication Stock Investor published an article on the rapid development of the IT sector in Central Asia, specifically in Uzbekistan.  The article underscores that Uzbekistan, among the five Central Asian republics, is drawing investor attention with its ambition to become a global player in the field of information technology. The swift economic growth in the region, especially in Kazakhstan and Uzbekistan, presents investment prospects in the IT sector. According to World Bank projections, the regional GDP may strengthen by 4.8% by the end of 2023, maintaining an average of 4.7% in the next couple of years.',
      },
      {
        blog_title: 'Create your future with IT Park University',
        blog_description:
          'The founders of the first new format university in Uzbekistan are EPAM Systems, one of the world leaders in software development, and IT Park. Bachelor students learn the basics of computer science and acquire critical teamwork and project execution skills. The study program covers all major topics in software engineering, focusing on real-life competencies and hands-on experience that are essential for a successful career in IT. The duration of the bachelor program is 3 years. In the process, students improve their knowledge of the English language, as the learning takes place in English.',
        blog_paragraph: [
          '1 IT Park of Uzbekistan is the leading center in the field of IT in the Republic of Uzbekistan, the first Information Technologies Park, which was created on the initiative of the President of Uzbekistan on January 10, 2019.',
          '2 The main goal of the organization is to develop the IT-sector in Uzbekistan, create the necessary infrastructure, reform the system of training in IT-specialties, launch promising start-up projects, and support IT-companies.',
          '3 To date, the organization has opened more than 200 IT-centers and is implementing the creation of more than 200 IT-schools throughout the country. The number of technopark resident companies is more than 500, and by the end of 2022, the number of branches and representative offices of the IT Park in the country and abroad will reach 14.',
        ],
        blog_video_url: [
          {
            url_image: 'https://www.park.edu/wp-content/uploads/2022/02/park-logo-white-on-red.jpg',
            url_video: 'https://youtu.be/4OfotY_jxXs',
            video_title: 'It park University of Uzbekistan',
            video_description: 'We invite applicants, their parents and everyone interested in IT education to our webinar "How to become a student of IT Park University".',
          },
        ],
      },
      {
        blog_title: 'It Education',
        blog_paragraph: [
          '1 Frontend: frontend is an external  part of web applications (websites) with which the user can interact and contact directly.',
          '2 Backend: backend is the internal part of the product, which is located on the server and is hidden from users. A variety of languages can be used for its development, for example, Python, PHP, Go, JavaScript, Java, C#.',
          '3 Android: android is the creation of applications and support on the Android operating system. It works not only on smartphones, but also on tablets, smart watches, and Smart TVs. It depends on the developer how convenient and functional the application will be.',
        ],
        blog_video_url: [
          {
            url_image: 'https://it-park.uz/storage/images/news/normal/thCTxYemJmikUYL7ZIPZZMOpl6iNx0KqwjXWuIHH.jpg',
            url_video: 'https://youtu.be/T1xG4xYh-u0',
            video_title: 'It park it education',
            video_description:
              'IT Park is looking for talented managers and teachers for a Front end and Back end in IT Centers in all regions of the republic for its team. You can submit your resume regardless of the region of residence since we will find you a job in the nearest IT Center!',
          },
        ],
      },
    ],
    blog_tags: ['New-Work', 'About', 'ItPark', 'It Park University', 'It Education'],
  },
  {
    slug: 'how-to-create-discord-app',
    blog_title: 'How to Create Discord App with nextjs14',
    blog_description: 'I did discord app with modern frameworks, in this project you can real time chatting, real time meeting from video,audio. After i tell you about what is the discord?.',
    blog_publish_date: 'Dec 19, 2023',
    blog_main_image_url: 'https://www.videogameschronicle.com/files/2021/05/discord-new-logo.jpg',
    blog_main_description:
      'Discord is a platform for hosting real-time text, video, and voice chat. While other social platforms are oriented around one central community, Discord is divided into servers or many smaller communities. Servers can be public or private spaces.',
    blogs: [
      {
        blog_title: 'Why i start this project?',
        blog_description:
          'The purpose of doing this project is that when I did this project I was afraid at the beginning, how do I start? which libraries to use, and I ended up taking a risk, and learned a lot of technology',
        blog_paragraph: [
          '1 My advice to you is to review what you already know before doing this project',
          '2 Because if you start a chapter with your knowledge, you will have a lot of trouble',
          '3 Before you start this project, you need to know the following libraries: React,Next,SocketIo,Uploadthing,Livekit,Shadcn/ui',
        ],
        blog_images: [
          'https://i.ibb.co/68RTTG3/Discord-Your-place-for-communication-and-relaxation-Google-Chrome-19-12-2023-12-18-00.png',
          'https://i.ibb.co/6JwGzgL/Discord-Your-place-for-communication-and-relaxation-Google-Chrome-19-12-2023-12-17-55.png',
          'https://i.ibb.co/fpKs6wx/Discord-Your-place-for-communication-and-relaxation-Google-Chrome-19-12-2023-12-19-26.png',
          'https://i.ibb.co/0h6jXvv/Discord-Your-place-for-communication-and-relaxation-Google-Chrome-19-12-2023-12-20-16.png',
        ],
      },

      {
        blog_title: 'What is the discord ?',
        blog_description:
          'People use Discord every day to discuss a variety of topics, from art projects and traveling with family to homework and mental health support. It is home to a wide variety of communities, but most of them are small groups of active people who communicate with each other on an ongoing basis.',
        blog_list: [
          'Discord was publicly released in May 2015 under the domain name discordapp.com.[18] According to Citron, they made no specific moves to target any specific audience, but some gaming-related subreddits quickly began to replace their IRC links with Discord links.',
          'In January 2016, Discord raised an additional $20 million in funding, including an investment from WarnerMedia (then TimeWarner).[21] In 2019, WarnerMedia Investment Group was shut down and acquired by AT&T, selling its equity.[22][23]',
          'Microsoft announced in April 2018 that it would provide Discord support for Xbox Live users, allowing them to link their Discord and Xbox Live accounts so that they can connect with their Xbox Live friends list through Discord.[24]',
        ],
        blog_video_url: [
          {
            url_image: 'https://cdn.mos.cms.futurecdn.net/my8AUCgUhKERqBBwdPQuXG-1200-80.jpg',
            url_video: 'https://youtu.be/TJ13BA3-NR4',
            video_title: 'Video about Discord App',
            video_description: 'Discord is a voice, video and text chat app that tens of millions of people aged 13 and over use to connect with friends and communities.',
          },
        ],
      },
      {
        blog_alert:
          "To integrate Socket.io with a Next.js 14 application, you can follow these general steps. Note that specific details might change based on updates to Next.js or Socket.io, so it's always a good idea to refer to the official documentation for the most up-to-date information.",
        blog_description: '1: Set up Socket.io server',
        blog_paragraph: ["In your Next.js application, you can set up a Socket.io server using a custom server. Create a server.js file in your project's root:"],
        blog_code_block:
          '// server.js\n' +
          "const express = require('express');\n" +
          "const http = require('http');\n" +
          "const { Server } = require('socket.io');\n" +
          '\n' +
          'const app = express();\n' +
          'const server = http.createServer(app);\n' +
          'const io = new Server(server);\n' +
          '\n' +
          "io.on('connection', (socket) => {\n" +
          "  console.log('A user connected');\n" +
          '\n' +
          "  socket.on('disconnect', () => {\n" +
          "    console.log('User disconnected');\n" +
          '  });\n' +
          '});\n' +
          '\n' +
          'server.listen(3001, () => {\n' +
          "  console.log('Socket.io server listening on *:3001');\n" +
          '});\n',
      },
      {
        blog_description: '2: Modify your package.json file to start the custom server:',
        blog_paragraph: [
          "In your Next.js components or pages, you can connect to the Socket.io server using the socket.io-client library: Make sure to replace the 'http://localhost:3001' with the actual URL of your Socket.io server.",
        ],
        blog_code_block: '{\n' + '  "scripts": {\n' + '    "dev": "next dev",\n' + '    "start": "node server.js"\n' + '  }\n' + '}\n',
      },
      {
        blog_description: '3: Connect from the Next.js client',
        blog_paragraph: ['In your Next.js components or pages, you can connect to the Socket.io server using the socket.io-client library:\n' + '\n'],
        blog_code_block:
          '// pages/index.js\n' +
          "import { useEffect } from 'react';\n" +
          "import io from 'socket.io-client';\n" +
          '\n' +
          'const Home = () => {\n' +
          '  useEffect(() => {\n' +
          "    const socket = io('http://localhost:3001');\n" +
          '\n' +
          "    socket.on('connect', () => {\n" +
          "      console.log('Connected to Socket.io server');\n" +
          '    });\n' +
          '\n' +
          "    socket.on('disconnect', () => {\n" +
          "      console.log('Disconnected from Socket.io server');\n" +
          '    });\n' +
          '\n' +
          '    // Add your custom event handlers here\n' +
          '\n' +
          '    return () => {\n' +
          '      socket.disconnect();\n' +
          '    };\n' +
          '  }, []);\n' +
          '\n' +
          '  return (\n' +
          '    <div>\n' +
          '      <h1>Next.js with Socket.io</h1>\n' +
          '      {/* Your component content */}\n' +
          '    </div>\n' +
          '  );\n' +
          '};\n' +
          '\n' +
          'export default Home;\n',
      },
      {
        blog_description: '5. Use Socket.io in your application',
        blog_paragraph: ['Now you can use the socket object in your components to emit and listen for events. For example:\n' + '\n'],
        blog_code_block:
          '// pages/index.js\n' +
          '// ... (previous code)\n' +
          '\n' +
          'const Home = () => {\n' +
          '  useEffect(() => {\n' +
          "    const socket = io('http://localhost:3001');\n" +
          '\n' +
          "    socket.on('connect', () => {\n" +
          "      console.log('Connected to Socket.io server');\n" +
          '    });\n' +
          '\n' +
          "    socket.on('disconnect', () => {\n" +
          "      console.log('Disconnected from Socket.io server');\n" +
          '    });\n' +
          '\n' +
          "    socket.emit('message', 'Hello, Socket.io!');\n" +
          '\n' +
          "    socket.on('reply', (data) => {\n" +
          "      console.log('Received reply:', data);\n" +
          '    });\n' +
          '\n' +
          '    return () => {\n' +
          '      socket.disconnect();\n' +
          '    };\n' +
          '  }, []);\n' +
          '\n' +
          '  return (\n' +
          '    <div>\n' +
          '      <h1>Next.js with Socket.io</h1>\n' +
          '      {/* Your component content */}\n' +
          '    </div>\n' +
          '  );\n' +
          '};\n' +
          '\n' +
          'export default Home;\n',
        blog_video_url: [
          {
            url_image: 'https://miro.medium.com/v2/resize:fit:1358/1*2FjKmcVYWfTq27alEWlRkA.png',
            url_video: 'https://youtu.be/B38biBZQJ3A',
            video_title: 'Video about how to connect socket.io with nextjs ?',
            video_description:
              "This example demonstrates emitting a 'message' event from the client to the server and listening for a 'reply' event from the server. You can customize these events based on your application's requirements.",
          },
        ],
      },
    ],
    blog_tags: ['Reactjs', 'Nextjs14', 'Prisma'],
  },
  {
    slug: 'looking-forward-to-2023',
    blog_title: '2023-yilga nazar',
    blog_description: "Eh 2023 yil ham tez o'tib ketti, bu yil men uchun judaham esda qolarli bolib qoldi negakaki dasturlash hayoti aynan shu yildan boshlangan edi.😊",
    blog_publish_date: 'Jun 30, 2024',
    blog_main_image_url: 'https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/ycxhg2aymuorqsgmitgfhg.jpg',
    blogs: [
      {
        blog_title: 'Yanvar oyi',
        blog_description:
          'Hammasi yanvardan boshlandi html css ni tugatib javascriptni boshladim, boshida juda ham qorqdim negaki men html,css dan boshqa hechnarsani bilmas edim til organaman deb hayolimga ham keltirmagan edim, vanihoyat birinchi javascript darsimiz bolib otdi men huddiki boshqa olamga chushib qolgan edim sababi birinchi martda dasturlash tili javascript bilan tanish gan edik',
        blog_image: ['https://wallpapercave.com/wp/wp7420966.jpg'],
        blog_list: [
          'Boshida taslim bolish hayolimga keldi ancha tushkunlikka tushib qolgan edim javascript judaham qiyin edi gruppa doshlarimi korib havasim kelar edi ozimga ozim aytim eh qanidi shularga oxshab men ham javascriptda o’zim hohlagan narsami yaratsam….',
          'Lekin ota onam ustozim tufayli taslim bolmadim balki ozim harakat qilib  video darsliklarni korib kechqurin bilan dars kitob oqib chiqardim va astalik bilan javascript men uchun judaham onson bolib qoldi. va shunday davom etdim.',
        ],
      },

      {
        blog_title: 'Fevral oyi',
        blog_description:
          'Boldi men hamma qiyinchilikni yengib otdim deb oylasam buyogda meni react.js kutib turgan edibirinchi darsimizda hech narsani tushunmadim. sal tushkulikga tushib qoldi va bu menga oddiy hol edi javascriptni handay yengib otganim esimga tushdi va aytdim buni ham yengib otaman deb ozimga vada berdim1,2,3 darslar sal qiynaldim, kegin yahshilab harakat qilib gruppadagi eng zor oquvchi boldim inson hayotda bir narsani niyyat qib qorqmasdan olga yursa hamma ishi ongidan kelishini tushunib yetdim',
      },

      {
        blog_title: 'Mart oyi',
        blog_description:
          'Eh kunlar tez otib keti va biz Nextjs ga ham yetib keldik nextjs men uchun judaham organishib onson boldi sababi reactjs yahwi bilsez nextjs juda onsozn bolib qolar ekan! va shunday qilib fullStack kursining 5oylik kursini tugatibham olgan edim. Men boldi mazza qiyichiliklar ortda qoldi deb oylasam buyogda meni backend kursi kutib turgan edi bu hursanchiliklarim uzoqa yetib bormadi😟',
      },

      {
        blog_title: 'Aprel oyi',
        blog_description:
          'Frontend tugagandan kegin orada ancha uzulishlar boldi lekin bu uzilishlar menga juda ham foyda bergan edi chunki frontendni yahshilab takrollab yangi narsalarni organim olgan edimsherilarim bilan harhir musobaqalarda qatnashdik va koplab tajribalarga ega boldik.',
      },

      {
        blog_title: 'May oyi',
        blog_description:
          'May men uchun oddiy oy bolib otdi sababi hali backend kursimiz boshlanmagan edi kuteverib ichim yonib ketti chunki orzuyim fullStack dasturchisi bolib  etish edibu oy ham turli hil figmadan maketla olib takrollash qildim, menda bitta odat bor edi figmadan kozimga zor koringan shablonlarni olib tashab shuni qilaman bitiraman deb ch-chulpa qib tashar edim bu odat juda ham yomon chunki inson bitta loyihani bosh ladimi uni ohirgacha yetqizmasdan boshqasiga otib ketsa bu odam hech qachon buyuk dasturchi bola olmaydi!!!',
      },

      {
        blog_title: 'Iyun oyi',
        blog_description:
          'Men uchun eng qiyin oy boldi chunki backend kursi boshlandi. birinchi dars men huddiki vashe boshqa olamga tushib qolgan edim chunki siz frontend zor bilsangiz ham backend kursini oqiyotganingizda yana noldan boshlashingiz kerak edi. RestApi, expressjs, nodejs, databasa kabi programmalar haqida gapirib berganlarida men oylab qoldim qanday qilib shuncha narsani miyyamizga sigdirib olamiz deb ozimga savol berdimva 1 oy faqat algaritm yechish boldi chunki algaritimni yahshi bilsangzi backend kursida qiynalmaysiz.',
        blog_alert:
          'Esingizda tuting Agar eng yahshi daturchi bolaman desangiz siz hayotingizni 80% ni dasturlash yonalishiga bagishlashingiz kerak negaki yahshi dasturchi bolish uchun kop voxt kerak boladi....',
      },

      {
        blog_title: 'Iyul oyi',
        blog_description:
          'Mana endi haqeqiy backendga qadam qoydik 2 oy boshlandi server,api,nodejs qanday ishlashini bilib oldik. boshida qiynaldim, hamma kabi harakat qildim intildim niyyat qildim, maqsad qoydim va astalik bilan bu qiyinchiliklarni yengib otdim.',
        blog_paragraph: [
          'Najot Talimda fullstack sohasi boyicha tadbir bolib otdi Googlda ishlidigan bitta undifined brat ozlari haqida gapirib berdila men esa juda ham hafa bolib ketdim negaki men biladigan bilimlar juda ham kam edi men oylardimki kop narsani bilaman deb.',
          'Afsuski organadigan narsalarim judaham kop ekan, hayol surib otirardim qanidi shu oka kabi kotta kompaniyalarda ishlasam exxxx.😞 oylab kayfiyatim kotarilardi bazida yiglab yuborgan payitlarim ham bolgan chunki menham boshqa dasturchilar kabi o’z yolimni topib ketarkinman deb kelajagim haqida qay urar edim  bu oy men uchuin judaham esda qolarli boldi…… ',
        ],
      },

      {
        blog_title: 'Avgust oyi',
        blog_description:
          'Hammasi yahshi keta yotgan edi birortaham imtihondan yeqilmagan edim lekin bu oy judaham dangasa boldim uy ishilarni qilmas edim qilsamam kochirar edim hali voxtim borku ulgiraman deb ozimni ovutar edim lekin unday bolmadi juda kuchli oyinga berilib ketdim 1oy boshimni oyindan kotara olamadim qayerda bolmay shu Grand Theft Aout onlini oynar edim… shu oy eng qiyin mavzular bor bayitda men oyin bilan kunimni otqizdim va qarabsizki imtihonham keldi hech narsani bilmayman sql boyicha na kochirishni ebladim va imtihondan yeqildim….',
        blog_image: ['https://assets.entrepreneur.com/content/3x2/2000/20151116223151-shutterstock-225404521.jpeg'],
      },

      {
        blog_title: 'Sentabr oyi',
        blog_description:
          'Imtihndan yiqilganimdan kegin juda ham katta hato qilganimni vanixoyat tushunib yetdim. oyin haqida oylamaslika harakat qildim va unitib yubordim 3oyni boshidan boshladim va birinchi dars sql edi ustozim Baxtiyor aka da qolgan 2oyni oqidim va shu kuni bir narsani tushinib yetdim menga yeqilganim judaham foyda berdi negaki eski ustozim darsni yahshi otmas edilar men yoqmas edibugin bu ustozi darsini otishlarini korib hayron qoldim huddiki chaynab ogzimizga solib qoyar edilar bu ustoz judaham tajribali dona dona darslarni otardilar….',
        blog_image: ['https://cubecreative.design/media/k2/items/cache/daf2bbcc481f0cf083f5d1524716cf65_L.jpg'],
      },

      {
        blog_title: 'Oktabr oyi',
        blog_description:
          'Bu oy juda ham esta qolarli bolib otdi negaki backend kursini ohirgi oyi edi mem html ni qanchalik onson bolsin backend ham shu kabi onsoz bolib qoldi bunga yordam mening 2-ustozim baxtiyoraka hissa qoshdilar',
        blog_paragraph: [
          'Agar shu oyinga kirib ketmaganimda haliham backendni yahshi ozlashtira olmas edim qarang hamma narsaning hikmati bor shu oyinga rahmte bu bomagnida men hozir balki It tashlab yuborgan bolarmidiiim? lekin unday bolmadi shu uztozimga qancha yahshilik qilsamam juda ham kam…..🙂 Rahmat sizga ustoz …..',
          'Bugun soat 09:00/28-oktabr bitiruv kechamiz edi hali ham ishonmasdim rostanam men fullsatck kursini tugatimi deb ozimga savol bera edim. va juda yahshi kayfiyat bilan bitirib ham oldik.🤩',
        ],
        blog_image: ['https://i.ibb.co/2nddSnh/0O8A0731.jpg'],
      },

      {
        blog_title: 'Noyabr oyi',
        blog_description:
          'Mana oqishlani ham tugatib oldim endi qiladigan yahshilab praktika qilib kompaniya ishga kirish edi. 1-oy yahshilab frontendni ham backndni ham takrollab portfolio uchun turli hil proektlar qildim. It park o’zbekistondagi eng katta kompaniya bu kompaniyaga ishga kiraman deb hecham oylamagandim va it parkga keldim meni darrov frontend boyicha ishga olishdi. Ishga kirgandan kegin boshida juda qorqdim negaki katta kompaniyalarda ancha qiyin loyihalar qilishar ekan sheriklarim yoza yotgan kodlarini korib aqldan ozar edim….',
        blog_image: [
          'https://embassylife.ru/wp-content/uploads/2023/02/o-CiTtOm5sj3ZL049ls7NciKjG9FqJq3.jpg',
          'https://i.ibb.co/NrBCf6C/photo-2024-01-10-17-32-16.jpg',
          'https://i.ibb.co/nCvSB1g/photo-2024-01-10-17-32-18.jpg',
        ],
      },
    ],
    blog_tags: ['2023', 'Life', 'Difficulties', 'New job', 'Goals'],
  },
]
