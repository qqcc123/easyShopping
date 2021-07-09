import React from 'react'
import './login.css';

class AppLogin extends React.Component {
    constructor(props) {
        super(props);
        this.status = {
            isQRCodeLogin: false,
        }
    }

    render() {
        return (
            <div class="login-container">
                <div data-bn-type="text" class="login-tips-container">
                    <div data-bn-type="text" class="login-tips">登录</div>  
                    <div data-bn-type="text" class="login-link-tips">请确认您在访问:</div>
                    <div data-bn-type="text" class="login-link-container">
                        <div class="login-link-container1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="login-link-svg">
                                <path d="M16.27 10.5V8.07C16.27 5.82 14.45 4 12.2 4S8.13 5.82 8.13 8.07v2.43H6v8.94h12.43V10.5h-2.16zm-3.07 6.46h-2v-4h2v4zm1.07-6.46h-4.14V8.07c0-1.14.93-2.07 2.07-2.0
                                7 1.14 0 2.07.93 2.07 2.07v2.43z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div dir="ltr" class="login-link-text-div">
                            <span data-bn-type="text" class="login-link-text">https://</span>accounts.binancezh.be
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default AppLogin;

