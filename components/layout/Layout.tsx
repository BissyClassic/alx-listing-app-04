import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "../booking/BookingForm";
import CancellationPolicy from "../booking/CancellationPolicy";
import OrderSummary from "../booking/OrderSummary";


import { ReactNode } from "react";  // ✅ Make sure this import is here


type LayoutProps = {
  children: ReactNode;               // ✅ Correct spelling
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <BookingForm />
      <CancellationPolicy />
      <OrderSummary />
      <Footer />
    </>
  );
}

export default Layout;