import React from "react";

const ShippingPolicy = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Shipping and Exchange Policy
        </h1>
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Final Sale Policy
          </h2>
          <p className="text-gray-600 mb-6">
            All sales are considered final from our end. We do not accept
            returns under any circumstances. However, orders are eligible for an
            exchange within <strong>24-48 hours</strong> from the delivery date,
            provided certain conditions are met.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Exchange Policy
          </h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">
            Eligibility for Exchange
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Exchanges are allowed only for size-related issues.</li>
            <li>
              Products must be unused, undamaged, and have all original tags
              intact.
            </li>
            <li>
              Products will undergo a quality check by our team before approval.
            </li>
            <li>
              We reserve the right to decline requests if the product does not
              meet these conditions.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-600 mb-4">
            Exchange Availability
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Exchanges are subject to stock availability.</li>
            <li>
              If the desired size is out of stock, you will be offered:
              <ul className="list-disc ml-6">
                <li>
                  <strong>Store Credit:</strong> Valid for 3 days from the date
                  of issuance.
                </li>
                <li>
                  <strong>Product Exchange:</strong> For a different available
                  product.
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-600 mb-4">
            One-Time Exchange Policy
          </h3>
          <p className="text-gray-600 mb-6">
            We offer an exchange <strong>only once per order</strong>. Please
            ensure you select the correct size during the exchange process. For
            size assistance, feel free to contact our support team.
          </p>

          <h3 className="text-xl font-semibold text-gray-600 mb-4">
            Exchange Charges
          </h3>
          <p className="text-gray-600 mb-6">
            A fee of ₹250 applies for exchanges. Since we rely on third-party
            delivery services, this charge helps cover:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Reverse pickup from your location.</li>
            <li>Delivery of the new product to your location.</li>
          </ul>
          <p className="text-gray-600 mb-6">
            Customers are requested to cover{" "}
            <strong>one-way shipping charges</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-600 mb-4">
            Shipping Timelines for Exchanges
          </h3>
          <p className="text-gray-600 mb-6">
            The exchanged product will be shipped after we receive and inspect
            the returned product. The entire process, including quality checks
            and shipping, takes approximately <strong>7-9 business days</strong>
            .
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Non-Serviceable Areas
          </h2>
          <p className="text-gray-600 mb-6">
            If your area pin code falls under the{" "}
            <strong>non-serviceable category</strong> for reverse pickup, you
            will be informed. In such cases, you are required to ship the
            product back to us via a local courier service. You will not be
            charged for the exchange process in such cases.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Sales and Promotions
          </h2>
          <p className="text-gray-600 mb-6">
            Products purchased during{" "}
            <strong>sales, discounts, or promotions </strong>
            are not eligible for exchanges.
          </p>

          <p className="text-gray-600">
            We aim to provide the best service possible and are always here to
            assist you with your queries or concerns. For assistance, please
            contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
