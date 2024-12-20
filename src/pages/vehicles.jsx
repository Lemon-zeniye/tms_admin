import { useState, useEffect } from "react";
import { DataTable } from "mantine-datatable";
import { Box, Button, Select} from "@mantine/core";
import { TextInput, Flex, NumberInput,Pagination} from "@mantine/core";
import { IconEdit, IconTrash, IconX, IconCheck } from '@tabler/icons-react';

import { DateInput } from "@mantine/dates";

function Vehicles() {
  const [vehicles, setVehicles] = useState(() => {
    // Load vehicles from local storage if available
    const storedVehicles = localStorage.getItem('vehicles');
    return storedVehicles ? JSON.parse(storedVehicles) : [];
  });
  const [vehicleType, setVehicleType] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [status, setStatus] = useState('');
  const [insuranceStatus, setInsuranceStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [activePage, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [editingVehicleId, setEditingVehicleId] = useState(null);

  useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

 
  const validateForm = () => {
    const newErrors = {};
    if (!vehicleType) newErrors.vehicleType = 'Vehicle type is required';
    if (!licenseNumber) newErrors.licenseNumber = 'License number is required';
    if (!model) newErrors.model = 'Model is required';
    if (!vin) newErrors.vin = 'VIN is required';
    if (!status) newErrors.status = 'Status is required';
    if (!insuranceStatus) newErrors.insuranceStatus = 'Insurance status is required';
    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!phonePattern.test(phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
    }    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    newErrors.email = 'Email is required';
  } else if (!emailPattern.test(email)) {
    newErrors.email = 'Invalid email format';
  }
    if (!address) newErrors.address = 'Address is required';

    setErrors(newErrors);
    console.log("Validation Errors: ", newErrors); 

    // If there are no errors, return true
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (editingVehicleId) {
        setVehicles((prevVehicles) =>
          prevVehicles.map((vehicle) =>
            vehicle.id === editingVehicleId
              ? {
                  ...vehicle,
                  vehicle_type: vehicleType,
                  license_plate: licenseNumber,
                  model: model,
                  vin: vin,
                  status: status,
                  owner_contact: {
                    name: email.split('@')[0],
                    email: email,
                    phone_number: phoneNumber,
                  },
                }
              : vehicle
          )
        );
      } else {
        const newVehicle = {
          id: (vehicles.length + 1).toString(),
          vehicle_type: vehicleType,
          license_plate: licenseNumber,
          model: model,
          vin: vin,
          status: status,
          owner_contact: {
            name: email.split('@')[0],
            email: email,
            phone_number: phoneNumber,
          },
        };
        setVehicles([...vehicles, newVehicle]);
      }

      clearForm();
    }
  };

  const clearForm = () => {
    setVehicleType('');
    setLicenseNumber('');
    setModel('');
    setVin('');
    setStatus('');
    setInsuranceStatus('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
    setEditingVehicleId(null);
  };
  const handleEdit = (vehicle) => {
    setVehicleType(vehicle.vehicle_type);
    setLicenseNumber(vehicle.license_plate);
    setModel(vehicle.model);
    setVin(vehicle.vin);
    setStatus(vehicle.status);
    setInsuranceStatus('');
    setPhoneNumber(vehicle.owner_contact.phone_number);
    setEmail(vehicle.owner_contact.email);
    setAddress('');
    setEditingVehicleId(vehicle.id);
  };
  const handleDelete = (vehicleId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this vehicle?");

    if (confirmDelete) {
      setVehicles((prevVehicles) => prevVehicles.filter((vehicle) => vehicle.id !== vehicleId));
    }
  }

  
  return (
    <div>
      

      <h2>Vehicles Information</h2>

      <Flex className="gap-20 mb-10">
      <TextInput
          label="Vehicle Type"
          required
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          error={errors.vehicleType}
        />
        <TextInput
          label="License Number"
          required
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
          error={errors.licenseNumber}
        />
       <TextInput
          label="Model"
          required
          value={model}
          onChange={(e) => setModel(e.target.value)}
          error={errors.model}
        />
        <Select
          label="Insurance Status"
          placeholder="Select insurance status"
          data={[
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
          required
          value={insuranceStatus}
          onChange={setInsuranceStatus}
          error={errors.insuranceStatus}
        />
        
      </Flex>
      <Flex className="gap-20 mb-10">
      <TextInput
          label="VIN"
          required
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          error={errors.vin}
        />
        <Select
          label="Status"
          placeholder="Select vehicle status"
          data={[
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
          required
          value={status}
          onChange={setStatus}
          error={errors.status}
        />
      </Flex>
    
      
      <h2>Owner Information</h2>
      <Flex className="gap-20">
      <TextInput
          label="Phone Number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          error={errors.phoneNumber}
        />
        <TextInput
          label="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <TextInput
          label="Address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          error={errors.address}
        />
      </Flex>
      <Flex className="gap-10 mb-16 mt-10">
  <Button variant="filled" color="red" onClick={clearForm}>
    Cancel Vehicle {/* Updated label without icon */}
  </Button>
  <Button variant="filled" color="teal" onClick={handleSubmit}>
    {editingVehicleId ? 'Update Vehicle' : 'Save Vehicle'} {/* Updated label with context */}
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

          {
            accessor: "actions",
            title: "Actions",
            render: (vehicle) => (
              <Flex>
               
                <IconEdit
                  style={{ cursor: 'pointer', marginRight: '10px', color: 'blue' }}
                  onClick={() => handleEdit(vehicle)}
                />
                
                
                <IconTrash
                  style={{ cursor: 'pointer', color: 'red' }}
                  onClick={() => handleDelete(vehicle.id)}
                />
              </Flex>
            ),
          }
          
        ]}
        records={vehicles}
      />
      <Pagination value={activePage} onChange={setPage} total={10} className="float-right mt-10"/>
    </div>
  );
}

export default Vehicles;

