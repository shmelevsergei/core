import React from 'react';

const Title = ({text}:{text:string}) => {
    return (
        <h1 className={'scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0'}>{text}</h1>
    );
};

export default Title;