const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');

let counter = 0;
const size = images[0].clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    carouselImages.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselImages.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
document.getElementById('suggestionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const suggestion = document.getElementById('suggestionInput').value;
    addSuggestion(suggestion);
    document.getElementById('suggestionInput').value = '';  // Clear input field
});







document.getElementById('submitIssueForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const issue = document.getElementById('issueInput').value;
    alert(`Your issue "${issue}" has been submitted!`);
    document.getElementById('issueInput').value = '';  // Clear input field
});






document.addEventListener("DOMContentLoaded", () => {
    // Hospital details
    const doctors = [
        { name: "Dr. Anil Sharma", location: "OPD", photo: "doctor1.jpg" },
        { name: "Dr. Kavita Singh", location: "Emergency", photo: "doctor2.jpg" }
    ];

    const nurses = [
        { name: "Nurse Rita", location: "Ward A", photo: "nurse1.jpg" },
        { name: "Nurse Maya", location: "Ward B", photo: "nurse2.jpg" }
    ];

    // School details
    const principal = { name: "Mr. Rajesh Kumar", photo: "principal.jpg" };
    const teachers = [
        { name: "Mrs. Pooja Sharma", subject: "Math", photo: "teacher1.jpg" },
        { name: "Mr. Sanjay Verma", subject: "Science", photo: "teacher2.jpg" }
    ];

    // MGNREGA workers
    const workers = [
        { name: "Mohan Lal", location: "Block A", photo: "worker1.jpg" },
        { name: "Sita Devi", location: "Block B", photo: "worker2.jpg" }
    ];

    // Village office officers
    const officers = [
        { name: "Mr. Suresh Kumar", designation: "Manager", photo: "officer1.jpg" },
        { name: "Mrs. Anita Verma", designation: "Clerk", photo: "officer2.jpg" }
    ];

    // Function to populate lists
    function populateList(listId, items) {
        const listElement = document.getElementById(listId);
        items.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${item.photo}" alt="${item.name}"> ${item.name} (${item.location})`;
            listElement.appendChild(li);
        });
    }

    // Populate the hospital details
    populateList("doctors-list", doctors);
    populateList("nurses-list", nurses);

    // Populate the school details
    document.getElementById("principal").innerHTML = `<img src="${principal.photo}" alt="${principal.name}"> ${principal.name}`;
    populateList("teachers-list", teachers.map(teacher => ({ ...teacher, location: teacher.subject })));

    // Populate the MGNREGA workers
    populateList("workers-list", workers);

    // Populate the village office officers
    populateList("officers-list", officers);
});






