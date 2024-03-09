import React from 'react'
import './Job.css'
const BASE_URL = "http://localhost:3000/job"

function Job({job}) {

    const handleArchive = (job)=>{
        const patchJob = async(job)=>{
            try{
              const response = await fetch(`${BASE_URL}/${job._id}`, {
                method:"PATCH",
                body: JSON.stringify({
                    status: "Archived"
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
              
              window.location.reload();
            }catch(error){
              console.error(error);
            }
          }
          patchJob(job);
    }

    const handleInterested = (job)=>{
        const patchJob = async(job)=>{
            try{
              const response = await fetch(`${BASE_URL}/${job._id}`, {
                method:"PATCH",
                body: JSON.stringify({
                    interest : [...job.interest, "Shubham"]
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
              
              window.location.reload();
            }catch(error){
              console.error(error);
            }
          }
          patchJob(job);
    }

  return (
    <div className='job'>
        {
            job && (<div>
                        <h1>{job?.title}</h1>
                        <h2>{job?.description}</h2>
                        <h3>{job?.location}</h3>
                        <h3>{job?.contactNo}</h3>
                        <h3>{job?.email}</h3>
                        <div>
                            <h4>Interested : </h4>
                            {
                                job.interest.map((user, index)=> <p key={index}>{user}</p>)
                            }
                        </div>   
                    </div>)
        }
        <div>
            <button onClick={()=> handleInterested(job)}>Mark Interested</button>
            <button onClick={()=> handleArchive(job)}>Archive</button>
        </div>
    </div>
  )
}

export default Job