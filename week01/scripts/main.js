// 1. Declare values that won't change using const
const courseCode = "WDD 131";
const currentYear = 2026;

// 2. Declare an object variable to hold student profile information
const studentProfile = {
    firstName: "Pierre",
    lastName: "B",
    role: "Student"
};

// 3. Select the 'main' element from our HTML page using the DOM API
const mainContentArea = document.querySelector("main");

// 4. Combine our variables into a single message using a template literal string
const dynamicMessage = `
    <p>Welcome back, <strong>${studentProfile.firstName} ${studentProfile.lastName}</strong>!</p>
    <p>You are successfully testing variables for <strong>${courseCode}</strong> in the year ${currentYear}.</p>
`;

// 5. Inject the message into the page's HTML structure dynamically
mainContentArea.innerHTML += dynamicMessage;