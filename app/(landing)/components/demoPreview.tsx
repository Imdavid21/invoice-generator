import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Acme Corp",
    companyAddress: "123 Main Street",
    companyCity: "New York",
    companyState: "NY",
    companyCountry: "USA",
    companyLogo: "/android-chrome-192x192.png", // Logo unchanged
    companyTaxId: "12-3456789",
    companyZip: "10001",
    email: "support@acmecorp.com",
  },
  yourDetails: {
    yourName: "John Doe",
    yourAddress: "456 Elm Street",
    yourCity: "Los Angeles",
    yourState: "CA",
    yourCountry: "USA",
    yourLogo: "/pranav.png", // Logo unchanged
    yourEmail: "john.doe@example.com",
    yourTaxId: "98-7654321",
    yourZip: "90001",
  },
  paymentDetails: {
    bankName: "Chase Bank",
    accountNumber: "9876543210",
    accountName: "JOHN DOE",
    routingCode: "021000021",
    swiftCode: "CHASUS33",
    ifscCode: "N/A", // IFSC is India-specific; usually not needed in US context
    currency: "USD",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #1001",
    issueDate: "Fri Apr 19 2024 00:00:00 GMT-0400 (Eastern Daylight Time)",
    dueDate: "Mon Apr 22 2024 00:00:00 GMT-0400 (Eastern Daylight Time)",
  },
  invoiceDetails: {
    note: "Services rendered from 03/21/2024 to 04/20/2024",
    discount: "200",
    taxRate: "10",
    items: [
      {
        itemDescription: "Consulting Services",
        amount: 5000,
        qty: 1,
      },
      {
        itemDescription: "Cloud Storage",
        amount: 150,
        qty: 5,
      },
    ],
    currency: "USD",
  },
};

export default DemoPreview;
