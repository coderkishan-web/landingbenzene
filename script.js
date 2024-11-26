

  // GSAP and ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".content-section").forEach((section, index) => {
  const tabButtons = document.querySelectorAll(".tabs button");
  
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => setActiveTab(index),
    onEnterBack: () => setActiveTab(index),
  });
});

// Set active tab based on index
function setActiveTab(index) {
  const tabs = document.querySelectorAll(".tabs button");
  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
  });
}

// Tab click scroll behavior
document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    gsap.to(window, {
      scrollTo: {
        y: targetSection.offsetTop,
        autoKill: true,
      },
      duration: 1.2,
    });
  });
});
// work section 
gsap.utils.toArray('.work-image').forEach((workImage) => {
  gsap.from(workImage, {
    scrollTrigger: {
      trigger: workImage,
      start: "top bottom",
      end: "top center",
      scrub: 2,
    },
    y: 100, 
    opacity: 0,
    ease: "power2.out",
  });
});



  document.querySelectorAll('.image-container img').forEach((img, index) => {
    gsap.fromTo(
      img,
      { y: 150 }, 
      {
        y: -150, 
        scrollTrigger: {
          trigger: img,
          start: "top bottom", 
          end: "bottom top", 
          scrub: true, 
        },
      }
    );
  });

// reviews

const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");

let isChickenVisible;

let people = [
	{
		photo:
			'url("assets/kaustubGupta.webp")',
		name: "Kaustav Das Gupta",
		profession: "Managing Director",
		description:
			" The team at Benzene Corporation knows what must be done and are willing to help you every step of the way to get it done. Considering their round the clock support and ability to make instantaneous last moment changes when necessary impressed me."
	},

	{
		photo:
			'url("assets/deepakpathal.webp")',
		name: "Deepak Pathak",
		profession: "Managing Director",
		description:
			"Benzene Corporation has helped add new dimensions to the purview of Online presence."
	},

	{
		photo:
			'url("assets/arun.webp")',
		name: "Arun Chamri",
		profession: "Founder",
		description:
			"I never knew how important of a role a website can play with regards to lead generation and customer acquisition, team Benzene"
	},

	{
		photo:
			'url("assets/umesh.png")',
		name: "Umesh Patil",
		profession: "Founder",
		description:
			"We hired Benzene Corp for our website redesign, and we couldn't be happier! The team delivered a stunning, user-friendly site on time. Their expertise in web development and SEO significantly boosted our online visibility. Highly recommend!"
	}
];


imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 3) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 3;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);



window.addEventListener("resize", () => {
	description.style.height = "100%";
});


// faq 
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const arrow = item.querySelector('.arrows');

  question.addEventListener('click', () => {
    const isOpen = answer.classList.contains('open');

    // Close all open answers
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.arrows').forEach(a => a.classList.remove('open'));

    // Toggle current item
    if (!isOpen) {
      answer.classList.add('open');
      arrow.classList.add('open');
    }
  });
});



// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.to(".down", {
  scrollTrigger: {
    trigger: ".faq-section", 
    start: "top bottom", 
    end: "bottom top", 
    onEnter: () => {
      gsap.delayedCall(1, () => {
        document.querySelector(".down").style.backgroundColor = "#0E1723"; 
        document.querySelector(".faq-section").style.color = "#fff"; 
        document.querySelector(".h2class").style.color = "#fff"; 

      });
    },
    onLeaveBack: () => {
      document.querySelector(".down").style.backgroundColor = ""; 
      document.querySelector(".faq-section").style.color = "#000"; 
      document.querySelector(".h2class").style.color = "#000"; 


    },
  }
});