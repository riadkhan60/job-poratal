
# Job Portal Project 
## by TechForing 




## 🚀 About Me
MD Samiul Alam Khan

Project name - job portal

### required by -  Techforing


## Project links

 - [Project link - github/riadkhan60/job-poratal](https://github.com/riadkhan60/job-poratal)
 - [Live Project - https://job-portal60.netlify.app/](https://job-portal60.netlify.app/login)
 - [Back End deployment - https://job-portal-server-swbw.onrender.com ](https://job-portal-server-swbw.onrender.com/)

Since server running on a low computing power, it may take some time create a account or sending a request to Api.

## Contact

Email khanriad60@gmail.com 

Phone Number - +8801795024751

## Project Idea
### please read it to bottom 

So This Project is about Job portal where a user can create a account, login to his account, on home page user can see all his jobs list, can see details about a job item, delete a job list and add a job list. 

## Project Requirements 
API Endpoints:

 

Create jobs And View jobs  (Allowed: POST, GET. required to pass access token key)


Edit/Remove job(Allowed: PUT, PATCH, DELETE)


Sign_up user(Allowed: POST)


Sign_in user (Allowed: POST)

### Requirements:

I need design the React JS app with **Material UI**

Must have to use **React Router V6**

**JWT authentication** should be used

Note that without login, the user will not see any of the pages (use Private Routing)



## how I built & manage the project 
# For authentication && Creating user


I used **Material UI** to design the forms. For routing, I used **React Router**. I used **React Hook Form** to control the form inputs. With React Hook Form, I used "required" and "password matches" validation and used Material UI's built-in **TextField** input to give a nice UI experience. Working with React Router, I used the **useSubmit** hook for submitting the form data so I could use React Router's page ***action*** functionality.

When the user submits the create account form, I built an API endpoint on the server where, if an account already exists, it will return an error and show that the account already exists using the **useActionData** hook. If a user does not exist, it will create a new user, and the password will be **hashed** using **bcrypt**. It will then return success, and the Signup page will automatically (using **useNavigate**) switch to the Login page.

Here, the user can input data. After verifying that the account exists, if it does exist, the API will verify the password and send the **JWt token** to the client side. It will be saved in the user's browser local storage, and the user will be entered into the Home page. Since I need to prevent users from visiting the Home page when they are not logged in, I used Private Routing using react **Context API** and **useReducer** to prevent the user from entering the Home page. Using a **JWT token**, I prevent the Home page from rendering its components and go back to the Login page. I used **useNavigate** and a **JWT** token here.

also after login user can use logout button from nav menu, it will logged out the user.
and delete the **jwt token** from **local storage** and 

*authentication Context's user state
will become null*

# For Home page
I used **multiple Material UI** components to design the home page. When a user enters the home page, I used **React Query's** **useQuery** hook to load the jobs list from the server using the jobs/all endpoint (which requires a **JWT** token). Upon entry, **three** **demo** job cards are displayed, intended to enhance user experience. These cards cannot be deleted using the delete button as they do not originate from the API. Their purpose is to prevent a blank page for new users, which would negatively impact UX. As this project did not necessitate blank state functionality, it was not implemented. While I could have also integrated Framer Motion or GSAP liberaries for animation, I opted for a simpler approach for this project.

Users can delete job posts using the delete button, which triggers an API request to the backend server (requiring a **JWT** token). The item is will be deleted, and used **React Query's useMutation** hook for ensures the jobs list reflects this change. The job post cards feature a button to view project details. when pressing this view button, the user is redirected to the job view page. Here, I used React Router's built-in Route functionality, ***loader***. Within this loading function, I utilize params to retrieve the job item's ID, enabling the fetching of job item details. The job view page also includes a delete button. If pressed, an API request is sent, and after item deletion ( using async/await), the user is seamlessly returned to the home page.

Due to the asynchronous nature of these operations, careful handling is crucial to prevent potential bugs.


# For Creating a new Job post

I used React Router's ***action*** functionality here to ensure that both the title and description fields are filled before firing the API request. This request also verifies the provided **token** and, after successful authentication, creates a new job post for the user. After submission, the new project is added, and the user is redirected back to the home page. This updated home page automatically **reflects** the newly added item.

## how to navigate the website

when you enter the website, a login page will be fired of, since you don't have account switch to create account page, create a account (🙂 feel free to check the validation) then it will be switch back to login page, log in to your account with right email & password, then in home menu three demo card will be there. those are unfunctional, go to create new job page, create a one it will switch back to home page and now use view button to view the details and go back to home using home button on navbar and delete it, it will be deleted

# Provided Links and file

I provided my github repo on the link on submitting field for my project given by ***Techforing*** website
I aslo provide my fullstack resources file on the uploading file section.

### since you also asked for live project link but in that particular input fields only accept one link so i only able to give the github repo Link and project files. eventually I also provided live project link in top along with server hosting link .

#### I used netlify for hosting the website (front end)
#### I used render for hosting the backend

if you download the resources file on the you need to change the api end points to local machine location and the change the port 

also use .env file for authentication token

![Your Website's submitting file section](https://drive.google.com/file/d/12FtskhOh0brNFbQpDbtUX4KZE4_sEw3k/view)
also the link https://drive.google.com/file/d/12FtskhOh0brNFbQpDbtUX4KZE4_sEw3k/view




## API Reference

#### Create new user ->

```http
  GET /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | *Required*.  |
| `Password`      | `string` | *Required*.  |
| `name`      | `string` | *Required*.  |

#### create a hashed password in server && jobs Array for job item
returns success


#### Login ->

```http
  GET /users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | *Required*.  |
| `Password`      | `string` | *Required*.  |

#### authorized with JWT authentication send back jwt access token

 returns the access token

 #### Get Jobslist ->
```http
  GET /jobs/all
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `APi Key/jwt token`     | `string` | **Required**.  |

 return all the jobs list

 #### Get Job ->
```http
  GET /jobs/:jobId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `APi Key/jwt token`     | `string` | **Required**.  |
| `jobID`     | `number` | **Required**.  |

 return the single specific job


 #### Add Job->
```http
  GET /jobs/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `APi Key/jwt token`     | `string` | **Required**.  |
| `job-Data`     | `Object` | **Required**.  |

create new job


 #### Delete Job->
```http
  GET /jobs/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `APi Key/jwt token`     | `string` | **Required**.  |
| `jobID`     | `number` | **Required**.  |


Delete job item
