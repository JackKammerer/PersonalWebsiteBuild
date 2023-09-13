import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

const insert: HTMLElement | null  = document.getElementById('app');

if (insert === null) {
   console.log("Error! Could not hydrate as there is no app!"); 
}
else {

    ReactDOM.hydrateRoot(
        insert, 
        <BrowserRouter>
            <Router />
        </BrowserRouter>,
    )
}
