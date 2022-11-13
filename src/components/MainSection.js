import Card from 'react-bootstrap/Card';



export default function MainSection() {
    return(
       <div className="text-center">
        <Card style={{ width: "25%", height: "428px" }} className="bg-light text-black">
            <Card.Img style={{ height: "100%", width: "100%", position: "center" }} src="/profilePic.jpg" alt="Card image" />
            <Card.Body>
            <Card.Title>
                Tsilos Kosbab
            </Card.Title>
            <Card.Text style={{ fontSize: "1em"}}>
                Software Development Student<br></br>
                University of Wisconsin School of Engineering
            </Card.Text>
            </Card.Body> 
        </Card>
       </div>
       
    )
}