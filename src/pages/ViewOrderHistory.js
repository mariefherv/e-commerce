import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heading, Subtitles } from '../components/commonProp';
import OrderCard from '../components/OrderCard';
import {CustomSpinner} from '../components/Spinner';

export default function ViewOrderHistory(){

    const [orders,setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [exist,setExist] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch("https://capstone-3-api-5zh3.onrender.com/orders/", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    .then(res => res.json())
    .then(data => {
        setIsLoading(false)
        if(data.length !== 0){
        setExist(true)
        setOrders(data.map(order => {
            return(
            <OrderCard key={order._id} orderProp= {order}/>            
            )
        }))}
    })
    }, [])

    return(
        <>
            <Container fluid>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Heading>Order History</Heading>
                    <Subtitles>Here is the complete list of all your orders :)</Subtitles>
                </Col>
            </Row>


           {isLoading ?
            <CustomSpinner></CustomSpinner>
            :
            exist ?
            <Row className="d-flex flex-row justify-content-space-around ms-5">
                {orders}
            </Row>
            :
            <Row className="d-flex flex-row justify-content-center">
            <Col md={6} className="d-flex ps-5 justify-content-center align-items-center">
            <Heading className= "mb-3 ms-5">
                It seeems like you haven't made any orders yet.
            </Heading>
            </Col>
            <Col className="d-flex flex-column text-align-center justify-content-center align-items-center">
            <svg fill="none" height="60vh" strokeWidth=".75" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
	<path d="M89.911 62.171C89.095 59.129 86.36 58.748 84.911 60.138C83.049 61.886 83.22 66.138 85.443 67.377C85.8058 67.5668 86.2031 67.6815 86.6112 67.7143C87.0193 67.747 87.4298 67.6972 87.8183 67.5677C88.2067 67.4383 88.565 67.2318 88.8718 66.9607C89.1786 66.6896 89.4277 66.3595 89.604 65.99C90.1592 64.7945 90.2681 63.4398 89.911 62.171V62.171Z" fill="#FFD0C6"/>
	<path d="M136.615 84.732C150.415 80.565 160.565 77.449 166.994 75.699C163.809 75.926 160.783 57.615 163.631 56.566C125.061 67.32 123.047 67.966 119.931 69.809C116.986 71.557 114.003 75.433 101.292 91.488C99.451 92.103 87.092 97.314 84.059 98.67C85.446 102.641 84.439 111.039 80.183 115.37C81.8457 118.083 83.9449 120.503 86.396 122.533C87.0071 121.457 87.5282 120.332 87.954 119.17C88.486 117.65 90.044 117.802 88.733 123.578C89.7263 122.93 90.7991 122.412 91.925 122.039C92.495 121.925 99.392 122.096 102.603 122.134C104.103 122.134 104.803 123.92 96.314 124.334C98.214 124.676 100.475 125.034 102.546 125.303C108.64 124.626 113.915 118.786 118.387 111.495C122.15 105.025 125.487 98.3173 128.379 91.414C127.64 95.464 126.379 103.097 125.536 105.809L128.576 103.776C132.604 106.398 155.765 121.484 159.888 123.954C156.924 121.798 166.457 106.454 169.578 107.975C163.543 103.181 142.2 88.17 136.615 84.732Z" fill="#FFD0C6"/>
	<path d="M170.566 131.787C170.436 131.047 170.161 130.34 169.757 129.706C169.353 129.072 168.828 128.524 168.212 128.094C167.596 127.663 166.901 127.358 166.167 127.196C165.434 127.035 164.675 127.019 163.935 127.151L66.655 144.308L67.355 145.448H62.38C61.3874 146.041 60.5992 146.922 60.1206 147.975C59.6419 149.027 59.4956 150.2 59.701 151.338L60.801 157.665L171.63 138.133L170.566 131.787ZM146.873 139.273C146.291 139.273 145.721 139.1 145.237 138.777C144.753 138.453 144.375 137.993 144.152 137.455C143.929 136.917 143.871 136.325 143.985 135.753C144.098 135.182 144.379 134.657 144.791 134.246C145.202 133.834 145.727 133.553 146.298 133.44C146.87 133.326 147.462 133.384 148 133.607C148.538 133.83 148.998 134.208 149.322 134.692C149.645 135.176 149.818 135.746 149.818 136.328C149.817 137.109 149.507 137.857 148.955 138.41C148.402 138.962 147.654 139.272 146.873 139.273V139.273ZM155.765 137.696C155.183 137.696 154.613 137.523 154.129 137.2C153.645 136.876 153.267 136.416 153.044 135.878C152.821 135.34 152.763 134.748 152.877 134.176C152.99 133.605 153.271 133.08 153.683 132.669C154.094 132.257 154.619 131.976 155.19 131.863C155.762 131.749 156.354 131.807 156.892 132.03C157.43 132.253 157.89 132.631 158.214 133.115C158.537 133.599 158.71 134.169 158.71 134.751C158.71 135.533 158.4 136.282 157.848 136.835C157.296 137.388 156.547 137.699 155.765 137.7V137.696ZM164.657 136.138C164.075 136.138 163.505 135.965 163.021 135.642C162.537 135.318 162.159 134.858 161.936 134.32C161.713 133.782 161.655 133.19 161.769 132.618C161.882 132.047 162.163 131.522 162.575 131.111C162.986 130.699 163.511 130.418 164.082 130.305C164.654 130.191 165.246 130.249 165.784 130.472C166.322 130.695 166.782 131.073 167.106 131.557C167.429 132.041 167.602 132.611 167.602 133.193C167.601 133.974 167.291 134.722 166.739 135.275C166.186 135.827 165.438 136.137 164.657 136.138V136.138Z" fill="#3B28AB"/>
	<path d="M75.4311 165.176L71.8759 165.802L73.0171 172.276L76.5723 171.65L75.4311 165.176Z" fill="#3B28AB"/>
	<path d="M80.4713 164.298L76.9155 164.927L78.0593 171.402L81.6152 170.774L80.4713 164.298Z" fill="#3B28AB"/>
	<path d="M85.3493 163.428L81.7941 164.055L82.9353 170.529L86.4905 169.903L85.3493 163.428Z" fill="#3B28AB"/>
	<path d="M90.3082 162.555L86.7531 163.181L87.8943 169.656L91.4495 169.029L90.3082 162.555Z" fill="#3B28AB"/>
	<path d="M95.3511 161.671L91.7953 162.299L92.9392 168.775L96.495 168.146L95.3511 161.671Z" fill="#3B28AB"/>
	<path d="M100.227 160.806L96.672 161.433L97.8132 167.907L101.368 167.281L100.227 160.806Z" fill="#3B28AB"/>
	<path d="M105.186 159.933L101.631 160.56L102.772 167.034L106.327 166.407L105.186 159.933Z" fill="#3B28AB"/>
	<path d="M110.145 159.059L106.59 159.686L107.731 166.16L111.287 165.533L110.145 159.059Z" fill="#3B28AB"/>
	<path d="M115.104 158.186L111.549 158.812L112.69 165.286L116.246 164.66L115.104 158.186Z" fill="#3B28AB"/>
	<path d="M120.063 157.311L116.508 157.938L117.649 164.412L121.205 163.785L120.063 157.311Z" fill="#3B28AB"/>
	<path d="M125.022 156.437L121.467 157.064L122.608 163.538L126.164 162.912L125.022 156.437Z" fill="#3B28AB"/>
	<path d="M139.216 50.353C135.27 42.0633 129.745 34.6222 122.952 28.446C120.739 30.8183 119.428 33.8913 119.246 37.1305C119.064 40.3697 120.024 43.57 121.958 46.1749C123.892 48.7797 126.678 50.6243 129.831 51.3876C132.984 52.151 136.305 51.7849 139.216 50.353Z" fill="#3B28AB"/>
	<path d="M162.529 61.411C163.796 61.0652 164.985 60.4781 166.029 59.682C165.422 57.582 164.579 56.437 163.888 56.395C162.509 56.312 162.479 60.032 162.529 61.411Z" fill="#3B28AB"/>
	<path d="M168.115 70.778C168.515 73.761 167.906 75.494 166.975 75.566C166.196 75.626 165.132 74.388 164.201 71.424C165.607 71.158 166.9 70.93 168.115 70.778Z" fill="#3B28AB"/>
	<path d="M169.578 107.866C168.932 107.543 167.298 108.227 165.227 110.566C166.486 111.36 167.823 112.022 169.217 112.542C170.585 110.146 170.224 108.17 169.578 107.866Z" fill="#3B28AB"/>
	<path d="M160.173 118.924C159.073 121.774 159.261 123.37 159.888 123.824C160.629 124.337 162.358 123.653 163.935 121.224C162.768 120.324 161.506 119.553 160.173 118.924Z" fill="#3B28AB"/>
	<path d="M119.285 109.937C120.615 109.025 122.952 107.448 125.574 105.681C126.543 102.565 128.025 93.92 128.652 90.709C125.862 97.2747 122.735 103.693 119.285 109.937Z" fill="#3B28AB"/>
	<path d="M95.1551 61.05C95.1741 61.886 95.2501 63.25 95.3641 64.926C93.5398 65.6676 91.5729 65.9922 89.6071 65.876C90.1599 64.6797 90.2663 63.325 89.9071 62.057C90.8801 62.057 94.0341 61.772 95.1551 61.05Z" fill="#3B28AB"/>
	<path d="M96.6 81.1C96.695 82.544 96.79 83.684 96.828 84.387C97.96 84.276 100.262 83.898 100.003 82.794C99.834 82.071 98.541 81.338 96.6 81.1Z" fill="#3B28AB"/>
	<path d="M85.427 83.261C84.078 82.767 83.491 82.178 83.413 81.661C83.283 80.806 84.306 80.331 85.427 80.103V83.261Z" fill="#3B28AB"/>
	<path d="M70.322 140.565C70.322 143.332 69.483 145.017 68.444 145.339C66.857 145.83 65.922 143.044 65.553 141.401C66.465 141.268 68.213 140.964 70.322 140.565Z" fill="#3B28AB"/>
	<path d="M67.6 126.781C66.359 126.561 65.674 128.195 65.367 129.412C66.45 129.355 67.78 129.26 69.243 129.146C69.2464 128.631 69.0904 128.127 68.7962 127.703C68.5021 127.28 68.0843 126.958 67.6 126.781Z" fill="#3B28AB"/>
	<path d="M73 117.005C69.276 117.822 65.761 118.468 63.424 118.905C64.051 117.347 64.716 115.805 65.381 114.497C67.8329 115.579 70.3847 116.419 73 117.005V117.005Z" fill="#3B28AB"/>
	<path d="M49.118 72.488C45.7975 71.3202 42.1491 71.5187 38.9748 73.0398C35.8005 74.561 33.3601 77.2803 32.19 80.6C31.5745 79.8352 30.8051 79.2085 29.9316 78.7604C29.0582 78.3123 28.1002 78.053 27.12 77.9992C26.1398 77.9455 25.1593 78.0985 24.242 78.4484C23.3248 78.7982 22.4914 79.3371 21.796 80.03C21.1006 80.7228 20.5587 81.5542 20.2055 82.4702C19.8523 83.3861 19.6957 84.3661 19.7458 85.3465C19.796 86.3269 20.0518 87.2858 20.4967 88.1609C20.9416 89.036 21.5655 89.8077 22.328 90.426C23.7821 91.5732 25.6238 92.1129 27.4671 91.9319C29.3104 91.7508 31.0119 90.8632 32.215 89.455C33.37 92.6786 35.7265 95.3309 38.7916 96.8574C41.8568 98.3839 45.3934 98.6665 48.662 97.646C47.712 93.146 45.926 90.407 45.299 90.446C42.221 90.655 41.746 87.577 44.691 88.166C46.191 88.489 44.805 86.342 43.684 84.955C45.6569 83.9096 47.4317 82.5271 48.928 80.87C55.483 86.19 57.459 90.579 52.88 91.358L50.334 91.472C51.9878 92.2024 53.7704 92.5964 55.578 92.631C57.1533 90.4032 57.9966 87.7405 57.991 85.012C57.9891 82.2631 57.1348 79.5824 55.5456 77.3393C53.9565 75.0963 51.7108 73.4013 49.118 72.488V72.488Z" fill="#3B28AB"/>
	<g>
		<path d="M68.194 144.023L163.954 127.132C164.694 127 165.452 127.016 166.186 127.177C166.92 127.339 167.615 127.644 168.231 128.075C168.847 128.505 169.372 129.053 169.776 129.687C170.18 130.321 170.455 131.028 170.585 131.768L175.506 159.812C175.638 160.552 175.622 161.311 175.461 162.044C175.299 162.778 174.994 163.473 174.563 164.089C174.133 164.705 173.585 165.23 172.951 165.634C172.317 166.038 171.61 166.313 170.87 166.443L71.31 183.98C69.8162 184.242 68.2792 183.902 67.0362 183.033C65.7932 182.164 64.9455 180.837 64.679 179.344L59.758 151.3C59.5611 150.163 59.7113 148.993 60.1892 147.942C60.6671 146.891 61.4504 146.009 62.437 145.41" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M60.86 157.646L171.687 138.095" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M165.79 147.076L69.446 164.059L71.3326 174.762L167.676 157.779L165.79 147.076Z" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M139.33 110.64C132.284 125.62 120.192 137.643 105.173 144.603C90.1535 151.564 73.164 153.019 57.1798 148.713C41.1956 144.407 27.2359 134.615 17.7455 121.052C8.25511 107.488 3.83913 91.0183 5.27097 74.5263C6.70281 58.0344 13.8912 42.5719 25.5771 30.847C37.263 19.1221 52.7015 11.8822 69.1886 10.3955C85.6757 8.90875 102.16 13.2699 115.755 22.715C129.35 32.1602 139.189 46.0873 143.548 62.057" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M146.018 81.76C145.974 84.6267 145.759 87.4882 145.372 90.329" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M133.098 51.778C140.758 51.778 146.968 45.5682 146.968 37.908C146.968 30.2478 140.758 24.038 133.098 24.038C125.438 24.038 119.228 30.2478 119.228 37.908C119.228 45.5682 125.438 51.778 133.098 51.778Z" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M46.705 49.973L58.143 47.959" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M61.373 66.237L49.935 68.251" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M51.626 67.947C51.2956 66.2295 51.3402 64.4609 51.7567 62.7622C52.1731 61.0636 52.9517 59.4749 54.039 58.105C55.1263 56.7351 55.9048 55.1464 56.3213 53.4478C56.7378 51.7491 56.7823 49.9805 56.452 48.263" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M59.682 66.522C59.4127 64.7944 58.7722 63.1457 57.8046 61.6893C56.837 60.233 55.5653 59.0037 54.077 58.086C52.5835 57.1748 51.3055 55.9503 50.3312 54.4972C49.357 53.044 48.7096 51.3967 48.434 49.669" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M169.73 91.374L174.803 90.481" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M183.79 88.904L188.863 88.011" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M177.615 80.126L178.508 85.199" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M180.085 94.186L180.978 99.259" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M171.345 84.116L175.563 87.08" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M183.049 92.305L187.267 95.269" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M184.873 81.741L181.928 85.94" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M176.684 93.426L173.739 97.644" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M36.16 167.013L46.496 152.269" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M33.956 154.473L48.719 164.809" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M150.559 182.346L147.842 180.807L149.381 178.09" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M147.842 180.807C148.519 180.462 149.267 180.28 150.027 180.275C150.978 180.275 151.907 180.557 152.698 181.085C153.488 181.613 154.104 182.364 154.468 183.242C154.832 184.121 154.927 185.087 154.742 186.02C154.556 186.952 154.098 187.809 153.426 188.481C152.754 189.153 151.897 189.611 150.965 189.797C150.032 189.982 149.066 189.887 148.187 189.523C147.309 189.159 146.558 188.543 146.03 187.753C145.502 186.962 145.22 186.033 145.22 185.082" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M52.331 91.446C57.569 94.977 67.781 92.32 83.261 88.752" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M85.427 80.088C84.306 80.316 83.271 80.788 83.413 81.646C83.576 82.632 85.465 83.81 91.07 84.287C97.53 84.836 99.954 83.987 100.019 82.995C100.07 82.216 98.708 81.361 96.58 81.095" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M86.757 59.264C90.994 59.164 91.488 67.615 86.776 67.605C82.558 67.6 82.6 59.358 86.757 59.264Z" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M96.827 84.382C96.6 80.62 95.174 63.843 95.174 60.67C95.174 57.516 97.4049 53.406 98.0239 52.386C98.6969 51.277 98.6969 50.03 98.5749 46.986C98.5219 45.656 97.4619 45.615 96.5419 48.658C95.7149 51.391 92.4419 53.674 92.5709 48.411C92.6479 45.352 93.1379 41.111 93.2359 39.956C93.4359 37.58 92.1659 37.375 91.4499 39.956C90.7428 42.3565 90.1656 44.7933 89.7209 47.256" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M89.778 46.781C89.531 43.781 89.531 40.074 89.512 38.915C89.474 36.559 88.157 36.539 87.726 39.124C87.283 41.783 86.814 45.888 86.757 47.56" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M86.8539 46.1C86.3349 43.166 86.167 41.07 86.035 39.942C85.769 37.605 84.446 37.737 84.287 40.36C84.1253 43.0743 84.1126 45.7953 84.249 48.511" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M84.211 47.712C83.47 44.843 83.222 43.361 83.011 42.24C82.591 39.979 81.444 40.226 81.453 42.791C81.4232 45.4173 81.6075 48.0416 82.004 50.638C82.498 52.823 84.721 59.207 84.911 60.024" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M85.427 67.282C85.427 71.538 85.389 80.905 85.427 83.261" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M89.911 62.057C90.861 62.057 94.034 61.772 95.155 61.05" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M89.607 65.876C91.5727 65.9907 93.5393 65.6662 95.364 64.926" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M83.413 81.646C83.318 83.489 83.242 89.341 83.223 90.253" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M48.662 97.663C45.6556 98.6089 42.411 98.4565 39.5065 97.2328C36.6021 96.0092 34.2266 93.7939 32.8034 90.9818C31.3803 88.1698 31.002 84.9437 31.736 81.8787C32.47 78.8136 34.2686 76.1089 36.8112 74.2465C39.3538 72.3842 42.4751 71.4853 45.6188 71.71C48.7624 71.9348 51.7241 73.2686 53.9759 75.4738C56.2276 77.6789 57.6232 80.612 57.9136 83.7503C58.2041 86.8886 57.3707 90.028 55.562 92.609" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M69.239 129.146C69.087 127.702 68.194 126.646 67.239 126.771C65.948 126.947 64.58 129.393 64.921 136.404C65.245 143.073 66.801 145.475 68.17 145.372C69.309 145.287 70.317 143.567 70.317 140.546" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M65.382 129.412C70.018 129.203 79.882 128.12 81.038 127.949C82.194 127.778 89.876 122.339 91.944 121.926C92.496 121.816 99.411 122.011 102.622 122.04C104.122 122.053 104.822 123.826 96.333 124.24" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M94.11 123.788C96.542 124.358 100.895 125.009 104.161 125.403C105.682 125.586 105.092 127.626 95.839 126.752" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M94.11 126.144C96.485 127.075 99.828 128.028 102.91 128.975C104.335 129.413 103.442 131.16 95.12 129.412" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M93.9 128.367C95.4 129.659 96.753 130.889 99.2 132.718C100.342 133.571 99.477 134.73 92.322 130.97C91.013 130.282 89.984 131.881 88.655 133.497C86.906 135.624 86.299 137.397 81.682 138.342C76.59 139.388 67.945 141.059 65.551 141.401" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M83.66 126.543C85.4793 124.281 86.9344 121.749 87.973 119.038C88.531 117.547 90.063 117.689 88.752 123.446" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M56 128.671C58.679 128.253 64.645 127.113 67.267 126.752" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M68.194 145.391C54.951 145.391 50.467 146.208 46.914 141.401C42.985 136.093 47.405 117.195 48.964 106.323C50.325 96.823 46.144 90.408 45.318 90.462C42.218 90.652 41.766 87.589 44.71 88.182C46.21 88.482 44.843 86.339 43.703 84.971C45.6699 83.9102 47.443 82.5239 48.947 80.871C56.6 87.1 58.01 92.039 49.992 91.45C52.0945 92.4043 54.3712 92.9149 56.68 92.95" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M32.19 80.6C31.2788 79.4766 30.042 78.663 28.6495 78.2712C27.2571 77.8794 25.7775 77.9286 24.4142 78.4119C23.0509 78.8953 21.8707 79.7892 21.0361 80.9706C20.2015 82.1521 19.7534 83.563 19.7534 85.0095C19.7534 86.456 20.2015 87.867 21.0361 89.0484C21.8707 90.2299 23.0509 91.1237 24.4142 91.6071C25.7775 92.0905 27.2571 92.1396 28.6495 91.7478C30.042 91.356 31.2788 90.5424 32.19 89.419C31.2021 86.5623 31.2021 83.4567 32.19 80.6V80.6Z" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M60.366 127.93C61.7305 122.928 63.5823 118.071 65.895 113.43" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M48.833 107.087C56.002 104.242 61.333 99.164 62.506 92.929" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M64.394 94.832C69.619 93.863 72.07 92.875 84.059 98.537C87.973 96.789 99.05 92.153 101.292 91.393" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M92.286 102.7C112.786 76.993 116.397 71.787 119.931 69.7C123.047 67.857 125.08 67.211 163.688 56.419" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M166.006 59.7C165.36 57.4 164.392 56.245 163.669 56.432C162.625 56.702 161.955 59.663 163.004 66.179C164.104 73.001 165.797 75.679 166.956 75.579C167.887 75.503 168.495 73.779 168.096 70.791" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M100.019 83C99.719 86 98.879 91.341 98.613 92.405" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M63.425 118.905C67.263 118.205 74.35 116.891 80.202 115.219C81.8647 117.932 83.9639 120.353 86.415 122.382" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M84.059 98.518C85.446 102.489 84.459 110.887 80.183 115.218" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M102.546 125.213C115.599 123.788 124.89 98.537 130.571 86.434C143.149 82.672 158.843 77.789 166.971 75.585" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M164.2 71.443C168.102 70.6236 172.092 70.3043 176.075 70.493C178.83 60.727 180.008 48.947 180.369 41.385C170.679 47.94 171.439 58.846 162.528 61.43" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M169.236 112.54C170.604 110.146 170.223 108.171 169.597 107.866C168.665 107.412 165.797 108.966 162.472 114.421C158.991 120.138 158.989 123.169 159.888 123.821C160.624 124.359 162.339 123.669 163.935 121.237" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M160.211 118.943C165.132 121.337 165.436 123.18 168.229 125.194C175.088 124.757 188.787 120.748 195 117.894C186.64 113.942 174.29 116.279 165.227 110.579" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M169.578 107.866C163.27 102.85 141.021 87.066 136.746 84.572" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M159.888 123.826C155.765 121.356 132.604 106.27 128.595 103.648C124.833 106.156 121.109 108.702 119.266 109.937" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M125.555 105.681C126.543 102.565 128.006 93.901 128.655 90.69" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M65.382 114.478C67.8398 115.566 70.3979 116.413 73.02 117.005" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
	</g>
</svg>
            </Col>
            </Row>
            }
            </Container>
        </>
    )
}
