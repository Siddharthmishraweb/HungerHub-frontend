import {
  Card,
  Divider,
  Button,
  Modal,
  Box,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { CartItem } from "./CartItem";
import { AddressCard } from "./AddressCard";
import { AddLocationAlt } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../State/Order/Action";

const items = [1, 1];

export const style = {
  position: "absolute",
  // top: "50%",
  left: "50%",
  transform: "translate(-50%, 50%)",
  width: 400,
  outline: "none",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Streer address is required!"),
  state: Yup.string().required("State is required"),
  pincode: Yup.number().required("pincode is required"),
  city: Yup.string().required("city is required"),
});

const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const dispatch =  useDispatch();
  const { auth } = useSelector(state => state);
  const handleSubmit = (value) => {
    console.log(value);
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.cartItems[0]?.food?.restaurant.id,
        deliveryAddress: {
          fullName: auth?.user?.fullName,
          streetAddress: value?.streetAddress,
          city: value?.city,
          state: value?.state,
          postalCode: value?.pincode,
          country: value?.country || "india"
        }
      }
    };
    dispatch(createOrder(data));
  };
  const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: "",
  };

  const { cart } = useSelector(state => state);

  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart?.cartItems.map((item) => (
            <CartItem item={item}/>
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹ {cart?.cart?.total}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>₹ 80</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST & Restaurant Charges</p>
                <p>₹ 0</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Total Pay</p>
              <p>₹  {cart?.cart?.total + 80}</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1, 1].map((item) => (
                <AddressCard
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAlt />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                  //  error={!ErrorMessage("streetAddress")}
                  //  helperText={
                  //     <ErrorMessage>
                  //         {(msg) => <span className="text-red-600">{msg}</span>}
                  //     </ErrorMessage>
                  //  }
                ></Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  as={TextField}
                  name="state"
                  label="state"
                  fullWidth
                  variant="outlined"
                  //  error={!ErrorMessage("streetAddress")}
                  //  helperText={
                  //     <ErrorMessage>
                  //         {(msg) => <span className="text-red-600">{msg}</span>}
                  //     </ErrorMessage>
                  //  }
                ></Field>
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  name="city"
                  label="city"
                  fullWidth
                  variant="outlined"
                  //  error={!ErrorMessage("streetAddress")}
                  //  helperText={
                  //     <ErrorMessage>
                  //         {(msg) => <span className="text-red-600">{msg}</span>}
                  //     </ErrorMessage>
                  //  }
                ></Field>
              </Grid>

              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="pincode"
                  label="pincode"
                  fullWidth
                  variant="outlined"
                  //  error={!ErrorMessage("streetAddress")}
                  //  helperText={
                  //     <ErrorMessage>
                  //         {(msg) => <span className="text-red-600">{msg}</span>}
                  //     </ErrorMessage>
                  //  }
                ></Field>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  color="primary"
                >
                  Deliver Here
                </Button>
              </Grid>
            </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
