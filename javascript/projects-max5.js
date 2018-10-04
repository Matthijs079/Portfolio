const projects = {
	ods: { name: "Old Dance School" , developer: "FULL-STACK DEVELOPER", img: "../images/Matthijs_About.jpg" , url: "projects/ODSDetails.html"},
	ftsfWeb: { name: "Fair Trade Software Foundation Webshop" , developer: "FULL-STACK DEVELOPER", img: "../images/doggo.jpg" , url: "projects/FTSFWebDetails.html"},
	ftsfCMS: { name: "Fair Trade Software Foundation CMS" , developer: "FULL-STACK DEVELOPER", img: "../images/Matthijs_About.jpg" , url: "projects/FTSFCMSDetails.html"},
	smoel: {name: "Smoelenboek" , developer: "FULL-STACK DEVELOPER" , img: "../images/doggo.jpg" , url: "projects/SmoelDetails.html"},
	ODSAdmin: {name: "Old dance School Admin" , developer: "FULL-STACK DEVELOPER" , img: "../images/Matthijs_About.jpg" , url: "projects/ODSAdminDetails.html"}
};

const PROJECT_ITEM = document.querySelectorAll('.project__projectname');


const HEADER = document.querySelector('.project__title');
const DEVELOPER = document.querySelector('.project__developer');
const LINK = document.querySelector('.porject__link');
const IMG = document.querySelector('.project__projectimg');


PROJECT_ITEM.forEach(item => {
	item.addEventListener('click', () => {
		let projectInfor = projects[item.dataset.name];

		HEADER.innerHTML = projectInfor.name;
		DEVELOPER.innerHTML = projectInfor.developer;
		LINK.href = projectInfor.url;
		IMG.src = projectInfor.img;
	});
});
