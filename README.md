[![Build Status](https://travis-ci.org/ipatate/react-router-scroll-memory.svg?branch=master)](https://travis-ci.org/ipatate/react-router-scroll-memory)

### Simple react component to keep the scroll of the page and to restore it if the user clicks on the back button of its browser

I did this package because I was frustrated that the new react router (4) does not restore the scroll when I click on the back button of my browser. By default, the component execute window.scrollTo(0,0), if the url not exist in memory. It only stores the last 2 url.

only work with react and react router v4

#### import component in your main page.

```javascript
import ScrollMemory from 'react-router-scroll-memory';
```

#### add the component after the Router.

```jsx
  <BrowserRouter>
    <div>
      <ScrollMemory />
      <App />
    </div>
  </BrowserRouter>
```

#### Tested on Browser:

* Chrome
* Explorer 11
* Edge
* Safari
* Firefox

#### Online exemple

https://simple-react-app-with-router.stackblitz.io


