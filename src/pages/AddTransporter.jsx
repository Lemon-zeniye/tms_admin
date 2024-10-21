import { useState } from "react";
import {
  TextInput,
  Flex,
  NumberInput,
  Button,
  Input,
  InputBase,
  Combobox,
  useCombobox,
} from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";

function AddTransporter() {
  const operatingAreas = [
    "Addis Ababa",
    "Mekele",
    "Dire Dawa",
    "Nazreth",
    "Hawasa",
  ];

  return (
    <>
      <h2 className="text-lg font-bold mb-5">New Transporter</h2>
      <div className="mb-6">
        <p className="text-md font-medium mb-2">Company Detail</p>
        <Flex className="gap-20 grow">
          <TextInput
            label="Company Name"
            placeholder="Enter Company Name"
            withAsterisk
          />
          <TextInput
            label="Business Registration Number"
            placeholder="Enter BRN"
            withAsterisk
          />
          <TextInput
            label="Tax Identification Number"
            placeholder="Enter TIN"
            withAsterisk
          />
          <DateInput label="Date" placeholder="Date" />
        </Flex>
      </div>

      <div className="mb-6">
        <p className="text-md font-medium mb-2">Operational Detail</p>
        <Flex className="justify-first gap-20">
          <TextInput
            label="Operating Areas"
            placeholder="Operating Areas"
            withAsterisk
          />
          <NumberInput
            label="Fleet Size"
            placeholder="Fleet Size"
            withAsterisk
          />
          <TimeInput label="Operating Hours" withAsterisk />
          <TextInput
            label="Transport Service Offered"
            placeholder="Transport Service Offered"
            withAsterisk
          />
        </Flex>
      </div>
      <div className="mb-6">
        <p className="text-md font-medium mb-2"> Contact Information</p>
        <Flex className="gap-20">
          <TextInput
            label="Full Name"
            placeholder="Enter Full Name"
            withAsterisk
          />
          <TextInput
            label="Email Address"
            placeholder="Enter Email Address"
            withAsterisk
          />
          <TextInput
            label="Phone Number"
            placeholder="Enter Phone Number"
            withAsterisk
          />
          <DateInput
            label="Office Phone Number"
            placeholder="Transport Service Offered"
            withAsterisk
          />
        </Flex>
      </div>
      <div className="mb-8">
        <p className="text-md font-medium mb-2"> Office Address</p>
        <Flex className="gap-20">
          <TextInput label="Region" placeholder="Enter Region" withAsterisk />
          <TextInput label="City" placeholder="Enter City" withAsterisk />
          <TextInput
            label="Address One"
            placeholder="Enter Address One"
            withAsterisk
          />
          <DateInput
            label="Address Two"
            placeholder="Transport Service Offered"
            withAsterisk
          />
        </Flex>
      </div>

      <Flex className="gap-5 mr-36 float-right">
        <Button variant="filled" color="#e74c3c">
          Cancel
        </Button>
        <Button variant="filled" color="#2ecc71">
          Add
        </Button>
      </Flex>
    </>
  );
}
export default AddTransporter;
