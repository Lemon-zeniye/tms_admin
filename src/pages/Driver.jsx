// import React from "react";
import { DataTable } from "mantine-datatable";
import { Box, Button } from "@mantine/core";
import { TextInput, Flex, NumberInput, Container } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useState } from "react";
function Driver() {
  const [driverName, setDriverName] = useState("");
  const [driverLicenseNumber, setLicenseNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [licenceClassType, setLicenceClassType] = useState(0);
  // const [experience(Year),  setExperience(Year)] = useState("");
  // const [] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleAddData = () => {
    if (driverName && driverLicenseNumber && phoneNumber && licenceClassType) {
      const newRow = {
        id: tableData.length + 1,
        driverName,
        driverLicenseNumber,
        phoneNumber,
        licenceClassType,
      };
      setTableData([...tableData, newRow]);
    }
  };
  return (
    <div>
      {/* <Flex className="mb-4">
          <Button>New Driver</Button>
        </Flex> */}

      <h2>Driver Information</h2>

      <Flex className="gap-20 mb-10">
        <TextInput
          label="Driver Name"
          required
          onChange={(e) => setDriverName(e.target.value)}
        />
        <TextInput
          label="Driver License Number"
          required
          onChange={(e) => setLicenseNumber(e.target.value)}
        />
        <DateInput
          valueFormat="YYYY MMM DD"
          label="Licence Expiry Date"
          placeholder="Date input"
          required
        />
        <TextInput
          label="Licence Class/Type"
          required
          onChange={(e) => setLicenceClassType(e.target.value)}
        ></TextInput>
      </Flex>
      <Flex className="gap-20">
        <TextInput
          label="Phone Number"
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextInput label="Email Address" required></TextInput>
        <NumberInput label="Experience(Year)" placeholder="Input placeholder" />
        <TextInput label="Address" required></TextInput>
      </Flex>
      <Flex className="gap-10 mb-16 mt-10  ">
        <Button variant="filled" color="red">
          CANCEL
        </Button>
        <Button variant="filled" color="teal" onClick={handleAddData}>
          SAVE
        </Button>
      </Flex>

      <DataTable
        shadow="lg"
        borderRadius="md"
        withTableBorder
        columns={[
          { accessor: "driverName", title: "Driver Name" },
          { accessor: "driverLicenseNumber", title: "License Number" },
          { accessor: "phoneNumber", title: "Phone Number" },
          { accessor: "licenceClassType", title: "Licence Class" },

          // {
          //   accessor: "contact_person",
          //   title: "Contact Person",
          //   render: (records) => (
          //     <>
          //       <Box>{records.contact_person.name}</Box>
          //     </>
          //   ),
          // },
          // {
          //   accessor: "contact_phone_email",
          //   title: "Contact Phone/Email",
          //   render: (records) => (
          //     <>
          //       <Flex direction="column">
          //         <Box>{records.contact_person.email}</Box>
          //         <Box>{records.contact_person.phone_number}</Box>
          //       </Flex>
          //     </>
          //   ),
          // },

          // { accessor: "status" },
        ]}
        records={tableData}
      />
    </div>
  );
}

export default Driver;
