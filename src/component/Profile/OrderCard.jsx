import { Card, Button } from "@mui/material";

export const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707904777/ufillbuz6lzjilw0rrc3.jpg"
          alt=""
          className="h-16 w-16"
        />
        <div>
            <p>Pizza</p>
            <p>₹ 399</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">Completed</Button>
      </div>
    </Card>
  );
};
