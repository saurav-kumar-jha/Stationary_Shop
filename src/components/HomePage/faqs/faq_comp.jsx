import Faq from "react-faq-component"

export const FaqComp = () => {

    const data = {
        rows: [
            {
                title: "What types of stationery products do you offer?",
                content: `We offer a wide variety of stationery items for students, schools, and offices — including notebooks, pens, pencils, highlighters, geometry boxes, files, folders, staplers, markers, art supplies, and more.`,
            },
            {
                title: "Do you sell items other than stationery?",
                content: `Yes! Apart from stationery, we also provide cold drinks, chocolates, snacks like biscuits and chips, gift packing materials, decorative items, and study tables. It's a one-stop solution for your daily and occasional needs.`,
            },
            {
                title: "Can I get printouts and photocopies done here?",
                content: `Absolutely. We offer high-quality printing, black & white and color photocopying, lamination, and document scanning services — all at affordable rates.`,
            },
            {
                title: "Do you provide gift packing services?",
                content: `Yes, we offer attractive gift packing for all occasions including birthdays, festivals, and corporate events. We also sell greeting cards, wrapping papers, ribbons, and more.`,
            },
            {
                title: "Are there items for college and office use?",
                content: `Of course! We have registers, long books, exam pads, pens, sticky notes, paper clips, office files, printer papers, markers, and other office essentials.`,
            },
            {
                title: "Do you deliver or accept bulk orders?",
                content: `Yes, we accept bulk orders for schools, colleges, and offices. Home delivery is also available on select orders depending on the location and order value. Please contact us for more details.`,
            },
        ],
    };
    const styles = {
        titleTextColor: "black",
        rowTitleColor: "black",
        rowTitleTextSize: "19px",
        rowContentColor: "grey",
        rowContentTextSize: "16px",
        rowContentPaddingTop: "4px",
        rowContentPaddingBottom: "10px",
        rowContentPaddingLeft: "15px",
        rowContentPaddingRight: "15px",
        transitionDuration: "350ms",
        timingFunc: "ease",
    };

    const config = {
        animate: true,
        // arrowIcon: "V",
        tabFocus: true
    };
    return (
        <>
            <div className="h-[70vh] max-w-3xl mx-auto mt-10 " >
                <h1 className="text-4xl text-center font-bold font-sans mb-14  " >Frequently asked questions</h1>
                <Faq data={data} styles={styles} config={config} ></Faq>
            </div>
        </>
    )
}