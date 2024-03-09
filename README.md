## API Endpoints
 1. GET /job
      Fetch all jobs which have a status active
    
3. POST /job
     Create a job post with given body
   
4. PATCH /job/:id
     update a job post with given parameter
     Used this endpoint to enable archiving of job post and marking it as interested.

FRONTEND 
 1. All active job postings are displayed on the left side in the form of cards.
 2. Each card has options to archive the job for terraformers and mark interested button for applicants.
    (Since we limited to scope to not implement authentication and authorization I sent dummy data in this case when applicants mark the job as interested)
3. Basic Form to create a job posting on the right hand side. 
