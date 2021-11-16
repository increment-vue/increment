<template>
  <div>
    <BreadCrumbs :title="'TECHNOLOGIES'" />
    <div class="container">
      <p>
        Increment Technologies is a Software Development Company that
        specializes in Website and Mobile Application. The following
        technologies were strategically chosen based on our developers’
        expertise creating an exceptional service to our clients. Increment uses
        these technologies depending on the client’s qualifications. Innovating
        your business and integrating it with these technologies will create
        opportunities for the organization to grow. Allowing a centralized data
        storage, automation of tasks, reporting the progress or lags in an
        organization’s activities, increasing efficiency, reducing cost,
        eliminating human errors, managing assets, and etc., will lead to
        convenience and retrenchment.
      </p>
      <NavBar :navbar="navbar" @status="retrieve" />
      <Techs v-once v-if="setStatus === 'web_development'" :height="'450'" :data="selectedTechs"/>
      <Techs v-once v-if="setStatus === 'mobile_development'" :height="'450'" :data="selectedTechs"/>
      <Techs v-once v-if="setStatus === 'ui_ux_designs'" :height="'450'" :data="selectedTechs"/>
      <Techs v-once v-if="setStatus === 'system_administrator'" :height="'450'" :data="selectedTechs"/>
      <Techs v-once v-if="setStatus === 'lower_level_programming'" :height="'450'" :data="selectedTechs"/>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.container {
  text-align: justify;
  min-height: 100vh;
  background-color: $white;
  padding-top: 40vh;
}

