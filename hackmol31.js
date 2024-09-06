document.addEventListener("DOMContentLoaded", () => {
    // Hospital details
    const doctors = [
        { name: "Dr. Anil Sharma", location: "OPD", availability: "9 AM - 5 PM", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqbEQd731MURblWcnSySkSlOYs1ezbJ3XPw&s" },
        { name: "Dr. Kavita Singh", location: "Emergency", availability: "24/7", photo: "https://img.mensxp.com/media/content/2018/Aug/types-of-single-men-who-re-in-their-30-s-which-one-are-you-740x500-1-1533564456.jpg?w=900&h=609&cc=1" }
    ];

    const nurses = [
        { name: "Nurse Rita", location: "Ward A", availability: "9 AM - 6 PM", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsoslcNvEZg43ttsToqg3cc0dH-RAD0vaIA&s" },
        { name: "Nurse Maya", location: "Ward B", availability: "6 AM - 3 PM", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_9Z2B5r2UiEIdDD7tXJzci-vIu8Js_jLFg&s" }
    ];

    // School details
    const principal = { name: "Mr. Rajesh Kumar", photo: "#", availability: "10 AM - 4 PM" };
    const teachers = [
        { name: "Mrs. Pooja Sharma", subject: "Math", availability: "8 AM - 2 PM", photo: "https://img.freepik.com/free-photo/portrait-young-indian-businessman-student-sitting-with-pen_1262-17490.jpg" },
        { name: "Mr. Sanjay Verma", subject: "Science", availability: "9 AM - 3 PM", photo: "https://www.shutterstock.com/shutterstock/photos/2114915276/display_1500/stock-photo-happy-joyful-smiling-young-indian-man-looking-aside-up-thinking-of-new-good-opportunities-dreaming-2114915276.jpg" }
    ];

    // MGNREGA workers
    const workers = [
        { name: "Mohan Lal", location: "Block A", photo: "https://www.shutterstock.com/shutterstock/photos/2060102003/display_1500/stock-photo-indian-construction-site-manager-standing-with-folded-arms-wearing-safety-vest-and-helmet-thinking-2060102003.jpg" },
        { name: "Sita Devi", location: "Block B", photo: "https://www.shutterstock.com/shutterstock/photos/2220102995/display_1500/stock-photo-portrait-indian-woman-worker-supervisor-smart-confident-look-with-engineer-safety-suit-work-in-2220102995.jpg" }
    ];

    // Village office officers
    const officers = [
        { name: "Mr. Suresh Kumar", designation: "Manager", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzBjP2onULHLeoRFJLqw77wCvvHtS-3B0Bw&s" },
        { name: "Mrs. Anita Verma", designation: "Clerk", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzBjP2onULHLeoRFJLqw77wCvvHtS-3B0Bw&s" }
    ];

    // Function to populate lists with hover details
    function populateList(listId, items, showAvailability = false) {
        const listElement = document.getElementById(listId);
        items.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${item.photo}" alt="${item.name}">
                <span>${item.name}</span>
                <div class="hover-details">
                    <p>Location: ${item.location}</p>
                    ${showAvailability ? `<p>Availability: ${item.availability}</p>` : ""}
                </div>`;
            listElement.appendChild(li);
        });
    }

    // Populate the hospital details
    populateList("doctors-list", doctors, true);
    populateList("nurses-list", nurses, true);

    // Populate the school details
    document.getElementById("principal").innerHTML = `
        <img src="${principal.photo}" alt="${principal.name}" class="profile-photo">
        <span>${principal.name}</span>
        <div class="hover-details">
            <p>Availability: ${principal.availability}</p>
        </div>`;
    populateList("teachers-list", teachers, true);

    // Populate the MGNREGA workers
    populateList("workers-list", workers);

    // Populate the village office officers
    populateList("officers-list", officers);
});









document.getElementById('hearing-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const date = document.getElementById('date').value;
    const issue = document.getElementById('issue').value;
    
    alert(`Hearing booked successfully!\n\nName: ${name}\nContact: ${contact}\nPreferred Date: ${date}\nIssue: ${issue}`);
    
    // Optionally, you can send the data to a server here
    // For example, using fetch or XMLHttpRequest
});

