import React from 'react';
import '../../src/css/ErrorPage.css'

const ErrorPage = () => {
  return (
    <div class="container">
        <button class="prev-page" onClick={() => window.history.back()}>Go Back</button>
        <div class="errors" >
        </div>
    </div>
  );
};

export default ErrorPage;