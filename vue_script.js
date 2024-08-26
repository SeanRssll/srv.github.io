	
	new Vue({
	    el: '#app',
	    vuetify: new Vuetify(),
	    data: {
            projectImg:[
                { src: 'image/portfolio/inventory.png',width:"carousel-image-portfolio"},
                { src: 'image/portfolio/invoice.png',width:"carousel-image-portfolio"},
                { src: 'image/portfolio/oms.png',width:"carousel-image-portfolio"},
                { src: 'image/portfolio/patients_record_system.png',width:"carousel-image-portfolio"},
                { src: 'image/portfolio/online_exam.png',width:"carousel-image-portfolio"},
                { src: 'image/portfolio/online_exam1.png',width:"carousel-image-portfolio"},
                { src: 'image/portfolio/online_exam2.png',width:"carousel-image-portfolio"},
                
            ],
			certImages: [
				{ src: 'image/certificates/Suiterus.jpg',width:"carousel-image"},
				{ src: 'image/certificates/Condor.jpg',width:"carousel-image"},
				{ src: 'image/certificates/Pcworx.jpg',width:"carousel-image"},
				{ src: 'image/certificates/Waltermart.jpg',width:"carousel-image"},
				{ src: 'image/certificates/UCC.jpg',width:"carousel-image"},
				{ src: 'image/certificates/FEU.jpg',width:"carousel-image-custom"}
				// Add more images as needed
			  ],
            skillset:[
                { src: 'image/skills/vuetify.png', title: 'VUETIFY', class:"skillsTitle1",level:"6",max_level:"10"},
                { src: 'image/skills/boostrap.png', title: 'BOOTSTRAP', class:"skillsTitle2",level:"8",max_level:"10"},
                { src: 'image/skills/vue.png', title: 'VUE JS', class:"skillsTitle3",level:"6",max_level:"10"},
                { src: 'image/skills/git.png', title: 'GIT', class:"skillsTitle4",level:"7",max_level:"10"},
                { src: 'image/skills/laravel.png', title: 'LARAVEL', class:"skillsTitle5",level:"5",max_level:"10"},
                { src: 'image/skills/jquery.png', title: 'JQUERY', class:"skillsTitle6",level:"6",max_level:"10"},
                { src: 'image/skills/mysql.png', title: 'MYSQL', class:"skillsTitle7",level:"8",max_level:"10"},
                { src: 'image/skills/html.png', title: 'HTML', class:"skillsTitle8",level:"8",max_level:"10"},
                { src: 'image/skills/css.png', title: 'CSS', class:"skillsTitle9",level:"10",max_level:"10"},
                { src: 'image/skills/axios.png', title: 'AXIOS', class:"skillsTitle10",level:"7",max_level:"10"},
                { src: 'image/skills/php.png', title: 'PHP', class:"skillsTitle11",level:"9",max_level:"10"},
                { src: 'image/skills/ajax.png', title: 'AJAX', class:"skillsTitle12",level:"9",max_level:"10"},


            ]
	    },methods: {
			scrollToContainer(data) {
				const element = document.getElementById(data);;
				if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
				}
			}
		}
	})
	