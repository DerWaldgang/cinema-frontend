import React from 'react';
import ReduxToastr from 'react-redux-toastr';

const ReduxToastProvider = () => {
    return (
        <ReduxToastr
        newestOnTop={false}
        preventDuplicates
        progressBar
        closeOnToastrClick
        timeOut={4000}
        transitionIn="fadeIn"
        transitionOut="fadeOut"

        // position="top-left"

        // CHANGE STILING
        />

    );
};

export default ReduxToastProvider;