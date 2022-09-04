import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import {Heading, Subtitles, Card, CardContainer, CardText} from '../components/commonProp';
// import Upload from "../functions/Upload";


export default function Dashboard(){

    // const [files,setFiles ] = useState('')

    // const [images, setImages] = useState('')


    // function uploadImages(e) {
    //     e.preventDefault()

    //     // Upload multiple files
    //     console.log(files)
    //     Upload(files)
        
    // }

    // fetch('http://localhost:4000/images/view',{
    //     method : 'GET'      
    //     }).then(res => res.json())
    //     .then(data => {
    //         if(data!==undefined){
    //             setImages(data.map(image => {
    //                 return(
    //                 <ImageCard key={image._id} imageProp= {image}/>            
    //                 )
    //             }))
    //         }
    //     })


    return(
        <>
        <Container>
             <Col md={12} className="ps-0 pe-5 d-flex flex-column justify-content-center align-items-center">
            <Heading>
                Dashboard
            </Heading>
            <Subtitles>
                Manage everything on your page.
            </Subtitles>
            <Col md={10} className="mt-4">
            <CardContainer>
                <Card as={Link} to="viewAllOrders">
                <CardText>
                View All Orders
                </CardText>
                <svg width="50%" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" className="d-block m-auto">
	<path d="M1.19111 11.8781C1.24265 12.3583 1.62365 12.739 2.10374 12.7915C3.66985 12.9627 5.31023 13.1979 6.99992 13.1979C8.68961 13.1979 10.33 12.9627 11.8961 12.7915C12.3762 12.739 12.7572 12.3583 12.8087 11.8781C12.9762 10.3177 13.1978 8.68341 13.1978 6.99998C13.1978 5.31655 12.9762 3.68223 12.8087 2.12184C12.7572 1.64164 12.3762 1.26097 11.8961 1.20847C10.33 1.03722 8.68961 0.802063 6.99992 0.802063C5.31023 0.802063 3.66985 1.03722 2.10374 1.20847C1.62365 1.26097 1.24265 1.64164 1.1911 2.12184C1.0236 3.68223 0.802002 5.31655 0.802002 6.99998C0.802002 8.68341 1.0236 10.3177 1.19111 11.8781Z" fill="#D7E0FF" stroke="#3b28ab"/>
	<path d="M10.1864 10.2398L8.29471 10.2398" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M4.75928 0.956573L4.75928 5.08195C4.75928 5.67868 5.42235 6.03643 5.92108 5.70878L6.58815 5.27054C6.83813 5.10632 7.16179 5.10632 7.41176 5.27054L8.09362 5.7185C8.58932 6.04415 9.24901 5.69279 9.25538 5.09973L9.30006 0.941828C8.92882 0.876599 7.97345 0.810029 7.06321 0.810029C6.15298 0.810029 5.1574 0.913574 4.75928 0.956573Z" fill="#ffffff" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </Card>
                <Card as={Link} to="editProducts">
                <CardText>
                Edit Products
                </CardText>
                <svg width="50%" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" className="d-block m-auto">
	<path d="M1 10.25C1 8.4152 1.77928 6.56092 2.4442 5.26802C2.77245 4.62977 3.44293 4.25 4.16065 4.25H9.83935C10.5571 4.25 11.2276 4.62977 11.5558 5.26802C12.2207 6.56092 13 8.4152 13 10.25C13 11.75 12.0272 12.7704 10.5 13.0102C9.61104 13.1498 8.5 13.25 7 13.25C5.5 13.25 4.38896 13.1498 3.5 13.0102C1.97277 12.7704 1 11.75 1 10.25Z" fill="#D7E0FF" stroke="#3b28ab"/>
	<path d="M6 7.75H8" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M4.5 4.2593V3.25C4.5 1.86929 5.61929 0.75 7 0.75V0.75C8.38071 0.75 9.5 1.86929 9.5 3.25V4.2593" stroke="#3b28ab"/>
                </svg>
                </Card>
                <Card>
                <CardText>
                Manage Users
                </CardText>
                <svg width="50%" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" className="d-block m-auto">
            <path d="M9.39704 7.00869C10.7219 7.00869 11.7959 5.93467 11.7959 4.60981C11.7959 3.28495 10.7219 2.21094 9.39704 2.21094C8.07218 2.21094 6.99817 3.28495 6.99817 4.60981C6.99817 5.93467 8.07218 7.00869 9.39704 7.00869Z" fill="#D7E0FF"/>
            <path d="M9.39703 7.0088C10.7219 7.0088 11.7959 5.93478 11.7959 4.60992C11.7959 3.58506 11.1532 2.71031 10.2489 2.3667" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.6736 10.3786C13.847 11.1601 13.0547 12.6674 11.6448 12.6674H6.35044C4.94059 12.6674 4.14824 11.1601 5.32165 10.3786C6.37417 9.67759 7.63819 9.26904 8.99764 9.26904C10.3571 9.26904 11.6211 9.67759 12.6736 10.3786Z" fill="#D7E0FF"/>
            <path d="M5.36049 6.53323C6.79662 6.53323 7.96084 5.36901 7.96084 3.93288C7.96084 2.49674 6.79662 1.33252 5.36049 1.33252C3.92435 1.33252 2.76013 2.49674 2.76013 3.93288C2.76013 5.36901 3.92435 6.53323 5.36049 6.53323Z" fill="#D7E0FF" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.34353 10.1866C10.6155 11.0338 9.75659 12.6677 8.22833 12.6677H2.48926C0.961003 12.6677 0.102108 11.0338 1.37407 10.1866C2.515 9.42674 3.88518 8.98389 5.3588 8.98389C6.83242 8.98389 8.20261 9.42674 9.34353 10.1866Z" fill="#D7E0FF" stroke="#3b28ab"/>
            <path d="M8.00726 12.6676H11.6448C13.0547 12.6676 13.847 11.1603 12.6736 10.3787C12.3496 10.1629 12.0055 9.97485 11.6448 9.81787" stroke="#3b28ab" strokeLinecap="round"/>
                </svg>
                </Card>
            </CardContainer>
            </Col>
            </Col>
            </Container>
        </>
    )
}