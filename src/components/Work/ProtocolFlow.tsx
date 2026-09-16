const steps = [
  { id: "01", title: "Create", text: "User A opens a zwap. State: CREATED." },
  { id: "02", title: "Join", text: "User B joins. Both parties are set." },
  { id: "03", title: "Submit", text: "Each side names ERC-20, 721, or 1155 goods." },
  { id: "04", title: "Lock", text: "Assets move into the contract as escrow." },
  { id: "05", title: "Withdraw", text: "Each side takes the counterparty’s tokens." },
  { id: "06", title: "Abort", text: "If incomplete, locked goods return to owners." },
];

const ProtocolFlow = () => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
      <p className="text-primary text-sm uppercase tracking-wide">
        Protocol flow
      </p>
      <h2 className="text-white text-2xl font-medium mt-2 mb-8">
        How a zwap settles on-chain
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="rounded-2xl border border-white/10 bg-background/50 p-5"
          >
            <p className="text-primary text-sm font-medium">{step.id}</p>
            <h3 className="text-white text-lg font-medium mt-2">{step.title}</h3>
            <p className="text-white/55 text-sm mt-2 leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtocolFlow;
