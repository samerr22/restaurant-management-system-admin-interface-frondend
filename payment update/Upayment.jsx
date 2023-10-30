import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import oranGe from './ora.png'
import axios from "axios";










function Homed() {

  //faching detail
  const[homeds,setHomeds] = useState([]);

  useEffect(() =>{
    const getHomeds =() =>{
     axios.get("http://localhost:3001/paymet/").then((res) =>{
      setHomeds(res.data);
     }).catch((err) => {
      alert(err.message);
     })
    }
    getHomeds();
  },[])



//add detail
  const[name ,setName] = useState("");
  const[type,setType] = useState("");
  const[description,setDescription] = useState("");
  //update 
  const [selectedPaymentId, setSelectedPaymentId] = useState("");
  const [selectedPaymentName, setSelectedPaymentName] = useState("");
  const [selectedPaymentType, setSelectedPaymentType] = useState("");
  const [selectedPaymentDescription, setSelectedPaymentDescription] = useState("");
  


  
  
  const handleButtonClick = () => {
    alert('Table Transfer Menu'); 
  };
//update part 2
  const getHomeds = () => {
    axios.get("http://localhost:3001/paymet/")
      .then((res) => {
        setHomeds(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

//update part 1
  const handleButton = () => {

    if (selectedPaymentId) {
      // Create an updated item object with the selected values
      const updatedItem = {
        id: selectedPaymentId,
        name: selectedPaymentName,
        type: selectedPaymentType,
        description: selectedPaymentDescription,
      };
  
      // Call the updatedOrder function to update the item
      updatePayment(selectedPaymentId, updatedItem);
    } else {
      alert('Please select a menu item to update.');
    }
  };
  
  const updatePayment = (paymentId, updatedItem) => {
    axios
      .put(`http://localhost:3001/paymet/update/${paymentId}`, updatedItem)
      .then((response) => {
        alert('Payment Updated Successfully');
        // Add any additional logic here, such as updating the state or refreshing data
        // You may want to refresh the data by calling your getHomeds function again
        getHomeds();
      })
      .catch((error) => {
        alert(`Error updating order: ${error.message}`);
      });
  };


  //add details
  const handleButt = (e) => {
    e.preventDefault();
    
  
    const  newPay ={

      name,
      type,
      description


    }
   
    axios.post("http://localhost:3001/paymet/Padd",newPay).then(()=>{
      alert("Paymet Added sucsesfull")
     }).catch((err)=>{
      alert(err)
     })





  };
 
  const handleBu = (paymentId) => {
 

    const confirmDelete = window.confirm('Are you sure you want to delete this item?');

    if (confirmDelete) {
      // Send a DELETE request to your backend API to delete the item
      axios
        .delete(`http://localhost:3001/paymet/delete/${paymentId}`)
        .then((response) => {
          alert('Item Deleted Successfully');
          // Add any additional logic here, such as updating the state or refreshing data
          // You may want to refresh the data by calling your getHomeds function again
          getHomeds();
        })
        .catch((error) => {
          alert(`Error deleting item: ${error.message}`);
        });
    }






  };
    

  const tableStyle = {
    width: '100%',
   
    borderCollapse: 'collapse',
    backgroundColor: 'rgba(100, 100, 100, 0.1)', // Background color for the entire table
    color: 'rgb(245, 242, 242)', // Text color for the table
  };

  const headerCellStyle = {
    backgroundColor: 'rgba(100, 100, 100, 0.2)', // Background color for header cells
    color:'rgb(245, 242, 242)' , // Text color for header cells
    padding: '10px',
  };

  const cellStyle = {
    backgroundColor: 'rgba(100, 100, 100, 0.1)', // Background color for cells
    padding: '10px',
  };

  const scrollableContainerStyle = {
    maxHeight: '100px', // Set the desired height for the scrollable container
    overflow: 'auto',
    backgroundColor: 'transparent',
    scrollbartrackcolor: 'rgba(100, 100, 100, 0.1)',
  };












  return (
    <div style={{ backgroundColor: '#161A2C', color: '#fff' ,height:'750px' }}>


        <div className="d-flex"  >
            < div className="flex-shrink-0" >
      
      <Container >
    <Row>
    <Col xs={6} md={4}  className="d-flex align-items-center justify-content-between">
    
    <div className="d-flex align-items-center" >
    <img src={oranGe} alt="orange" style={{ width: '130px', height: '130px' }}/>
      <h2 >Rest</h2>
      
     </div>
      
    </Col>
  </Row>
         </Container>
         
           <div style={{height: '50px'}}></div>
            <div style={{ display: 'flex', flexDirection: 'column' }} >
               <Button href="/um" className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginLeft:'10px' }}>
         UP Menu
        </Button>
        <Button href="/Utbl" className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none'}}>
          UP Table
        </Button>
        <Button className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none'}}>
             UP Order
        </Button>
        <Button href="/Upay"className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginRight:'10px'}}>
         UP Pay
        </Button>
        <Button  className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginLeft:'10px'}}>
          Admin
        </Button>
        <div style={{height: '40px'}}></div>
        <Button   className='custom-font' variant="secondary" size="lg"  style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',backgroundColor: '#D27202', border: 'none', width: '150px',   margin: '0 auto', 
        marginBottom: '70px' }}>
          Logout 
        </Button>
        </div>   
       
        
        
      </div>
      <div className="flex-grow-1" >
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#161A2C' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'rgb(245, 242, 242)', fontSize: '25px', fontFamily: 'Times New Roman, serif' }} >Update Payment</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            </Nav>
          <Nav>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{ borderTop: '1px solid white', marginTop: '0' }}></div>

    
  
    
    

   
   <div style={{display: 'flex'}}>
   <Form style={{  marginTop: '90px',marginLeft: '30px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}> Add Name:</Form.Label>
          <FormControl style={{width:'500px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." 
     onChange={(e)=>{
      setName(e.target.value);

     }}
     />
        </Form.Group>
      </Form>

      <Form style={{  marginTop: '90px',marginLeft: '150px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}> Payment ID:</Form.Label>
          <FormControl style={{width:'500px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." 
     value={selectedPaymentId}
     onChange={(e) => setSelectedPaymentId(e.target.value)}
     />
        </Form.Group>
      </Form>
      </div>

<div style={{display:'flex'}}>
      <Form style={{  marginTop: '20px',marginLeft: '30px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}>Add Type:</Form.Label>
          <FormControl style={{width:'500px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." 
     onChange={(e)=>{
      setType(e.target.value);

     }}
     
     />
        </Form.Group>
      </Form>

      <Form style={{  marginTop: '20px',marginLeft: '150px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}>Edit Methord:</Form.Label>
          <FormControl style={{width:'500px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." 
     value={selectedPaymentName}
     onChange={(e) => setSelectedPaymentName(e.target.value)}
     
     />
        </Form.Group>
      </Form>
      </div>
    
  <div style={{display: 'flex'}}>
      <Form style={{  marginTop: '20px',marginLeft: '30px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}>Description:</Form.Label>
          <FormControl style={{width:'200px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." 
     onChange={(e)=>{
      setDescription(e.target.value);

     }}
     />
        </Form.Group>
      </Form>
      

      <Form style={{  marginTop: '20px',marginLeft: '450px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}>Edit Type:</Form.Label>
          <FormControl style={{width:'200px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." 
     value={selectedPaymentType}
     onChange={(e) => setSelectedPaymentType(e.target.value)}
     />
        </Form.Group>
      </Form>
      </div>

      <Form style={{  marginTop: '20px',marginLeft: '680px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}>Edit Description:</Form.Label>
          <FormControl style={{width:'200px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." 
     value={selectedPaymentDescription}
     onChange={(e) => setSelectedPaymentDescription(e.target.value)}
     />
        </Form.Group>
      </Form>
      
      

      <div style={{height: '20px'}}></div>
    <div style={{ position: 'absolute', bottom: '70px', right: '50px', display: 'flex', flexDirection: 'row'}}> 
    <Button href="/Upay" style={{backgroundColor: '#D27202', width: '100px',fontFamily: 'Arial, sans-serif',marginRight: '20px'}} 
    variant="dark"
    onClick={handleButt}>Add</Button>
    <Button href="/Upay" style={{backgroundColor: '#D27202', width: '100px',fontFamily: 'Arial, sans-serif',marginRight: '20px'}} 
    variant="dark"
    onClick={handleBu}>Delete</Button>
    <Button href="/Upay" style={{backgroundColor: '#D27202', width: '100px',fontFamily: 'Arial, sans-serif',marginRight: '20px'}}
    
    
    variant="dark"
    onClick={handleButton}>Update</Button>
    

    </div>

    <div style={scrollableContainerStyle}>
    {homeds.map((homd, index) => (
      <table style={tableStyle}>

        <thead>
        <tr>
            <th style={headerCellStyle}>Payment Id</th>
            <th style={headerCellStyle}> Name</th>
            <th style={headerCellStyle}>Type</th>
            <th style={headerCellStyle}>Description</th>

            
            
          </tr>
     
          
        </thead>

        
        <tbody>
          
<tr>
            <td style={cellStyle}>{homd._id}</td>
            <td style={cellStyle}>{homd.name}</td>
            <td style={cellStyle}>{homd.type}</td>
            <td style={cellStyle}>{homd.description}</td>

            <Button  style={{backgroundColor: '#D27202', width: '60px',height: '30px',fontFamily: 'Arial, sans-serif',marginLeft: '0px',fontSize: '12px'}} 
    variant="dark"
    onClick={() => handleBu(homd._id)}>Delete</Button>
           

          </tr>
          
   
       
           
        
        </tbody>

       
      </table>





         ))}
    </div>
   





    </div>
   </div>
   </div>
    
    
  );
}


export default Homed;