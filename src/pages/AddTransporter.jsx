import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  Flex,
  NumberInput,
  Button,
  Input,
  InputBase,
  Combobox,
  useCombobox,
  ActionIcon,
} from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconClock } from "@tabler/icons-react";

function AddTransporter() {
  const [companyName, setCompanyName] = useState("");
  const [operationalArea, setOperationalArea] = useState("");
  const [fleetSize, setFleetSize] = useState(1);
  const [contactPersonName, setContactPersonName] = useState("");
  const [contactPersonEmail, setContactPersonEmail] = useState("");
  // const [tableData, setTableData] = useState([]);

  const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/transporters", {
  //     state: {
  //       companyName,
  //       operatingAreas,
  //       fleetSize,
  //       contactPersonName,
  //       contactPersonEmail,
  //     },
  //   });
  // };

  const handleAddData = () => {
    if (
      companyName &&
      operationalArea &&
      fleetSize &&
      contactPersonName &&
      contactPersonEmail
    ) {
      const dataRow = [
        {
          id: Date.now(),
          companyName,
          operationalArea,
          fleetSize,
          contactPersonName,
          contactPersonEmail,
        },
      ];
      navigate("/transporters", { state: { tableData: dataRow } });

      // setTableData([...tableData, newRow]);

      // setCompanyName = "";
      // setOperationalArea = "";
      // setFleetSize = 0;
      // setContactPersonName = "";
      // setContactPersonEmail = "";
    }
  };

  const operatingAreas = [
    "Addis Ababa",
    "Mekele",
    "Dire Dawa",
    "Nazreth",
    "Hawasa",
  ];

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      companyName: "",
    },

    validate: {
      companyName: (value) =>
        /^[a-zA-Z\s-']+$/.test(value) ? null : "Must contain only letter",
      email: (value) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ? null
          : "Invalid email",
    },
  });

  const timeInput = useRef(null);

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => timeInput.current.showPicker()}
    >
      <IconClock style={{ width: 16, height: 16 }} stroke={1.5} />
    </ActionIcon>
  );
  return (
    <form onSubmit={form.onSubmit()}>
      <h2 className="text-lg font-bold mb-5">New Transporter</h2>
      <div className="mb-6">
        <p className="text-md font-medium mb-2">Company Detail</p>
        <Flex className="gap-20 grow">
          <TextInput
            label="Company Name"
            placeholder="Enter Company Name"
            withAsterisk
            key={form.key("companyName")}
            {...form.getInputProps("companyName")}
            onChange={(e) => setCompanyName(e.target.value)}
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
            onChange={(e) => setOperationalArea(e.target.value)}
          />
          <NumberInput
            label="Fleet Size"
            placeholder="Fleet Size"
            withAsterisk
            min={1}
            max={99}
            onChange={(e) => setFleetSize(e.target.value)}
          />
          <TimeInput
            label="Operating Hours"
            ref={timeInput}
            rightSection={pickerControl}
          />
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
            onChange={(e) => setContactPersonName(e.target.value)}
          />
          <TextInput
            label="Email Address"
            placeholder="Enter Email Address"
            withAsterisk
            key={form.key("email")}
            {...form.getInputProps("email")}
            onChange={(e) => setContactPersonEmail(e.target.value)}
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
        <Button
          variant="filled"
          color="#2ecc71"
          type="submit"
          onClick={handleAddData}
        >
          Add
        </Button>
      </Flex>
    </form>
  );
}
export default AddTransporter;
