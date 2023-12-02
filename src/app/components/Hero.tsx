import Image from "next/image"

const Hero = () => {
  return (
    <div className="w-full h-[580px] bg-emerald-500">
        <div className="grid grid-cols-2 h-full content-center">
            <div className="flex flex-col pl-32 space-y-2">
                <p className="text-5xl font-bold">HMIF - ITI</p>
                <p className="font-semibold">Himpunan Mahasiswa Teknik Informatika Institut Teknologi Indonesia</p>
                <p className="font-light text-sm">Mengembangkan potensi mahasiswa Teknik Informatika
dengan berlandaskan Tri Dharma Perguruan Tinggi</p>
            </div>
            <div className="flex justify-center">
                <Image src={"/logo.png"} width={180} height={100} alt="hmif logo" />
            </div>
        </div>
    </div>
  )
}

export default Hero