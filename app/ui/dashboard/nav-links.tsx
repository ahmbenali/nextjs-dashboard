'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { linkItems } from '~/lib/constants';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {linkItems.map(({ name, href, icon: LinkIcon }) => {
        // const LinkIcon = link.icon;
        const className = clsx(
          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
          // pathname === href && 'bg-sky-100 text-blue-600',
          { 'bg-sky-100 text-blue-600': pathname === href },
        );
        return (
          <Link key={name} href={href} className={className}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{name}</p>
          </Link>
        );
      })}
    </>
  );
}
