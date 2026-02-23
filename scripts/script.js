console.log("script.js is working...");

let jobs = [
  {
    jobTitle: "Mobile First Corp",
    jobRole: "React Native Developer",
    jobLocation: "Remote",
    jobTime: "Full-time",
    jobPay: "$130,000 - $175,000",
    jobStatus: "Not Applied",
    jobDescription:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    jobTitle: "WebFlow Agency",
    jobRole: "Web Designer & Developer",
    jobLocation: "Los Angeles, CA",
    jobTime: "Part-time",
    jobPay: "$80,000 - $120,000",
    jobStatus: "Not Applied",
    jobDescription:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  },
  {
    jobTitle: "DataViz Solutions",
    jobRole: "Data Visualization Specialist",
    jobLocation: "Boston, MA",
    jobTime: "Full-time",
    jobPay: "$125,000 - $165,000",
    jobStatus: "Not Applied",
    jobDescription:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    jobTitle: "CloudFirst Inc",
    jobRole: "Backend Developer",
    jobLocation: "Seattle, WA",
    jobTime: "Full-time",
    jobPay: "$140,000 - $190,000",
    jobStatus: "Not Applied",
    jobDescription:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    jobTitle: "Innovation Labs",
    jobRole: "UI/UX Engineer",
    jobLocation: "Austin, TX",
    jobTime: "Full-time",
    jobPay: "$110,000 - $150,000",
    jobStatus: "Not Applied",
    jobDescription:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  },
  {
    jobTitle: "MegaCorp Solutions",
    jobRole: "JavaScript Developer",
    jobLocation: "New York, NY",
    jobTime: "Full-time",
    jobPay: "$130,000 - $170,000",
    jobStatus: "Not Applied",
    jobDescription:
      "Build enterprise applications with JavaScript and modern frameworks. Competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    jobTitle: "StartupXYZ",
    jobRole: "Full Stack Engineer",
    jobLocation: "Remote",
    jobTime: "Full-time",
    jobPay: "$120,000 - $160,000",
    jobStatus: "Not Applied",
    jobDescription:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
  },
  {
    jobTitle: "TechCorp Industries",
    jobRole: "Senior Frontend Developer",
    jobLocation: "San Francisco, CA",
    jobTime: "Full-time",
    jobPay: "$130,000 - $175,000",
    jobStatus: "Not Applied",
    jobDescription:
      "Looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. Work with a talented team on cutting-edge projects.",
  },
];

// renderAllJobs();

document.addEventListener("DOMContentLoaded", function () {
  renderAllJobs();
});

let jobContainer = document.getElementById("job-cards-container");

// Handles Deleting Jobs
jobContainer.addEventListener("click", function (event) {
  if (event.target.closest(".delete-btn")) {
    let jobName = event.target
      .closest(".job-card")
      .querySelector(".job-title").innerText;

    deleteJob(jobName);
  }
});
