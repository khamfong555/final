import Link from "next/link";
import Image from "next/image";
import Screen from "../image/logo.png";
import Photo from "../image/icons8-facebook-48.png";
import img from "../image/icons8-letter-40.png";
import User from "../image/icons8-user-24.png";
export default function Component() {
  return (
    <div>
        <div className="flex bg-blue-300 p-3">
            <Image className="fiex-1 ml-10" src={Screen} width={150} height={50} alt="Image Pictrue"/>
            <h1 className="fiex-1 ml-10 mt-8"><Link href="#">ອຸປະກອນຕອມພິວເຕີ້ V</Link></h1>
            <h1 className="fiex-1 ml-10 mt-8"><Link href="#">ສະເປັກຄອມ V</Link></h1>
            <h1 className="fiex-1 ml-10 mt-8"><Link href="#">ສີນຄາພ້ອມສົ່ງ V</Link></h1>
            <h1 className="fiex-1 ml-10 mt-8"><Link href="#"> ລາຍການທັງໝົດ V</Link></h1>
                <div className="flex">
                    <Image className="flex-1 ml-10 " src={Photo} width={80} height={5} alt=" Pictrue"/>
                    <Image className="flex-1 ml-10 " src={img} width={80} height={5} alt="Image"/>
                </div>
                <div className="flex">
                <Image className="flex-1 ml-20 " src={User} width={80} height={5} alt="Image"/>
                <h1 className="fiex-1 ml-10 mt-8"><Link href="#"> Sing in</Link></h1>
                </div>
        </div>
    </div>
  );
}