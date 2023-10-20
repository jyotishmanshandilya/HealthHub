'use client'
import { useState } from "react"


///not needed for the time being
const page = () => {
    const [userinfo, setUserinfo] = useState({
        name:"",
        email: "",
        password: "",
    })

    const handleOnChange = (e)=>{
        const {name, value} = e.target;
        setUserinfo({
            ...userinfo,
            [name]: value
        })
    }

    const handleSubmit = (e)=>{
    //     setUserinfo({
    //         name:e.target.name 
    //     })
    }

  return (
    <div className="m-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 max-w-screen-md mx-auto p-10 items-center">
        <div className="flex flex-col gap-5">
            <div>
                <label
                    htmlFor="name"
                    className="mr-5"
                >
                    Name 
                </label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Name"
                        autoFocus
                        className="border"
                        onChange={handleOnChange}
                    />
            </div>
            <div>
                <label
                    htmlFor="email"
                    className="mr-5"
                >
                    Email 
                </label>
                    <input 
                        type="text" 
                        name="email"
                        required
                        placeholder="Email id"
                        className="border"
                        onChange={handleOnChange}
                    />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="mr-5"
                >
                    Password 
                </label>
                    <input 
                        type="text" 
                        name="password"
                        required
                        placeholder="Password"
                        className="border"
                        onChange={handleOnChange}
                    />
            </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default page
