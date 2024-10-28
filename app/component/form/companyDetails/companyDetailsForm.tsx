import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const CompanyDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Company Details (To)</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. john.doe@prolab.com"
      variableName="email"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      Use your billing email.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Company name"
      placeholder="Prolab Solutions LLC"
      variableName="companyName"
    />
    <ImageInput label="Logo" variableName="companyLogo" />
    <CustomTextInput
      label="Address"
      placeholder="1234 Elm St, Suite 100"
      variableName="companyAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="Los Angeles"
      variableName="companyCity"
    />
    <CustomTextInput
      label="State"
      placeholder="California"
      variableName="companyState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder="90001"
      variableName="companyZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="United States"
      variableName="companyCountry"
    />
    <CustomTextInput
      label="Tax ID"
      placeholder="EIN 12-3456789"
      variableName="companyTaxId"
    />
  </div>
);
