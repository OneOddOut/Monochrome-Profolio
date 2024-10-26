
import Image from 'next/image';

export default function ProfilePicture() {
  return (
    <div className="flex justify-center">
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
        <Image
          src="/assets/img/profile-photo.png"  
          alt="Photo"
          width={224}  // Set appropriate width for the image
          height={224} // Set appropriate height for the image
          className="object-cover"
        />
      </div>
    </div>
  );
}
