import React from 'react';
import '../../src/css/ErrorPage.css'

const ErrorPage = () => {
    return (
[<>
        <button class="prev-page" onClick={() => window.history.back()}>Go Back</button>

<div class="container">
<div class="errors" >
    <p style={{
        fontSize: "50px"
    }}>😢 </p>
</div>
</div>
</>]
    );
};

export default ErrorPage;