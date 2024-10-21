import React from "react";
import { DataTable } from "mantine-datatable";
import { Box, Button } from "@mantine/core";
import { TextInput, Flex, NumberInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

function Driver() {
  const companies = [
    {
      id: "1",
      company_name: "Transport Co.",
      operational_area: "North America",
      fleet_size: 50,
      contact_person: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone_number: "+1234567890",
      },
      status: "Active",
    },
    {
      id: "2",
      company_name: "Logistics Solutions",
      operational_area: "Europe",
      fleet_size: 100,
      contact_person: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone_number: "+9876543210",
      },
      status: "Inactive",
    },
    {
      id: "3",
      company_name: "Transport Co2.",
      operational_area: "North America",
      fleet_size: 50,
      contact_person: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone_number: "+1234567890",
      },
      status: "Active",
    },
    {
      id: "4",
      company_name: "Transport Co.",
      operational_area: "North America",
      fleet_size: 50,
      contact_person: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone_number: "+1234567890",
      },
      status: "Active",
    },
  ];

  return (
    <div>
      {/* <Flex className="mb-4">
        <Button>New Driver</Button>
      </Flex> */}

      <h2>Driver Information</h2>

      <Flex className="gap-20 mb-10">
        <TextInput label="Driver Name" required />
        <TextInput label="Driver License Number" required></TextInput>
        <DateInput
          valueFormat="YYYY MMM DD"
          label="Licence Expiry Date"
          placeholder="Date input"
          required
        />
        <TextInput label="Licence Class/Type" required></TextInput>
      </Flex>
      <Flex className="gap-20">
        <TextInput label="Phone Number" required />
        <TextInput label="Email Address" required></TextInput>
        <NumberInput label="Experience(Year)" placeholder="Input placeholder" />
        <TextInput label="Address" required></TextInput>
      </Flex>
      <Flex className="gap-10 mb-16 mt-10  ">
        <Button variant="filled" color="red">
          CANCEL
        </Button>
        <Button variant="filled" color="teal">
          SAVE
        </Button>
      </Flex>

      <DataTable
        shadow="lg"
        borderRadius="md"
        withTableBorder
        columns={[
          { accessor: "company_name", title: "Company Name" },
          { accessor: "operational_area", title: "Operational Area" },
          { accessor: "fleet_size", title: "Fleet Size" },
          {
            accessor: "contact_person",
            title: "Contact Person",
            render: (records) => (
              <>
                <Box>{records.contact_person.name}</Box>
              </>
            ),
          },
          {
            accessor: "contact_phone_email",
            title: "Contact Phone/Email",
            render: (records) => (
              <>
                <Flex direction="column">
                  <Box>{records.contact_person.email}</Box>
                  <Box>{records.contact_person.phone_number}</Box>
                </Flex>
              </>
            ),
          },

          { accessor: "status" },
        ]}
        records={companies}
      />
    </div>
  );
}

export default Driver;
