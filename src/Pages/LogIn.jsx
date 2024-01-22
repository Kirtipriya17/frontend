import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';




export default function LogIn() {


    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigation = useNavigate()


    function handleLogin(e) {
        e.preventDefault();
        const body = {
            email, password
        }
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(json => {
                    localStorage.setItem("userToken", json.token)
                    alert("Login Successful")
                    navigation("/dashboard")

                })

                //  localStorage.setItem("userToken",)

                // return  response.json()
            } else {
                alert("Response was not successful")
                response.json().then(json => {
                    alert(json.message)
                })

                // return response.json()
                // alert(response.body.message)
                // throw new Error(response)
            }
        }).catch(error => alert(error))


    }

    return (
        <>
            <div >
                <section class="bg-red-200">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" class="flex items-center mb-6 text-2xl font-semibold  dark:text-white">

                        </a>
                        <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-purple-300 dark:border-gray-700/">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray">
                                    Sign in to your account
                                </h1>
                                <form onSubmit={handleLogin} class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Your email</label>
                                        <input type="email" name="email" id="email"
                                            value={email}
                                            onChange={(e) =>
                                                setemail(e.target.value)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz@gmail.com" required="" />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                            value={password}
                                            onChange={(e) =>
                                                setpassword(e.target.value)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="remember" class="text-gray-500 dark:text-gray-700">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    <button type="submit" onClick={handleLogin}
                                        class="w-full text-gray bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        Sign in</button>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-900">
                                        Don’t have an account yet? <Link to={"/Register"}>
                                            <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up

                                            </a></Link>

                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}