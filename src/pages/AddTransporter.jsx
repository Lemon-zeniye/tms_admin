import { TextInput, Flex, NumberInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

function AddTransporter() {
  return (
    <>
      <h3>New Transporter</h3>
      <div>
        <Flex justify="between">
          <Flex direction="column" className="mr-28">
            <label>Company Name</label>
            <TextInput id="companyName" />
          </Flex>
          <Flex direction="column" className="mr-28">
            <label>Business Registration Number</label>
            <TextInput id="businessNumber" />
          </Flex>
          <Flex direction="column" className="mr-28">
            <label>Tax Identification Number</label>
            <TextInput id="taxId" />
          </Flex>
          <Flex direction="column">
            <label>Date</label>
            <DateInput id="date" placeholder="Date" />
          </Flex>
        </Flex>
      </div>

      <h4>Operational Details</h4>
      <div>
        <Flex className="mb-4" justify="between">
          <Flex direction="column" className="mr-10">
            <label>Operational Areas</label>
            <TextInput id="companyName" />
          </Flex>
          <Flex direction="column" className="mr-4">
            <label>Fleet Size</label>
            <NumberInput id="businessNumber" />
          </Flex>
          <Flex direction="column" className="mr-4">
            <label>Tax Identification Number</label>
            <TextInput id="taxId" />
          </Flex>
          <Flex direction="column">
            <label>Date</label>
            <DateInput id="date" placeholder="Date" />
          </Flex>
        </Flex>
      </div>
    </>
  );
}
export default AddTransporter;
