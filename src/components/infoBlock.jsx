import classes from "./styles.module.css";
import { Box, Button, Group, Text } from "@mantine/core";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const price = 399;

export default function InfoBlock() {
  const { setModalOpen } = useContext(AppContext);
  return (
    <div className={classes.infoBlock}>
      <Text size="md" fs="normal" c="dark.4">
        TAX INCLUDED. SHIPPING CALCULATED AT CHECKOUT.
      </Text>
      <Text size="45px" fw={600} c="dark.1">
        Technosearch Tshirt
      </Text>
      <Group>
        <Text size="20px" fw={400} c="dark.2">
          INR
        </Text>
        <Text size="20px" fw={400} c="dark.2" style={{textDecoration:'line-through'}}>
          649.00 /-
        </Text>
        <Text size="20px" fw={400} c="dark.2">
          {price}.00 /-
        </Text>
      </Group>
      <Box
        style={{
          border: "1px solid gray",
          paddingInline: "1.5rem",
          height: "100%",
          borderRadius: "0.5em",
          color: "white",
        }}
      >
        <ul>
          <li>Premium quality 100% Cotton</li>
          <li>Fabric strength - GSM 180</li>
          <li>Comes with DTF printing.</li>
          <li>Biowash</li>
        </ul>
      </Box>
      <hr className={classes.hr} />
      <div className={classes.tablediv}>
        <h1 className={classes.tabletext}>T-Shirt Size Chart</h1>
        <table className={classes.table}>
          <thead className={classes.tr}>
            <tr className={classes.tr}>
              <th className={classes.th}>Size (inches)</th>
              <th className={classes.th}>Chest (inches)</th>
              <th className={classes.th}>Length (inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes.tr}>
              <td className={classes.td}>Small</td>
              <td className={classes.td}>36</td>
              <td className={classes.td}>28</td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>Medium</td>
              <td className={classes.td}>38</td>
              <td className={classes.td}>29</td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>Large</td>
              <td className={classes.td}>40</td>
              <td className={classes.td}>30</td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>X-Large</td>
              <td className={classes.td}>42</td>
              <td className={classes.td}>31</td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>XX-Large</td>
              <td className={classes.td}>44</td>
              <td className={classes.td}>31</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Box mt="md" mb="xl">
        <Button
          bg="dark.4"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <p className={classes.buttonpara}>Proceed to pay</p>
        </Button>
      </Box>
    </div>
  );
}
