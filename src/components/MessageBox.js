import React from 'react';

function MessageBox(props) {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
              {props.children}
            </div>
        </div>
    );
}

export default MessageBox;