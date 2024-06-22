type PriceCardTypes = {
  priceType: string;
  priceDetails: {
    id: number;
    type: string;
    words: number;
    price: number;
    details: string;
    save?: number;
  };
};

export default function PriceCard({ priceDetails, priceType }: PriceCardTypes) {
  const { id, type, words, price, details, save } = priceDetails;

  return (
    <article
      key={id}
      className={`border border-gray-300/10 p-4 md:p-6 rounded-2xl text-left hover:border-gray-300/40 transition ${
        type === "Starter" && "-order-1 md:order-none"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl">{type}</span>
        {save && (
          <span className="text-green-500 bg-green-600/15 px-3 py-1 rounded-full">
            Save ${save}
          </span>
        )}
      </div>
      <div className="pt-2 text-gray-300">
        Up to <span>{words}</span> words / mo
      </div>
      <hr />
      <h2 className="font-semibold text-2xl">
        <span className="text-5xl">${price}</span>{" "}
        {priceType === "Monthly" ? "/mo" : "/yr"}
      </h2>
      <p className="py-6 text-gray-300">{details}</p>
      <button
        className={`w-full border border-gray-300/10 px-2 py-3 rounded-full font-bold hover:border-gray-300/40 transition ${
          type === "Starter" && "bg-white text-black"
        }`}
      >
        Buy now
      </button>
    </article>
  );
}
