### Simple react component to keep the scroll of the page and to restore it if the user clicks on the back button of its browser

I did this package because I was frustrated that the new react router (4) does not restore the scroll when I click on the back button of my browser.

only work with react and react router v4

#### import component in your main page

```javascript
import ScrollMemory from 'react-router-scroll-memory';
```

#### add the component after the Router

```jsx
  <BrowserRouter>
    <ScrollMemory />
    <App />
  </BrowserRouter>
```


