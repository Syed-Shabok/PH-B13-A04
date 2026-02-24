console.log("machine.js is working...");

// DOM Elements
let jobsContainer = document.getElementById("job-cards-container");
let interviewJobsContainer = document.getElementById(
  "interview-job-cards-container",
);
let rejectedJobsContainer = document.getElementById(
  "rejected-job-cards-container",
);
let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let jobCount = document.getElementById("amount-info");
let noJobsCard = document.getElementById("no-jobs-card");
allBtn = document.getElementById("all-toggle-btn");
interviewBtn = document.getElementById("interview-toggle-btn");
rejectedBtn = document.getElementById("rejected-toggle-btn");

// Loads All Jobs
function renderAllJobs() {
  jobsContainer.innerHTML = "";
  jobCount.innerHTML = `${jobs.length} jobs`;

  console.log("Jobs Loaded: ");

  if (jobs.length === 0) {
    noJobsCard.classList.remove("hidden");
  } else {
    noJobsCard.classList.add("hidden");
  }

  for (let job of jobs) {
    // console.log(job);

    let jobCard = document.createElement("div");
    jobCard.className = "card card-border bg-base-100";
    jobCard.innerHTML = `
    <div class="job-card card-body space-y-3">
            <!-- Job Title & Delete Button -->
            <div class="flex justify-between">
              <div>
                <h2 class="job-title text-[18px] font-semibold">
                  ${job.jobTitle}
                </h2>
                <p class="job-role text-[#64748B]">
                  ${job.jobRole}
                </p>
              </div>

              <button class="delete-btn btn btn-circle bg-base-100">
                <i class="fa-regular fa-trash-can opacity-50"></i>
              </button>
            </div>

            <!-- Job info -->
            <div class="flex w-fit gap-2">
              <p class="job-location text-[#64748B] text-sm">${job.jobLocation}</p>
              <p class="text-[#64748B] text-sm">•</p>
              <p class="job-time text-[#64748B] text-sm">${job.jobTime}</p>
              <p class="text-[#64748B] text-sm">•</p>
              <p class="job-pay text-[#64748B] text-sm">
                ${job.jobPay}
              </p>
            </div>

            <!-- Job Status & Description -->
            <div class="space-y-2">
              <!-- Status Badge Container -->
              <div>
                <div
                  class="not-applied-badge badge badge-soft badge-info text-black font-medium px-3 py-4 text-sm ${job.jobStatus === "Not Applied" ? "" : "hidden"}"
                >
                  NOT APPLIED
                </div>

                <div
                  class="interview-badge badge badge-soft badge-accent font-medium px-3 py-4 text-sm ${job.jobStatus === "Interview" ? "" : "hidden"}"
                >
                  INTERVIEW
                </div>

                <div
                  class="rejected-badge badge badge-soft badge-secondary font-medium px-3 py-4 text-sm ${job.jobStatus === "Rejected" ? "" : "hidden"}"
                >
                  REJECTED
                </div>
              </div>

              <p class="job-description text-[#64748B]">
                ${job.jobDescription}
              </p>
            </div>

            <!-- Job Status Buttons -->
            <div class="flex gap-2">
              <button
                class="interview-btn btn btn-outline btn-accent text-sm"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn btn btn-outline btn-secondary text-sm"
              >
                REJECTED
              </button>
            </div>
          </div>`;

    jobsContainer.appendChild(jobCard);
  }
}

