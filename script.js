
window.onload = function() {
    setTimeout(() => {
        let spanText = document.getElementById("innertext");
        spanText.style.backgroundColor = "#ff5500";
        spanText.style.color = "white";
    }, 1000); // Delay of 500ms
};

const designItems = document.querySelectorAll(".design-item");
const image = document.getElementById("service-image");

designItems.forEach(designItem => {
    designItem.addEventListener("click", () => {
        designItems.forEach((i) => {
            if (i !== designItem) {
              i.classList.remove("active");
            }
          });
        designItem.classList.toggle("active");
        image.src = designItem.getAttribute("data-image");
        // document.body.appendChild(image);
    });
}); 

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