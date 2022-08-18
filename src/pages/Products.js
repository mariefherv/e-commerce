import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function Products(){
    // console.log(coursesData);
    // console.log(coursesData[0]);
    const [products,setProducts] = useState([])

    // const courses = coursesData.map(course =>
    //     {return(
    //         <CourseCards key={course.id} courseProp= {course}/>            
    //     )}
        
    // )
    useEffect(() => {
        fetch("http://localhost:4000/products")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setProducts(data.map(product => {
            return(
            <ProductCard key={product._id} productProp= {product}/>            
            )
        }))
    })
    }, [])

    return(
        <>
            <Container>
            <h1>Available Products</h1>
            {products}
            </Container>
        </>
    )
}
