import { useContext, useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
import { ElementContainer, Heading, Subtitles, Card, CardContainer, CardText, Title, HeadingWhite, Button } from '../components/commonProp';

export default function Error(){
    const[time,setTime] = useState(5)
    const location = useNavigate()

    useEffect(() => {
        let timerInterval = setTimeout(() => setTime(time-1), 1000)

        if(time===0){
            location("/");
        }

        return () => {
            clearTimeout(timerInterval)
        }

    })

    return(
        <Container fluid>
        <Row className= "mt-3">
            <Col md={12} className="d-flex flex-column text-align-center justify-content-center align-items-center">
            <Heading className= "mb-3">
                Oh no! You can't access this page.
            </Heading>
            <Subtitles className="load">
                Redirecting you to the homepage in {time} seconds...                
            </Subtitles>
            <svg height="60vh" fill="none" strokeWidth=".75" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
	<path d="M100.07 155.9C95.7088 156.549 91.2541 155.804 87.341 153.772L81.166 185.672C85.2201 186.831 89.5179 186.831 93.572 185.672C95.966 171.727 100.2 161.2 100.07 155.9Z" fill="#FFD0C6"/>
	<path d="M131.36 150.391C128.948 153.979 125.464 156.712 121.405 158.2L144.3 182.879C148.651 180.029 150.3 178.661 151.729 174.045C138.7 158.261 138.616 156.34 131.36 150.391Z" fill="#FFD0C6"/>
	<path d="M163.43 80.933C167.192 81.18 167.8 80.287 163.905 78.976C162.822 78.615 157.027 77.722 155.963 77.57L153.57 77.247C151.537 76.639 155.317 74.131 156.078 73.219C157.122 71.984 158.224 70.578 154.159 72.402C153.467 72.702 151.559 73.667 147.547 75.157C142.711 76.848 142.628 76.689 141.829 77.266C142.194 78.7252 142.896 80.0784 143.88 81.2167C144.863 82.3551 146.099 83.2467 147.49 83.82L150.017 82.908C151.888 82.9624 153.751 83.1786 155.584 83.554C157.084 83.896 159.592 84.865 161.207 85.283C161.607 85.399 162.381 84.94 159.06 82.946C160.694 83.079 162.978 83.52 164.741 83.725C165.16 83.774 165.596 83.174 163.183 82.168C162.29 81.806 160.732 81.16 159.953 80.914C161.112 80.8556 162.272 80.8619 163.43 80.933V80.933Z" fill="#FFD0C6"/>
	<path d="M48.546 78.558C44.157 77.741 45.582 78.858 46.874 79.812C47.824 80.512 52.136 82.034 50.313 83.117C45.639 84.917 41.307 86.841 40.623 87.278C37.147 89.463 37.944 90.185 41.554 89.064C42.6633 88.7069 43.7926 88.415 44.936 88.19C44.136 88.684 42.542 89.843 42.086 90.19C39.977 91.748 40.547 92.223 40.946 92.09C42.466 91.577 44.803 90.49 46.285 90C45.962 90.3 45.715 90.57 45.563 90.722C43.72 92.584 44.381 92.976 44.746 92.774C46.195 91.969 48.432 90.474 49.799 89.774C51.4933 88.9753 53.2544 88.3268 55.062 87.836L58.368 88.197C58.7367 85.3634 59.7935 82.6632 61.446 80.332C60.272 79.973 56.572 80.087 48.546 78.558Z" fill="#FFD0C6"/>
	<path d="M106.244 73.789C105.944 72.178 105.304 68.304 106.624 67.596C110.044 65.81 108.486 62.696 106.7 64.176C105.845 64.876 105.522 64.765 105.465 64.195C105.503 61.022 102.407 55.569 99.0251 63.378C98.0071 65.748 96.8251 69.178 98.7251 70.768C100.125 71.937 102.345 71.323 103.475 71.091L101.915 73.291C101.77 74.403 101.335 75.527 100.226 75.271C99.4025 75.0653 98.5639 74.9255 97.7181 74.853C97.7181 74.853 100.188 83.687 102.718 87.853C104.512 83.0312 107.058 78.5236 110.26 74.497C107.764 74.739 106.743 76.459 106.244 73.789Z" fill="#FFD0C6"/>
	<g>
		<path d="M45.7148 78.824V84.979C46.5888 84.618 47.5148 84.238 48.4888 83.839V80.695C47.4547 80.2514 46.5136 79.6167 45.7148 78.824V78.824Z" fill="#3B28AB"/>
		<path d="M45.7148 92.218V194.981H48.4888V90.489C47.6148 91.04 46.6078 91.686 45.7148 92.218Z" fill="#3B28AB"/>
		<path d="M103.47 71.11L101.951 73.276L101.989 71.433L103.47 71.11Z" fill="#3B28AB"/>
		<path d="M141.848 77.3L142.304 77.015C142.404 76.963 146.339 75.595 146.404 75.571C143.823 74.283 141.563 74.853 141.848 77.3Z" fill="#3B28AB"/>
		<path d="M150.093 82.908L147.493 83.82C149.241 84.542 150.993 84.444 151.465 82.981L150.093 82.908Z" fill="#3B28AB"/>
		<path d="M95.0159 192.15C94.7959 189.933 94.3111 187.751 93.5719 185.65C89.5178 186.809 85.22 186.809 81.1659 185.65C75.7899 187.208 69.6529 191.976 66.4419 194.978C77.2329 194.978 84.3769 194.883 92.5839 194.864C92.9279 194.865 93.2682 194.793 93.5824 194.652C93.8967 194.512 94.1778 194.308 94.4074 194.051C94.637 193.795 94.8098 193.493 94.9147 193.166C95.0196 192.838 95.0541 192.492 95.0159 192.15V192.15Z" fill="#3B28AB"/>
		<path d="M155.242 175.925L151.708 174.025C150.302 178.642 148.63 180.01 144.279 182.86C146.464 186.128 145.951 187.743 145.704 188.692C143.404 190.858 142.247 190.849 140.651 194.992H148.651C149.725 195.016 150.784 194.732 151.703 194.175C152.621 193.618 153.362 192.81 153.838 191.847C155.038 189.247 156.038 183.982 157.162 180.885C157.512 179.967 157.509 178.952 157.155 178.036C156.8 177.12 156.119 176.368 155.242 175.925Z" fill="#3B28AB"/>
		<path d="M157.692 55.417C157.684 55.5909 157.608 55.7546 157.48 55.8722C157.352 55.9898 157.182 56.0516 157.008 56.044C156.834 56.0365 156.67 55.9602 156.553 55.8319C156.435 55.7036 156.373 55.5339 156.381 55.36C156.385 55.274 156.405 55.1895 156.442 55.1114C156.478 55.0333 156.53 54.9631 156.593 54.9049C156.657 54.8467 156.731 54.8015 156.812 54.772C156.893 54.7425 156.979 54.7293 157.065 54.733C157.151 54.7368 157.236 54.7574 157.314 54.7938C157.392 54.8302 157.462 54.8817 157.52 54.9452C157.578 55.0087 157.624 55.0831 157.653 55.164C157.682 55.245 157.696 55.331 157.692 55.417V55.417Z" fill="#3B28AB"/>
		<path d="M71.0399 42.9L50.1999 6.78103C49.8868 6.23951 49.4367 5.7899 48.8949 5.47731C48.353 5.16473 47.7385 5.00018 47.1129 5.00018C46.4874 5.00018 45.8729 5.16473 45.331 5.47731C44.7892 5.7899 44.3391 6.23951 44.0259 6.78103L23.1819 42.9C22.8696 43.4408 22.7051 44.0542 22.7048 44.6786C22.7046 45.3031 22.8686 45.9166 23.1805 46.4576C23.4924 46.9986 23.9412 47.448 24.4817 47.7607C25.0222 48.0734 25.6355 48.2383 26.2599 48.239H45.7339V78.387C45.9999 78.235 46.8169 78.254 48.5079 78.558V48.236H67.9619C68.586 48.235 69.1987 48.07 69.7388 47.7575C70.279 47.4449 70.7274 46.9959 71.0392 46.4553C71.351 45.9148 71.5152 45.3018 71.5153 44.6778C71.5154 44.0538 71.3515 43.4407 71.0399 42.9V42.9ZM46.5319 19.016C46.5319 18.8649 46.592 18.7199 46.6989 18.613C46.8058 18.5061 46.9508 18.446 47.1019 18.446C47.2531 18.446 47.3981 18.5061 47.505 18.613C47.6119 18.7199 47.6719 18.8649 47.6719 19.016V31.616C47.6719 31.7672 47.6119 31.9122 47.505 32.0191C47.3981 32.126 47.2531 32.186 47.1019 32.186C46.9508 32.186 46.8058 32.126 46.6989 32.0191C46.592 31.9122 46.5319 31.7672 46.5319 31.616V19.016ZM47.1019 36.381C47.365 36.381 47.6221 36.459 47.8408 36.6052C48.0596 36.7513 48.23 36.959 48.3307 37.2021C48.4314 37.4451 48.4577 37.7125 48.4064 37.9705C48.3551 38.2285 48.2284 38.4655 48.0424 38.6515C47.8564 38.8375 47.6194 38.9642 47.3614 39.0155C47.1034 39.0668 46.836 39.0404 46.593 38.9398C46.3499 38.8391 46.1422 38.6687 45.9961 38.4499C45.8499 38.2312 45.7719 37.9741 45.7719 37.711C45.7709 37.5362 45.8045 37.363 45.8708 37.2013C45.9372 37.0396 46.0349 36.8926 46.1584 36.7689C46.2819 36.6452 46.4287 36.5473 46.5903 36.4807C46.7519 36.4141 46.9252 36.3802 47.0999 36.381H47.1019Z" fill="#3B28AB"/>
		<path d="M122.051 57.7C122.645 57.529 123.16 57.1521 123.502 56.6367C123.844 56.1213 123.992 55.5009 123.919 54.8866C123.846 54.2722 123.557 53.7039 123.103 53.2831C122.649 52.8624 122.061 52.6167 121.443 52.59C121.878 52.1982 122.169 51.6714 122.269 51.0944C122.368 50.5173 122.271 49.9235 121.993 49.4083C121.714 48.8931 121.271 48.4865 120.733 48.2538C120.196 48.021 119.596 47.9757 119.03 48.125C119.274 47.6043 119.341 47.0175 119.218 46.4553C119.096 45.8932 118.792 45.387 118.353 45.015C117.914 44.6431 117.365 44.426 116.79 44.3975C116.216 44.3689 115.648 44.5304 115.174 44.857C115.24 44.2602 115.099 43.6587 114.775 43.1535C114.45 42.6483 113.962 42.2702 113.391 42.0825C112.821 41.8949 112.203 41.9092 111.642 42.1231C111.081 42.3369 110.611 42.7373 110.31 43.257C110.194 42.6348 109.865 42.0725 109.379 41.667C108.893 41.2616 108.281 41.0385 107.648 41.0363C107.015 41.034 106.402 41.2527 105.913 41.6547C105.424 42.0567 105.091 42.6167 104.971 43.238C104.674 42.7161 104.207 42.3122 103.647 42.0938C103.088 41.8754 102.47 41.8558 101.898 42.0384C101.326 42.221 100.834 42.5945 100.505 43.0966C100.176 43.5986 100.029 44.1986 100.089 44.796C99.6181 44.465 99.0516 44.2981 98.4766 44.321C97.9016 44.3439 97.3501 44.5553 96.9071 44.9226C96.4641 45.29 96.1543 45.7928 96.0254 46.3537C95.8965 46.9145 95.9557 47.5022 96.1939 48.026C95.6296 47.8762 95.0315 47.9189 94.4943 48.1474C93.9571 48.3758 93.5114 48.777 93.2279 49.2873C92.9444 49.7977 92.8392 50.388 92.929 50.9649C93.0189 51.5417 93.2986 52.0721 93.7239 52.472C93.1059 52.494 92.5157 52.7345 92.0584 53.1508C91.6011 53.5671 91.3064 54.1321 91.2265 54.7453C91.1467 55.3585 91.2871 55.9802 91.6226 56.4996C91.9582 57.019 92.4671 57.4026 93.0589 57.582C92.4661 57.7569 91.9546 58.1364 91.6155 58.653C91.2763 59.1696 91.1314 59.7898 91.2067 60.4032C91.2819 61.0166 91.5724 61.5834 92.0264 62.0027C92.4804 62.422 93.0684 62.6666 93.6859 62.693C93.256 63.0894 92.9715 63.6184 92.8777 64.1956C92.7839 64.7728 92.8864 65.3647 93.1687 65.8767C93.451 66.3888 93.8968 66.7914 94.4349 67.0203C94.973 67.2491 95.5722 67.2909 96.1369 67.139C95.9434 67.5501 95.861 68.0048 95.898 68.4576C95.9349 68.9105 96.0899 69.3458 96.3475 69.7201C96.605 70.0944 96.9562 70.3947 97.3659 70.591C97.7757 70.7873 98.2298 70.8728 98.6829 70.839C97.5239 69.908 97.1059 67.839 99.0059 63.449C102.388 55.641 105.484 61.093 105.446 64.266C105.503 64.836 105.826 64.95 106.681 64.247C108.467 62.765 110.025 65.881 106.624 67.666C105.978 68.009 105.541 68.766 106.092 72.966C106.125 73.2664 106.176 73.5645 106.244 73.859C106.614 74.0487 107.025 74.1483 107.441 74.1498C107.857 74.1513 108.268 74.0547 108.64 73.8678C109.012 73.6809 109.335 73.4089 109.582 73.074C109.829 72.739 109.994 72.3506 110.063 71.94C110.356 72.4648 110.821 72.873 111.379 73.0961C111.937 73.3192 112.555 73.3438 113.129 73.1657C113.703 72.9876 114.198 72.6177 114.532 72.1178C114.866 71.618 115.018 71.0186 114.963 70.42C115.43 70.7554 115.994 70.9276 116.569 70.91C117.143 70.8924 117.696 70.686 118.141 70.3228C118.587 69.9595 118.9 69.4596 119.033 68.9004C119.166 68.3412 119.11 67.7538 118.876 67.229C119.438 67.3807 120.035 67.3406 120.573 67.115C121.11 66.8895 121.556 66.4913 121.842 65.9834C122.127 65.4756 122.236 64.8871 122.149 64.3109C122.063 63.7347 121.787 63.2038 121.365 62.802C121.977 62.7739 122.56 62.5318 123.012 62.1179C123.464 61.7041 123.756 61.1447 123.838 60.5374C123.919 59.9301 123.785 59.3133 123.459 58.7948C123.132 58.2763 122.634 57.8888 122.051 57.7V57.7Z" fill="#3B28AB"/>
		<path d="M64.6749 84.39C65.3675 84.39 65.9289 83.8286 65.9289 83.136C65.9289 82.4435 65.3675 81.882 64.6749 81.882C63.9823 81.882 63.4209 82.4435 63.4209 83.136C63.4209 83.8286 63.9823 84.39 64.6749 84.39Z" fill="#3B28AB"/>
		<path d="M75.9609 93.966C75.9609 94.2141 75.8873 94.4565 75.7495 94.6627C75.6118 94.8689 75.4159 95.0297 75.1868 95.1246C74.9576 95.2195 74.7055 95.2443 74.4622 95.1959C74.219 95.1476 73.9955 95.0281 73.8202 94.8528C73.6448 94.6774 73.5254 94.4539 73.477 94.2107C73.4286 93.9674 73.4534 93.7153 73.5483 93.4862C73.6432 93.257 73.804 93.0612 74.0102 92.9234C74.2164 92.7856 74.4589 92.712 74.7069 92.712C75.0387 92.7147 75.3561 92.8476 75.5907 93.0822C75.8253 93.3168 75.9583 93.6343 75.9609 93.966Z" fill="#3B28AB"/>
		<path d="M87.6828 84.846C87.6828 85.0941 87.6093 85.3365 87.4715 85.5427C87.3337 85.7489 87.1378 85.9097 86.9087 86.0046C86.6795 86.0995 86.4274 86.1243 86.1842 86.0759C85.9409 86.0276 85.7175 85.9081 85.5421 85.7327C85.3667 85.5574 85.2473 85.3339 85.1989 85.0907C85.1505 84.8474 85.1753 84.5953 85.2703 84.3661C85.3652 84.137 85.5259 83.9412 85.7321 83.8034C85.9383 83.6656 86.1808 83.592 86.4288 83.592C86.7605 83.5949 87.0778 83.728 87.3123 83.9625C87.5469 84.1971 87.6799 84.5143 87.6828 84.846V84.846Z" fill="#3B28AB"/>
		<path d="M100.564 95.561C100.564 95.809 100.491 96.0516 100.353 96.2579C100.215 96.4643 100.02 96.6252 99.7905 96.7202C99.5614 96.8153 99.3092 96.8403 99.0659 96.792C98.8226 96.7437 98.599 96.6244 98.4236 96.4491C98.2481 96.2737 98.1285 96.0503 98.0801 95.807C98.0316 95.5637 98.0564 95.3115 98.1513 95.0823C98.2462 94.8531 98.4069 94.6572 98.6131 94.5194C98.8194 94.3816 99.0618 94.308 99.3099 94.308C99.6414 94.3109 99.9586 94.4438 100.193 94.6781C100.428 94.9124 100.561 95.2295 100.564 95.561V95.561Z" fill="#3B28AB"/>
		<path d="M111.507 84.846C111.507 85.0941 111.433 85.3365 111.295 85.5427C111.158 85.7489 110.962 85.9097 110.733 86.0046C110.504 86.0995 110.251 86.1243 110.008 86.0759C109.765 86.0276 109.541 85.9081 109.366 85.7327C109.191 85.5574 109.071 85.3339 109.023 85.0907C108.974 84.8474 108.999 84.5953 109.094 84.3661C109.189 84.137 109.35 83.9412 109.556 83.8034C109.762 83.6656 110.005 83.592 110.253 83.592C110.584 83.5949 110.902 83.728 111.136 83.9625C111.371 84.1971 111.504 84.5143 111.507 84.846V84.846Z" fill="#3B28AB"/>
		<path d="M125.186 85.568C125.186 85.816 125.112 86.0585 124.975 86.2647C124.837 86.4709 124.641 86.6317 124.412 86.7266C124.183 86.8215 123.931 86.8463 123.687 86.7979C123.444 86.7495 123.221 86.6301 123.045 86.4547C122.87 86.2794 122.75 86.0559 122.702 85.8127C122.654 85.5694 122.679 85.3173 122.773 85.0881C122.868 84.859 123.029 84.6632 123.235 84.5254C123.442 84.3876 123.684 84.314 123.932 84.314C124.264 84.3169 124.581 84.4499 124.816 84.6845C125.05 84.919 125.183 85.2363 125.186 85.568V85.568Z" fill="#3B28AB"/>
		<path d="M139.074 84.846C139.766 84.846 140.328 84.2846 140.328 83.592C140.328 82.8995 139.766 82.338 139.074 82.338C138.381 82.338 137.82 82.8995 137.82 83.592C137.82 84.2846 138.381 84.846 139.074 84.846Z" fill="#3B28AB"/>
		<path d="M133.621 97.1C133.621 97.348 133.547 97.5905 133.409 97.7967C133.272 98.0029 133.076 98.1636 132.847 98.2586C132.618 98.3535 132.365 98.3783 132.122 98.3299C131.879 98.2815 131.655 98.1621 131.48 97.9867C131.305 97.8114 131.185 97.5879 131.137 97.3447C131.089 97.1014 131.113 96.8493 131.208 96.6201C131.303 96.391 131.464 96.1951 131.67 96.0574C131.876 95.9196 132.119 95.846 132.367 95.846C132.532 95.8443 132.696 95.8755 132.849 95.9379C133.002 96.0003 133.141 96.0926 133.257 96.2094C133.374 96.3262 133.466 96.4652 133.529 96.6181C133.591 96.771 133.623 96.9349 133.621 97.1Z" fill="#3B28AB"/>
	</g>
	<g>
		<path d="M45.7148 78.387V48.236" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M45.7148 84.979V78.843" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M45.7148 195V92.275" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M48.5078 90.565V195" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M48.5078 80.705V83.858" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M48.5078 48.236V78.558" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M149.39 85.3781C154.145 96.1694 154.73 108.341 151.031 119.538C147.333 130.736 139.613 140.164 129.366 146" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M65.2258 79.717C69.231 73.1892 74.7512 67.7235 81.3183 63.7833C87.8855 59.8431 95.306 57.5447 102.951 57.0828C110.595 56.621 118.238 58.0095 125.232 61.1304C132.226 64.2514 138.364 69.0128 143.126 75.011" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M87.417 148.529C78.7614 144.9 71.3707 138.795 66.1727 130.981C60.9747 123.166 58.2011 113.99 58.2 104.605C58.1998 99.9205 58.8837 95.261 60.2299 90.774" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M113.825 151.55C111.196 152.104 108.509 152.327 105.825 152.215C104.525 152.215 103.218 152.163 101.931 152.06" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M151.081 83.668C147.357 87.392 142.432 92.784 137.345 98.924C136.076 100.461 134.269 101.456 132.293 101.706C130.316 101.957 128.318 101.444 126.706 100.273C122.241 97.025 119.22 94.688 114.319 91.097" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M101.928 73.308L103.47 71.11" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M142.27 75.543C138.085 79.1745 134.335 83.2781 131.094 87.772C131.094 87.772 121.613 79.833 115.117 75.879C108.409 71.796 106.831 78.539 106.092 72.934C105.539 68.734 105.978 67.974 106.624 67.634C110.024 65.842 108.461 62.724 106.681 64.214C105.622 65.101 105.503 64.714 105.458 63.885C105.282 60.685 102.285 55.885 99.025 63.416C94.425 74.036 103.47 71.11 103.47 71.11" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M101.988 71.42C102.101 73.048 101.835 75.671 100.222 75.29C96.082 74.312 94.31 74.962 91.957 76.79C87.277 80.428 77.7649 85.814 77.7649 85.814C72.1229 82.414 68.038 80.951 62.776 78.69C59.9885 81.7703 58.3693 85.7303 58.2 89.881C65.7 93.092 68.574 94.933 74.444 97.803C75.7588 98.4498 77.2151 98.7558 78.6791 98.6927C80.143 98.6296 81.5676 98.1995 82.8219 97.442C86.5109 95.206 89.9839 93.149 93.7649 91.154" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M146.407 75.575C144.142 74.442 142.125 74.741 141.854 76.483C141.621 77.983 142.639 79.753 143.607 80.914C144.958 82.6129 146.861 83.7859 148.986 84.23C149.48 84.3681 150.008 84.3166 150.466 84.0855C150.924 83.8544 151.279 83.4605 151.462 82.981" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M92.584 83.193C92.9954 89.4682 94.6011 95.6071 97.315 101.28C103.115 102.819 107.821 102.458 113.692 100.672C113.23 96.2752 113.81 91.8315 115.383 87.7" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M147.49 83.8201C150.184 82.7818 152.953 81.95 155.774 81.3321C158.302 80.8994 160.872 80.7718 163.43 80.9521C167.193 81.1741 167.794 80.3231 163.905 78.9951C162.478 78.5071 155.185 77.4741 153.57 77.2471C150.986 76.8841 147.17 76.5061 144.64 76.4301C144.448 76.4305 144.256 76.4425 144.066 76.4661" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M141.848 77.3001C141.902 77.2661 150.67 74.0001 154.159 72.4001C158.208 70.5391 157.118 71.9781 156.078 73.2171C155.314 74.1261 151.537 76.6371 153.57 77.2451" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M150.074 82.9C152.374 82.349 156.914 82.827 158.927 82.942C160.561 83.036 162.936 83.572 164.76 83.742C165.178 83.781 165.634 83.172 163.202 82.184C162.289 81.815 160.68 81.148 159.92 80.914" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M149.977 82.942C151.869 82.949 153.754 83.1541 155.603 83.554C157.103 83.896 159.617 84.845 161.226 85.283C161.626 85.392 162.176 84.865 159.953 83.478C159.785 83.366 159.47 83.178 159.098 82.958" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M58.368 88.19C55.2997 87.7351 52.1975 87.5507 49.097 87.639C46.5363 87.8347 44.0059 88.3191 41.554 89.083C37.945 90.205 37.154 89.495 40.623 87.283C46.4806 84.4907 52.5392 82.1411 58.748 80.254C59.6288 80.0134 60.5612 80.0399 61.427 80.33" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M50.3309 83.136C52.1549 82.053 47.8439 80.536 46.8929 79.836C45.6019 78.884 44.1779 77.756 48.5649 78.582C52.2395 79.3302 55.9591 79.8373 59.6999 80.1" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M44.9358 88.228C44.1358 88.722 42.5438 89.884 42.0858 90.228C39.9858 91.781 40.5478 92.264 40.9458 92.128C42.5268 91.588 44.9548 90.437 46.4178 89.981C48.7928 89.24 53.3518 87.663 55.5178 87.891" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M46.2848 90.014C45.9618 90.337 45.7148 90.603 45.5628 90.736C43.7388 92.598 44.3818 92.992 44.7458 92.788C46.1978 91.971 48.4138 90.474 49.7998 89.788C51.4933 88.9884 53.2542 88.3398 55.0618 87.85" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M95.0159 192.15C94.7959 189.933 94.3111 187.751 93.5719 185.65C89.5178 186.809 85.22 186.809 81.1659 185.65C75.7899 187.208 69.6529 191.976 66.4419 194.978C77.2329 194.978 84.3769 194.883 92.5839 194.864C92.9279 194.865 93.2682 194.793 93.5824 194.652C93.8967 194.512 94.1778 194.308 94.4074 194.051C94.637 193.795 94.8098 193.493 94.9147 193.166C95.0196 192.838 95.0541 192.492 95.0159 192.15V192.15Z" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M100.07 155.916C100.195 161.221 95.9638 171.74 93.5698 185.672" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M81.166 185.653L87.342 153.748" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M108.2 132.438L100.734 155.806C95.8143 156.672 90.7469 155.77 86.428 153.26L97.315 101.3" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M155.261 175.944L151.727 174.044C150.321 178.66 148.627 180.028 144.279 182.878C146.464 186.146 145.951 187.761 145.704 188.71C143.404 190.876 142.247 190.848 140.651 194.99H148.651C149.725 195.014 150.784 194.73 151.703 194.173C152.621 193.616 153.362 192.808 153.838 191.845C155.038 189.245 156.038 183.98 157.162 180.883C157.512 179.97 157.511 178.961 157.16 178.048C156.809 177.136 156.132 176.387 155.261 175.944V175.944Z" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M144.298 182.879L121.405 158.2" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M131.36 150.391C134.58 153.04 137.492 156.042 140.043 159.34C143.536 164.129 151.727 174.04 151.727 174.04" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M103.47 114.427L112.21 147.77C112.874 150.301 114.229 152.596 116.124 154.4L120.479 158.546C125.12 157.05 129.091 153.977 131.702 149.859L127.77 143.359L125.281 118.015C124.367 108.575 118.732 102.066 113.692 100.669" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M110.253 74.511C107.051 78.5377 104.505 83.0453 102.711 87.867C100.184 83.706 97.7109 74.867 97.7109 74.867" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M26.1838 195H177.299" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M159.231 38.5281C151.708 37.1031 144.531 41.5281 143.231 48.4071C142.789 50.8171 143.101 53.305 144.125 55.5311L140.876 60.8511L147.032 59.5971C149.099 61.5791 151.701 62.9132 154.517 63.4351C162.04 64.8601 169.217 60.4351 170.517 53.5561C171.827 46.6781 166.774 39.9531 159.231 38.5281Z" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M157.027 52.53C157.046 51.675 157.374 51.051 158.433 49.642C160.718 46.603 159.333 44.509 157.388 44.417C157.04 44.4015 156.693 44.4628 156.372 44.5967C156.051 44.7305 155.763 44.9336 155.529 45.1914C155.295 45.4492 155.12 45.7555 155.018 46.0883C154.916 46.4211 154.889 46.7724 154.938 47.117" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M148.782 144.616H152.886" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M160.162 144.597H164.266" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M156.524 136.864V140.968" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M156.543 148.245V152.348" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M151.043 139.144L153.95 142.032" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M159.117 147.181L162.024 150.068" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M162.005 139.125L159.098 142.032" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M153.969 147.181L151.062 150.087" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M26.2599 48.236C25.636 48.2347 25.0234 48.0695 24.4835 47.7569C23.9436 47.4443 23.4953 46.9953 23.1835 46.4548C22.8718 45.9144 22.7076 45.3016 22.7073 44.6777C22.707 44.0538 22.8707 43.4407 23.1819 42.9L44.0239 6.78103C44.3371 6.23951 44.7872 5.7899 45.329 5.47731C45.8708 5.16473 46.4854 5.00018 47.1109 5.00018C47.7365 5.00018 48.351 5.16473 48.8928 5.47731C49.4347 5.7899 49.8848 6.23951 50.1979 6.78103L71.0399 42.9C71.3522 43.4408 71.5168 44.0542 71.517 44.6786C71.5173 45.3031 71.3532 45.9166 71.0413 46.4576C70.7294 46.9986 70.2807 47.448 69.7402 47.7607C69.1997 48.0734 68.5864 48.2383 67.9619 48.239L26.2599 48.236Z" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M76.758 27.357C76.7917 27.7327 76.7133 28.1099 76.5326 28.4409C76.3519 28.772 76.0771 29.0421 75.743 29.2169C75.4088 29.3918 75.0303 29.4637 74.6553 29.4235C74.2803 29.3833 73.9256 29.2328 73.6362 28.991C73.3467 28.7492 73.1354 28.427 73.0291 28.0652C72.9227 27.7033 72.926 27.3181 73.0386 26.9581C73.1512 26.5981 73.368 26.2796 73.6616 26.0429C73.9552 25.8061 74.3124 25.6618 74.688 25.628C75.1915 25.5841 75.6919 25.7414 76.0798 26.0654C76.4677 26.3893 76.7116 26.8538 76.758 27.357V27.357Z" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M61.303 165.704V173.38" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M65.1498 169.542H57.4558" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M106.244 73.827C106.611 74.0242 107.019 74.131 107.436 74.1384C107.852 74.1458 108.264 74.0537 108.638 73.8697C109.011 73.6857 109.336 73.4151 109.583 73.0805C109.831 72.7459 109.996 72.357 110.063 71.946C110.356 72.4708 110.821 72.879 111.379 73.1021C111.937 73.3253 112.555 73.3498 113.129 73.1717C113.703 72.9936 114.199 72.6237 114.532 72.1238C114.866 71.624 115.018 71.0246 114.963 70.426C115.43 70.7614 115.994 70.9336 116.569 70.916C117.143 70.8984 117.696 70.6921 118.141 70.3288C118.587 69.9655 118.9 69.4656 119.033 68.9064C119.166 68.3472 119.111 67.7598 118.876 67.235C119.268 67.3443 119.679 67.3605 120.079 67.2822C120.478 67.2038 120.853 67.0332 121.174 66.7839C121.495 66.5346 121.754 66.2136 121.929 65.8466C122.104 65.4795 122.191 65.0766 122.182 64.67C122.176 64.321 122.1 63.9767 121.96 63.6571C121.82 63.3374 121.618 63.0488 121.365 62.808C122.049 62.7889 122.698 62.5009 123.171 62.0065C123.644 61.5121 123.903 60.8512 123.892 60.167C123.882 59.6141 123.699 59.0782 123.368 58.6351C123.038 58.1919 122.576 57.8637 122.049 57.697C122.598 57.5354 123.081 57.1998 123.423 56.7407C123.766 56.2817 123.95 55.7238 123.949 55.151C123.94 54.4834 123.675 53.8447 123.208 53.3673C122.741 52.89 122.108 52.6106 121.441 52.587C121.835 52.2303 122.111 51.7622 122.232 51.2449C122.354 50.7276 122.315 50.1855 122.121 49.6907C121.928 49.196 121.588 48.7718 121.147 48.4747C120.707 48.1775 120.186 48.0214 119.655 48.027C119.443 48.0317 119.232 48.0636 119.028 48.122C119.272 47.6013 119.339 47.0145 119.216 46.4523C119.094 45.8902 118.79 45.384 118.351 45.012C117.912 44.6401 117.363 44.423 116.788 44.3945C116.214 44.3659 115.646 44.5274 115.172 44.854C115.238 44.2572 115.098 43.6557 114.773 43.1505C114.448 42.6453 113.96 42.2672 113.389 42.0795C112.819 41.8919 112.201 41.9062 111.64 42.1201C111.079 42.3339 110.609 42.7343 110.308 43.254C109.884 40.333 105.426 40.265 104.969 43.235C104.672 42.7132 104.205 42.3092 103.645 42.0908C103.086 41.8724 102.469 41.8528 101.897 42.0354C101.324 42.218 100.833 42.5915 100.503 43.0936C100.174 43.5956 100.027 44.1956 100.087 44.793C99.6162 44.462 99.0496 44.2951 98.4746 44.318C97.8996 44.3409 97.3481 44.5523 96.9052 44.9196C96.4622 45.287 96.1524 45.7898 96.0235 46.3507C95.8946 46.9115 95.9538 47.4992 96.192 48.023C95.6268 47.8693 95.0265 47.9094 94.4869 48.1369C93.9472 48.3645 93.4994 48.7663 93.215 49.2783C92.9306 49.7902 92.826 50.3827 92.9179 50.9611C93.0098 51.5395 93.2929 52.0704 93.722 52.469C93.1022 52.4882 92.5096 52.7273 92.0501 53.1436C91.5906 53.5599 91.2944 54.1261 91.2143 54.741C91.1343 55.3558 91.2758 55.979 91.6134 56.499C91.9511 57.0191 92.4628 57.4019 93.057 57.579C92.4618 57.7515 91.9476 58.1303 91.6063 58.6475C91.265 59.1647 91.119 59.7864 91.1945 60.4015C91.2699 61.0165 91.5619 61.5846 92.018 62.0039C92.4742 62.4232 93.0648 62.6665 93.684 62.69C93.2541 63.0864 92.9695 63.6155 92.8758 64.1926C92.782 64.7698 92.8845 65.3617 93.1668 65.8737C93.449 66.3858 93.8949 66.7884 94.433 67.0173C94.971 67.2461 95.5703 67.2879 96.135 67.136C95.9373 67.5529 95.8541 68.0149 95.894 68.4746C95.9338 68.9343 96.0953 69.3751 96.3618 69.7517C96.6283 70.1284 96.9903 70.4273 97.4105 70.6179C97.8307 70.8084 98.294 70.8837 98.753 70.836" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M127.656 154.552L122.697 148.643" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M95.282 155.901L97.315 148.529" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M110.253 107.284C112.97 110.57 115.991 111.957 119.239 111.919" stroke="#3B28AB" strokeLinecap="round" strokeLinejoin="round"/>
	</g>
            </svg>
            </Col>
           
            </Row>
    </Container>
    )

}

