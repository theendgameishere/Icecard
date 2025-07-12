// Block 1: Interactivity & Animations

// Initialize AOS for scroll animations
AOS.init({
    duration: 800,
    once: true,
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const heroHeight = document.querySelector('#hero').offsetHeight;
    if (window.scrollY > heroHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Block 2: Headless CMS Data Fetching (Example)
async function fetchAndRenderContent() {
    // Example fetch from a Headless CMS (uncomment and adjust for real endpoint)
    // const response = await fetch('https://api.sanity.io/v1/data/query/production?query=*[_type=="homepage"]');
    // const data = await response.json();
    // const content = data.result[0];

    // Mock JSON data for demonstration
    const data = {
        hero_title: "Step Right Up to the Digital Big Top",
        hero_subtitle: "Where we turn your wildest web dreams into reality (and occasionally into nightmares, but only if you ask nicely).",
        services_title: "Our Spectacular Services",
        service_title_1: "Web Design",
        service_description_1: "Our web designs are so stunning, they’ll make your visitors question their life choices. But in a good way.",
        service_title_2: "Web Apps",
        service_description_2: "We build web apps so intuitive, even your grandma could use them (no offense to grandmas, they’re great).",
        service_title_3: "Chatbots",
        service_description_3: "Our chatbots are so lifelike, you’ll swear they’re sentient. Don’t worry, they’re not plotting world domination... yet.",
        service_title_4: "AI Consultation",
        service_description_4: "We’ll teach you to harness AI so you can automate pesky tasks and focus on what matters: binge-watching cat videos.",
        about_title: "About Us",
        about_description: "We’re not your average web agency. Think of us as misfit geniuses who turned the digital world into our playground. Our team includes ex-circus performers, caffeine addicts, and one guy who claims he invented the internet (still verifying that).",
        about_image: "team-circus.jpg",
        cta_title: "Don’t Be a Spectator, Join the Show",
        cta_description: "Contact us now and let’s create some digital magic. Or just send us a meme. We’re cool with that too.",
        cta_button: "Step Into the Ring",
        footer_disclaimer: "Warning: Prolonged exposure to our site may cause laughter, creativity, and an urge to hire us. Proceed with caution."
    };

    // Populate content using data-cms-id attributes
    document.querySelectorAll('[data-cms-id]').forEach(element => {
        const id = element.getAttribute('data-cms-id');
        if (data[id]) {
            if (element.tagName === 'IMG') {
                element.src = data[id];
            } else {
                element.textContent = data[id];
            }
        }
    });
}

// Execute the function on page load
fetchAndRenderContent();
