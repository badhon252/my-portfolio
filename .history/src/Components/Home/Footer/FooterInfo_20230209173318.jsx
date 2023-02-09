import React from 'react';

const FooterInfo = () => {
    return 
        pug`
  .wrapper
    if props.shouldShowGreeting
      p.greeting Hello World!

    button(onClick=props.notify) Click Me
`

    ;
}

export default FooterInfo;