// Loads Interview Jobs
function renderInterviewJobs() {
  interviewJobsContainer.innerHTML = "";
  jobCount.innerHTML = `${interviewJobs.length} of ${jobs.length} jobs`;

  console.log("Interview Jobs Loaded: ");

  if (interviewJobs.length === 0) {
    noJobsCard.classList.remove("hidden");
  } else {
    noJobsCard.classList.add("hidden");
  }

  for (let job of interviewJobs) {
    // console.log(job);

    let jobCard = document.createElement("div");
    jobCard.className = "card card-border bg-base-100";
    jobCard.innerHTML = `
    <div class="job-card card-body space-y-3">
            <!-- Job Title & Delete Button -->
            <div class="flex justify-between">
              <div>
                <h2 class="job-title text-[18px] font-semibold">
                  ${job.jobTitle}
                </h2>
                <p class="job-role text-[#64748B]">
                  ${job.jobRole}
                </p>
              </div>

              <button class="delete-btn btn btn-circle bg-base-100">
                <i class="fa-regular fa-trash-can opacity-50"></i>
              </button>
            </div>

            <!-- Job info -->
            <div class="flex w-fit gap-2">
              <p class="job-location text-[#64748B] text-sm">${job.jobLocation}</p>
              <p class="text-[#64748B] text-sm">•</p>
              <p class="job-time text-[#64748B] text-sm">${job.jobTime}</p>
              <p class="text-[#64748B] text-sm">•</p>
              <p class="job-pay text-[#64748B] text-sm">
                ${job.jobPay}
              </p>
            </div>

            <!-- Job Status & Description -->
            <div class="space-y-2">
              <!-- Status Badge Container -->
              <div>
                <div
                  class="not-applied-badge badge badge-soft badge-info text-black font-medium px-3 py-4 text-sm ${job.jobStatus === "Not Applied" ? "" : "hidden"}"
                >
                  NOT APPLIED
                </div>

                <div
                  class="interview-badge badge badge-soft badge-accent font-medium px-3 py-4 text-sm ${job.jobStatus === "Interview" ? "" : "hidden"}"
                >
                  INTERVIEW
                </div>

                <div
                  class="rejected-badge badge badge-soft badge-secondary font-medium px-3 py-4 text-sm ${job.jobStatus === "Rejected" ? "" : "hidden"}"
                >
                  REJECTED
                </div>
              </div>

              <p class="job-description text-[#64748B]">
                ${job.jobDescription}
              </p>
            </div>

            <!-- Job Status Buttons -->
            <div class="flex gap-2">
              <button
                class="interview-btn btn btn-outline btn-accent text-sm"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn btn btn-outline btn-secondary text-sm"
              >
                REJECTED
              </button>
            </div>
          </div>`;

    interviewJobsContainer.appendChild(jobCard);
  }
}

// Loads Rejected Jobs
function renderRejectedJobs() {
  rejectedJobsContainer.innerHTML = "";
  jobCount.innerHTML = `${rejectedJobs.length} of ${jobs.length} jobs`;

  console.log("Rejected Jobs Loaded: ");

  if (rejectedJobs.length === 0) {
    noJobsCard.classList.remove("hidden");
  } else {
    noJobsCard.classList.add("hidden");
  }

  for (let job of rejectedJobs) {
    // console.log(job);

    let jobCard = document.createElement("div");
    jobCard.className = "card card-border bg-base-100";
    jobCard.innerHTML = `
    <div class="job-card card-body space-y-3">
            <!-- Job Title & Delete Button -->
            <div class="flex justify-between">
              <div>
                <h2 class="job-title text-[18px] font-semibold">
                  ${job.jobTitle}
                </h2>
                <p class="job-role text-[#64748B]">
                  ${job.jobRole}
                </p>
              </div>

              <button class="delete-btn btn btn-circle bg-base-100">
                <i class="fa-regular fa-trash-can opacity-50"></i>
              </button>
            </div>

            <!-- Job info -->
            <div class="flex w-fit gap-2">
              <p class="job-location text-[#64748B] text-sm">${job.jobLocation}</p>
              <p class="text-[#64748B] text-sm">•</p>
              <p class="job-time text-[#64748B] text-sm">${job.jobTime}</p>
              <p class="text-[#64748B] text-sm">•</p>
              <p class="job-pay text-[#64748B] text-sm">
                ${job.jobPay}
              </p>
            </div>

            <!-- Job Status & Description -->
            <div class="space-y-2">
              <!-- Status Badge Container -->
              <div>
                <div
                  class="not-applied-badge badge badge-soft badge-info text-black font-medium px-3 py-4 text-sm ${job.jobStatus === "Not Applied" ? "" : "hidden"}"
                >
                  NOT APPLIED
                </div>

                <div
                  class="interview-badge badge badge-soft badge-accent font-medium px-3 py-4 text-sm ${job.jobStatus === "Interview" ? "" : "hidden"}"
                >
                  INTERVIEW
                </div>

                <div
                  class="rejected-badge badge badge-soft badge-secondary font-medium px-3 py-4 text-sm ${job.jobStatus === "Rejected" ? "" : "hidden"}"
                >
                  REJECTED
                </div>
              </div>

              <p class="job-description text-[#64748B]">
                ${job.jobDescription}
              </p>
            </div>

            <!-- Job Status Buttons -->
            <div class="flex gap-2">
              <button
                class="interview-btn btn btn-outline btn-accent text-sm"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn btn btn-outline btn-secondary text-sm"
              >
                REJECTED
              </button>
            </div>
          </div>`;

    rejectedJobsContainer.appendChild(jobCard);
  }
}

