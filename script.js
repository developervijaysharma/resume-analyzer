function analyzeResume() {
    const jobDescription = document.getElementById("jobDescription").value;

    if (!jobDescription.trim()) {
        alert("Please enter a job description before analyzing.");
        return;
    }

    // Simulate analysis (static dummy data)
    const results = document.getElementById("results");
    results.classList.remove("hidden");

    // You could enhance this later with dynamic logic or API integration
}
