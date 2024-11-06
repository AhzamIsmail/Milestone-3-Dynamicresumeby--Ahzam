// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();
// Get references to form elements using their IDs
//     const profilePictureInput = document.getElementById('profilePicture');
//     const nameElement = document.getElementById('name');
//     const emailElement = document.getElementById('email');
//     const phoneElement = document.getElementById('phone');
//     const addressElement = document.getElementById('address');
//     const educationElement = document.getElementById('education');
//     const experienceElement = document.getElementById('experience');
//     const skillsElement = document.getElementById('skills');
//     if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
//         const name = (nameElement as HTMLInputElement).value;
//         const email = (emailElement as HTMLInputElement).value;
//         const phone = (phoneElement as HTMLInputElement).value;
//         const address = (addressElement as HTMLInputElement).value;
//         const education = (educationElement as HTMLInputElement).value;
//         const experience = (experienceElement as HTMLInputElement).value;
//         const skills = (skillsElement as HTMLInputElement).value;
//         // Handle profile picture
//         const profilePictureFile = (profilePictureInput as HTMLInputElement).files?.[0];
//         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
//         // Create resume output
//         const resumeOutput = `
//         <h2>Resume</h2>
//         ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone Number:</strong> ${phone}</p>
//         <p><strong>Address:</strong> ${address}</p>
//         <h3>Education</h3>
//         <p>${education}</p>
//         <h3>Work Experience</h3>
//         <p>${experience}</p>
//         <h3>Skills</h3>
//         <p>${skills}</p>
//         `;
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//         } else {
//             console.error('The resume output element is missing');
//         }
//     } else {
//         console.error('One or more form elements are missing');
//     }
// });
// script.ts
document.addEventListener('DOMContentLoaded', function () {
    // Get references with explicit types
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    // Add event listener with type annotations
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents page reload
        // Gather form data with type assertions
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Display the data in resumeOutput
        resumeOutput.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    });
});
