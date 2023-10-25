import {
  Box,
  Button,
  FileInput,
  Modal,
  NumberInput,
  SegmentedControl,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import classes from "./styles.module.css";

import { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { useForm } from "@mantine/form";

import { addBuyer } from "../services/addbuyer";

const sizes = ["S", "M", "L", "XL"];

const price = 100;

export default function RootContainer(props) {
  const { modalOpen, setModalOpen } = useContext(AppContext);
  const quantity=useRef(1);

  const form = useForm({
    initialValues: {
      size: "",
      name: "",
      email: "",
      mobile: "",
      college: "",
      year: "",
      scholar_no: "",
      address: "",
      quantity: "",
      screenshot: "",
    },
  });
  return (
    <div className={classes.root}>
      {props.children}
      <Modal
        opened={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <Text size="md" align="center">
          Please fill out the following details
        </Text>
        <form
          onSubmit={form.onSubmit(async (values) => {
            console.log(values);
            await addBuyer(values);
            alert("Thank you, we will get in touch with you very soon");
            setModalOpen(false);
          })}
        >
          <Box m="xs">
            <Text align="center">Select your size</Text>
            <SegmentedControl data={sizes} {...form.getInputProps("size")}/>
          </Box>

          <Box m="xs">
            <Text align="center">Specify quantity</Text>
            <NumberInput min={1} {...form.getInputProps("quantity")} ref={quantity}/>
          </Box>
          <TextInput
            placeholder="Name"
            m="sm"
            required
            {...form.getInputProps("name")}
          />
          <TextInput
            placeholder="Email"
            m="sm"
            required
            {...form.getInputProps("email")}
          />
          <TextInput
            placeholder="Mobile"
            m="sm"
            required
            {...form.getInputProps("mobile")}
          />
          <TextInput
            placeholder="College"
            m="sm"
            required
            {...form.getInputProps("college")}
          />
          <NumberInput
            placeholder="Year"
            m="sm"
            required
            min={1}
            max={6}
            {...form.getInputProps("year")}
          />
          <TextInput
            placeholder="Scholar Number"
            m="sm"
            required
            {...form.getInputProps("scholar_no")}
          />
          <Textarea
            placeholder="Address for delivery"
            m="sm"
            required
            {...form.getInputProps("address")}
          />
          <img src="qr.jpeg" alt="qr code" className={classes.qr} />

          <FileInput
            m="sm"
            label="Payment Screenshot"
            placeholder="Payment Screenshot"
            {...form.getInputProps("screenshot")}
            required
          />

          <Text m="sm">
            Total Amount to pay: <b>INR {quantity&& quantity.current? quantity.current.value * price: 0} </b>
          </Text>
          <Button m="sm" type="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
}
