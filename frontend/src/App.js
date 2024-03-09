import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import Job from './Job';
const BASE_URL = "http://localhost:3000/job"

function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    const getJobs = async()=>{
      try {
        const response  = await fetch(BASE_URL);
        const data = await response.json();
        setJobs(data.jobs);
      } catch (error) {
        console.error(error);
      }
      
    }
    getJobs();
  },[])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data)=>{
    const postJobs = async(data)=>{
      try{
        const response = await fetch(BASE_URL, {
          method:"POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        
        window.location.reload();
      }catch(error){
        console.error(error);
      }
    }
    postJobs(data);
  }
  
  return (
    <div className="App">
      <div className='left_container'>
        {
          jobs.map((job, index)=> <Job key={index} job={job}/>)
        }
      </div>
      <div className='right_container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input {...register("title", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div>
        <label>Description</label>
          <input defaultValue="description" {...register("description")} />
        </div>
        <div>
        <label>Location</label>
          <input {...register("location")} />
        </div>
        <div>
        <label>contactNo</label>
          <input {...register("contactNo")} />
        </div>
        <div>
        <label>email</label>
          <input {...register("email")} />
        </div>
      <input type="submit" />
    </form>
      </div>
    </div>
  );
}

export default App;
