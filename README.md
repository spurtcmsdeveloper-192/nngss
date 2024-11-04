# Knowledge base  template generated using spurtCMS with Next.js 

![Screenshot of spurtCMS using Presentation Tool to do Visual Editing](https://www.spurtcms.com/spurtcms-starter-template.jpg)

This template can be used to create a simple documentation template that uses Next.js App Router for the frontend and [spurtcms][https://demo.spurtcms.com/dashboard/]to handle its content. It comes with a native spurtcms that offers features like real-time collaboration and visual editing with live updates using [https://spurtcms.com/documentation].

The Studio connects to spurtcms, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. You can use this starter to kick-start a blog or learn these technologies.

## Features

- Next.js v14
- Next.js App Router
- Styling with Tailwind CSS
- Dark & Light Mode
- Mobile Responsive
- skeleton loader 
- Optimized for SEO using Next.js's Metadata
- infinite scroll pagination
- New fetching and caching paradigms
- Server Actions for mutations



## Demo






## Deploy your own

Use the Deploy Button below, you'll deploy the example using 

[![Deploy with Vercel](https://vercel.com/button)]()


## Set up environment variables

Open .env and set  NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_BASEURL  to  be the URL to your GraphQL endpoint in spurtCMS. For example:
 http://dev.spurtcms.com:8084/query
 
## Steps to get API Key
 
 Before starting our Next JS blog template we need to go inside our spurtCMS Admin and get the default token that we will be using for displaying our content.

1.Inside your spurtCMS Admin Panel navigate to API Keys.

![API Key 1 (1)](https://dev.spurtcms.com/public/img/API%20Key%201.jpg)



2.click on the Action key

![API Key 2 (1)](https://dev.spurtcms.com/public/img/API%20Key%202.jpg)

3.Copy the api key

![API Key 3](https://dev.spurtcms.com/public/img/API%20Key%203.jpg)



Once you have your token add it to your env and it should look like this:



```bash
NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_BASEURL=""
```

```bash
NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_TOKEN="your-api-token"
```



## Set up on your own - graphql sever with admin panel

## Step 1. spurtCMS Admin Setup

Setup SpurtCMS Admin Console for Manage or Populate content

spurtCMS prioritizes user-friendly administration, offering powerful tools for content creation, management, and defining CMS workspaces. Administrators have precise control over member access, ensuring streamlined member management. Dynamic channel management allows effective content structuring, enhancing the overall user experience. Administrators effortlessly create and manage channels and spaces, providing a comprehensive, user-centric content management solution for personalized and organized web
environments.

## Screenshots of spurtCMSAdmin
Dashboard

![Dashboard](https://dev.spurtcms.com/public/img/dashboardpage.png)


Channels

![Screenshot of spurtCMS channels](	https://dev.spurtcms.com/public/img/channellistpage.png)

Entries

![Screenshot of spurtCMS entries](	https://dev.spurtcms.com/public/img/entrieslistpage.png)


Category Group
![Screenshot of spurtCMS categories group](	https://dev.spurtcms.com/public/img/categorygrouppage.png)


First,you need to set up spurtCMS Admin Application.There are many solutions for insallation.
Please refer [(https://www.spurtcms.com/documentation/cms-admin)] 

But,you can quick start with using CLI

```bash
sudo snap install spurtcms
```
```bash
spurtcms -i admin
```
```bash
sudo ./spurtcms-admin.sh
```
```bash
sudo systemctl start spurtcms-admin.service
```
```bash
sudo systemctl stop spurtcms-admin.service
```
Now you can explore the features and functionalities of spurtCMS Admin for efficient content management.

## Step 2. Run Next.js in development mode
```bash
npm install 
```
```bash
npm run dev
```
Your knowledge base should be up and running on [http://localhost:3000!](http://localhost:3000!)


## Step 3. Run Next.js in production mode
```bash
npm run prod
```

## Feedback and Questions
If you have feedback or questions about this starter, please use the Github Issues on this repo, [(https://github.com/spurtcms/knowledge-base/issues)]
or Send Email to us [(support@spurtcms.com)]

