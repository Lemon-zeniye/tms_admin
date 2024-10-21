import {
  TextInput,
  Flex,
  NumberInput,
  Input,
  InputBase,
  Combobox,
  useCombobox,
} from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";

function AddTransporter() {
  
  return (
    <>
      <h2 className="text-lg font-bold mb-5">New Transporter</h2>
      <div className="mb-10">
        <p className="text-md font-bold mb-5">Company Detail</p>
        <Flex className="justify-between">
          <TextInput label="Company Name" placeholder="Enter Company Name" />
          <TextInput
            label="Business Registration Number"
            placeholder="Enter BRN"
          />
          <TextInput
            label="Tax Identification Number"
            placeholder="Enter TIN"
          />
          <DateInput label="Date" placeholder="Date" />
        </Flex>
      </div>

      <div>
        <p className="text-md font-bold mb-5">Operational Detail</p>
        <Flex className="mb-4" justify="between">
          <Flex>
            <TextInput label="Operating Areas" placeholder="Operating Areas" />
          </Flex>
          <Flex>
            <NumberInput label="Fleet Size" />
          </Flex>
          <Flex>
            <label className="mb-3">Tax Identification Number</label>
            <TextInput label="" />
          </Flex>
          <Flex>
            <label className="mb-3">Date</label>
            <DateInput id="date" placeholder="Date" />
          </Flex>
        </Flex>
      </div>
    </>
  );
}
export default AddTransporter;
