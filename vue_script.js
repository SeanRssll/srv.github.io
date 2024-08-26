	
	new Vue({
	    el: '#app',
	    vuetify: new Vuetify(),
	    data: {
			images: [
				{ src: 'image/certificates/Suiterus.jpg', alt: 'Image 1',width:"carousel-image"},
				{ src: 'image/certificates/Condor.jpg', alt: 'Image 2',width:"carousel-image"},
				{ src: 'image/certificates/Pcworx.jpg', alt: 'Image 3',width:"carousel-image"},
				{ src: 'image/certificates/Waltermart.jpg', alt: 'Image 4',width:"carousel-image"},
				{ src: 'image/certificates/UCC.jpg', alt: 'Image 5',width:"carousel-image"},
				{ src: 'image/certificates/FEU.jpg', alt: 'Image 6',width:"carousel-image-custom"}
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
	