declare interface PageConfig {
  title?: string;
}

declare interface SectionConfig {
  title?: string;
  id: string;
  className?: string;
  classNameH2?: string;
}

declare interface ArticleConfig {
  title?: string;
  id: string;
  className?: string;
  classNameH4?: string;
}



declare interface Images {
  src: string | StaticImageData;
  alt: IntrinsicAttributes & Images;
  className?: string;
  layout?: Omit<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  >;
  priority: boolean;
  placeholder: "blur" | "empty";
  height?: SafeNumber | undefined;
  width?: SafeNumber | undefined;
  fill?: boolean;
  sizes: string;
}

declare interface TileConfig {
  className: string;
  id: string;
}

declare interface ProductStructure {
  sizePizza?: string[];
  thickness?: string[];
  weight?: string[];
  compound?: string[];
  price: number;
  priority?: boolean;
  type: string;
  description: string;
  composition: string;
  name: string;
  src: string | StaticImageData;
  id: string;
  layout?: Omit<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  >;
  classNames?: string;
  handleClose?: () => DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  alt?: string;
}

declare interface PizzaStructure {
  pizza: {
    sizePizza: string[];
    thickness: string[];
    weight: string[];
    compound: string[];
    price: number;
    priority: boolean;
    type: string;
    description: string;
    composition: string;
    name: string;
    src: string | StaticImageData;
    id: string;
    layout: Omit<
      DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    >;
    classNames?: string;
    handleClose: () => DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >;
    alt?: string;
  };
}

declare interface PizzaStructureProps {
  pizza: PizzaStructure;
  id: string;
}

declare interface TileProduct {
  products: ProductStructure;
}

declare interface PizzaProduct {
  pizza: ProductStructure;
  handleClose: () => DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}
declare interface ComboProduct {
  combo: ProductStructure;
  handleClose: () => DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

declare interface ModalProps {
  handleClose: () => DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  loading?: boolean;
  isOpen: boolean;
  className: string;
}

declare interface ModalСonfig {
  handleClose: () => DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  loading?: boolean;
  isOpen: boolean;
  product?: ProductStructure;
  slider?: SliderModalProps;
  className?: string;
  cart?: "cart";
}

declare interface ButtonConfig {
  onClick?: () => void;
  id?: string;
  className?: string;
  disable: boolean;
}

declare interface CrossConfig extends ButtonConfig {
  handleClose: () => DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  classNames: string;
}

//Slider

declare interface SliderConfig {
  speed?: number;
  slide?: any;
}

declare interface SliderHistoryStructure {
  map(arg0: (slider: any) => JSX.Element): React.ReactNode;
  title?: string;
  id?: string;
  img?: StaticImageData;
}

declare interface SliderModalProps {
  img?: string | StaticImageData;
  title?: string;
  id?: string;
  type?: string;
  // handleClose: () => DetailedHTMLProps<
  //   React.ButtonHTMLAttributes<HTMLButtonElement>,
  //   HTMLButtonElement
  // >;
  // isOpen: boolean;
}

interface SliderModalConfig {
  slide: SliderModalProps;
  isOpen: boolean;
  handleClose: () => DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}
