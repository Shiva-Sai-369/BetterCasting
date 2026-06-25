"use client"

import Image from "next/image"
import { BookOpenIcon, InfoIcon, LifeBuoyIcon, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const navigationLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  {
    label: "Gaskets",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Metallic Gaskets" },
      { href: "#", label: "Semi-Metallic Gaskets" },
      { href: "#", label: "Spiral Wound" },
      { href: "#", label: "Ring Joint" },
    ],
  },
  {
    label: "Studs",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "B7 Studs" },
      { href: "#", label: "L7 Studs" },
      { href: "#", label: "2H Nuts" },
      { href: "#", label: "All Thread" },
    ],
  },
  {
    label: "Products",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Hammer Unions" },
      { href: "#", label: "Valve Seats" },
      { href: "#", label: "Fittings" },
      { href: "#", label: "Needle Valves" },
    ],
  },
  {
    label: "Services",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#",
        label: "Machined Forged Products",
        description: "Precision forging and machining for industrial applications.",
      },
      {
        href: "#",
        label: "Machined Casting Products",
        description: "High-quality castings finished to exact specifications.",
      },
    ],
  },
  { href: "#news", label: "News" },
]

export default function Component() {
  return (
    <header className="relative z-50 bg-transparent px-4 text-white md:px-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="mx-auto grid h-[72px] max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-6 lg:h-[80px] lg:px-2">
        <div className="flex min-w-0 items-center gap-3 lg:gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="group size-10 text-white hover:bg-white/10 md:hidden" variant="ghost" size="icon">
                <svg
                  className="pointer-events-none"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 border-slate-200 bg-white p-1 text-foreground shadow-lg md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                            {link.label}
                          </div>
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink href={item.href} className="py-1.5">
                                  {item.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink href={link.href} className="py-1.5">
                          {link.label}
                        </NavigationMenuLink>
                      )}
                      {index < navigationLinks.length - 1 &&
                        ((!link.submenu && navigationLinks[index + 1].submenu) ||
                          (link.submenu && !navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            navigationLinks[index + 1].submenu &&
                            link.type !== navigationLinks[index + 1].type)) && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className="bg-border -mx-1 my-1 h-px w-full"
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <a href="#" className="flex items-center">
              <Image
                src="/BC-Better-CastingsLogo.png"
                alt="Better Castings"
                width={120}
                height={44}
                
                priority
                className="h-auto w-[94px] select-none object-contain sm:w-[104px] lg:w-[112px]"
              />
          </a>
        </div>

        <div className="hidden md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1 lg:gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  {link.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent px-3 py-2 text-[22px] font-medium text-white hover:text-sky-400 lg:px-4 lg:py-2.5">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul
                          className={cn(
                            "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                            link.type === "description" && "md:grid-cols-1",
                          )}
                        >
                          {link.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={item.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  {link.type === "icon" && "icon" in item && (
                                    <div className="flex items-center gap-2">
                                      {item.icon === "BookOpenIcon" && (
                                        <BookOpenIcon size={16} className="text-foreground/60" aria-hidden="true" />
                                      )}
                                      {item.icon === "LifeBuoyIcon" && (
                                        <LifeBuoyIcon size={16} className="text-foreground/60" aria-hidden="true" />
                                      )}
                                      {item.icon === "InfoIcon" && (
                                        <InfoIcon size={16} className="text-foreground/60" aria-hidden="true" />
                                      )}
                                      <div className="text-sm font-medium leading-none">{item.label}</div>
                                    </div>
                                  )}

                                  {link.type === "description" && "description" in item && (
                                    <>
                                      <div className="text-sm font-medium leading-none">{item.label}</div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {item.description}
                                      </p>
                                    </>
                                  )}

                                  {link.type === "simple" && (
                                    <div className="text-sm font-medium leading-none">{item.label}</div>
                                  )}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <a href={link.href} className="px-3 py-2 text-[22px] font-medium text-white hover:text-sky-400 lg:px-4 lg:py-2.5">
                        {link.label}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-2 lg:gap-3">
          <Button asChild size="sm" className="h-10 bg-[#00AADF] px-4 text-sm text-white hover:bg-[#0078C8] lg:h-11 lg:px-5">
            <a href="#quote">Get a Quote</a>
          </Button>
          <button
            type="button"
            aria-label="Search"
            className="inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:size-11"
          >
            <Search className="h-6 w-6 stroke-[1.8]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}