import { type ReactNode } from "react";

// type ImageProps = {
//   src: string;
//   alt: string;
// };

// interface HeaderProps {
//   image: ImageProps;
//   children: ReactNode;
// }

// export default function Header({ image, children }: HeaderProps) {
//   return (
//     <div>
//       <img src={image.src} alt={image.alt} />
//       {children}
//     </div>
//   );
// }

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
}
