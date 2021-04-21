<template>
	<div class="body">
		<span class="normal-text">Increment Technologies is a Software Development Company that specializes in Website and Mobile Application. The following technologies we're strategically chosen based on our developers' expertise creating an exceptional service to our clients. Increment uses these technologies depending on the client's qualifications. Innovating your business and integrating it with these technologies will create opportunities for the organization to grow. Allowing a centralized data storage, automation of tasks, reporting the progress or lags in an organization's activities, increasing efficiency, reducing cost, eliminating human errors, managing assets, and etc., will lead to convenience and retrenchment.</span>
		<br><br><br><br>
		<center><span class="title"><b>Web Development</b></span></center>
		<br><br>
		<div class="row no-gutters">
			<span class="col-md-3" v-for="(element, index) in web_development" :key="index">
				<center class="element">
					<img :src="element.img" class="element-image">
					<br><br>
					<b>{{ element.name }}</b>
					<br><br>
					<p>{{ element.description }}</p>
				</center>
			</span>
		</div>
		<br><br><br><br>
		<center><span class="title"><b>MOBILE DEVELOPMENT</b></span></center>
		<br><br>
		<div class="row no-gutters">
			<span class="col-md-3" v-for="(element, index) in mobile_development" :key="index">
				<center class="element">
					<img :src="element.img" class="element-image">
					<br><br>
					<b>{{ element.name }}</b>
					<br><br>
					<p>{{ element.description }}</p>
				</center>
			</span>
		</div>
		<br><br><br><br>
		<center><span class="title"><b>UI/UX Designs</b></span></center>
		<br><br>
		<div class="row no-gutters">
			<span class="col-md-3" v-for="(element, index) in ui_ux_designs" :key="index">
				<center class="element">
					<img :src="element.img" class="element-image">
					<br><br>
					<b>{{ element.name }}</b>
					<br><br>
					<p>{{ element.description }}</p>
				</center>
			</span>
		</div>
		<br><br><br><br>
		<center><span class="title"><b>SYSTEM ADMINISTRATOR</b></span></center>
		<br><br>
		<div class="row no-gutters">
			<span class="col-md-3" v-for="(element, index) in system_administrator" :key="index">
				<center class="element">
					<img :src="element.img" class="element-image">
					<br><br>
					<b>{{ element.name }}</b>
					<br><br>
					<p>{{ element.description }}</p>
				</center>
			</span>
		</div>
		<br><br><br><br>
		<center><span class="title"><b>LOWER LEVEL PROGRAMMING</b></span></center>
		<br><br>
		<div class="row no-gutters">
			<span class="col-md-3" v-for="(element, index) in lower_level_programming" :key="index">
				<center class="element">
					<img :src="element.img" class="element-image">
					<br><br>
					<b>{{ element.name }}</b>
					<br><br>
					<p>{{ element.description }}</p>
				</center>
			</span>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.element{
	border: 1px solid black;
	padding: 5px;
	padding-top: 20px;
	margin: 10px;
}
.element-image{
	width: 150px;
	height: 150px;
}
.title{
	text-align: center;
	font-size: 30px;
	text-weight: bold;
}
.normal-text{
	font-size: 18px;
	text-align: justify;
	text-justify: inter-word;
}
.body{
	padding-left: 7%;
	padding-right: 7%;
}
</style>
<script>
import ROUTER from 'src/router'
import COMMON from 'src/common.js'
import $ from 'jquery'
export default {
  mounted(){
    console.log(this.$route)
  },
  data(){
    return {
      common: COMMON,
      lower_level_programming: [{
         name: 'Assembly',
         description: "Assembly language, often abbreviated asm, is any low-level programming language in which there is a very strong correspondence between the insructions in the language and the architecture's machine code insructions.",
         img: require("assets/img/technologies/assembly.png")
      },{
         name: 'C Language',
         description: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.",
         img: require("assets/img/technologies/clanguage.png")
      },{
         name: 'C++',
         description: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.",
         img: require("assets/img/technologies/C++.png")
      },{
         name: 'IVHDL',
         description: "VHDL stands for very high-speed integrated circuit hardware description language. It is a programming language used to model a digital system by dataflow, behavioral and structural style of modelling.",
         img: require("assets/img/technologies/vhdl.png")
      },],
      system_administrator: [{
         name: 'CentOS',
         description: "CentOS is a Linux distribution (derived from Red Hat Entreprise Linux) that's popular with system admins, DevOps engineers, and home users alike. It's also used by many organizations for development and production servers.",
         img: require("assets/img/technologies/centos.png")
      },{
         name: 'Linux',
         description: "Linux is an open source operating system (OS). An operating system is the software that directly manages a system's hardware and resources, like CPU, memory, and storage. The OS sits between applications and hardware and make the connections between all of your software and the physical resources that do the work.",
         img: require("assets/img/technologies/linux.png")
      },{
         name: 'Amazon Web Services (AWS)',
         description: "AWS provides a massive global cloud infrastructure that allows you to quickly innovate, experiment and iterate. Instead of waiting weeks or months for hardware, you can instantly deploy new applications, instantly scale up as your workload grows, and instantly scale down based on demand.",
         img: require("assets/img/technologies/aws.png")
      },{
         name: 'cPANEL',
         description: "cPANEL is a popular control dashboard that helps you manage your web hosting server using a human-friendly web-based interface, it's especially popular with shared hosts, where it's the de facto solution provided by most affordable hosting providers.",
         img: require("assets/img/technologies/cpanel.png")
      }],
      ui_ux_designs:[{
         name: 'Adobe Photoshop',
         description: "Adobe Photoshop is the predominant photo editing and manipulation software on the market. Its uses range from the full-featured editing of large batches of photos to creating intricate digital paintings and drawings that mimic those done by hand.",
         img: require("assets/img/technologies/photoshop.png")
      },{
         name: 'Adobe Indesign',
         description: "Adobe InDesign is a desktop publishing and typesetting software application produced by Adobe Inc.. It can be used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books and ebooks.",
         img: require("assets/img/technologies/indesign.png")
      },{
         name: 'Adobe After Effects',
         description: "Adobe After Effects is a digital visual effects, motion graphics, and composing application developed by Adobe Systems and used in the post-production process of film making, video games and television production. Among other things, After Effects can be used for keying, tracking, compositing, and animation.",
         img: require("assets/img/technologies/aftereffects.png")
      },{
         name: 'Adobe XD',
         description: "Adobe XD is the Adobe prototyping tool for user experience and interaction designers. Adobe XD features are used for creatign wireframes, prototypes, and screen designs for digital products such as websites and mobile apps.",
         img: require("assets/img/technologies/Adobe XD.png")
      }],
      mobile_development:[{
        name: 'Java',
        description: "Java was the default language to write Android apps since the Android platform was introduced in 2008. Java is an Object-Oriented programming language that was originally developed by Sun Microsystems in 1995 (now it is owned by Oracle).",
        img: require("assets/img/technologies/java.png")
      },{
        name: 'Objective-C',
        description: "Objective-C is the primary programming language you use when writing software for OS X and iOS. It's a superset of the C programming language and provides object-oriented capabilities and a dynamic runtime.",
        img: require("assets/img/technologies/object-c.png")
      },{
        name: 'React-Native',
        description: "React Native is JavaScript framework, designed for building genuinely native apps for platforms like iOS and Android. It's based on a JavaScript library created by Facebook called React, and thus bring its power to native mobile app development.",
        img: require("assets/img/technologies/react-native.png")
      },{
        name: 'Android Development',
        description: "Android software development is the process by which applications are created by which applications are created for devices running the Android operating system. Google state that 'Android apps can be written using Kotlin, Java, and C++ languages' using the Android software development kit, while using other languages is also possible.",
        img: require("assets/img/technologies/androiddevelopment.png")
      }],
      web_development: [{
        name: 'Laravel',
        description: "Larevel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model-view-controller architechtural pattern and based on Symfony",
        img: require("assets/img/technologies/laravel.png")
      },{
        name: 'Vue.js',
        description: "Vue.js is a progressive framework for JavaScript used to build web interfaces and one-page applications. Not just for web interfaces, Vue.js is also used both for desktop and mobile app development with Electron framework.",
        img: require("assets/img/technologies/vuejs.png")
      },{
        name: 'Javascript',
        description: "JavaScipt is a client scripting language which is used for creating web pages. It is a standalone language developed in Netscape. It is used when a webpage is to be made dynamic and add special effects on pages like rollover, roll out and many types of graphics",
        img: require("assets/img/technologies/javascript.png")
      },{
        name: 'Node.js',
        description: "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices",
        img: require("assets/img/technologies/nodejs.png")
      },{
        name: 'React.js',
        description: "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        img: require("assets/img/technologies/reactjs.png")
      }]
    }
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    },
    scrollTo (id) {
      let height = $(window).height()
      $('html, body').animate({
        scrollTop: $(id).offset().top - parseInt(height * 0.1)
      }, 500)
    },
  }
}
</script>
