document.addEventListener("DOMContentLoaded", function () {
    const introText = document.getElementById("intro-text");
    const jobTitle = document.getElementById("job-title");

    const introMessage = "Hello, I am Mohamed Ahmed Ali";
    const jobMessage = "Junior Full Stack .NET Developer";

    function displayText(element, message) {
        element.innerHTML = ""; // Clear existing content
        let index = 0;

        function type() {
            if (index < message.length) {
                element.innerHTML += message.charAt(index);
                index++;
                setTimeout(type, 100); // Type each character every 100ms
            }
        }

        type();
    }

    displayText(introText, introMessage);
    setTimeout(() => displayText(jobTitle, jobMessage), introMessage.length * 100 + 500); // Delay before showing job title
});
