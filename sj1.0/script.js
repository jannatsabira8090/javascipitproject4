var navLinks = document.getElementById("navLinks")
const facilitiesRow = document.getElementById("facilitiesRow")

function hidemenu() {
    navLinks.style.right = "-200px"
}

function showmenu() {
    navLinks.style.right = "0";
}

const facilities = [
    {
        image: "https://images.pexels.com/photos/221181/pexels-photo-221181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Interactive Video Lessons",
        description: "Provide engaging, high-quality video lessons with animations, real-life examples, and clear explanations. These videos simplify complex concepts, allowing students to pause, rewind, and review content at their own pace.",
    },
    {
        image: "https://images.pexels.com/photos/19253501/pexels-photo-19253501/free-photo-of-urbex-old-abandoned-lecture-hall-somewhere-in-belgium.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Live Classes",
        description: "Offer real-time, instructor-led sessions where students can interact, ask questions, and receive immediate feedback. Live classes build a sense of community and mimic a traditional classroom's interactive experience.",
    },
    {
        image: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Progress Tracking and Certificates",
        description: "Incorporate tools to monitor each student’s learning journey with personalized dashboards showing completed lessons, quiz scores, and milestones. Award recognized certificates upon course completion, adding value to their achievements.",
    },
]

facilities.forEach((facility) => {
    const facilityCol = document.createElement("div");
    facilityCol.className = "facilites-col";
    facilityCol.innerHTML = `
        <img src="${facility.image}" alt="${facility.title}">
        <h3>${facility.title}</h3>
        <p>${facility.description}</p>
    `;
    facilitiesRow.appendChild(facilityCol);
})