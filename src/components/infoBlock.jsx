import classes from "./styles.module.css";
import { Box, Button, Text } from "@mantine/core";

import { useForm } from "@mantine/form";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const price = 449;

export default function InfoBlock() {
  const { setModalOpen } = useContext(AppContext);
  return (
    <div className={classes.infoBlock}>
      <Text size="xs" fs="italic" c="dimmed">
        TAX INCLUDED. SHIPPING CALCULATED AT CHECKOUT.
      </Text>
      <Text size="lg" fw={500}>
        Technosearch Tshirt
      </Text>
      <Text>INR {price}</Text>

      <Box mt="md">
        <Button onClick={()=>{setModalOpen(true)}}>Proceed to buy</Button>
      </Box>
    </div>
  );
}
