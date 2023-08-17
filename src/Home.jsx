import { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Result } from "./Result";
import bcrypt from 'bcryptjs'
export function Home() {
    const salt = bcrypt.genSaltSync(10)
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMessage]=useState("")
    const[result,setResult]=useState(false)
    let navigate=useNavigate()
    let hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 
    const  handleonClick=()=>{
        
      setResult(true)
    }
  return (
    <div>
        {result==false?<>
            <div>
            
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Message
                </label>
                <input
                  type="text-area"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                />
              </div>
              <button type="submit" class="btn btn-primary" onClick={handleonClick}> 
                Submit
              </button>
            </form>
          </div></>:
          <>
          <Result email={email} password={hashedPassword} message={message}></Result>
          </>}
       
    </div>
  )
}
