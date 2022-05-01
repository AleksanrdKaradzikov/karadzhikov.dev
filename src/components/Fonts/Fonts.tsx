import React from 'react';
import { Global } from '@emotion/react';

const Fonts = () => {
    return (
        <Global
            styles={`
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap');
            `}
        />
    )
}

export default Fonts;
