import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion" // this path depends on where shadcn put the file

export const Accordian = () => {
    const data = [
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
    ];

    return (
        <div className="max-w-3xl mx-auto mt-10 px-4">
            <h1 className="text-4xl text-center font-bold font-sans mb-14">Frequently Asked Questions</h1>

            <Accordion type="single" collapsible className="space-y-2 ">
                {data.map((item, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`} className="border border-gray-200 rounded-lg cursor-pointer ">
                        <AccordionTrigger className="text-black text-lg font-medium px-4 py-3 hover:no-underline cursor-pointer ">
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-base px-4 pt-1 pb-3 transition-all duration-350 ease-in-out">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
