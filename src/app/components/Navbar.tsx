import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 px-20 items-center bg-emerald-500">
      <Image src="/logo.png" width={50} height={50} alt="logo hmif" />
      <div className="flex space-x-4">
        <a href="">Beranda</a>
        <a href="">Prestasi</a>
        <a href="">Gallery</a>
        <a href="">Departemen</a>
        <a href="">Kepengurusan</a>
      </div>
    </div>
  );
};

export default Navbar;
