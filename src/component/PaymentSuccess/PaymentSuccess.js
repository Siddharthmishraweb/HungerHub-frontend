import { TaskAlt } from "@mui/icons-material"
import { Button, Card } from "@mui/material"
import { green } from "@mui/material/colors"
import { useNavigate } from "react-router-dom"

export const PaymentSuccess = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen px-5 border">
            <div className="flex flex-col items-center justify-center h-[90vh]">
               <Card className="box w-full lg:w-1/4 flex flex-col items-center rounded-md p-5 rounded">
                    <TaskAlt sx={{fontSize: "5rem", color: green[500]}} />
                    <h1 className="py-5 text-2xl font-semibold">Order Success</h1>
                    <p>Thank you for choosing our restaurant! we appriciate your order</p>
                    <p className="py-2 text-center text-gray-200 text-lg">Have A great Day!</p>
                    <Button onClick={()=>navigate("/")} variant="contained" className="py-5" sx={{margin: "1rem 0rem"}}>Go To Home</Button>
               </Card>
            </div>
        </div>
    )
}