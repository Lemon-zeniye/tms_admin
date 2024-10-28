import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { DataTable } from "mantine-datatable";
import { Box, Button, Flex, Pagination, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Transporter() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addTransporter");
  };

  const location = useLocation();
  const { tableData } = location.state || { tableData: [] };

  // const companies = [
  //   {
  //     id: "1",
  //     company_name: "Transport Co.",
  //     operational_area: "North America",
  //     fleet_size: 50,
  //     contact_person: {
  //       name: "John Doe",
  //       email: "john.doe@example.com",
  //       phone_number: "+1234567890",
  //     },
  //     status: "Active",
  //   },
  //   {
  //     id: "2",
  //     company_name: "Logistics Solutions",
  //     operational_area: "Europe",
  //     fleet_size: 100,
  //     contact_person: {
  //       name: "Jane Smith",
  //       email: "jane.smith@example.com",
  //       phone_number: "+9876543210",
  //     },
  //     status: "Inactive",
  //   },

  const handleDelete = (id) => {
    tableData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleEdit = (row) => {
    setEditRow(row);
    setNewName(row.name);
    setNewAge(row.age);
    setIsModalOpen(true);
  };

  const [activePage, setPage] = useState(1);

  return (
    <div>
      <Flex className="mb-4">
        <Button onClick={handleClick}>New Transporter</Button>
      </Flex>
      <DataTable
        shadow="lg"
        borderRadius="md"
        withTableBorder
        columns={[
          { accessor: "companyName", title: "Company Name" },
          { accessor: "operationalArea", title: "Operational Area" },
          { accessor: "fleetSize", title: "Fleet Size" },
          { accessor: "contactPersonName", title: "Contact Name" },
          { accessor: "contactPersonEmail", title: "Contact Email" },
          {
            accessor: "actions",
            title: "Actions",
            render: (row) => (
              <Group spacing="xs">
                {/* Edit Button */}
                <Button
                  size="xs"
                  variant="outline"
                  onClick={() => handleEdit(row)}
                >
                  Edit
                </Button>

                {/* Delete Button */}
                <Button
                  size="xs"
                  variant="outline"
                  color="red"
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </Button>
              </Group>
            ),
          },
        ]}
        records={tableData}
      />
      <Pagination
        value={activePage}
        onChange={setPage}
        total={10}
        className="float-right mt-10"
      />
    </div>
  );
}

export default Transporter;
