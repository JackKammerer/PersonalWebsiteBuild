# PersonalWebsiteBuild

This is the source code for my personal website, here at https://jackkammerer.com.
This code can be modified or otherwise used for any purpose. 

This is a node project, so in order to run use the following command:

```npm install```
```npm run dev ```

Then, navigate to ```localhost:5173``` and you will see the site running. 

In order for the website to work, an environment file ```.env``` needs to be created, to store:

- ``` VITE_PRODUCTION ```: Either set to ```production```, or another value (```test```), to determine whether to compile or test your code.
- ``` VITE_API_KEY ```: Set to the value of your GitHub API key, if you want to display repositories.
- ``` VITE_BIZ_EMAIL ```: Set to the value of your email address you want the Gmail link to send to.


 Note: Most of the server backbone was possible due to the [Vite SSR Documentation](https://vitejs.dev/guide/ssr.html), as well as this incredibly helpful [section](https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react) of the vite-plugin-react repository.
