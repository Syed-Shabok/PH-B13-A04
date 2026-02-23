console.log("machine.js is working...");

// Loads All Jobs
function renderAllJobs() {
  let jobsContainer = document.getElementById("job-cards-container");
  let totalCount = document.getElementById("total-count");
  let jobCount = document.getElementById("amount-info");
  let noJobsCard = document.getElementById("no-jobs-card");

  jobsContainer.innerHTML = "";
  totalCount.innerText = jobs.length;
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

// Deletes a Job based on the Job's Name
function deleteJob(jobName) {
  jobs = jobs.filter((job) => job.jobTitle != jobName);
  console.log(`${jobName} deleted.`);
  renderAllJobs();
}
