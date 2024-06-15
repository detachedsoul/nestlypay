const IndexCards = (): JSX.Element => {
    return (
        <section className="grid gap-8 lg:grid-cols-3">
            <div className="bg-brand-blue text-white/100 rounded-xl px-8 py-10 flex flex-col place-content-center">
                <h2 className="text-sm">
                    Completed Payments
                </h2>

                <p className="font-bold text-lg/10">
                    ₦ 131,900,092.00
                </p>
            </div>

            <div className="rounded-xl px-8 py-10 border border-black/10 flex flex-col place-content-center">
                <h2 className="text-sm">
                    Unpaid Invoices
                </h2>

                <p className="font-bold text-lg/10 text-black/100">
                    ₦ 131,900,092.00
                </p>

                <p className="text-brand-red text-sm mt-2">
                    - Decreased 9.4% today
                </p>
            </div>

            <div className="rounded-xl px-8 py-10 border border-black/10 flex flex-col place-content-center">
                <h2 className="text-sm">
                    Total Invoices
                </h2>

                <p className="font-bold text-lg/10 text-black/100">
                    31,900
                </p>

                <p className="text-brand-green text-sm mt-2">
                    + Increased 34.4% today
                </p>
            </div>
        </section>
    );
};

export default IndexCards;
