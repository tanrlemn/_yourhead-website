import Script from 'next/script';

export default function StripeLowerPricingTable() {
  return (
    <>
      <Script
        strategy='beforeInteractive'
        src='https://js.stripe.com/v3/pricing-table.js'
      />
      <stripe-pricing-table
        pricing-table-id='prctbl_1OKZXQJPdRao2mztdA7y5IUy'
        publishable-key='pk_test_51NEmNhJPdRao2mztIkn8Er1d2GOL0jUH2CwsYJFf8IxnwodIue6d8EQDsXx36bGrRoeQMAVM7YEdK4kjDVunoBk800LfoxmzW5'></stripe-pricing-table>
    </>
  );
}
