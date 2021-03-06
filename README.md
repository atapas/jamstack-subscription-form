# jamstack-subscription-form

Let's build a subscription form using the `Jamstack` concept. `Netlify` comes with the form handling capability that allows you to achieve the power of Jamstack for form handling.

With this project, we will build a simple(yet powerful) `Subscription` form and submit it using the Netlify forms capability. We will use the `Netlify Functions` to handle the form data and store it in a serverless data store called `Fauna`.

# Want to Motivate?
Have you found this project helpful? You can give a star(⭐) to let me know, you care.

## Many Thanks to all the `Stargazers` who has supported this project with stars(⭐)

[![Stargazers repo roster for @atapas/jamstack-subscription-form](https://reporoster.com/stars/atapas/jamstack-subscription-form)](https://github.com/atapas/jamstack-subscription-form/stargazers)

# How to run this project?
- Clone this repository and change the directory to `jamstack-subscription-form`.
- Install `netlify-cli`. [Use this link](https://docs.netlify.com/cli/get-started/) to create an account with Netlify and install the CLI tool.
- Create an account with [Fauna](https://fauna.com/). Create a database. Upload the [schema](/db/schema.gql) and get the Server Key.
- Create a file called, `.env` and place the server key as,
 ```shell
  FAUNA_API_SECRET=<FAUNA_SERVER_KEY>
 ```
- Install dependencies
 ```shell
 yarn install

 # or npm install
 ```
- Install dependencies for the netlify function
 ```shell
 yarn script
 
 # or npm script
 ```
- Run the project locally,
 ```shell
 netlify dev
 ```
The user interface should be accissable at [http://localhost:8888](http://localhost:8888)
