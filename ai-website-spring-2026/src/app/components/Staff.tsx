import Image from "next/image";

export function FramedImage() {
  return (
    /* 1. Main Container: Defines the total size */
    <div className="relative w-80 h-80">
      
      {/* 2. The Frame: Sits on top (z-20) and ignores clicks */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Image
          src="/new_rare.png"
          alt="Frame"
          fill
          className="object-contain"
        />
      </div>

      {/* 3. The Subject Wrapper: This handles the cropping */}
      <div className="absolute inset-[12%] z-10 overflow-hidden"> 
        {/* inset-[12%] pushes the image inside the frame borders */}
        <Image
          src="/staff_photos/John copy.jpg"
          alt="Subject"
          fill
          className="object-contain" // Ensures image fills the hole without stretching
        />
      </div>
      
    </div>
  );
}

export default function Staff() {
    return (
        // <div className="min-h-screen flex items-center justify-center">
        //     <Image
        //         src="/staff_photos/John.jpg"
        //         alt="John"
        //         width={200}
        //         height={400}
        //     />
        // </div>
        <div>
            <FramedImage/>
        </div>
    );
}