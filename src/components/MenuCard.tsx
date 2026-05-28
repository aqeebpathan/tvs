// components/MenuCard.tsx
import Link from "next/link";
import Image from "next/image";

interface MenuCardProps {
  name: string;
  image: string;
  price: number;
  description: string;
}

const MenuCard = ({ name, image, price, description }: MenuCardProps) => {
  return (
    <article
      className="rounded-2xl bg-[#f6f6f6] p-1.75"
      itemScope
      itemType="https://schema.org/MenuItem"
    >
      <div className="flex h-full flex-col gap-5 rounded-2xl bg-white px-2.75 py-4 sm:flex-row">
        {/* Image */}
        <figure className="relative m-0 h-45 w-full shrink-0 sm:h-29 sm:w-30">
          <Image
            src={image}
            alt={`${name} - delicious café menu item`}
            fill
            className="rounded-xl object-cover sm:rounded-2xl"
            sizes="(max-width: 640px) 100vw, 120px"
            quality={75}
            itemProp="image"
          />
        </figure>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <h3
              className="text-brand truncate text-xl font-medium"
              itemProp="name"
            >
              {name}
            </h3>
            <p
              className="text-subheading text-md mt-1 line-clamp-3 leading-tight"
              itemProp="description"
            >
              {description}
            </p>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:items-end">
          <span
            className="text-brand text-md font-medium"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="USD" />
            <span itemProp="price" content={price.toString()}>
              ${price.toFixed(2)}
            </span>
          </span>

          <Link
            href="/contact"
            className="text-brand inline-flex items-center justify-center gap-1.75 rounded-full border-[1.5px] border-[#e4f2e0] bg-[#e4f2e0] px-3.5 py-1.5 text-[14px] font-medium tracking-tight transition-all duration-200 hover:gap-2.75 hover:bg-transparent"
            aria-label={`Order ${name} for $${price.toFixed(2)}`}
          >
            <span>Order</span>
            <Image
              src="/assets/arrow.svg"
              alt=""
              height={4}
              width={6}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MenuCard;
