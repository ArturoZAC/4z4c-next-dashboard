import { CartCounter } from "@/shopping-cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Shopping Cart',
 description: 'Un Simple Contador',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <CartCounter value={20}/>
    </div>
  );
}