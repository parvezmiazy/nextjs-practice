import Button from "@/app/components/Button";
import butu from "@/public/images/butu.jpg";
import Image from "next/image";
export default function Mission() {
  return (
    <main className="mt-10">
      <div>My mission</div>
      <div className="w-[400px]">
        <Image placeholder="blur" src={butu} alt="Butu image" />
      </div>

      <Button />
    </main>
  );
}