.holder {
  margin-bottom: 15vh !important;
}
</style>
<script>
import BreadCrumbs from "src/home/generic/breadCrumbs.vue";
import Techs from "src/home/generic/whiteCard.vue";
import NavBar from "src/home/generic/navigationBar.vue";
export default {
  components: {
    BreadCrumbs,
    Techs,
    NavBar,
  },
  data() {
    return {
      selectedTechs: [],
      setStatus: "web_development",
      navbar: [
        {
          name: "WEB",
          status: "web_development",
        },
        {
          name: "MOBILE",
          status: "mobile_development",
        },
        {
          name: "DESIGN",
          status: "ui_ux_designs",
        },
        {
          name: "ADMIN",
          status: "system_administrator",
        },
        {
          name: "LOWER LEVEL",
          status: "lower_level_programming",
        },
      ],
      technologies: [
        //LOWERLEVEL
        {
          title: "Assembly",
          description:
            "Assembly language, often abbreviated asm, is any low-level programming language in which there is a very strong correspondence between the insructions in the language and the architecture's machine code insructions.",
          src: require("assets/img/technologies/assembly.png"),
          status: "lower_level_programming",
        },
        {
          title: "C Language",
          description:
            "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.",
          src: require("assets/img/technologies/clanguage.png"),
          status: "lower_level_programming",
        },
        {
          title: "C++",
          description:
            "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.",
          src: require("assets/img/technologies/C++.png"),
          status: "lower_level_programming",
        },
        {
          title: "IVHDL",
          description:
            "VHDL stands for very high-speed integrated circuit hardware description language. It is a programming language used to model a digital system by dataflow, behavioral and structural style of modelling.",
          src: require("assets/img/technologies/vhdl.png"),
          status: "lower_level_programming",
        },
        //SYSTEM
        {
          title: "CentOS",
          description:
            "CentOS is a Linux distribution (derived from Red Hat Entreprise Linux) that's popular with system admins, DevOps engineers, and home users alike. It's also used by many organizations for development and production servers.",
          src: require("assets/img/technologies/centos.png"),
          status: "system_administrator",
        },
        {
          title: "Linux",
          description:
            "Linux® is an open source operating system (OS). An operating system is the software that directly manages a system's hardware and resources, like CPU, memory, and storage. The OS sits between applications and hardware and makes the connections between all of your software and the physical resources that do the work.",
          src: require("assets/img/technologies/linux.png"),
          status: "system_administrator",
        },
        {
          title: "Amazon Web Services (AWS)",
          description:
            "AWS provides a massive global cloud infrastructure that allows you to quickly innovate, experiment and iterate. Instead of waiting weeks or months for hardware, you can instantly deploy new applications, instantly scale up as your workload grows, and instantly scale down based on demand.",
          src: require("assets/img/technologies/aws.png"),
          status: "system_administrator",
        },
        {
          title: "cPANEL",
          description:
            "cPANEL is a popular control dashboard that helps you manage your web hosting server using a human-friendly web-based interface, it's especially popular with shared hosts, where it's the de facto solution provided by most affordable hosting providers.",
          src: require("assets/img/technologies/cpanel.png"),
          status: "system_administrator",
        },
        {
          title: "Google Cloud",
          description:
            "Google Cloud Platform provides infrastructure as a service, platform as a service, and serverless computing environments. In April 2008, Google announced App Engine, a platform for developing and hosting web applications in Google-managed data centers, which was the first cloud computing service from the company.",
          src: require("assets/img/technologies/googlecloud.png"),
          status: "system_administrator",
        },
        {
          title: "GoDaddy",
          description:
            "GoDaddy is the world's largest services platform for entrepreneurs around the globe. We're on a mission to empower our worldwide community of 20+ million customers — and entrepreneurs everywhere — by giving them all the help and tools they need to grow online.",
          src: require("assets/img/technologies/GoDaddy.png"),
          status: "system_administrator",
        },
        {
          title: "SiteGround",
          description:
            "Siteground is a web hosting provider that provides services for hosting websites, blogs, and e-commerce sites, and Siteground is used for registering domain names online.",
          src: require("assets/img/technologies/SiteGround.png"),
          status: "system_administrator",
        },
        {
          title: "Dedicated Server",
          description:
            'The definition of a dedicated server is "an enterprise-grade physical server used to host the applications and services of a single hosting client". Dedicated servers are typically used to host high-traffic websites, web applications, and for other hosting scenarios where performance is paramount.',
          src: require("assets/img/technologies/DedicatedServer.png"),
          status: "system_administrator",
        },
        //DESIGN
        {
          title: "Adobe Photoshop",
          description:
            "Adobe Photoshop is the predominant photo editing and manipulation software on the market. Its uses range from the full-featured editing of large batches of photos to creating intricate digital paintings and drawings that mimic those done by hand.",
          src: require("assets/img/technologies/photoshop.png"),
          status: "ui_ux_designs",
        },
        {
          title: "Adobe Indesign",
          description:
            "Adobe InDesign is a desktop publishing and typesetting software application produced by Adobe Inc.. It can be used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books and ebooks.",
          src: require("assets/img/technologies/indesign.png"),
          status: "ui_ux_designs",
        },
        {
          title: "Adobe After Effects",
          description:
            "Adobe After Effects is a digital visual effects, motion graphics, and composing application developed by Adobe Systems and used in the post-production process of film making, video games and television production. Among other things, After Effects can be used for keying, tracking, compositing, and animation.",
          src: require("assets/img/technologies/aftereffects.png"),
          status: "ui_ux_designs",
        },
        {
          title: "Adobe XD",
          description:
            "Adobe XD is the Adobe prototyping tool for user experience and interaction designers. Adobe XD features are used for creatign wireframes, prototypes, and screen designs for digital products such as websites and mobile apps.",
          src: require("assets/img/technologies/Adobe XD.png"),
          status: "ui_ux_designs",
        },
        {
          title: "Figma",
          description:
            "Figma is a digital design and prototyping tool. It is a UI and UX design application that you can use it to create websites, apps, or smaller user interface components that can be integrated into other projects.",
          src: require("assets/img/technologies/figma.png"),
          status: "ui_ux_designs",
        },
        //MOBILE
        {
          title: "Java",
          description:
            "Java was the default language to write Android apps since the Android platform was introduced in 2008. Java is an Object-Oriented programming language that was originally developed by Sun Microsystems in 1995 (now it is owned by Oracle).",
          src: require("assets/img/technologies/java.png"),
          status: "mobile_development",
        },
        {
          title: "Objective-C",
          description:
            "Objective-C is the primary programming language you use when writing software for OS X and iOS. It's a superset of the C programming language and provides object-oriented capabilities and a dynamic runtime.",
          src: require("assets/img/technologies/object-c.png"),
          status: "mobile_development",
        },
        {
          title: "React-Native",
          description:
            "React Native is JavaScript framework, designed for building genuinely native apps for platforms like iOS and Android. It's based on a JavaScript library created by Facebook called React, and thus bring its power to native mobile app development.",
          src: require("assets/img/technologies/react-native.png"),
          status: "mobile_development",
        },
        {
          title: "Android Development",
          description:
            'Android software development is the process by which applications are created for devices running the Android operating system. Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit, while using other languages is also possible.',
          src: require("assets/img/technologies/androiddevelopment.png"),
          status: "mobile_development",
        },
        //WEB
        {
          title: "Laravel",
          description:
            "Larevel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model-view-controller architechtural pattern and based on Symfony",
          src: require("assets/img/technologies/laravel.png"),
          status: "web_development",
        },
        {
          title: "Vue.js",
          description:
            "Vue.js is a progressive framework for JavaScript used to build web interfaces and one-page applications. Not just for web interfaces, Vue.js is also used both for desktop and mobile app development with Electron framework.",
          src: require("assets/img/technologies/vuejs.png"),
          status: "web_development",
        },
        {
          title: "Javascript",
          description:
            "JavaScipt is a client scripting language which is used for creating web pages. It is a standalone language developed in Netscape. It is used when a webpage is to be made dynamic and add special effects on pages like rollover, roll out and many types of graphics",
          src: require("assets/img/technologies/javascript.png"),
          status: "web_development",
        },
        {
          title: "Node.js",
          description:
            "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices",
          src: require("assets/img/technologies/nodejs.png"),
          status: "web_development",
        },
        {
          title: "React.js",
          description:
            "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
          src: require("assets/img/technologies/reactjs.png"),
          status: "web_development",
        },
        {
          title: "React Native",
          description:
            "React Native Web is an awesome web development library available for frontend developers. The beauty of React Native Web is that it can be used to run an application on any platform just using a single codebase.",
          src: require("assets/img/technologies/react-native.png"),
          status: "web_development",
        },
        {
          title: "API Integrations",
          description:
            "API integration can be defined as the process of creating a means for two or more APIs to share data and communicate with each other without human interruption. It involves the use of APIs to enable communication between two web tools or applications.",
          src: require("assets/img/technologies/api-integration.png"),
          status: "web_development",
        },
        {
          title: "Bootstrap",
          description:
            "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
          src: require("assets/img/technologies/Bootstrap.png"),
          status: "web_development",
        },
        {
          title: "Android Development",
          description:
            'Android software development is the process by which applications are created for devices running the Android operating system. Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit, while using other languages is also possible.',
          src: require("assets/img/technologies/androiddevelopment.png"),
          status: "web_development",
        },
        {
          title: "iOS Development",
          description:
            "iOS application development is the process of making mobile applications for Apple hardware, including iPhone, iPad and iPod Touch. The software is written in the Swift programming language or Objective-C and then deployed to the App Store for users to download.",
          src: require("assets/img/technologies/ios.png"),
          status: "web_development",
        },
        {
          title: "Java",
          description:
            "Java is a commonly used language for web development, especially on the server-side. Java web applications are distributed applications that run on the internet. Web development with Java allows us to create dynamic web pages where users can interact with the interface.",
          src: require("assets/img/technologies/java.png"),
          status: "web_development",
        },
        {
          title: "Wordpress",
          description:
            "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes.",
          src: require("assets/img/technologies/tech-wordpress.png"),
          status: "web_development",
        },
        {
          title: "Shopify Storefront + API",
          description:
            "Storefront API gives you full creative control to add Shopify buying experiences anywhere your customers are, including websites, apps, and video games. Storefront API is useful when Shopify merchants have custom requirements not met by existing channels like online store or POS.",
          src: require("assets/img/technologies/storefrontapi.png"),
          status: "web_development",
        },
        {
          title: "PHP",
          description:
            "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications. PHP stands for Hypertext Pre-processor, that earlier stood for Personal Home Pages. PHP scripts can only be interpreted on a server that has PHP installed.",
          src: require("assets/img/technologies/php.png"),
          status: "web_development",
        },
        {
          title: "CodeIgniter",
          description:
            "CodeIgniter is a PHP MVC framework used for developing web applications rapidly. CodeIgniter provides out of the box libraries for connecting to the database and performing various operations like sending emails, uploading files, managing sessions, etc.",
          src: require("assets/img/technologies/codeigniter.png"),
          status: "web_development",
        },
        {
          title: "HTML5",
          description:
            "HTML5 is a programming language whose acronym stands for Hyper Text Markup Language. It is a system that allows the modification of the appearance of web pages, as well as making adjustments to their appearance. It also used to structure and present content for the web.",
          src: require("assets/img/technologies/html5.png"),
          status: "web_development",
        },
        {
          title: "CSS3",
          description:
            "CSS3 is the latest version of the CSS specification. CSS3 adds several new styling features and improvements to enhance the web presentation capabilities. Note: Our CSS tutorial will help you to learn the fundamentals of the latest CSS3 language, from the basic to advanced topics step-by-step.",
          src: require("assets/img/technologies/css3.png"),
          status: "web_development",
        },
        {
          title: "Xampp",
          description:
            "XAMPP is a free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages.",
          src: require("assets/img/technologies/xampp.png"),
          status: "web_development",
        },
        {
          title: "Wampp",
          description:
            "WampServer refers to a solution stack for the Microsoft Windows operating system, created by Romain Bourdon and consisting of the Apache web server, OpenSSL for SSL support, MySQL database and PHP programming language",
          src: require("assets/img/technologies/wampp.png"),
          status: "web_development",
        },
        {
          title: "MySQL",
          description:
            "MySQL is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications. The most common use for mySQL however, is for the purpose of a web database.",
          src: require("assets/img/technologies/mysql.png"),
          status: "web_development",
        },
        {
          title: "Woocommerce Integration",
          description:
            "WooCommerce is a plugin that integrates easily with your existing WordPress site, turning your site into a fully functional WordPress e-commerce website with just a few clicks. ",
          src: require("assets/img/technologies/woocommerce.png"),
          status: "web_development",
        },
        {
          title: "Alibaba Dropshipping",
          description:
            "Alibaba is a great platform for dropshippers because a variety of products are available on the platform. One can literally get things for pennies and sell them for more to earn healthy profits. There is a wide variety of products available on Alibaba so you can always get one for lower price.",
          src: require("assets/img/technologies/alibaba.png"),
          status: "web_development",
        },
        {
          title: "Amazon Dropshipping",
          description:
            "Amazon dropshipping is a business model where you list products on Amazon and sell them, without actually owning the inventory or delivering the items to customers. You are essentially running a business on Amazon without buying any stock or making upfront investments.",
          src: require("assets/img/technologies/amzondropshipping.png"),
          status: "web_development",
        },
        {
          title: "Shopify",
          description:
            "Shopify is an ecommerce platform that hosts your online store. It helps organize the layout of your store's appearance through themes (which you're free to modify or change any way you want). It also offers payment processing, which allows you to accept and receive payment for the products you sell.",
          src: require("assets/img/technologies/shopify.png"),
          status: "web_development",
        },
        {
          title: "Paypal API Integration",
          description:
            "Use the Payments REST API to easily and securely accept online and mobile payments. You can enable customers to make PayPal payments with only a few clicks, depending on the country. Important: The use of the PayPal REST /payments APIs to accept credit card payments is restricted.",
          src: require("assets/img/technologies/paypal.png"),
          status: "web_development",
        },
        {
          title: "Stripe API Integration",
          description:
            "The Stripe API allows developers to access the functionality of Stripe. Stripe is a service that allows users to accept payments online, specifically developers. With the Stripe application, users can keep track of payments, search past payments, create recurring charges, and keep track of customers.",
          src: require("assets/img/technologies/STRIPE.png"),
          status: "web_development",
        },
        {
          title: "Instagram API Integration",
          description:
            "The Instagram Basic Display API allows users of your app to get basic profile information, photos, and videos in their Instagram accounts. The API can be used to access any type of Instagram account but only provides read-access to basic data.",
          src: require("assets/img/technologies/instagram.png"),
          status: "web_development",
        },
        {
          title: "Google API Integration",
          description:
            "Google APIs are application programming interfaces (APIs) developed by Google which allow communication with Google Services and their integration to other services. Examples of these include Search, Gmail, Translate or Google Maps.",
          src: require("assets/img/technologies/google.png"),
          status: "web_development",
        },
        {
          title: "Facebook API Integration",
          description:
            "Facebook APIs are the primary way to connect with the massive Facebook platform programmatically. Third-party developers create cool Facebook apps, games, steam live programmatically, run automated marketing campaigns, manage their business pages all with the help of the Facebook APIs.",
          src: require("assets/img/technologies/fb.png"),
          status: "web_development",
        },
        {
          title: "Messaging",
          description:
            "Messaging apps are apps and platforms that enable instant messaging. Many such apps have developed into broad platforms enabling status updates, chatbots, payments and conversational commerce.",
          src: require("assets/img/technologies/mesaging.png"),
          status: "web_development",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.technologies.forEach((element) => {
      if (element.status === this.setStatus) {
        this.selectedTechs.push({
          title: element.title,
          description: element.description,
          src: element.src,
          withButton: false,
          status: element.status,
        });
      }
    });
  },
  methods: {
    retrieve(status) {
      this.setStatus = status;
      let newData = [];
      this.technologies.forEach((element) => {
        if (element.status === status) {
          newData.push({
            title: element.title,
            description: element.description,
            src: element.src,
            withButton: false,
            status: element.status,
          });
        }
      });
      this.selectedTechs = newData;
    },
  },
};
</script>
