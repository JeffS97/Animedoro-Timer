import React from 'react'

const ButtonClick = React.forwardRef((_, ref) => {
    return (
        <audio ref={ref}>
            <source src="/buttonclick.mp3" type="audio/mp3"/>
            Your browser does not support the audio element.
        </audio>
      );
});

export default React.memo(ButtonClick);