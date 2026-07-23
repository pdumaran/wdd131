// Step 1: Initial Course Object with sections [Activity Instructions #1]
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {
            sectionNumber: "001",
            enrolled: 95,
            instructor: "Roberto Diaz Rodriguez"
        },
        { sectionNumber: "002", enrolled: 80, instructor: "Sarah Gobble" }
    ]
};

// Step 2: Function to set course information [Activity Instructions #2]
function setCourseInformation(course) {
    const courseNameElement = document.querySelector("#courseName");
    if (courseNameElement) {
        courseNameElement.innerHTML = `${course.code} - ${course.title}`;
    }
}

// Step 3: Function to render course sections [Activity Instructions #3]
function renderSections(course) {
    const tbody = document.querySelector("#sections tbody");
    if (tbody) {
        let rows = "";
        // Iteration loop to display dynamic sections [cite: Activity Instructions #3]
        for (const section of course.sections) {
            rows += `<tr>
        <td>${section.sectionNumber}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
    </tr>`;
        }
        tbody.innerHTML = rows;
    }
}

// Initial calls to run the functions with our data [Activity Instructions JS example]
setCourseInformation(aCourse);
renderSections(aCourse);