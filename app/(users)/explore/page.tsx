import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore | Patreon",
  description: "Online shopping site Kenya - Shop Electronics, Mobile, Smartphones, TVs, Laptops, Home &amp;amp; Kitchen appliances online on Zuricart and More from top brands like Samsung. Enjoy Next Day Delivery, Return within 7 Days. Best Price Guaranteed.,Phones,TCL KENYA,HISENSE KENYA,SAMSUNG KENYA,APPLE KENYA,XIAOMI KENYA,TECNO MOBILES,TECNO KENYA,INFINIX KENYA,LG KENYA,ELECTRONICS,TVs,Televisions,Itel TVs,Oppo phones,Google pixel,iPhones,Price in Kenya",
};

const IndexPage: React.FC = () => {
    return (
        <>
            <Home />
        </>
    );
};
export default IndexPage;