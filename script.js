function toggleDetails() {
    const details = document.getElementById("studentDetails");
    const btn = document.getElementById("detailsBtn");

    if (!details) return;

    if (details.innerHTML.trim() === "" || details.style.display === "none") {
        details.innerHTML = `
            <hr>
            <h3>Additional Details</h3>
            <p><strong>Department:</strong> Computer Applications</p>
            <p><strong>Year:</strong> Second Year</p>
            <p><strong>Status:</strong> Active Student</p>
            <p><strong>Email:</strong> xavier.amith@mca.christuniversity.in</p>
        `;
        details.style.display = "block";
        if (btn) btn.textContent = "Hide Details";
    } else {
        details.style.display = "none";
        if (btn) btn.textContent = "Show Details";
    }
}

// Backward-compatible alias
function showStudentDetails() {
    toggleDetails();
}
