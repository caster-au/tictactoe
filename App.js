import React,{useState} from "react"
import Icon from"./components/Icon"
//react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import reactstrap
import 'bootstrap/dist/css/bootstrap.css'
import { Button,Container,Card,CardBody,Row,Col} from 'reactstrap'
import"./style.css"

const tiktakarray= new Array(9).fill("")
const App =()=> {
    let [isCross,setIsCross]=useState(true)
    let [winMassage,setWinMessage]=useState("")
    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tiktakarray.fill("")
    }
    const findWinner=()=>{
        if(tiktakarray[0]===tiktakarray[1]&& tiktakarray[0]===tiktakarray[2] && tiktakarray[0]!=="") {
            setWinMessage(tiktakarray[0]+" has Won!!")
        }
        else if(tiktakarray[3]===tiktakarray[4]&& tiktakarray[3]===tiktakarray[5] && tiktakarray[3]!=="") {
            setWinMessage(tiktakarray[3]+" has Won!!")
        }
        else if(tiktakarray[6]===tiktakarray[7]&& tiktakarray[7]===tiktakarray[8] && tiktakarray[6]!=="") {
            setWinMessage(tiktakarray[6]+" has Won!!")
        }
        else if(tiktakarray[1]===tiktakarray[4]&& tiktakarray[1]===tiktakarray[7] && tiktakarray[1]!=="") {
            setWinMessage(tiktakarray[1]+" has Won!!")
        }
        else if(tiktakarray[0]===tiktakarray[3]&& tiktakarray[0]===tiktakarray[6] && tiktakarray[0]!=="") {
            setWinMessage(tiktakarray[0]+" has Won!!")
        }
        else if(tiktakarray[2]===tiktakarray[5]&& tiktakarray[2]===tiktakarray[8] && tiktakarray[2]!=="") {
            setWinMessage(tiktakarray[2]+" has Won!!")
        }
        else if(tiktakarray[0]===tiktakarray[4]&& tiktakarray[0]===tiktakarray[8] && tiktakarray[0]!=="") {
            setWinMessage(tiktakarray[0]+" has Won!!")
        }
        else if(tiktakarray[2]===tiktakarray[4]&& tiktakarray[2]===tiktakarray[6] && tiktakarray[2]!=="") {
            setWinMessage(tiktakarray[2]+" has Won!!")
        }

    }
    const changeItem=(index)=>{
        if(winMassage){
            return toast("Game has already got over",{type:"success"})
        }
        if(tiktakarray[index]===""){
            tiktakarray[index] = isCross?"cross":"circle"
            setIsCross(!isCross)
        }
        else{
            return toast("This is already occupied",{type:"error"})
        }
        findWinner()
    }
    return(
       <Container className="p-5">
           <ToastContainer position="bottom-center"></ToastContainer>
           <Row>
               <Col md={6} className="offset-md-3">
                   {
                       //to display the winner message
                       winMassage?(
                       <div>
                           <h1 className="text-center">{winMassage}</h1>
                       <Button onClick={playAgain}>Play Again</Button>
                       </div>):(
                           <h1>{isCross?"Cross's Turn":"Circle's Turn"}</h1>
                       )
                   }
                   <div className="grid">
                    {tiktakarray.map((value,index)=>(
                        <Card onClick={()=>changeItem(index)}>
                            <CardBody className="box">
                            <Icon choice={tiktakarray[index]}/>
                            </CardBody>
                        </Card>
                    )
                    
                    )}
                   </div>
               </Col>
           </Row>

       </Container>
    )
}

export default App