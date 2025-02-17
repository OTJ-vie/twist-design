
window.onload = function() {
    setTimeout(() => {
        let spanText = document.getElementById("innertext");
        spanText.style.backgroundColor = "#ff5500";
        spanText.style.color = "white";
    }, 1000); 
};



const testimonials = [
    {
        text: "Twist make things very pretty, like the new Pied Piper, but better! They took the chaos and made it sing – it's like they grabbed a tech-savvy paintbrush and created a masterpiece. Thanks to Twist, we're the talk of the town, just like me, Jian-Yang, CEO extraordinaire!",
        author: "Jian-Yang",
        position: "CEO of New Pied Piper"
    },
    {
        text: "I may not get the first thing about code, but I sure as hell know good design when I see it, and Twist is totally nailing it! They turned Aviato's visual identity into something as bold and unforgettable as my own entrepreneurial spirit – it's like they got inside my head, man.",
        author: "Erlich",
        position: "Founder of Aviato"
    },
    {
        text: "Twist magically untangled the mess that was our branding strategy, turning it into a sleek masterpiece – it's like a coding genius's dream got drunk on espresso and started painting in design. Hooli's image has never been this sharp and distinctive, thanks to Twist's wickedly innovative touch.",
        author: "Gilfoyle",
        position: "Head of Systems at Hooli"
    },
    {
        text: "Twist totally gets the language of success – their designs talk louder than my best investment pitches, making every brand they touch an instant standout. As a venture capitalist, I've seen the way Twist strategically transforms companies, making them shine in a way that makes my spreadsheets jealous.",
        author: "Monica",
        position: "Partner at Raviga Capital"
    },
    {
        text: "Twist took my billion-dollar baby idea, slapped their design magic on it, and boom – branding so good it makes my other ventures look like lemonade stands. Twist isn't just a design agency; they're your ticket to the big leagues.",
        author: "Russ Hunneman",
        position: "Founder of Tres Commas"
    }
];

function showTestimonial(index) {
    document.getElementById("testimonial-text").innerHTML = testimonials[index].text;
    document.getElementById("author").innerText = testimonials[index].author;
    document.getElementById("position").innerText = testimonials[index].position;
    
    document.querySelectorAll(".images img").forEach(img => img.classList.remove("active"));
    document.querySelectorAll(".images img")[index].classList.add("active");
}

function loadVideo() {
    const videoContainer = document.querySelector('.tutorials-content');
    videoContainer.innerHTML = `
        <iframe width="560" height="315" 
            src="https://youtu.be/6R_saihG7uA" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
}

document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const parent = question.parentElement;
        const answer = parent.querySelector(".faq-answer");

        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== parent) {
                item.classList.remove("active");
                item.querySelector(".faq-answer").style.display = "none";
            }
        });

        parent.classList.toggle("active");
        answer.style.display = parent.classList.contains("active") ? "block" : "none";
    });
});

const services = [
    {
      id: 1,
      image: "image/web-design.png"
    },
    {
      id: 2,
      image: "image/product-design.jpg"
    },
    {
      id: 3,
      image: "/image/brand-identity.jpg"
    },
    {
      id: 4,
      image: "/image/framer-development.png"
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const serviceElements = document.querySelectorAll('.service');
    const serviceImage = document.querySelector('.service-image');
  
    serviceElements.forEach(service => {
      service.addEventListener('click', () => {
        serviceElements.forEach(s => s.classList.remove('active'));
        service.classList.add('active');
        
        const serviceId = parseInt(service.dataset.id);
        const serviceData = services.find(s => s.id === serviceId);
        
        if (serviceData) {
          serviceImage.style.opacity = '0';
          setTimeout(() => {
            serviceImage.src = serviceData.image;
            serviceImage.style.opacity = '1';
          }, 300);
        }
      });
    });
  });