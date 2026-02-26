
import Footer from "@/components/web/Footer";
import "../globals.css";
import { Navigation } from "@/components/web/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
         <Navigation />
      <div>
        {children}
      </div>
            <Footer />
    </div>
  );
}
