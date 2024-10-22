import React from "react";
import { DataTable } from "mantine-datatable";
import { Box, Button, Select} from "@mantine/core";
import { TextInput, Flex, NumberInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

function Vehicles() {
  const vehicles = [
    {
      id: "1",
      vehicle_type: "Truck",
      license_plate: "ABC1234",
      model: "Ford F-150",
      vin: "1FTRX12W54NA12345",
      status: "Active",
      owner_contact: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone_number: "+1234567890",
      },
    },
    {
      id: "2",
      vehicle_type: "Van",
      license_plate: "XYZ5678",
      model: "Mercedes Sprinter",
      vin: "WDB6312001B123456",
      status: "Inactive",
      owner_contact: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone_number: "+0987654321",
      },
    },
    {
      id: "3",
      vehicle_type: "Sedan",
      license_plate: "LMN9012",
      model: "Toyota Camry",
      vin: "4T1BF1FK0HU123456",
      status: "Active",
      owner_contact: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone_number: "+1122334455",
      },
    },
    {
      id: "4",
      vehicle_type: "SUV",
      license_plate: "JKL3456",
      model: "Honda CR-V",
      vin: "5J6RW2H56FL123456",
      status: "Active",
      owner_contact: {
        name: "Bob Brown",
        email: "bob.brown@example.com",
        phone_number: "+2233445566",
      },
    },
    {
      id: "5",
      vehicle_type: "Motorcycle",
      license_plate: "GHI7890",
      model: "Harley-Davidson Sportster",
      vin: "1HD1CZ316KC123456",
      status: "Inactive",
      owner_contact: {
        name: "Charlie White",
        email: "charlie.white@example.com",
        phone_number: "+3344556677",
      },
    },
  ];
  

  return (
    <div>
      {/* <Flex className="mb-4">
        <Button>New Driver</Button>
      </Flex> */}

      <h2>Vehicles Information</h2>

      <Flex className="gap-20 mb-10">
        <TextInput label="Vehicle Type" required />
        <TextInput label="License Number" required></TextInput>
        <TextInput label="Model" required></TextInput>
        <Select
          label="Insurance Status"
          placeholder="Select insurance status"
          data={[
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
          required
        />
        
      </Flex>
      <Flex className="gap-20 mb-10">
        <TextInput label="VIN" required></TextInput>
        <Select
          label="Status"
          placeholder="Select vehicle status"
          data={[
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
          required
        />
      </Flex>
    
      
      <h2>Owner Information</h2>
      <Flex className="gap-20">
        <TextInput label="Phone Number" required />
        <TextInput label="Email Address" required></TextInput>
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
          { accessor: "vehicle_type", title: "Vehicle Type" },
          { accessor: "license_plate", title: "License Plate" },
          { accessor: "model", title: "Model" },
          { accessor: "vin", title: "VIN" },
          { accessor: "status", title: "Status" },
          {
            accessor: "owner_contact",
            title: "Owner Contact",
            render: (records) => (
              <>
                <Box>{records.owner_contact.name}</Box>
              </>
            ),
          },
          {
            accessor: "owner_phone_email",
            title: "Owner Phone/Email",
            render: (records) => (
              <>
                <Flex direction="column">
                  <Box>{records.owner_contact.email}</Box>
                  <Box>{records.owner_contact.phone_number}</Box>
                </Flex>
              </>
            ),
          },

          { accessor: "status" },
        ]}
        records={vehicles}
      />
    </div>
  );
}

export default Vehicles;