// Deletes a Job based on the Job's Name
function deleteJob(jobName) {
  jobs = jobs.filter((job) => job.jobTitle != jobName);

  interviewJobs = interviewJobs.filter((job) => job.jobTitle != jobName);

  rejectedJobs = rejectedJobs.filter((job) => job.jobTitle != jobName);

  totalCount.innerText = jobs.length;
  interviewCount.innerText = interviewJobs.length;
  rejectedCount.innerText = rejectedJobs.length;

  console.log(`${jobName} deleted.`);

  renderAllJobs();
  renderInterviewJobs();
  renderRejectedJobs();
}

// Adds a Job to the Interview List.
function addToInterview(jobName) {
  let jobSelected = jobs.find((j) => j.jobTitle === jobName);
  jobSelected.jobStatus = "Interview";
  if (!interviewJobs.find((j) => j.jobTitle === jobName)) {
    interviewJobs.push(jobSelected);
  }
  if (rejectedJobs.find((j) => j.jobTitle === jobName)) {
    rejectedJobs = rejectedJobs.filter((job) => job.jobTitle != jobName);
  }
  interviewCount.innerText = interviewJobs.length;
  rejectedCount.innerText = rejectedJobs.length;

  //   rejectedJobs = rejectedJobs.filter((job) => job.jobTitle != jobName);

  //   console.log("Interview: ", interviewJobs);
  //   console.log("Rejected: ", rejectedJobs);

  renderAllJobs();
  renderInterviewJobs();
  renderRejectedJobs();
}

// Adds a Job to the Rejected List.
function addToRejected(jobName) {
  let jobSelected = jobs.find((j) => j.jobTitle === jobName);
  jobSelected.jobStatus = "Rejected";
  if (!rejectedJobs.find((j) => j.jobTitle === jobName)) {
    rejectedJobs.push(jobSelected);
  }
  if (interviewJobs.find((j) => j.jobTitle === jobName)) {
    interviewJobs = interviewJobs.filter((job) => job.jobTitle != jobName);
  }
  rejectedCount.innerText = rejectedJobs.length;
  interviewCount.innerText = interviewJobs.length;

  //   interviewJobs = interviewJobs.filter((job) => job.jobTitle != jobName);

  //   console.log("Interview: ", interviewJobs);
  //   console.log("Rejected: ", rejectedJobs);

  renderAllJobs();
  renderInterviewJobs();
  renderRejectedJobs();
}

function toggleButton(id) {
  allBtn.classList.add("text-[#64748B]");
  interviewBtn.classList.add("text-[#64748B]");
  rejectedBtn.classList.add("text-[#64748B]");

  allBtn.classList.remove("bg-blue-400", "text-white");
  interviewBtn.classList.remove("bg-blue-400", "text-white");
  rejectedBtn.classList.remove("bg-blue-400", "text-white");

  document.getElementById(id).classList.add("bg-blue-400", "text-white");
  document.getElementById(id).classList.remove("text-[#64748B]");

  if (id === "interview-toggle-btn") {
    jobsContainer.classList.add("hidden");
    rejectedJobsContainer.classList.add("hidden");
    interviewJobsContainer.classList.remove("hidden");
    renderInterviewJobs();
  } else if (id === "rejected-toggle-btn") {
    jobsContainer.classList.add("hidden");
    interviewJobsContainer.classList.add("hidden");
    rejectedJobsContainer.classList.remove("hidden");
    renderRejectedJobs();
  } else {
    interviewJobsContainer.classList.add("hidden");
    rejectedJobsContainer.classList.add("hidden");
    jobsContainer.classList.remove("hidden");
    renderAllJobs();
  }
}
